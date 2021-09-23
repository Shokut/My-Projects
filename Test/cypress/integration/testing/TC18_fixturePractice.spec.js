import Login from '../pageObjects/login'
// describe('Login', () => {
//     const log = new Login()

//     it('Sign in', () => {
//         cy.visit('https://app.retailconnect.pk/sign-on-phone')
//         cy.fixture('userLoginDetails').then((user) => {
//             log.whatsappNum().type(user.supplier)
//         })
//         log.checkBox().click()
//         log.submitBtn().click()

//         //log.allDistributors().click()


//     })
// })

describe('Login', () => {
    const log = new Login()
    // let userDetails
   
    // beforeEach(() => {
    //     // this is then response
    //     // cy.fixture('userLoginDetails').then((user) =>{
    //     //     userDetails = user
    //     // using aliases also
    //     //})
    //     cy.fixture('userLoginDetails').as('user')

    // })

    it('Sign in', () => {
         let user = {
        "retailer":"03047465299",
        "supplier":"923044716072"
    }
        cy.visit('https://app.retailconnect.pk/sign-on-phone')
        log.whatsappNum().type(user.supplier)
        log.checkBox().click()
        log.submitBtn().click()


    })
})