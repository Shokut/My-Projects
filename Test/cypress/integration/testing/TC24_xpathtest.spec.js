

describe('xPath testing', () =>{
    it('visit application', () =>{
        cy.visit('http://automationpractice.com')
        cy.url().should('contain','index.php')
        cy.title().should('include', 'My Store')
        cy.xpath('//a[@class="login"]').click()
    })
})