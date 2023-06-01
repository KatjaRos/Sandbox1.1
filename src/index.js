import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const printTextButton = document.getElementById("my_button");
  printTextButton.addEventListener("click", function () {
    const text = "Hello world";
    console.log(text);
    const newText = "My notebook";
    let newHeader = document.createElement("h1");
    const headText1 = document.getElementById("textToPrint").value;
    newHeader.headText1 = newText;
  });
}
