/// <reference types="cypress" />

export default {
    clicarCadastrar(){
        cy.get('.btn-primary')
            .click()
    },

    validarMensagemErro(mensagem){
        cy.get('.alert-secondary')
            .should('be.visible')
            .should('have.text' , mensagem)
    },

    preencheNome(nome){
        cy.get("#nome")
            .type(nome)
    },

    preencheEmail(email){
        cy.get("#email")
            .type(email)
    },
    
    preencheSenha(senha){
        cy.get("#password")
            .type(senha)
    },

    validaMensagemCadastroSucesso(mensagem){
        cy.get('.alert')
            .should('exist')
            .then((alert) => {
                expect(alert).to.contain(mensagem)
        })
    },

    defineComoAdministrador(){
        cy.get('#administrador').click()
    },

    redirecionarParaLogin(){
        cy.get('[data-testid="entrar"]').click()
    }
}