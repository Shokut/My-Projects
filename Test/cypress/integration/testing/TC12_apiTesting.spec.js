describe('Api testing', () => {
    it('All distributors', () => {
        const item = { "id": "None" }
        cy.request('POST', 'https://odooapi.dev-techloyce.com/api/v1.0/distributors', item).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null

        })
    })
    it('create-product', () => {
        const cproduct = {
            "name": "Testing Product by QA Shoukat",
            "manufacturer": "Testing QA Manufacturer",
            "distributor": 7
        }
        cy.request('POST', 'https://odooapi.dev-techloyce.com/api/v1.0/create-product', cproduct).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })
    it('delete product', () => {
        const pdel = {
            "id": "17970"
        }
        cy.request('POST', 'https://odooapi.dev-techloyce.com/api/v1.0/delete-product', pdel).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('update-product', () => {
        const uproduct = {
            "id": 17971,
            "name": "Test PRoduct Updated",
            "manufacturer": "Testing Manufacturer",
            "distributor": 7
        }
        cy.request('POST','https://odooapi.dev-techloyce.com/api/v1.0/update-product', uproduct).then((response) => {
            expect(response).to.have.property('status',200)
            expect(response.body).to.not.be.null
        })
    })

})