let printerConnected = false;

import WebUSBReceiptPrinter from "./webusb-receipt-printer.esm.js";
import ReceiptPrinterEncoder from "./receipt-printer-encoder.esm.js";

const receiptPrinter = new WebUSBReceiptPrinter();
let encoder;

receiptPrinter.addEventListener("connected", (device) => {
  console.log(`Connected to ${device.manufacturerName} ${device.productName} (#${device.serialNumber})`);
  console.log("Device info:");
  console.log(device);
  encoder = new ReceiptPrinterEncoder({
    language: device.language,
    columns: 32,
  });
});

document.getElementById("connect").addEventListener("click", async () => {
  if ("usb" in navigator) {
    console.log("WebUSB is supported");
    try {
      await receiptPrinter.connect();
      printerConnected = true;
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("WebUSB is not supported");
  }
});

const printMessage = (ablyMessage) => {
  console.log("Printer connected", printerConnected);
  if (printerConnected) {
    console.log("Printing message", ablyMessage);
    const message = emojiStrip(ablyMessage.data.message).trim();
    const name = emojiStrip(ablyMessage.data.name).trim();
    const data = encoder.initialize().text(message).newline().text(name).newline().newline().encode();
    receiptPrinter.print(data);
  }
};

(async () => {
  let ably = null;
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    // use key from json file, instead of authUrl at Netlify
    const response = await fetch("../ably.json");
    const json = await response.json();
    ably = new Ably.Realtime({
      key: json.key,
    });
  } else {
    ably = new Ably.Realtime({
      authUrl: `/api/ably-token-request`,
    });
  }
  const channel = ably.channels.get("fugu");

  await channel.subscribe((msg) => {
    console.log("Ably message received", msg);
    if (msg.data.message.length > 0) {
      if (msg.data.message.length > 100) {
        msg.data.message = msg.data.message.substring(0, 200) + "...";
      }
      if (msg.data.name.length > 15) {
        msg.data.name = msg.data.name.substring(0, 25) + "...";
      }
      const id = `sb${Date.now()}`;
      const item = `<p id="${id}" class="speech-bubble">${msg.data.message}<br/><em>${msg.data.name}</em></p>`;
      document.querySelector("#response").innerHTML += item;
      document.querySelector(`#${id}`).scrollIntoView({
        behavior: "smooth",
      });
      printMessage(msg);
    }
  });
})();

const stream = document.querySelector("#stream");
const video = document.querySelector("#videoStream");

stream.addEventListener("click", async () => {
  await navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    window.localStream = stream;
    video.srcObject = stream;
    video.play();
  });
  setTimeout(() => {
    video.requestPictureInPicture();
  }, 1000);
});

const qr = document.querySelector("#qr");
qr.addEventListener("click", async () => {
  document.querySelector(".qr-code").classList.add("show");
});
