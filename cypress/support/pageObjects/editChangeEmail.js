class editChangeEmail{
  DropDown = ':nth-child(2) > .customer-welcome > .customer-name > .action'
  MyAccount = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'
  EditMyAccountPage = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
  ButtonChangeEmail = '#change-email'
  ChangeEmail = '.fieldset.password > .legend > span'
  Email = '#email'
  CurrentPassword = '#current-password'
  ButtonSave = 'button[title="Save"]'
  Success = '[data-ui-id="message-success"]'
  ErrorEmail = '#email-error'
  CurrentPassword = '#current-password'
  Error = '[data-ui-id="message-error"]'
  EmptyEmail = '#email-error'
  EmptyCurrentPassword = '#current-password-error'

  clickDropDown() {
    cy.get(this.DropDown).click()
  }
  clickMyAccount() {
    cy.get(this.MyAccount).click()
  }
  clickEditAccount() {
    cy.get(this.EditMyAccountPage).click()
  }
  clickChangeEmail() {
    cy.get(this.ButtonChangeEmail).click()
  }
  textChangeEmail() {
    cy.get(this.ChangeEmail).should('contain.text', 'Change Email')
  }
  EditEmail() {
    cy.get(this.Email).clear().type('kelompok_8@gmail.com')
  }
  editCurrentPassword() {
    cy.get(this.CurrentPassword).type('Sanbercodekelompok8')
  }
  ClickButtonSave() {
    cy.get(this.ButtonSave).click()
  }
  VerifySuccess() {
    cy.get(this.Success).should('contain.text', 'You saved the account information.')
  }
  InvalidEmail() {
    cy.get(this.Email).clear().type('kelompok_8$^&/*.,@gmail.com')
  }
  InvalidCurrentPassword() {
    cy.get(this.CurrentPassword).type('xxx')
  }
  EmailError() {
    cy.get(this.ErrorEmail).should('be.visible').and('contain.text', 'Please enter a valid email address.')
  }
  VerifyError() {
    cy.get(this.Error).should('contain.text', "The password doesn't match this account. Verify the password and try again.")
  }
  ClearEmail() {
    cy.get(this.Email).clear()
  }
  ClearCurrentPassword() {
    cy.get(this.CurrentPassword).clear()
  }
  ErrorEmptyEmail() {
    cy.get(this.EmptyEmail).should('be.visible').and('contain.text', 'This is a required field.')
  }
  ErrorEmptyCurrentPassword() {
    cy.get(this.EmptyCurrentPassword).should('be.visible').and('contain.text', 'This is a required field.')
  }
}
module.exports = new editChangeEmail()