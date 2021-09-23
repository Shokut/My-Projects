const { expect } = require("chai")

describe('action keys testing', () =>{
    it('visit application', () =>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.url().should('include','codenbox')
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page who love to learn automation')

        })
    })
   
})