class editAccount {
  DropDown = ':nth-child(2) > .customer-welcome > .customer-name > .action'
  MyAccount = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'
  EditMyAccountPage = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
  FirstName = '#firstname'
  LastName = '#lastname'
  ButtonSave = 'button[title="Save"]'
  Success = '[data-ui-id="message-success"]'
  FirstNameError = '#firstname-error'
  LastNameError = '#lastname-error'
  
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
  ClickButtonSave() {
    cy.get(this.ButtonSave).click()
  }
  VerifySuccess() {
    cy.get(this.Success).should('contain.text', 'You saved the account information.')
  }
  ClearFirstName() {
    cy.get(this.FirstName).clear()
  }
  ClearLastName() {
    cy.get(this.LastName).clear()
  }
  ErrorFirsName() {
    cy.get(this.FirstNameError).should('be.visible').and('contain.text', 'This is a required field.');
  }
  ErrorLasName() {
    cy.get(this.LastNameError).should('be.visible').and('contain.text', 'This is a required field.');
  }
}
module.exports = new editAccount()