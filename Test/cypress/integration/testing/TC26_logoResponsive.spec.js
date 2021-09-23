const sizes = ['iphone-5','iphone-6',[1024,768]]
describe('Logo', () => {
    sizes.forEach((size) =>{
        it(`Should display logo on ${size} screen`, () =>{
            if(Cypress._.isArray(size)){
                cy.viewport(size[0],size[1])
            }
            else{

                cy.viewport(size)
            }
            
            cy.visit('https://retailconnect.pk/')
            cy.get('.site-logo.show').should('be.visible')
        })
    })
 
    
     
    
})