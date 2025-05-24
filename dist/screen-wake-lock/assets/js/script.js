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
