// const { expect } = require("chai")

const { expect } = require("chai")

describe('Employees', () => {
    it('Employees', () => {
        const dist = {

            "id": 7

        }
        const item = { "id": "None" }
        cy.request('POST', 'https://odooapi.dev-techloyce.com/api/v1.0/distributors', item).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body.result.distributor[0].name).equal('AL QAMAR')
            expect(response.body.result.distributor).to.have.length(19)
            expect(response.body.result.distributor[0]).to.have.all.keys('id', 'mobile', 'name', 'product_count')
        })
    })
   
})

