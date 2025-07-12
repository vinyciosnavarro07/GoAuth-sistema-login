# 🔐 GoAuth - Sistema de Login Ágil

## 📌 Objetivo do Projeto
O GoAuth é um sistema simples de login desenvolvido para simular práticas de Engenharia de Software utilizando metodologias ágeis. Criado como parte de um estudo acadêmico, seu propósito é ser uma tela simples de login com validação de usuario e senha, com foco em organização de código e uso de ferramentas de versionamento e integração contínua.

---

## 🚀 Escopo do Projeto
### Funcionalidades incluídas:
- Interface de login com validação de usuário e senha
- Validação com dados simulados (usuário: `admin`, senha: `123456`)
- Feedback visual para login correto ou incorreto
- Redirecionamento para tela protegida (dashboard) após login bem-sucedido

---

## ⚙️ Metodologia Adotada
O projeto utilizou a metodologia **Kanban**, com gestão visual das tarefas no **GitHub Projects**. As tarefas foram organizadas nas colunas:
- 🟦 A Fazer
- 🟨 Em Progresso
- 🟩 Concluído

Cada atividade foi acompanhada por commits claros e bem estruturados.

---

## 📂 Instruções para Execução

1. Clone o repositório:
```bash
git clone https://github.com/vinyciosnavarro07/GoAuth-sistema-login.git
```
2. Acesse a pasta do projeto:
```bash
cd GoAuth-sistema-login
```
3. Abra o arquivo index.html no navegador:
Pela extensão Go live do vscode ou pelo prorio navegador de internet, use a tecla crtl + o e navegue até o arquivo index.html

---

## 🔁 Gestão de Mudanças
### Funcionalidade Adicionada: manter o usuário logado
### 📝 Justificativa:
Durante os testes do sistema, foi identificado que seria interessante manter o usuário logado mesmo após atualizar ou fechar a aba.
Isso tornaria a experiência mais fluida, especialmente em sistemas de login simples.
Por isso, foi adicionada a funcionalidade de persistência de login no navegador via localStorage, mantendo o escopo original, porém aumentando a utilidade prática do sistema.


### 🔄 Ações Tomadas:
Um novo formulário foi planejado e movido para a coluna "A Fazer" no GitHub Projects.
A estrutura de código foi adaptada para incluir essa função e a nova lógica de validação no script.js.
O README foi atualizado para refletir essa mudança no escopo.

---
## 🧪 Qualidade e Testes
integração com GitHub Actions para executar testes automatizados de validação de login.

---
## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3 (Flexbox)
- JavaScript Puro (Vanilla JS)
- Git & GitHub
- GitHub Projects (Kanban)
- GitHub Actions (pipeline em desenvolvimento)

---
## 👨‍💻 Desenvolvedor
- Vinycios Navarro
