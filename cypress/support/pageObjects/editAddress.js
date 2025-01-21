class editAddress{
  DropDown = ':nth-child(2) > .customer-welcome > .customer-name > .action'
  MyAccount = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'
  AddressBook = '.block-dashboard-addresses > .block-title > strong'
  EditAddress = '.box-billing-address > .box-actions > .action > span'
  EditAddressText = '.base'
  FirstName = '#firstname'
  LastName = '#lastname'
  Company = '#company'
  Telephone = '#telephone'
  Street1 = '#street_1'
  Street2 = '#street_2'
  Street3 = '#street_3'
  City = '#city'
  Region = '#region'
  Zip = '#zip'
  Country = '#country'
  ButtonSave = '#form-validate > .actions-toolbar > div.primary > .action'
  Success = '[data-ui-id="message-success"]'
  FirstNameError = '#firstname-error'
  LastNameError = '#lastname-error'
  TelephoneError = '#telephone-error'
  Street1Error = '#street_1-error'
  CityError = '#city-error'
  ZipError = '#zip-error'
  CountryError = '#country-error'

  clickDropDown() {
    cy.get(this.DropDown).click()
  }
  clickMyAccount() {
    cy.get(this.MyAccount).click()
  }
  textAddressBook() {
    cy.get(this.AddressBook).should('contain.text', 'Address Book')
  }
  clickEditAddress() {
    cy.get(this.EditAddress).click()
  }
  textEditAddress() {
    cy.get(this.EditAddressText).should('contain.text', 'Edit Address')
  }
  EditFirstName() {
    cy.get(this.FirstName).clear().type('sanbercode')
  }
  EditLastName() {
    cy.get(this.LastName).clear().type('kelompok8')
  }
  EditCompany() {
    cy.get(this.Company).clear().type('Sanbercode63')
  }
  EditTelephone() {
    cy.get(this.Telephone).clear().type('0857xxxxxx')
  }
  EditStreet1() {
    cy.get(this.Street1).clear().type('JL RAA MARTANEGARA')
  }
  EditStreet2() {
    cy.get(this.Street2).clear().type('Kel. Turangga')
  }
  EditStreet3() {
    cy.get(this.Street3).clear().type('Kec. Lengkong')
  }
  EditCity() {
    cy.get(this.City).clear().type('Bandung')
  }
  EditRegion() {
    cy.get(this.Region).clear().type('Jawa Barat')
  }
  EditZip() {
    cy.get(this.Zip).clear().type('40264')
  }
  EditCountry() {
    cy.get(this.Country).select('Indonesia')
  }
  MoreThanZip() {
    cy.get(this.Zip).clear().type('467890567')
  }
  clickButtonSave() {
    cy.get(this.ButtonSave).click()
  }
  VerifySuccess() {
    cy.get(this.Success).should('contain.text', 'You saved the address.')
  }
  ClearFirstName() {
    cy.get(this.FirstName).clear()
  }
  ClearLastName() {
    cy.get(this.LastName).clear()
  }
  ClearCompany() {
    cy.get(this.Company).clear()
  }
  ClearStreet1() {
    cy.get(this.Street1).clear()
  }
  ClearStreet2() {
    cy.get(this.Street2).clear()
  }
  ClearStreet3() {
    cy.get(this.Street3).clear()
  }
  ClearTelephone() {
    cy.get(this.Telephone).clear()
  }
  ClearCity() {
    cy.get(this.City).clear()
  }
  ClearRegion() {
    cy.get(this.Region).clear()
  }
  ClearZip() {
    cy.get(this.Zip).clear()
  }
  SelectCountry() {
    cy.get(this.Country).select('')
  }
  ErrorFirstName() {
    cy.get(this.FirstNameError).should('be.visible').and('contain.text', 'This is a required field.')
  }
  ErrorLastName() {
    cy.get(this.LastNameError).should('be.visible').and('contain.text', 'This is a required field.')
  }
  ErrorTelephone() {
    cy.get(this.TelephoneError).should('be.visible').and('contain.text', 'This is a required field.')
  }
  ErrorStreet1() {
    cy.get(this.Street1Error).should('be.visible').and('contain.text', 'This is a required field.')
  }
  ErrorCity() {
    cy.get(this.CityError).should('be.visible').and('contain.text', 'This is a required field.')
  }
  ErrorZip() {
    cy.get(this.ZipError).should('be.visible').and('contain.text', 'This is a required field.')
  }
  ErrorCountry() {
    cy.get(this.CountryError).should('be.visible').and('contain.text', 'Please select an option.')
  }
}
module.exports = new editAddress()