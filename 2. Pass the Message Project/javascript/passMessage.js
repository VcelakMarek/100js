let textInput = document.getElementsByTagName("input")[0];
let submitButton = document.getElementsByTagName("button")[0];
let displayText =  document.getElementsByTagName("p")[0];

submitButton.addEventListener("click", () => {
    displayText.textContent = textInput.value;
});