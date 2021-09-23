// const cypress = require("cypress")
// const { it } = require("mocha")


describe('working with plugin file upload',function(){
    it('File upload', function(){

        const fileName = 'sample.pdf';
        cy.visit('https://the-internet.herokuapp.com/upload')
        //upload a file
        cy.get("#file-upload").attachFile(fileName)
        cy.get("#file-submit").click()
        cy.get("#uploaded-files").contains("sample.pdf")
        })
        it('File uploads', function(){

            const fileName = 'sample.pdf';
            cy.visit('https://www.file.io/')
            //upload a file
            cy.get("#upload-button").attachFile(fileName)
            cy.wait(5000)
            cy.get('.actions > [role="button"]').click()
            cy.get('.message').contains("Super simple file sharing")
            })
    })