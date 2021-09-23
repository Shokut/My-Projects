// const cypress = require("cypress")
// const { it } = require("mocha")


describe('create post and mark it as a favourite',function(){
    it('Sign in', function(){

        cy.visit('https://react-redux.realworld.io/#/login?_k=ora2ib')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('muhammad.shokut@techloyce.com')
        cy.get('input[type="password"]').type('shoukat123')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed',{timeout:10000}).should('be.visible')
        
    })
    it('create a post',function(){
        cy.contains('New Post').click()
        cy.location('hash').should('include','#/editor')
        cy.get('input[placeholder="Article Title"]').type('test')
        cy.get('input[placeholder="What\'s this article about?"]').type('testing')
        cy.get('input[placeholder="Write your article (in markdown)"]').type('testing123')
        cy.get('input[placeholder="Enter tags"]').type('test')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')
    })
    it('mark and unmark from favourite ',function(){
        cy.get('.nav-link').contains('shoukat').click()
        cy.contains('my Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favourited Articles').click()
        cy.url().should('include','favourites')
        cy.get('.ion-heart').click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
    })

    
})