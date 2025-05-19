const video1 = document.querySelector("#video1");
const pipVideoButton1 = document.getElementById("pipVideoButton1");
pipVideoButton1.addEventListener("click", () => {
  toggleVideoPictureInPicture(video1);
});

const video2 = document.querySelector("#video2");
const pipVideoButton2 = document.getElementById("pipVideoButton2");
pipVideoButton2.addEventListener("click", () => {
  toggleVideoPictureInPicture(video2);
  if (video2.paused) {
    video2.play();
  }
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

const pipContentButton = document.getElementById("pipContentButton");
const pipContainer = document.querySelector("#pipContainer");
const pipContent = document.querySelector("#pipContent");

pipContentButton.addEventListener("click", () => {
  togglePipContent();
});

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
  [...document.styleSheets].forEach((styleSheet) => {
    const cssRules = [...styleSheet.cssRules].map((rule) => rule.cssText).join("");
    const style = document.createElement("style");
    style.textContent = cssRules;
    style.textContent += `body { margin: 32px; background: linear-gradient(180deg, rgb(236, 225, 81) 0%, rgb(232, 99, 63) 100%);}`;
    pipWindow.document.head.appendChild(style);
  });
  pipWindow.document.body.append(pipContent);

  pipWindow.addEventListener("pagehide", (event) => {
    pipContainer.append(pipContent);
  });
};
