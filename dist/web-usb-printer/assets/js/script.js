let ably = null;

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
  document.body.classList.add("local");
  // use key from json file, instead of authUrl at Netlify
  (async () => {
    const response = await fetch("./ably.json");
    const json = await response.json();
    ably = new Ably.Realtime({
      key: json.key,
    });
  })();
} else {
  // use authUrl at Netlify
  ably = new Ably.Realtime({
    authUrl: "/api/ably-token-request",
  });
}

// add event listener to button
const button = document.querySelector("#sendMessage");
const message = document.querySelector("#messageInput");
const name = document.querySelector("#nameInput");
button.addEventListener("click", async () => {
  const channel = ably.channels.get("fugu");
  await channel.publish("fugu", {
    message: message.value,
    name: name.value,
  });
});

// const video = document.getElementById("videoStream");

// stream.addEventListener("click", async () => {
//   await navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
//     window.localStream = stream;
//     video.srcObject = stream;
//     video.play();
//   });
// });
