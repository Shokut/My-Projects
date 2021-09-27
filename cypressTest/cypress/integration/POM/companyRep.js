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
  
}
export default CompanyRep