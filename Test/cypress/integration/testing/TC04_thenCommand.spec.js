// const cypress = require("cypress")
// const { it } = require("mocha")

describe('create post and mark it as a favourite', function () {

    Cypress.config('pageLoadTimeout',100000)
    before(function () {

        cy.SignIn()

    })
    it('create a post', function () {
        // 
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.location('hash').should('include', '#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type('test1')
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').last().type('Test 2')
            cy.contains('Publish Article').click()


        })
        cy.url().should('include', 'article')
    })
    it('mark and unmark from favourite ', function () {
        // cy.get('.nav-link').contains('shoukat').click()
        cy.get('ul.navbar-nav').children().contains('shoukat').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.btn-primary').first().then(($fav)=>{
            const favCount=$fav.text()
            expect(parseInt(favCount)).to.eq(1)

        }).click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
    })


})