// Part of https://todbot.github.io/blink1-webhid/

document
  .getElementById("start-button")
  .addEventListener("click", handleConnectClick);
document
  .getElementById("stop-button")
  .addEventListener("click", handleDisconnectClick);

let device = null;

async function handleConnectClick() {
  let acolor = [0, 255, 0]; // purple
  let device = await openDevice();
  await fadeToColor(device, acolor);
}

async function handleDisconnectClick() {
  let acolor = [0, 0, 0]; // off
  device = await openDevice();
  if (!device) return;
  await fadeToColor(device, acolor);
  await device.close();
}

async function openDevice() {
  const vendorId = 0x27b8; // blink1 vid
  const productId = 0x01ed; // blink1 pid

  const device_list = await navigator.hid.getDevices();
  console.log(device_list);

  let device = device_list.find(
    (d) => d.vendorId === vendorId && d.productId === productId
  );

  if (!device) {
    // this returns an array now
    let devices = await navigator.hid.requestDevice({
      filters: [{ vendorId, productId }],
    });
    console.log("devices:", devices);
    device = devices[0];
    if (!device) return null;
  }

  if (!device.opened) {
    await device.open();
  }
  console.log("device opened:", device);
  return device;
}

async function fadeToColor(device, [r, g, b]) {
  if (!device) return;
  const reportId = 1;
  const data = Uint8Array.from([0x63, r, g, b, 0x00, 0x10, 0x00, 0x00]);
  try {
    await device.sendFeatureReport(reportId, data);
  } catch (error) {
    console.error("fadeToColor: failed:", error);
  }
}

const getHeartRate = async () => {
  const device2 = await navigator.bluetooth.requestDevice({
    filters: [
      {
        namePrefix: "Polar Sense",
        manufacturerData: [{ companyIdentifier: 0x006b }],
      },
    ],
    acceptAllDevices: false,
    optionalServices: [0x180d, 0x180f],
  });
  const gattServer = await device2.gatt?.connect();
  const heartRateService = await gattServer?.getPrimaryService(0x180d);
  const heartRate = await heartRateService?.getCharacteristic(0x2a37);
  await heartRate.startNotifications();
  // btnHeart.classList.add("on");
  // btnHeart.disabled = true;

  heartRate.addEventListener("characteristicvaluechanged", async (e) => {
    const hbpm = e.target.value.getUint8(1);
    console.info("heartRate", hbpm);
    // Tone.Transport.bpm.value = bpm;
    document.querySelector("#heartrate").innerHTML = hbpm;
    // TODO: transform this into blinks per minute
    await fadeToColor(device, [255, 0, 0]);
    setTimeout(async () => {
      await fadeToColor(device, [0, 0, 0]);
    }, 500);
  });
};

const btnHeart = document.querySelector("#heart");
btnHeart.addEventListener("click", () => {
  getHeartRate();
});
