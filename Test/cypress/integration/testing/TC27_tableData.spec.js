
describe('Testing table', () => {
    it('Get the whole table data', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1>tbody>tr').should('have.length', 4)
        cy.get('#table1>tbody>tr:eq(0)>td').should('have.length', 6)

        // get the whole data of table
        cy.get('#table1>tbody>tr').each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($cellData,index,$cells)=>{
                    cy.log($cellData.text())
                })
            })
        })

    })
    it('Single row data', ()=>{
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1>tbody>tr').first().within(()=>{
            cy.get('td').eq(3).should('contain.text','$50.00')
        })
    })

    it('Get specific cell value based on another cell', ()=>{
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1').contains('Conway').parent().within(()=>{
            cy.get('td').eq(4).then((websitelink)=>{
                cy.log(websitelink.text())
            })
        })
    })
})

