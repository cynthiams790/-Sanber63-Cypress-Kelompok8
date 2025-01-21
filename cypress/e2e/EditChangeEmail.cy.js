import editChangeEmail from '../support/pageObjects/editChangeEmail';

describe('Edit Change Email', () => {
  beforeEach(() => {
    cy.visit('');
    cy.loginEdit('kelompok_8@gmail.com', 'Sanbercodekelompok8')

    editChangeEmail.clickDropDown()
    editChangeEmail.clickMyAccount()
    editChangeEmail.clickEditAccount()
  });

  it('Edit Change Email Success - Positive', () => {
    editChangeEmail.clickChangeEmail()
    editChangeEmail.textChangeEmail()
    editChangeEmail.EditEmail()
    editChangeEmail.editCurrentPassword()
    editChangeEmail.ClickButtonSave()
    editChangeEmail.VerifySuccess()
  });

  it('Edit Change Invalid Email - Negative', () => {
    editChangeEmail.clickChangeEmail()
    editChangeEmail.textChangeEmail()
    editChangeEmail.InvalidEmail()
    editChangeEmail.editCurrentPassword()
    editChangeEmail.ClickButtonSave()
    editChangeEmail.EmailError()
  });

  it('Edit Change Invalid Password - Negative', () => {
    editChangeEmail.clickChangeEmail()
    editChangeEmail.textChangeEmail()
    editChangeEmail.EditEmail()
    editChangeEmail.InvalidCurrentPassword()
    editChangeEmail.ClickButtonSave()
    editChangeEmail.VerifyError()
  });
  
  it('Email and Password Empty - Negative', () => {
    editChangeEmail.clickChangeEmail()
    editChangeEmail.textChangeEmail()
    editChangeEmail.ClearEmail()
    editChangeEmail.ClearCurrentPassword()
    editChangeEmail.ClickButtonSave()
    editChangeEmail.ErrorEmptyEmail()
    editChangeEmail.ErrorEmptyCurrentPassword() 
  });
});
