window.drone = ParrotDrone();
let isDroneReady = false;

document.querySelector("#drone-connect").addEventListener("click", async () => {
  document.querySelector("#drone-connect-wrapper").style.background = "rgb(232, 142, 70)";
  document.querySelector("#drone-connect-wrapper").classList.add("loading");

  drone
    .connect()
    .then(() => {
      console.info("connected");
      document.querySelector("#drone-connect-wrapper").classList.remove("loading");
      document.querySelector("#drone-connect").classList.add("hide");
      document.querySelector("#battery").classList.add("connected");
      isDroneReady = true;
    })
    .catch(() => {
      console.error("error: not connected");
      document.querySelector("#drone-connect-wrapper").classList.remove("loading");
      document.querySelector("#drone-connect-wrapper").style.background = "rgb(231, 47, 65)";
    });
});

const cross = document.querySelector("#cross");
const square = document.querySelector("#square");
const circle = document.querySelector("#circle");
const triangle = document.querySelector("#triangle");
const dPadUp = document.querySelector("#dPadUp");
const dPadDown = document.querySelector("#dPadDown");
const leftStick = document.querySelector("#leftStick");
const share = document.querySelector("#share");
const options = document.querySelector("#options");
const playstation = document.querySelector("#playstation");

const { GamepadListener } = gamepad;
const listener = new GamepadListener({
  analog: false,
  deadZone: 0.3,
});

listener.on("gamepad:connected", (event) => {
  const {
    index, // Gamepad index: Number [0-3].
    gamepad, // Native Gamepad object.
  } = event.detail;
  console.info("Gamepad connected", event.detail);
  playstation.classList.add("connected");
});

listener.on("gamepad:button", (event) => {
  const { button, pressed } = event.detail;
  console.info("Gamepad button", event.detail);
  console.info("isDroneReady", isDroneReady);
  switch (button) {
    case 0:
      cross.classList.toggle("pressed");
      console.info("land");
      isDroneReady ? drone.land() : null;
      break;
    case 1:
      circle.classList.toggle("pressed");
      console.info("emergency cut off");
      isDroneReady ? drone.emergencyCutOff() : null;
      break;
    case 2:
      square.classList.toggle("pressed");
      console.info("flip");
      isDroneReady ? drone.flip() : null;
      break;
    case 3:
      triangle.classList.toggle("pressed");
      console.info("take off");
      isDroneReady ? drone.takeOff() : null;
      break;
    case 8:
      // connect gamepad
      console.info("connect gamepad");
      break;
    case 12:
      dPadUp.classList.toggle("pressed");
      console.info("move up");
      isDroneReady ? drone.moveUp() : null;
      break;
    case 13:
      dPadDown.classList.toggle("pressed");
      console.info("mvove down");
      isDroneReady ? drone.moveDown() : null;
      break;
    case 17:
      options.classList.toggle("pressed");
      // connect bluetooth
      console.info("connect bluetooth");
      document.querySelector("#drone-connect").click();
      break;
  }
});

listener.on("gamepad:axis", (event) => {
  const { axis, value } = event.detail;
  console.info("Gamepad axis", event.detail);
  if (axis === 1) {
    leftStick.classList.toggle("touched");
    switch (value) {
      case -1:
        // forward
        console.info("forwards");
        isDroneReady ? drone.moveForwards() : null;
        break;
      case 1:
        // backward
        console.info("backwards");
        isDroneReady ? drone.moveBackwards() : null;
        break;
    }
  }
  if (axis === 2) {
    rightStick.classList.toggle("touched");
    switch (value) {
      case -1:
        // left
        console.info("left");
        isDroneReady ? drone.moveLeft() : null;
        break;
      case 1:
        // right
        console.info("right");
        isDroneReady ? drone.moveRight() : null;
        break;
    }
  }
});

listener.start();
