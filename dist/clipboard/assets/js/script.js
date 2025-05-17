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
  alert("Text copied to clipboard!");
});

const codeButton = document.querySelector("#code-button");

codeButton.addEventListener("click", () => {
  const code = document.querySelector(".shj-lang-html");
  navigator.clipboard.writeText(code.innerText);
  console.log(" code copied to clipboard!");
});

document.getElementById("imageToCopy").addEventListener("click", async () => {
  try {
    const response = await fetch("assets/img/fugu.png");
    const blob = await response.blob();
    console.info("Blob: ", blob);
    console.info("Blob: ", typeof blob);
    const clipboardItem = new ClipboardItem({ "image/png": blob });
    await navigator.clipboard.write([clipboardItem]);
    alert("Image copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy image: ", err);
  }
});

document.querySelector("#readText").addEventListener("click", readText);
async function readText() {
  try {
    const text = await navigator.clipboard.readText();
    console.log("Text from clipboard: ", text);
  } catch (err) {
    console.error("Failed to read text: ", err);
  }
}
