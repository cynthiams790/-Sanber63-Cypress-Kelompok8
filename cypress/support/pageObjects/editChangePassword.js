class editChangePassword{
  DropDown = ':nth-child(2) > .customer-welcome > .customer-name > .action'
  MyAccount = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'
  EditMyAccountPage = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
  ButtonChangePassword = '#change-password'
  ChangePassword = '.fieldset.password > .legend > span'
  CurrentPassword = '#current-password'
  Password = '#password'
  PasswordConfirmation = '#password-confirmation'
  PasswordConfirmationError = '#mage-error'
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
  InvalidCurrentPassword() {
    cy.get(this.CurrentPassword).type('xxx')
  }
  InvalidPassword() {
    cy.get(this.Password).type('xxx')
  }
  InvalidPasswordConfirmation() {
    cy.get(this.PasswordConfirmation).type('xxx')
  }
  
  ErrorPassword() {
    cy.get(this.PasswordError).should('be.visible').and('contain.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
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
}
module.exports = new editChangePassword()