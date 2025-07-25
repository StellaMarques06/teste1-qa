/// <reference types="cypress" />

export default {

    sairDoSistema(){
        cy.get('[data-testid="logout"]')
            .should('be.visible')
            .click()
    },

    verifcaSeEntrouNoSistema(mensagem){
        cy.get('h1')
            .should('be.visible')
            .should('have.text' , mensagem)
    },

    verificaTelaLogin(){
        cy.get('h1')
            .click()
            .should('be.visible')
            .should('have.text' , 'Login')
    }
}