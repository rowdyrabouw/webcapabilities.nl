import { DualShock4 } from "./webhid-ds4.js";
import { getColor, WIDTH, HEIGHT } from "./color-wheel.js";

document.querySelector("#ps4-connect").addEventListener("click", async () => {
  const DS4 = new DualShock4();
  await DS4.init();
  document.querySelector(".ps4").style.display = "flex";
  document.querySelector("#ps4-connect").style.display = "none";

  const setColor = (color) => {
    DS4.lightbar.r = color[0];
    DS4.lightbar.g = color[1];
    DS4.lightbar.b = color[2];
    DS4.sendLocalState();
  };

  function logInputs() {
    requestAnimationFrame(logInputs);

    DS4.state.buttons.square
      ? document.querySelector("#square").classList.add("pressed")
      : document.querySelector("#square").classList.remove("pressed");
    DS4.state.buttons.circle
      ? document.querySelector("#circle").classList.add("pressed")
      : document.querySelector("#circle").classList.remove("pressed");
    DS4.state.buttons.cross
      ? document.querySelector("#cross").classList.add("pressed")
      : document.querySelector("#cross").classList.remove("pressed");
    DS4.state.buttons.triangle
      ? document.querySelector("#triangle").classList.add("pressed")
      : document.querySelector("#triangle").classList.remove("pressed");

    DS4.state.buttons.dPadLeft
      ? document.querySelector("#dPadLeft").classList.add("pressed")
      : document.querySelector("#dPadLeft").classList.remove("pressed");
    DS4.state.buttons.dPadRight
      ? document.querySelector("#dPadRight").classList.add("pressed")
      : document.querySelector("#dPadRight").classList.remove("pressed");
    DS4.state.buttons.dPadUp
      ? document.querySelector("#dPadUp").classList.add("pressed")
      : document.querySelector("#dPadUp").classList.remove("pressed");
    DS4.state.buttons.dPadDown
      ? document.querySelector("#dPadDown").classList.add("pressed")
      : document.querySelector("#dPadDown").classList.remove("pressed");

    DS4.state.buttons.l1 || DS4.state.buttons.l2
      ? document.querySelector("#l12").classList.add("pressed")
      : document.querySelector("#l12").classList.remove("pressed");
    if (DS4.state.axes.l2 > 5) {
      DS4.rumble.light = DS4.state.axes.l2;
      DS4.sendLocalState();
    } else {
      DS4.rumble.light = 0;
    }

    DS4.state.buttons.r1 || DS4.state.buttons.r2
      ? document.querySelector("#r12").classList.add("pressed")
      : document.querySelector("#r12").classList.remove("pressed");
    if (DS4.state.axes.r2 > 5) {
      DS4.rumble.heavy = DS4.state.axes.r2;
      DS4.sendLocalState();
    } else {
      DS4.rumble.heavy = 0;
    }

    DS4.state.buttons.share
      ? document.querySelector("#share").classList.add("pressed")
      : document.querySelector("#share").classList.remove("pressed");
    DS4.state.buttons.options
      ? document.querySelector("#options").classList.add("pressed")
      : document.querySelector("#options").classList.remove("pressed");

    DS4.state.buttons.playStation
      ? document.querySelector("#playstation").classList.add("pressed")
      : document.querySelector("#playstation").classList.remove("pressed");

    DS4.state.buttons.touchPadClick
      ? document.querySelector("#touchpad").classList.add("pressed")
      : document.querySelector("#touchpad").classList.remove("pressed");

    if (DS4.state.touchpad.touches && DS4.state.touchpad.touches.length > 0) {
      DS4.state.touchpad.touches.forEach((touch, i) => {
        const PS4_WIDTH = 1920;
        const PS4_HEIGHT = 900;
        const color = getColor(
          (touch.x * WIDTH) / PS4_WIDTH,
          (touch.y * HEIGHT) / PS4_HEIGHT
        );
        setColor(color);
        document.querySelector("#touchpad").classList.add("touched");
        document.querySelector(
          "#touchpad"
        ).style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
      });
    }

    DS4.state.axes.leftStickX > 138 ||
    DS4.state.axes.leftStickX < 118 ||
    DS4.state.axes.leftStickY > 138 ||
    DS4.state.axes.leftStickY < 118
      ? document.querySelector("#leftStick").classList.add("pressed")
      : document.querySelector("#leftStick").classList.remove("pressed");

    DS4.state.axes.rightStickX > 138 ||
    DS4.state.axes.rightStickX < 118 ||
    DS4.state.axes.rightStickY > 138 ||
    DS4.state.axes.rightStickY < 118
      ? document.querySelector("#rightStick").classList.add("pressed")
      : document.querySelector("#rightStick").classList.remove("pressed");
  }
  logInputs();
});
