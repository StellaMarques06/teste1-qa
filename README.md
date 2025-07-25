# 🧪 Projeto de Testes Automatizados - Cypress | Essor

Este repositório contém a automação de testes end-to-end (E2E) desenvolvida com **Cypress**, aplicando **Page Objects**, **fixtures reutilizáveis**, boas práticas de programação e versionamento com `.gitignore`.

O projeto foi desenvolvido como parte de um teste técnico para a empresa **Essor**, com o objetivo de validar funcionalidades de cadastro e login da aplicação:

🔗 **Front Serverest Dev**:  
[https://front.serverest.dev/login](https://front.serverest.dev/login)

---

## ✅ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- Node.js
- Faker.js (para geração dinâmica de dados)
- JavaScript
- Git

---

## 🧱 Estrutura do Projeto

cypress/
├── e2e/
│ └── cadastro_usuario.cy.js # Testes automatizados
├── fixtures/
│ ├── cadastro_usuario.json # Dados de entrada
│ ├── mensagens_erro.json # Mensagens de erro esperadas
│ └── mensagens_sucesso.json # Mensagens de sucesso esperadas
├── support/
│ ├── pages/ # Page Objects organizados
│ ├── commands.js
│ └── e2e.js
.gitignore
README.md
package.json


---

## 🚀 Como Clonar e Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/StellaMarques06/teste1-qa.git
cd teste1-qa

2. Instale as dependências:

npm install

3. Execute os testes com a interface gráfica:

npx cypress open

4. Ou execute no modo headless (terminal):

npx cypress run

👨‍🏫 Objetivo adicional
Este projeto também serve como material de apoio para ensinar outro desenvolvedor a:

Trabalhar com Cypress e Page Objects

Utilizar boas práticas de automação de testes

Clonar e rodar um projeto com facilidade

Entender a importância do .gitignore e versionamento limpo

📄 Licença
Este projeto está sob licença pessoal para fins de avaliação técnica.



