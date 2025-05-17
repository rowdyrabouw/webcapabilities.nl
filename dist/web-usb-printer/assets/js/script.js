console.log("Oh hai! 🖤");

const optionalClientId = "optionalClientId"; // When not provided in authUrl, a default will be used.
const ably = new Ably.Realtime({
  authUrl: `/api/ably-token-request?clientId=${optionalClientId}`,
});

const ablyRealtimePromiseExample = async () => {
  const channel = ably.channels.get("some-channel-name");

  await channel.publish("hello-world-message", { message: "Hello world!", name: "Ably" });
};

ablyRealtimePromiseExample();

// add event listerner to button
const button = document.querySelector("#sendMessage");
const message = document.querySelector("#messageInput");
const name = document.querySelector("#nameInput");
button.addEventListener("click", async () => {
  const channel = ably.channels.get("some-channel-name");
  await channel.publish("hello-world-message", {
    message: message.value,
    name: name.value,
  });
});
