const getHeartRate = async () => {
  const device = await navigator.bluetooth.requestDevice({
    filters: [
      {
        namePrefix: "Polar Sense",
        manufacturerData: [{ companyIdentifier: 0x006b }],
      },
    ],
    acceptAllDevices: false,
    optionalServices: [0x180d, 0x180f],
  });
  const gattServer = await device.gatt?.connect();
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
    await fadeToColor(device, [255, 0, 0]);
    // setTimeout(async () => {
    //   await fadeToColor(device, [0, 0, 0]);
    // }, 500);
  });
};

const btnHeart = document.querySelector("#heart");
btnHeart.addEventListener("click", () => {
  getHeartRate();
});
