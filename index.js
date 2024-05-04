const display = document.getElementById("display");
window.addEventListener("keydown", handleKeyPress);

function appendToDisplay(input) {
  display.value += input;
}

function deleteFromDisplay() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay(input) {
  display.value = "";
}

function handleKeyPress(event) {
  const key = event.key;
  const allowedInputs = /[0-9+\-*/().]/;

  if (event.key === "Backspace") {
    deleteFromDisplay();
  } else if (allowedInputs.test(key)) {
    appendToDisplay(key);
  } else if (event.key === "Enter") {
    calculate();
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
