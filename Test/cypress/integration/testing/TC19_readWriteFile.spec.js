

describe('Read and Write Files', () => {
    it('Writefile', () => {
        cy.writeFile('sample.txt', 'Hello Techloyce\n')
        cy.writeFile('sample.txt', 'I\'m Shoukat SQA Engineer',{flag:'a+'})
    })
    it('Readfile', () => {
        cy.readFile('sample.txt').should('contains','Hello Techloyce')
    })
})