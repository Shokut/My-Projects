// const cypress = require("cypress")
// const { it } = require("mocha")
describe('User Login', function () {

    it('LoginCheck', () => {
        cy.login('03013947258')
        //cy.title().should('be.equal', 'Retailconnect.pk')
        cy.url('https://app.retailconnect.pk/home')
    })

})