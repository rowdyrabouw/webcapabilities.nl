const playVideoButton = document.querySelector("#play-video-btn");

const playVideoFullscreen = (video) => {
  video.requestFullscreen();
  video.play();
};

playVideoButton.addEventListener("click", () => {
  const video = document.querySelector("#video");
  if (video.paused) {
    video.requestFullscreen();
    video.play();
  }
});

const requestFullscreenButton = document.getElementById("request-fullscreen");
const exitFullscreenButton = document.getElementById("exit-fullscreen");

requestFullscreenButton.addEventListener("click", () => {
  document.documentElement.requestFullscreen();
});

exitFullscreenButton.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
});
