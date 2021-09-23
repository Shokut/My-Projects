const { expect } = require("chai")

describe('Different alerts', () => {
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    })
    it('Alert Box i.e OK ', () => {
        cy.on('window:alert',(text)=>{
            expect(text).eq('I am a JS Alert' )
        })
        cy.contains('Click for JS Alert').click()
       
        
    })
    it('Confirm type alert ', () => {
        cy.on('window:confirm',(text)=>{
            expect(text).eq('I am a JS Confirm' )
        })
        cy.contains('Click for JS Confirm').click()
       
        
    })
    it.only('prompt type alert ', () => {
       cy.window().then(($win)=>{

        cy.stub($win,'prompt').returns('Hello')
        cy.contains('Click for JS Prompt').click()
       })
        
       
        
    })

})