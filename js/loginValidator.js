const userData = {
  username: "admin",
  password: "123456"
};

function validateLogin(username, password) {
  if (!username || !password) {
    return { success: false, message: "Preencha todos os campos." };
  }

  if (username === userData.username && password === userData.password) {
    return { success: true, message: "Login bem-sucedido." };
  }

  return { success: false, message: "Usuário ou senha incorretos." };
}

module.exports = validateLogin;
