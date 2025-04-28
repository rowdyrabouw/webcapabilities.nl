const discount = document.querySelector("#discount");
button.addEventListener("click", async () => {
  const discountAmount = document.querySelector("#discount").innerText;
  await navigator.clipboard.writeText(discountAmount);
  console.log("Text copied to clipboard!");
});
