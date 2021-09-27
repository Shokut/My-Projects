import CompanyInfo from "./POM/companyInfo"
import CompanyRep from "./POM/companyRep"

describe("My Test", () => {
  const cinfo = new CompanyInfo() // creating object of CompanyInformation
  const crepresn = new CompanyRep() // creating object of Company representative
  it("Entering Company Information", () => {
    cy.visit("https://antrag.lendico.de/new?amount=300000&length=48").then(
      () => {
        cy.contains(
          "Ihre unverbindliche Kreditanfrage mit nur einem Klick"
        ).should("be.visible")
        // entering company info in the form
        cinfo.companyName("Testing Company")
        cinfo.legalForm()
        cinfo.sale()
        cinfo.address("street 12 house 14")
       cinfo.established("121997") // format mmyyyy
       //cinfo.postalCode("80331")
       cinfo.purposeOfUse()
       cinfo.city("Berlin")

        // entering company represntative info
        crepresn.selectRadio()
        crepresn.fName("Muhammad Shoukat")
        crepresn.lName("Shah")
        crepresn.email("shoukat@gmail.com")
        crepresn.secondAddress("Street number B1 house number 14")
        crepresn.dateOfBirth("05121997") // DOB format ddmmyyyy
        crepresn.postCode("80331")
        crepresn.nationality("Deutschland")
        crepresn.cityy("Berlin")
        crepresn.phone("1716895430")
        crepresn.accpterms()
        crepresn.requestButton()
      }
    )
  })
})
