// const cypress = require("cypress")
// const { it } = require("mocha")


describe('create post and mark it as a favourite',function(){
    it('Sign in', function(){

        cy.visit('https://react-redux.realworld.io/#/login?_k=ora2ib')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        // cy.get('input[type="email"]').type('muhammad.shokut@techloyce.com')
        // cy.get('input[type="password"]').type('shoukat123')
        // cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.get('form').within(($form) =>  {
            cy.get('input[type="email"]').type('muhammad.shokut@techloyce.com')
            cy.get('input[type="password"]').type('shoukat123')
            cy.root().submit()
        })
        cy.contains('Your Feed',{timeout:10000}).should('be.visible')
        
    })
    it('create a post',function(){
        // 
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.location('hash').should('include','#/editor')
        cy.get('form').within(($form)=>{
            cy.get('input').first().type('test1')
        cy.get('input').eq(1).type('Test1')
        cy.get('textarea').last().type('Test2')
        cy.contains('Publish Article').click()


        })
                cy.url().should('include','article')
    })
    it('mark and unmark from favourite ',function(){
        // cy.get('.nav-link').contains('shoukat').click()
        cy.get('ul.navbar-nav').children().contains('shoukat').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.get('.pull-xs-right > .btn').first().click()
        cy.reload()
        // cy.contains('No articles are here... yet.',{timeout:10000}).should('be.visible')
        cy.go('back')
    })

    
}) 