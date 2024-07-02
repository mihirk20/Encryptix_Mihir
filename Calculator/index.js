// script.js
document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".button");
  let currentInput = "";
  let operator = null;
  let previousInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      if (value === "C") {
        currentInput = "";
        previousInput = "";
        operator = null;
        display.textContent = "";
      } else if (value === "=") {
        if (operator && previousInput !== "") {
          currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
          display.textContent = currentInput;
          operator = null;
          previousInput = "";
        }
      } else if (["+", "-", "*", "/"].includes(value)) {
        if (currentInput !== "") {
          if (operator) {
            previousInput = eval(
              `${previousInput} ${operator} ${currentInput}`
            );
          } else {
            previousInput = currentInput;
          }
          operator = value;
          currentInput = "";
        }
      } else {
        currentInput += value;
        display.textContent = currentInput;
      }
    });
  });
});
