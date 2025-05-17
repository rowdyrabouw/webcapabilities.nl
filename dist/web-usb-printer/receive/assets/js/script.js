import WebUSBReceiptPrinter from "./webusb-receipt-printer.esm.js";
import ReceiptPrinterEncoder from "./receipt-printer-encoder.esm.js";

const receiptPrinter = new WebUSBReceiptPrinter();
let printerLanguage;
let printerCodepageMapping;
let encoder;

receiptPrinter.addEventListener("connected", (device) => {
  console.log(
    `Connected to ${device.manufacturerName} ${device.productName} (#${device.serialNumber})`
  );

  console.log("Device info:");
  console.log(device);
  printerLanguage = device.language;
  printerCodepageMapping = device.codepageMapping;

  encoder = new ReceiptPrinterEncoder({
    //   printerModel: "pos-8360",
    language: printerLanguage,
    //   codepageMapping: printerCodepageMapping,
    columns: 32,
  });
  // console.log(ReceiptPrinterEncoder.printerModels);
  /* Store device for reconnecting */
  // lastUsedDevice = device;
});

document.getElementById("connect").addEventListener("click", async () => {
  if ("usb" in navigator) {
    console.log("WebUSB is supported");
    try {
      await receiptPrinter.connect();
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
    let data = encoder
      .initialize()
      .text(ablyMessage.data.message)
      .newline()
      .text(ablyMessage.data.name)
      .newline()
      .encode();

    /* Print the receipt */

    receiptPrinter.print(data);
  } catch (error) {
    console.error(error);
  }
});

function printAblyMessage(ablyMessage) {
  console.log("Printing Ably message", ablyMessage);
  const data = encoder
    .initialize()
    .text(ablyMessage.data.message)
    .newline()
    .text(ablyMessage.data.name)
    .newline()
    .encode();

  /* Print the receipt */
  receiptPrinter.print(data);
}

(async () => {
  // console.log("Oh hai! 🖤");

  const optionalClientId = "optionalClientId"; // When not provided in authUrl, a default will be used.
  const ably = new Ably.Realtime({
    authUrl: `/api/ably-token-request?clientId=${optionalClientId}`,
  });
  const channel = ably.channels.get("some-channel-name");

  await channel.subscribe((msg) => {
    console.log("Ably message received", msg);
    document.getElementById("response").innerHTML +=
      "<br />" + JSON.stringify(msg);
    printAblyMessage(msg);
  });
})();
