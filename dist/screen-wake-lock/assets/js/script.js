const wakeLockRequest = document.querySelector("#request-wakelock");
const wakeLockRelease = document.querySelector("#release-wakelock");
const wakelockStatus = document.querySelector("#wakelock-status");

let wakelock = null;

const requestWakelock = async () => {
  wakelock = await navigator.wakeLock.request("screen");
  console.log("Wakelock is active");
  wakeLockRequest.classList.add("hidden");
  wakeLockRelease.classList.remove("hidden");
  wakelockStatus.textContent = "Wakelock is active";
};

const releaseWakelock = async () => {
  if (wakelock !== null) {
    await wakelock.release();
    console.log("Wakelock is released");
    wakeLockRequest.classList.remove("hidden");
    wakeLockRelease.classList.add("hidden");
    wakelockStatus.textContent = "Wakelock is released";
  }
};

wakeLockRequest.addEventListener("click", requestWakelock);
wakeLockRelease.addEventListener("click", releaseWakelock);

let timeInSecs;
let ticker;

const tick = () => {
  let secs = timeInSecs;
  if (secs > 0) {
    timeInSecs--;
  } else {
    clearInterval(ticker);
  }

  let mins = Math.floor(secs / 60);
  secs %= 60;
  let pretty = (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
  document.querySelector("#countdown").innerHTML = pretty;
};

const startTimer = (secs) => {
  timeInSecs = parseInt(secs);
  ticker = setInterval(() => {
    tick();
  }, 1000);
};

startTimer(30);
