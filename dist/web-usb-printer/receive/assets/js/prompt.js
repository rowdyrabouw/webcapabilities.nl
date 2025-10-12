import { marked } from "./marked.esm.js";

const promptOutput = document.querySelector("#prompt-output");
const promptContent = document.querySelector("#prompt-content");
const selectJokeButton = document.querySelector("#select");

if ("LanguageModel" in self) {
  console.info("Prompt API is supported.");
  const availability = await LanguageModel.availability({ expectedOutputs: [{ type: "text", languages: ["en"] }] });
  console.info(`Prompt API is ${availability}.`);
} else {
  console.error("Prompt API is not supported.");
}

selectJokeButton.addEventListener("click", async () => {
  const promptTextarea = document.querySelector("#prompt");
  const spinner = document.querySelector("#spinner");

  promptOutput.textContent = "";
  promptContent.innerHTML = "";
  spinner.classList.remove("hide");
  const session = await LanguageModel.create({
    expectedInputs: [{ type: "text", languages: ["en"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
  const stream = session.promptStreaming([
    {
      role: "user",
      content: [
        {
          type: "text",
          value:
            promptTextarea.value.trim() +
            "\n\nSelect the best joke from the list above and explain why in 50 words or less. Highlight the joke\n\nMention the person who wrote it in a seperate sentence congratulating them on winning the blowfish dog toy. The name of the person is in between the brackets. Don't show the brackets. Highlight the name.\n\n",
        },
      ],
    },
  ]);
  for await (const chunk of stream) {
    promptContent.classList.remove("hide");
    promptOutput.textContent += chunk;
    promptContent.innerHTML = marked.parse(promptOutput.textContent);
  }
  spinner.classList.add("hide");
  promptContent.scrollIntoView({
    behavior: "smooth",
  });
});

let availability;
let languageModel;
