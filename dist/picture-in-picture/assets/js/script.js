const video = document.querySelector("#video");
const pipButton = document.getElementById("pipButton");

const pipContentButton = document.getElementById("pipContentButton");

const pipContainer = document.querySelector("#pipContainer");
const pipContent = document.querySelector("#pipContent");

pipButton.addEventListener("click", () => {
  toggleVideoPictureInPicture(video);
});

pipContentButton.addEventListener("click", () => {
  togglePipContent();
});

const toggleVideoPictureInPicture = (video) => {
  if (document.pictureInPictureEnabled) {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else {
      video.requestPictureInPicture();
    }
  }
};

const togglePipContent = async () => {
  if (window.documentPictureInPicture.window) {
    pipContainer.append(pipContent);
    window.documentPictureInPicture.window.close();
    return;
  }

  const pipWindow = await window.documentPictureInPicture.requestWindow({
    width: 600,
    height: 400,
  });
  pipWindow.document.body.append(pipContent);

  pipWindow.addEventListener("pagehide", (event) => {
    pipContainer.append(pipContent);
  });
};
