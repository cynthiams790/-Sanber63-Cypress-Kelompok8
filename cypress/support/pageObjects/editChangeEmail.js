class editChangeEmail{
  DropDown = ':nth-child(2) > .customer-welcome > .customer-name > .action'
  MyAccount = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'
  EditMyAccountPage = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
  ButtonChangeEmail = '#change-email'
  ChangeEmail = '.fieldset.password > .legend > span'
  Email = '#email'
  CurrentPassword = '#current-password'
  CurrentPassword = '#current-password'

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
  InvalidEmail() {
    cy.get(this.Email).clear().type('kelompok_8$^&/*.,@gmail.com')
  }
  InvalidCurrentPassword() {
    cy.get(this.CurrentPassword).type('xxx')
  }
  ClearEmail() {
    cy.get(this.Email).clear()
  }
  ClearCurrentPassword() {
    cy.get(this.CurrentPassword).clear()
  }
}
module.exports = new editChangeEmail()