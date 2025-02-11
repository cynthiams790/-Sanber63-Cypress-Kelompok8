import editChangePassword from '../support/pageObjects/editChangePassword';

describe('Edit Change Password', () => {
  beforeEach(() => {
    cy.visit('')
    cy.loginEdit('kelompok_8@gmail.com', 'Sanbercodekelompok8')

    editChangePassword.clickDropDown()
    editChangePassword.clickMyAccount()
    editChangePassword.clickEditAccount()
  });

  it('Edit Change Password Success - Positive', () => {
    editChangePassword.clickChangePassword()
    editChangePassword.textChangePassword()
    editChangePassword.editCurrentPassword()
    editChangePassword.editPassword()
    editChangePassword.editPasswordConfirmation()
    cy.buttonSave()
    cy.verifySuccess('You saved the account information.')
  });

  it('Current Password Invalid - Negative', () => {
    editChangePassword.clickChangePassword()
    editChangePassword.textChangePassword()
    editChangePassword.InvalidCurrentPassword()
    editChangePassword.editPassword()
    editChangePassword.editPasswordConfirmation()
    cy.buttonSave()
    cy.Error("The password doesn't match this account. Verify the password and try again.")
  });

  it('New Password Invalid - Negative', () => {
    editChangePassword.clickChangePassword()
    editChangePassword.textChangePassword()
    editChangePassword.editCurrentPassword()
    editChangePassword.InvalidPassword()
    editChangePassword.InvalidPasswordConfirmation()
    cy.buttonSave()
    cy.PasswordError('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
  });

  it('Confirm New Password Invalid - Negative', () => {
    editChangePassword.clickChangePassword()
    editChangePassword.textChangePassword()
    editChangePassword.editCurrentPassword()
    editChangePassword.editPassword()
    editChangePassword.InvalidPasswordConfirmation()
    cy.buttonSave()
    cy.PasswordErrorConfirmation('Please enter the same value again.')
  });

  it('Edit Change Password Empty - Negative', () => {
    editChangePassword.clickChangePassword()
    editChangePassword.textChangePassword()
    editChangePassword.ClearCurrentPassword()
    editChangePassword.ClearPassword()
    editChangePassword.ClearPasswordConfirmation()
    cy.buttonSave()
    cy.ErrorPassword('This is a required field.')
    cy.PasswordError('This is a required field.')
    cy.PasswordErrorConfirmation('This is a required field.')
  });
});
