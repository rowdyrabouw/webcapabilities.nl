(async () => {
  console.log("Oh hai! 🖤");

  const optionalClientId = "optionalClientId"; // When not provided in authUrl, a default will be used.
  const ably = new Ably.Realtime({
    authUrl: `/api/ably-token-request?clientId=${optionalClientId}`,
  });
  const channel = ably.channels.get("some-channel-name");

  await channel.subscribe((msg) => {
    console.log("Ably message received", msg);
    document.getElementById("response").innerHTML +=
      "<br />" + JSON.stringify(msg);
  });
})();
