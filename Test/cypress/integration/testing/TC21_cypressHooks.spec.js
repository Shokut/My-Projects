describe('Cypress hooks', () => {
    beforeEach( () => {
        cy.visit('https://app.retailconnect.pk/sign-on-phone')
        cy.get('input[placeholder="03001234567"]').type('923044716072')
        cy.get('.ion-no-padding').click()
        cy.get('.main-button').click()
        cy.url('https://app.retailconnect.pk/supplier-dashboard')
    })
    it('log out', () => {
        cy.get('mat-button-wrapper > mat-button-ripple-round').click()
        cy.wait(3000)
        cy.contains('Logout').click()
        cy.wait(3000)
    })
    it('Order history', () => {
        cy.contains('Order History').click()
    })
})