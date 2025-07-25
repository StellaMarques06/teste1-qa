/// <reference types="cypress" />

export default{

    acessarCadastroUsario(){
        cy.visit('/')
            .get('.btn-link')
            .should('be.visible')
            .click()
    }

}