describe('Login functionality', () =>{
    beforeEach( () =>{

        cy.visit('http://automationpractice.com')
    });
    it('Login with iphone 5', () =>{
       cy.viewport(320,480)
    })
})