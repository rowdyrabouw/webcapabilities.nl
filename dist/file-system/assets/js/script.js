import { faker } from "./faker.js";

const btnWriteFile = document.querySelector("#writeFile");
btnWriteFile.addEventListener("click", async () => {
  const fileHandle = await window.showSaveFilePicker({
    types: [
      {
        accept: { "text/plain": [".txt"] },
      },
    ],
    // FileSystemHandle or known directory ("desktop", "documents", "downloads", "music", "pictures", or "videos")
    startIn: "desktop",
    suggestedName: "random-people.txt",
  });
  const date = new Date();
  let text = `File generated on ${date.toISOString().substring(0, 10)}\n\n`;
  for (let i = 0; i < 10; i++) {
    text += `${faker.date.birthdate().toISOString().substring(0, 10)}\t${faker.person.fullName()}\n`;
  }
  const writable = await fileHandle.createWritable();
  await writable.write(text);
  await writable.close();
});

const btnOpenFile = document.querySelector("#openFile");
btnOpenFile.addEventListener("click", async () => {
  const fileHandle = await window.showOpenFilePicker({
    types: [
      {
        accept: { "text/plain": [".txt"] },
      },
    ],
  });
  const file = await fileHandle[0].getFile();
  const contents = await file.text();
  const textArea = document.querySelector("#data");
  textArea.innerHTML = contents;
});
