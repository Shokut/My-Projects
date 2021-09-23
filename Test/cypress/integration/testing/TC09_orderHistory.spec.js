describe('Check Order-History',() => {
    it('Order Histtory', () => {
        cy.visit('https://app.retailconnect.pk/sign-on-phone')
        cy.get('input[placeholder="03001234567"]').type('03217465299')
        cy.get('.main-button').click()
        cy.get('.selected > .sc-ion-label-md-h',{timeout:10000}).should('be.visible')
        cy.get(':nth-child(4) > .sc-ion-label-md-h',{timeout:10000}).first().click()
        cy.get('.card.ios.hydrated .hydrated',{timeout:5000}).first().click()
        cy.contains('Distributor Details')
        cy.get('.can-go-back > .header-md > .toolbar-title-default > .title-default > .selected > .sc-ion-label-md-h').then(el => {
            el.click()
        })

        
        

       
        
})
})