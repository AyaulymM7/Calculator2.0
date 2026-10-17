// Task 11: если пользователь уже вошёл, сразу открываем калькулятор
if (localStorage.getItem("user") !== null) {
  window.location.href = "index.html";
}

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Task 10: логин и пароль прописаны прямо в коде
  if (username === "admin" && password === "adminPassword") {
    // Task 11: запоминаем, что пользователь вошёл
    localStorage.setItem("user", username);
    window.location.href = "index.html";
  } else {
    document.getElementById("loginError").textContent = "Wrong username or password";
  }
}