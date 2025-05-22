let printerConnected = false;

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
  document.body.classList.add("local");
}

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

document.getElementById("print").addEventListener("click", async () => {
  const ablyMessage = {
    name: "hello-world-message",
    clientId: "optionalClientId",
    action: "message.create",
    encoding: null,
    data: {
      message: "What kind of computer sings the best? ... A Dell.",
      name: "Rowdy Rabouw",
    },
    connectionId: "45Ds_5n_ao",
    timestamp: 1746679646266,
    id: "45Ds_5n_ao:1:0",
    createdAt: 1746679646266,
  };
  try {
    let data = encoder.initialize().text(ablyMessage.data.message).newline().text(ablyMessage.data.name).newline().encode();

    /* Print the receipt */

    receiptPrinter.print(data);
  } catch (error) {
    console.error(error);
  }
});

function printAblyMessage(ablyMessage) {
  console.log("Printer connected", printerConnected);
  if (printerConnected) {
    console.log("Printing Ably message", ablyMessage);
    const data = encoder.initialize().text(ablyMessage.data.message).newline().text(ablyMessage.data.name).newline().encode();
    receiptPrinter.print(data);
  }
}

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
    document.getElementById("response").innerHTML += "<br />" + JSON.stringify(msg);
    printAblyMessage(msg);
  });
})();
