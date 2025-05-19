const toggleFullscreen = document.querySelector("#toggle-fullscreen");
toggleFullscreen.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
});

const playVideoButton = document.querySelector("#play-video-btn");
playVideoButton.addEventListener("click", () => {
  const video = document.querySelector("#video");
  if (video.paused) {
    video.requestFullscreen();
    video.play();
  }
});

const fullScreenContainer = document.getElementById("fullscreen-container");
const fullScreenButton = document.getElementById("fullscreen-btn");
fullScreenButton.addEventListener("click", () => {
  fullScreenContainer.requestFullscreen();
  fullScreenContainer.style.display = "block";
});

addEventListener("fullscreenchange", (event) => {
  if (!document.fullscreenElement && event.target.id == "fullscreen-container") {
    fullScreenContainer.style.display = "none";
  }
});
