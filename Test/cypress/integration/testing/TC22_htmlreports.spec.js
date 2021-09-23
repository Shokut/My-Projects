
describe('Testing Ecommerce site', () => {
    it('Create an order', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('input[placeholder="Search store"]').type('Apple MacBook Pro 13-inch')
        cy.contains('Search').click()
        cy.contains('Add to cart').should('be.visible')
        cy.contains('Add to cart').click()
        cy.wait(2000)
    })
})