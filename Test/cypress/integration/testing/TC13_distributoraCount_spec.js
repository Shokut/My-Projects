const { expect } = require("chai")

describe('Distributor', () => {
    it('Distributor_Count', () => {
        cy.visit('https://app.retailconnect.pk/sign-on-phone')
        cy.get('input[placeholder="03001234567"]').type('03217465299')
        cy.get('.main-button').click()
        //cy.get('.selected > .sc-ion-label-md-h').should('be.visible')
        cy.url('https://app.retailconnect.pk/category')
        cy.contains('All Distributors').click();
        cy.wait(3000);
        cy.get('.categories_item > .p-0 > ion-row.md').then((res) => {
            console.log("Total Distributors on Frontend", res.length)
            var leng = res.length
        })



        const dist = { "id": "None" }
        cy.request('POST', 'https://odooapi.dev-techloyce.com/api/v1.0/distributors', dist).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body.result.distributor[0].name).equal('Al Qamar')
            var distri = (response.body.result.distributor).length
            console.log("Total Distributors from APIs", distri)
            cy.wait(3000)

            //     expect(response.body.result.distributor[0]).to.have.all.keys('id', 'mobile', 'name', 'product_count')
        })
        cy.get(':nth-child(1) > .categories_item > .p-0 > ion-row.md > [size-md="11"]').click()
        cy.get('.manufacturer_list .item').then((response) => {
            console.log("Total Manufacturers of AL QAMAR :", response.length)
        })
        const distt = { "id": "7" }
        cy.request('POST', 'https://odooapi.dev-techloyce.com/api/v1.0/distributors', distt).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body.result.distributor[0].name).equal('Al Qamar')
            var manuf = (response.body.result.distributor[0].manufacturers).length
            console.log("Total Manufacturers of AL QAMAR from APIs", manuf)


        })
    })
})