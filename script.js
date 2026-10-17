function calculate(operation) {
  let a = document.getElementById("num1").value;
  let b = document.getElementById("num2").value;
  let error = document.getElementById("error");

  // Task 5: проверка на пустые поля
  if (a === "" || b === "") {
    error.textContent = "Fill in both fields";
    return;
  }

  // Task 5: проверка, что введены числа
  if (isNaN(a) || isNaN(b)) {
    error.textContent = "Enter numbers only";
    return;
  }

  error.textContent = "";
  a = Number(a);
  b = Number(b);

  let result;
  if (operation === "+") result = a + b;
  if (operation === "-") result = a - b;
  if (operation === "*") result = a * b;
  if (operation === "/") result = a / b;

  document.getElementById("result").textContent = result;
}