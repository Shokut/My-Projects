

describe('Api testing', () => {
    it('GET-read', () => {
        cy.request('POST', 'http://dummy.restapiexample.com/api/v1/create').then((response) => {
            expect(response).to.have.property('status',200)
            expect(response.body).to.not.be.null
        })
        })
    })
