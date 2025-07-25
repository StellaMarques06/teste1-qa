# 🧪 Testes Automatizados com Cypress - Projeto `teste1-qa`

Este projeto tem como objetivo automatizar testes de interface para a aplicação **Front Serverest Dev** (`https://front.serverest.dev/login`) utilizando **Cypress**, com foco em boas práticas, Page Objects e organização modular.

> Projeto desenvolvido como teste técnico para a empresa **Essor**.

---

## 📁 Estrutura do Projeto

```
cypress/
├── downloads/                          # Downloads realizados nos testes
├── e2e/                                # Testes automatizados
│   ├── cadastro_usuario.cy.js
│   ├── home.cy.js
│   └── login.cy.js
├── fixtures/                           # Dados de entrada e mensagens esperadas
│   ├── cadastro_usuario.json
│   ├── error_messages.json
│   └── success_messages.json
├── reports/                            # Relatórios HTML
│   └── html/
│       ├── assets/
│       ├── screenshots/
│       └── index.html
├── screenshots/                        # Evidências de falhas
│   └── login.cy.js
├── support/                            # Comandos e Page Objects
│   ├── pages/
│   ├── commands.js
│   └── e2e.js
.gitignore                              # Arquivos e pastas ignoradas pelo Git
cypress.config.js                       # Configuração do Cypress
package.json                            # Dependências e scripts
package-lock.json
```

---

## 🚀 Como Clonar e Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/StellaMarques06/teste1-qa.git

# Acesse o diretório
cd teste1-qa

# Instale as dependências
npm install

# Rode os testes via Cypress UI
npx cypress open

# Ou rode em modo headless
npx cypress run
```

---

## 📌 Tecnologias e Padrões Utilizados

- Cypress
- Page Object Pattern
- Fixtures (dados e mensagens)
- Estrutura modular
- `.gitignore` configurado
- Relatórios HTML
- Testes independentes e organizados

---

## 👩‍💻 Desenvolvido por

**Stella Marques**  
[GitHub: @StellaMarques06](https://github.com/StellaMarques06)