class login{
    whatsappNum(){
        return cy.get('input[placeholder="03001234567"]')

    }
    checkBox(){
        return cy.get('.ion-no-padding')

    }
    submitBtn(){
        return cy.get('.main-button')

    }
}
export default login