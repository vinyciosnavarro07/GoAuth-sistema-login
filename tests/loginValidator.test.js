const validateLogin = require("../js/loginValidator");

describe("Validação de Login", () => {
  test("Deve falhar se o nome de usuário estiver vazio", () => {
    const result = validateLogin("", "123456");
    expect(result.success).toBe(false);
    expect(result.message).toBe("Preencha todos os campos.");
  });

  test("Deve falhar se a senha estiver vazia", () => {
    const result = validateLogin("admin", "");
    expect(result.success).toBe(false);
    expect(result.message).toBe("Preencha todos os campos.");
  });

  test("Deve falhar se o usuário ou senha estiverem incorretos", () => {
    const result = validateLogin("usuario", "senhaerrada");
    expect(result.success).toBe(false);
    expect(result.message).toBe("Usuário ou senha incorretos.");
  });

  test("Deve passar com usuário e senha corretos", () => {
    const result = validateLogin("admin", "123456");
    expect(result.success).toBe(true);
    expect(result.message).toBe("Login bem-sucedido.");
  });
});
