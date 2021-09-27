class CompanyInfo {
  companyName(cName) {
       cy.get("#companyName").click({ force: true }).type(cName)
  }
  legalForm() {
    cy.get(
      '.first-column > [data-v-d4074bca=""][data-v-6168c69e=""] > .form-group > .len-custom-select > .len-custom-select__input'
    ).click({ force: true })
    cy.get(".len-custom-select__options > :nth-child(3)").click()
  }
  sale() {
    cy.get(".radio__wrapper > :nth-child(3)").click()
  }
  address(adres) {
    cy.get('[data-qa-id="company-info-street"] > .form-group > .form-control')
      .click()
      .type(adres)
  }
  established(estab) {
    cy.get(
      '[data-qa-id="company-info-founded-date"] > .form-group > .form-control'
    )
      .click()
      .type(estab)
  }
  postalCode(pcode) {
    cy.get('[data-qa-id="company-info-postcode"] > .form-group > .form-control')
      .click()
      .type(pcode)
  }
  purposeOfUse() {
    cy.get(
      '.second-column > [data-v-d4074bca=""][data-v-6168c69e=""] > .form-group > .len-custom-select > .len-custom-select__input'
    ).click()
    cy.get(".len-custom-select__options > :nth-child(2)").click()
  }
  city(cty) {
    cy.get('[data-qa-id="company-info-city"] > .form-group > .form-control')
      .click()
      .type(cty)
  }
}
export default CompanyInfo
