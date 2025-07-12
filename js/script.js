const form = document.getElementById('login-form');
const message = document.getElementById('message');

// Usuário e senha fictícios para simulação
const userData = {
  username: "admin",
  password: "123456"
};

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = form.username.value.trim();
  const password = form.password.value.trim();

  if (username === userData.username && password === userData.password) {
    message.style.color = "green";
    message.textContent = "Login bem-sucedido!";
    // Redireciona para o dashboard (simulado)
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Usuário ou senha incorretos!";
  }
});
