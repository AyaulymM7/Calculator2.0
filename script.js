let history = [];

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

  // Task 7: добавляем строку в историю, например "10 + 5 = 15"
  history.push(a + " " + operation + " " + b + " = " + result);
  showHistory();
}

// Показываем историю на странице
function showHistory() {
  let list = document.getElementById("historyList");
  list.innerHTML = "";
  for (let i = 0; i < history.length; i++) {
    list.innerHTML += "<li>" + history[i] + "</li>";
  }
}