const btnWriteFile = document.querySelector("#writeFile");
btnWriteFile.addEventListener("click", async () => {
  const fileHandle = await window.showSaveFilePicker({
    types: [
      {
        accept: { "text/plain": [".txt"] },
      },
    ],
  });

  const date = new Date();
  let text = `File generated on ${date.toLocaleDateString()}\n`;
  text += "test";
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
