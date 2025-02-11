import editChangeEmail from '../support/pageObjects/editChangeEmail';

describe('Edit Change Email', () => {
  beforeEach(() => {
    cy.visit('')
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
    cy.buttonSave()
    cy.verifySuccess('You saved the account information.')
  });

  it('Edit Change Invalid Email - Negative', () => {
    editChangeEmail.clickChangeEmail()
    editChangeEmail.textChangeEmail()
    editChangeEmail.InvalidEmail()
    editChangeEmail.editCurrentPassword()
    cy.buttonSave()
    cy.EmailError('Please enter a valid email address.')
  });

  it('Edit Change Invalid Password - Negative', () => {
    editChangeEmail.clickChangeEmail()
    editChangeEmail.textChangeEmail()
    editChangeEmail.EditEmail()
    editChangeEmail.InvalidCurrentPassword()
    cy.buttonSave()
    cy.Error("The password doesn't match this account. Verify the password and try again.")
  });
  
  it('Email and Password Empty - Negative', () => {
    editChangeEmail.clickChangeEmail()
    editChangeEmail.textChangeEmail()
    editChangeEmail.ClearEmail()
    editChangeEmail.ClearCurrentPassword()
    cy.buttonSave()
    cy.EmailError('This is a required field.')
    cy.ErrorPassword('This is a required field.')
  });
});
