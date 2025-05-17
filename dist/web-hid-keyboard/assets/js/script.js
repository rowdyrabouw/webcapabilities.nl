const waitFor = (duration) => new Promise((r) => setTimeout(r, duration));

let device;

document.querySelector("#connect").addEventListener("click", async () => {
  const devices = await navigator.hid.requestDevice({
    filters: [{ vendorId: 0x05ac, usage: 0x0f, usagePage: 0xff00 }],
  });
  console.info("devices", devices);
  device = devices[0];
  await device.open();
});

document.querySelector("#blink").addEventListener("click", async () => {
  const reportId = 1;
  for (let i = 0; i < 10; i++) {
    // Turn off
    await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
    await waitFor(200);
    // Turn on
    await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
    await waitFor(200);
    console.log(`The "${device.productName}" HID device is blinking...`);
  }
});

const stream = document.getElementById("stream");
const video = document.getElementById("videostreamId");

stream.addEventListener("click", async () => {
  await navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    window.localStream = stream;
    video.srcObject = stream;
    video.play();
  });
});
