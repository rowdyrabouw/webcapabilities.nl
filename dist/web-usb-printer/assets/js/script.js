let ably = null;

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
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

const button = document.querySelector("#sendMessage");
const message = document.querySelector("#message");
const name = document.querySelector("#name");
button.addEventListener("click", async () => {
  if (!message.value || !name.value) {
    alert("Please fill in both fields.");
    return;
  }
  if (!ably) {
    alert("Ably is not initialized. Please try again later.");
    return;
  }
  const channel = ably.channels.get("fugu");
  await channel.publish("fugu", {
    message: message.value,
    name: name.value,
  });
  document.querySelector("#form").classList.add("hidden");
  document.querySelector("#thanks").classList.add("show");
});

document.querySelector("h1").addEventListener("click", () => {
  message.value = "Someone cracked my password... Now I need to rename my cat.";
  name.value = "Rowdy Rabouw";
});
