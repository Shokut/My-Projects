import Login from '../pageObjects/login'
describe('Login', () => {
    // creating object of login class
    const log = new Login()

    it('Sign in', () => {
        cy.visit('https://app.retailconnect.pk/sign-on-phone')
        log.whatsappNum().type('03044716072')
        log.submitBtn().click()
        log.allDistributors().click()


    })
})