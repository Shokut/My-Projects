describe('Accept or cancel order', () => {
    it('Accept order', () => {
        cy.visit('https://app.retailconnect.pk/sign-on-phone')
        cy.get('input[placeholder="03001234567"]').type('923044716072')
        cy.get('.ion-no-padding').click()
        cy.get('.main-button').click()
        cy.url('https://app.retailconnect.pk/order-history')
        cy.get(':nth-child(1) > .p-0 > .ion-align-items-center').then(el => {
            el.click();
        }

        )
        cy.contains('Order Details')
        cy.reload()
        cy.contains('Accept').click()
        cy.get('.selected > .sc-ion-label-md-h').then(element => {
            element.click();
        })





    })
    it('Cancel Order', () => {
        cy.visit('https://app.retailconnect.pk/sign-on-phone')
        cy.get('input[placeholder="03001234567"]').type('923044716072')
        cy.get('.ion-no-padding').click()
        cy.get('.main-button').click()
        cy.url('https://app.retailconnect.pk/order-history')
        cy.get(':nth-child(2) > .p-0 > .ion-align-items-center > .ion-text-left').then(elem => {
            elem.click()
            cy.wait(5000)
        })
        cy.contains('Order Details')
        cy.contains('Cancel').click()

    })

    it('Check Order Histtory After Accept and cancel', () => {
        cy.visit('https://app.retailconnect.pk/sign-on-phone')
        cy.get('input[placeholder="03001234567"]').type('03217465299')
        cy.get('.main-button').click()
        cy.get('.selected > .sc-ion-label-md-h', { timeout: 10000 }).should('be.visible')
        cy.get(':nth-child(4) > .sc-ion-label-md-h', { timeout: 10000 }).first().click()
        // cy.get('.card.ios.hydrated .hydrated', { timeout: 5000 }).first().click()
        // cy.contains('Distributor Details')
        // cy.get('.can-go-back > .header-md > .toolbar-title-default > .title-default > .selected > .sc-ion-label-md-h').then(el => {
        //     el.click()
        // })

    })
})