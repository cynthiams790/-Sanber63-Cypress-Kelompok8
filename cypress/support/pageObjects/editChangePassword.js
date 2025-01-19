class editChangePassword{
  DropDown = ':nth-child(2) > .customer-welcome > .customer-name > .action'
  MyAccount = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'
  EditMyAccountPage = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
  ButtonChangePassword = '#change-password'
  ChangePassword = '.fieldset.password > .legend > span'
  CurrentPassword = '#current-password'
  Password = '#password'
  PasswordConfirmation = '#password-confirmation'
  ButtonSave = 'button[title="Save"]'
  Success = '[data-ui-id="message-success"]'
  Error = '[data-ui-id="message-error"]'
  PasswordError = '#password-error'
  PasswordConfirmationError = '#mage-error'
  EmptyCurrentPassword = '#current-password-error'
  EmptyPassword = '#password-error'
  EmptyPasswordConfirmation = '#password-confirmation-error'
  PasswordSuccess = '#password-strength-meter'

  clickDropDown() {
    cy.get(this.DropDown).click()
  }
  clickMyAccount() {
    cy.get(this.MyAccount).click()
  }
  clickEditAccount() {
    cy.get(this.EditMyAccountPage).click()
  }
  clickChangePassword() {
    cy.get(this.ButtonChangePassword).click()
  }
  textChangePassword() {
    cy.get(this.ChangePassword).should('contain.text', 'Change Password')
  }
  editCurrentPassword() {
    cy.get(this.CurrentPassword).type('Sanbercodekelompok8')
  }
  editPassword() {
    cy.get(this.Password).type('Sanbercodekelompok8')
  }
  editPasswordConfirmation() {
    cy.get(this.PasswordConfirmation).type('Sanbercodekelompok8')
  }
  ClickButtonSave() {
    cy.get(this.ButtonSave).click()
  }
  VerifySuccess() {
    cy.get(this.Success).should('contain.text', 'You saved the account information.')
  }
  InvalidCurrentPassword() {
    cy.get(this.CurrentPassword).type('xxx')
  }
  InvalidPassword() {
    cy.get(this.Password).type('xxx')
  }
  InvalidPasswordConfirmation() {
    cy.get(this.PasswordConfirmation).type('xxx')
  }
  VerifyError() {
    cy.get(this.Error).should('contain.text', "The password doesn't match this account. Verify the password and try again.")
  }
  ErrorPassword() {
    cy.get(this.PasswordError).should('be.visible').and('contain.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
  }
 
  ErrorPasswordConfirmation() {
    cy.get(this.EmptyPasswordConfirmation).should('be.visible').and('contain.text', 'Please enter the same value again.')
  }
  ClearCurrentPassword() {
    cy.get(this.CurrentPassword).clear()
  }
  ClearPassword() {
    cy.get(this.Password).clear()
  }
  ClearPasswordConfirmation() {
    cy.get(this.PasswordConfirmation).clear()
  }
  ErrorEmptyCurrentPassword() {
    cy.get(this.EmptyCurrentPassword).should('be.visible').and('contain.text', 'This is a required field.')
  }
  ErrorEmptyPassword() {
    cy.get(this.EmptyPassword).should('be.visible').and('contain.text', 'This is a required field.')
  }
  ErrorEmptyPasswordConfirmation() {
    cy.get(this.EmptyPasswordConfirmation).should('be.visible').and('contain.text', 'This is a required field.')
  }
}
module.exports = new editChangePassword()