const { expect } = require("chai")

describe('testing', () => {
    it('APItesting', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.data[0].id).equal(7) 
        })
    })
})

