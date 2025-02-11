class editAccount {
  DropDown = ':nth-child(2) > .customer-welcome > .customer-name > .action'
  MyAccount = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'
  EditMyAccountPage = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
  FirstName = '#firstname'
  LastName = '#lastname'
  
  clickDropDown() {
    cy.get(this.DropDown).click()
  }
  clickMyAccount() {
    cy.get(this.MyAccount).click()
  }
  clickEditAccount() {
    cy.get(this.EditMyAccountPage).click()
  }
  EditFirstName() {
    cy.get(this.FirstName).clear().type('sanbercode')
  }
  EditLastName() {
    cy.get(this.LastName).clear().type('kelompok8')
  }
  ClearFirstName() {
    cy.get(this.FirstName).clear()
  }
  ClearLastName() {
    cy.get(this.LastName).clear()
  }
}
module.exports = new editAccount()