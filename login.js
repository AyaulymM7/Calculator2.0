function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Task 10: логин и пароль прописаны прямо в коде
  if (username === "admin" && password === "adminPassword") {
    window.location.href = "index.html";
  } else {
    document.getElementById("loginError").textContent = "Wrong username or password";
  }
}