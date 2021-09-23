
describe('Mouse events', ()=>{
    it('Verify right click', ()=>{
        cy.visit('http://demo.guru99.com/test/simple_context_menu.html')
        cy.get('.context-menu-one').rightclick()

    })
    it('Verify double click', ()=>{
        cy.visit('http://demo.guru99.com/test/simple_context_menu.html')
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('You double clicked me.. Thank You..')
        })
        cy.get('button').dblclick()
        

    })
    it('drag and drop',()=>{
        cy.visit('https://www.seleniumeasy.com/test/drag-and-drop-demo.html')
        cy.contains('Draggable 1').drag('#mydropzone')
        cy.contains('Draggable 2').drag('#mydropzone')
        cy.contains('Draggable 3').drag('#mydropzone')
        cy.contains('Draggable 4').drag('#mydropzone')
    })

    it.only('scroll down and up',()=>{
        cy.visit('https://www.w3schools.com')
        cy.get(':nth-child(29) > a > .w3-card-2 > h2').scrollIntoView({duration:4000})
        cy.get('.w3-row.ws-light-green > .w3-content > .w3-center > .tut-button').scrollIntoView({duration:3000})

        
    })
    
})