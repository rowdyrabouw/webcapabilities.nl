const htmlCodeContainer = document.querySelector(".shj-lang-html");
const htmlCode = `
<header>
  <div class="menu-heading-wrapper">
    <hamburger-menu current-page="clipboard"></hamburger-menu>
    <h1>Clipboard API</h1>
  </div>
  <browser-support chrome edge firefox safari chrome-mobile safari-mobile></browser-support>
</header>
  `;
htmlCodeContainer.textContent = htmlCode.trimLeft().trimRight();
import { highlightAll } from "./speed-highlight.js";
highlightAll();

const discount = document.querySelector("#discount");
discount.addEventListener("click", async () => {
  const discountAmount = document.querySelector("#discount").innerText;
  await navigator.clipboard.writeText(discountAmount);
  console.info("20% discount code is copied to clipboard!");
});

const codeButton = document.querySelector("#code-button");
const codeNotification = document.querySelector("#code-notification");

codeButton.addEventListener("click", () => {
  const code = document.querySelector(".shj-lang-html");
  navigator.clipboard.writeText(code.innerText);
  codeNotification.classList.add("active");
  console.info("HTML code copied to clipboard!");
});

const image = document.querySelector("#imageToCopy");
image.addEventListener("click", async () => {
  try {
    const response = await fetch("assets/img/fugu.png");
    const blob = await response.blob();
    const clipboardItem = new ClipboardItem({ "image/png": blob });
    await navigator.clipboard.write([clipboardItem]);
    image.classList.add("active");
    console.info("Image copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy image: ", err);
  }
});

document.querySelector("#readText").addEventListener("click", readText);
async function readText() {
  try {
    const text = await navigator.clipboard.readText();
    const textArea = document.querySelector("#textToPaste");
    textArea.value = text;
    console.log("Text from clipboard: ", text);
  } catch (err) {
    console.error("Failed to read text: ", err);
  }
}

document.querySelector("#example1btn").addEventListener("click", () => {
  document.querySelector("#example1").classList.add("active");
  document.querySelector("#example2").classList.remove("active");
  document.querySelector("#example3").classList.remove("active");
  document.querySelector("#example4").classList.remove("active");
});
document.querySelector("#example2btn").addEventListener("click", () => {
  document.querySelector("#example1").classList.remove("active");
  document.querySelector("#example2").classList.add("active");
  document.querySelector("#example3").classList.remove("active");
  document.querySelector("#example4").classList.remove("active");
});
document.querySelector("#example3btn").addEventListener("click", () => {
  document.querySelector("#example1").classList.remove("active");
  document.querySelector("#example2").classList.remove("active");
  document.querySelector("#example3").classList.add("active");
  document.querySelector("#example4").classList.remove("active");
});
document.querySelector("#example4btn").addEventListener("click", () => {
  document.querySelector("#example1").classList.remove("active");
  document.querySelector("#example2").classList.remove("active");
  document.querySelector("#example3").classList.remove("active");
  document.querySelector("#example4").classList.add("active");
});
