

// const cypress = require("cypress");
require('@4tw/cypress-drag-drop')
Cypress.Commands.add('login', (phonenumber) => {
    cy.visit('https://app.retailconnect.pk/sign-on-phone')
    cy.get('input[placeholder="03001234567"]').type(phonenumber)
    cy.get('.main-button').click()
})