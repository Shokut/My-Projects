describe('Login and Signup', () => {
    it('Login as retailer', () => {
        cy.visit('https://app.retailconnect.pk/sign-on-phone')
        cy.get('input[placeholder="03001234567"]').type('03217465299')
        cy.get('.ion-no-padding').click()
        cy.get('.main-button',{timeout:10000}).click()
        cy.get('.ion-no-padding').click()
        cy.get('.main-button',{timeout:10000}).click()
        cy.contains('Home').should('be.visible')
        cy.contains('Logout').click()
    })
    it('Login as supplier', () => {
        cy.visit('https://app.retailconnect.pk/sign-on-phone')
        cy.get('input[placeholder="03001234567"]').type('923044716072')
        cy.get('.main-button').click()
        cy.wait(10000)
        cy.get('.ion-no-padding').click()
        cy.wait(10000)
        cy.get('.main-button',{timeout:10000}).click()
        cy.get('.selected > .sc-ion-label-md-h', { timeout: 10000 }).should('be.visible')

        cy.contains('Logout').click()
    })
})