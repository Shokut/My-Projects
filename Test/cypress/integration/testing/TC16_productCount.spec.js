

describe('Product Count of All Distributors', () => {

    it('Product Count', () => {

        const itemm = { "id": "None" }
        var totalDistributos

        cy.request('POST', 'https://odooapi.dev-techloyce.com/api/v1.0/distributors', itemm).then((response) => {
            console.log("Length is: ", (response.body.result.distributor).length)
            totalDistributos = (response.body.result.distributor).length
        })
        cy.visit('https://app.retailconnect.pk/sign-on-phone')
        cy.get('input[placeholder="03001234567"]').type('03217465299')
        cy.get('.main-button').click()
        cy.get('.selected > .sc-ion-label-md-h').should('be.visible')
        cy.url('https://app.retailconnect.pk/category')
        cy.contains('All Distributors').click()

        
            const item = { "id": "None" }

            cy.request('POST', 'https://odooapi.dev-techloyce.com/api/v1.0/distributors', item).then((response) => {

                var i = 1
                cy.get(':nth-child(' + i + ') > .categories_item > .p-0 > ion-row.md > [size-md="11"] > h6').then(($text) => {
                    const namee = $text.text()
                    cy.get(':nth-child(' + i + ') > .categories_item > .p-0 > ion-row.md > [size-md="11"] > p').then(($text) => {
                        const varr = $text.text()
                        console.log("Total products of " + namee + " on frontend are: " + varr)
                        var distri = (response.body.result.distributor).length
                        var name = (response.body.result.distributor[i - 1]).name
                        var tProducts = (response.body.result.distributor[i - 1]).product_count
                        console.log("Total products of " + name + " from API are: " + tProducts)


                    })
                })





            })

        
    })
})


        // 


    // cy.get(':nth-child('+ i +') > .categories_item > .p-0 > ion-row.md > [size-md="11"] > h6').then(($text) => {
    //     const namee = $text.text()
    //     cy.get(':nth-child('+ i +') > .categories_item > .p-0 > ion-row.md > [size-md="11"] > p').then(($text) => {
    //         const varr = $text.text()
    //         console.log("Total products of " + namee + " on frontend are: " + varr)
    //         var distri = (response.body.result.distributor).length
    //         var name = (response.body.result.distributor[2]).name
    //         var tProducts = (response.body.result.distributor[2]).product_count
    //         console.log("Total products of " + name + " from API are: " + tProducts)

    // second distributor

    // cy.get(':nth-child(2) > .categories_item > .p-0 > ion-row.md > [size-md="11"] > h6').then(($text) => {
    //     const namee = $text.text()
    //     cy.get(':nth-child(2) > .categories_item > .p-0 > ion-row.md > [size-md="11"] > p').then(($text) => {
    //         const varr = $text.text()
    //         console.log("Total products of " + namee + " on frontend are: " + varr)
    //         var distri = (response.body.result.distributor).length
    //         var name = (response.body.result.distributor[1]).name
    //         var tProducts = (response.body.result.distributor[1]).product_count
    //         console.log("Total products of " + name + " from API are: " + tProducts)
    // console.log("First distributor is ", name)
    // console.log("Total Products ", tProducts)
    // console.log("Length is ", distri)
    // var i
    // for (i = 0; i <= distri; i++) {
    //     cy.get(':nth-child(' + i + ') > .categories_item > .p-0 > ion-row.md > [size-md="11"] > h6').then(($text) => {
    //         const name = $text.text()
    //         cy.get(':nth-child(1) > .categories_item > .p-0 > ion-row.md > [size-md="11"] > p').then(($text) => {
    //             const varr = $text.text()
    //             console.log(varr)
    //             console.log(name)
    //             console.log("Total products of " + name + " are: " + varr)







    //             // var distri = (response.body.result.distributor).length

    //             // cy.request('POST', 'https://odooapi.dev-techloyce.com/api/v1.0/distributors', item).then((response) => {
    //             //     var distri = (response.body.result.distributor).length
    //             //     console.log("Length is ", distri)

    //             // for (i = 0; i <= distri; i++) {
    //             //     var distrii = (response.body.result.distributor[i]).id
    //             //     console.log("ID of " + name + " is : ", distrii)
    //             // }

    //             // for(i=7;i<=distri;i++){


    //             // }
    //         })
    //     })
    //         // }
    //     })
    // })

    // const item = { "id": "None" }
    // cy.request('POST', 'https://odooapi.dev-techloyce.com/api/v1.0/distributors', item).then((response) => {
    //     expect(response).to.have.property('status', 200)
    //     expect(response.body.result.distributor[0].name).equal('AL QAMAR')
    //     expect(response.body.result.distributor).to.have.length(19)
    //     expect(response.body.result.distributor[0]).to.have.all.keys('id', 'mobile', 'name', 'product_count')
    // })
    //                 })
    //             })
    //         })
    //     })

