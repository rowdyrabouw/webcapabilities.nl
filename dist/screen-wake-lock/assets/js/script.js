let wakelock = null;

const requestWakelock = async () => {
  wakelock = await navigator.wakeLock.request("screen");
  console.log("Wakelock is active");
  alert("Wakelock is active");
};

const releaseWakelock = async () => {
  if (wakelock !== null) {
    await wakelock.release();
    console.log("Wakelock is released");
  }
};

document.getElementById("request-wakelock").addEventListener("click", requestWakelock);
document.getElementById("release-wakelock").addEventListener("click", releaseWakelock);
