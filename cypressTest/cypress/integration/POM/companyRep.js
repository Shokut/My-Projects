class CompanyRep {
  selectRadio() {
    cy.get(":nth-child(1) > .radio-checkmark").click()
  }
  fName(name) {
    cy.get(
      '[data-qa-id="representative-info-firstname"] > .form-group > .form-control'
    )
      .click()
      .type(name)
  }
  lName(lastName) {
    cy.get(
      '[data-qa-id="representative-info-lastname"] > .form-group > .form-control'
    )
      .click()
      .type(lastName)
  }
  email(mail) {
    cy.get(
      '[data-qa-id="representative-info-email"] > .form-group > .form-control'
    )
      .click()
      .type(mail)
  }
  secondAddress(sAddress) {
    cy.get(
      '[data-qa-id="representative-info-street"] > .form-group > .form-control'
    )
      .click()
      .type(sAddress)
  }
  dateOfBirth(DOB) {
    cy.get(
      '[data-qa-id="representative-info-dob"] > .form-group > .form-control'
    )
      .click()
      .type(DOB)
  }
  postCode(postC) {
    cy.get(
      '[data-qa-id="representative-info-postcode"] > .form-group > .form-control'
    )
      .click()
      .type(postC)
  }
  nationality(national) {
    cy.get(".vue-country-input > .form-field > .form-group > .form-control")
      .click()
      .type(national) // Belgian
  }
  cityy(City) {
    cy.get(
      '[data-qa-id="representative-info-city"] > .form-group > .form-control'
    )
      .click()
      .type(City)
  }
  phone(number) {
    cy.get(".form-control > input").click().type(number, { force: true }) // 1716895430
  }
  accpterms() {
    cy.get(
      '[data-qa-id="submit-section-terms"] > .form-field > .checkbox > label > .checkbox-material > .check'
    ).click()
    // agree condtions
    cy.get(
      '[data-qa-id="submit-section-marketing"] > .form-field > .checkbox > label > .checkbox-material > .check'
    ).click()
  }

  requestButton() {
    cy.get(".button") // click on request button and check assertions
      .click().then(() => {
        cy.url().then(url => {
          const getUrl = url
          console.log('url is :  ' + getUrl)
          if (getUrl == 'https://antrag.lendico.de/ready') {
            cy.url().should('include', '/ready')
          }
          else {
            var company = cy.get("#companyName")
            company.invoke('val').then(sometext => {
              if (sometext == '') {
                cy.contains('Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.').should('be.visible')
                cy.contains('Diese Angabe ist erforderlich.').should('be.visible')
                console.log("empty")

              }
              cy.get('[data-qa-id="company-info-street"] > .form-group > .form-control').invoke('val').then(sometext => {
                if (sometext == '') {
                  cy.contains('Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.').should('be.visible')
                  cy.contains('Diese Angabe ist erforderlich.').should('be.visible')
                }
              })
              cy.get(
                '[data-qa-id="company-info-founded-date"] > .form-group > .form-control'
              ).invoke('val').then(sometext => {
                if (sometext == '') {
                  cy.contains('Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.').should('be.visible')
                  cy.contains('Diese Angabe ist erforderlich.').should('be.visible')
                }
              })
              cy.get('[data-qa-id="company-info-postcode"] > .form-group > .form-control').invoke('val').then(sometext => {
                if (sometext == '') {
                  cy.contains('Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.').should('be.visible')
                  cy.contains('Diese Angabe ist erforderlich.').should('be.visible')
                }
              })

              cy.get('[data-qa-id="company-info-city"] > .form-group > .form-control').invoke('val').then(sometext => {
                if (sometext == '') {
                  cy.contains('Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.').should('be.visible')
                  cy.contains('Diese Angabe ist erforderlich.').should('be.visible')
                }
              })

              // assertions for Company representative

              cy.get('[data-qa-id="representative-info-firstname"] > .form-group > .form-control').invoke('val').then(sometext => {
                if (sometext == '') {
                  cy.contains('Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.').should('be.visible')
                  cy.contains('Diese Angabe ist erforderlich.').should('be.visible')
                }
              })


              cy.get('[data-qa-id="representative-info-lastname"] > .form-group > .form-control').invoke('val').then(sometext => {
                if (sometext == '') {
                  cy.contains('Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.').should('be.visible')
                  cy.contains('Diese Angabe ist erforderlich.').should('be.visible')
                }
              })


              cy.get('[data-qa-id="representative-info-email"] > .form-group > .form-control').invoke('val').then(sometext => {
                if (sometext == '') {
                  cy.contains('Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.').should('be.visible')
                  cy.contains('Diese Angabe ist erforderlich.').should('be.visible')
                }
              })


              cy.get('[data-qa-id="representative-info-street"] > .form-group > .form-control').invoke('val').then(sometext => {
                if (sometext == '') {
                  cy.contains('Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.').should('be.visible')
                  cy.contains('Diese Angabe ist erforderlich.').should('be.visible')
                }
              })


              cy.get('[data-qa-id="representative-info-dob"] > .form-group > .form-control').invoke('val').then(sometext => {
                if (sometext == '') {
                  cy.contains('Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.').should('be.visible')
                  cy.contains('Diese Angabe ist erforderlich.').should('be.visible')
                }
              })


              cy.get('[data-qa-id="representative-info-postcode"] > .form-group > .form-control').invoke('val').then(sometext => {
                if (sometext == '') {
                  cy.contains('Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.').should('be.visible')
                  cy.contains('Diese Angabe ist erforderlich.').should('be.visible')
                }
              })


              cy.get(".vue-country-input > .form-field > .form-group > .form-control").invoke('val').then(sometext => {
                if (sometext == '') {
                  cy.contains('Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.').should('be.visible')
                  cy.contains('Diese Angabe ist erforderlich.').should('be.visible')
                }
              })


              cy.get('[data-qa-id="representative-info-city"] > .form-group > .form-control').invoke('val').then(sometext => {
                if (sometext == '') {
                  cy.contains('Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.').should('be.visible')
                  cy.contains('Diese Angabe ist erforderlich.').should('be.visible')
                }
              })

              cy.get(".form-control > input").invoke('val').then(sometext => {
                if (sometext == '') {
                  cy.contains('Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.').should('be.visible')
                  cy.contains('Diese Angabe ist erforderlich.').should('be.visible')
                }
              })

            })
          }

        })

      })

    // assertions for company information


  }

}
export default CompanyRep