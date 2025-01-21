import editChangePassword from '../support/pageObjects/editChangePassword';

describe('Edit Change Password', () => {
  beforeEach(() => {
    cy.visit('');
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
    editChangePassword.ClickButtonSave()
    editChangePassword.VerifySuccess()
  });

  it('Current Password Invalid - Negative', () => {
    editChangePassword.clickChangePassword()
    editChangePassword.textChangePassword()
    editChangePassword.InvalidCurrentPassword()
    editChangePassword.editPassword()
    editChangePassword.editPasswordConfirmation()
    editChangePassword.ClickButtonSave()
    editChangePassword.VerifyError()
  });

  it('New Password Invalid - Negative', () => {
    editChangePassword.clickChangePassword()
    editChangePassword.textChangePassword()
    editChangePassword.editCurrentPassword()
    editChangePassword.InvalidPassword()
    editChangePassword.InvalidPasswordConfirmation()
    editChangePassword.ClickButtonSave()
    editChangePassword.ErrorPassword()
  });

  it('Confirm New Password Invalid - Negative', () => {
    editChangePassword.clickChangePassword()
    editChangePassword.textChangePassword()
    editChangePassword.editCurrentPassword()
    editChangePassword.editPassword()
    editChangePassword.InvalidPasswordConfirmation()
    editChangePassword.ClickButtonSave()
    editChangePassword.ErrorPasswordConfirmation()
  });

  it('Edit Change Password Empty - Negative', () => {
    editChangePassword.clickChangePassword()
    editChangePassword.textChangePassword()
    editChangePassword.ClearCurrentPassword()
    editChangePassword.ClearPassword()
    editChangePassword.ClearPasswordConfirmation()
    editChangePassword.ClickButtonSave()
    editChangePassword.ErrorEmptyCurrentPassword()
    editChangePassword.ErrorEmptyPassword()
    editChangePassword.ErrorEmptyPasswordConfirmation()
  });
});
