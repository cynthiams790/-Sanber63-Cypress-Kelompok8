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
}
module.exports = new editAddress()