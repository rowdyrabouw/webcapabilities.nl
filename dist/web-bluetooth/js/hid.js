import { DualShock4 } from "./webhid-ds4.js";
// let device = null;
document.querySelector("#ps4-connect").addEventListener("click", async () => {
  const DS4 = new DualShock4();
  // This will request the WebHID device and initialize the controller
  await DS4.init();
  // Define a custom lightbar color
  // await DS4.lightbar.setColorRGB(255, 0, 0);

  // The state object is updated periodically with the current controller state
  // await DS4.(0.5, 0.5, 1000); // Rumble for 1 second

  // const lightbar = new DualShock4Lightbar();

  // Set the lightbar color to red
  await DS4.lightbar.setColorRGB(255, 0, 0);

  function logInputs() {
    requestAnimationFrame(logInputs);
    if (document.querySelector(".pressed")) {
      document.querySelector(".pressed").classList.remove("pressed");
    }
    if (DS4.state.buttons.triangle) {
      document.querySelector("#btn3-triangle").classList.add("pressed");
    }
    // console.info("Triangle Button:", DS4.state.buttons.triangle);
    // document.getElementById('circle').innerText = `Circle Button: ${DS4.state.buttons.circle}`
    // document.getElementById('cross').innerText = `Cross Button: ${DS4.state.buttons.cross}`
    // document.getElementById('square').innerText = `Square Button: ${DS4.state.buttons.square}`

    // document.getElementById('leftStick').innerText = `Left Stick: ${DS4.state.axes.leftStickX}, ${DS4.state.axes.leftStickY}`
    // document.getElementById('rightStick').innerText = `Right Stick: ${DS4.state.axes.rightStickX}, ${DS4.state.axes.rightStickY}`
    // console.info(
    //   "Left Stick:",
    //   DS4.state.axes.leftStickX,
    //   DS4.state.axes.leftStickY
    // );
    // console.info(
    //   "Right Stick:",
    //   DS4.state.axes.rightStickX,
    //   DS4.state.axes.rightStickY
    // );
  }
  logInputs();

  // device = await navigator.hid.requestDevice({
  //   filters: [
  //     {
  //       vendorId: 0x054c, // Sony Corporation
  //       productId: 0x09cc,
  //     },
  //   ],
  // });
  // console.log("device:", device);
  // if (!device) return null;
  // await device[0].open();
  // console.log("device opened:", device);

  // device[0].addEventListener("inputreport", (event) => {
  //   const { data, device, reportId } = event;

  //   // console.info("device:", device);
  //   // if (reportId === 17) {
  //   //   return;
  //   // }
  //   // console.info("reportId:", reportId);
  //   // if (device.productId !== 0x2007 && reportId !== 0x3f) return;

  //   const value = data.getUint8(0);
  //   if (value === 124) return;

  //   console.log("value:", value);
  //   console.info("data:", data);
  //   // const someButtons = { 1: "A", 2: "X", 4: "B", 8: "Y" };
  //   // console.log(`User pressed button ${someButtons[value]}.`);
  // });
});
