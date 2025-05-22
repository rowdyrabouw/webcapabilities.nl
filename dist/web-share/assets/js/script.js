const sharePageButton = document.getElementById("share-page-button");
sharePageButton.addEventListener("click", async () => {
  shareUrl();
});

const shareUrl = async () => {
  if (navigator.canShare) {
    await navigator.share({
      title: "Check out this website!", // may be ignored by the target app
      text: "I found this amazing site about Fugu you should see.",
      url: "https://webcapabilities.nl",
    });
  }
};

const shareFilesButton = document.getElementById("share-files-button");
shareFilesButton.addEventListener("click", async () => {
  shareFile();
});

const shareFile = async () => {
  if (navigator.canShare) {
    const file = new File(["Web Share API", "\n\nThe Web Share API allows web applications to share content directly with native sharing capabilities of the user's device."], "fugu.txt", {
      type: "text/plain",
    });

    const response = await fetch("assets/pdf/fugu.pdf");
    const blob = await response.blob();
    const file2 = new File([blob], "fugu.pdf", { type: "application/pdf" });

    await navigator.share({
      files: [file, file2],
      title: "Web Share API",
      text: "Check out the information in this file!",
    });
  }
};
