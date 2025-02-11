import editAccount from '../support/pageObjects/editAccount';

describe('Edit Account Validation', () => {
  beforeEach(() => {
    cy.visit('')
    cy.loginEdit('kelompok_8@gmail.com', 'Sanbercodekelompok8')

    editAccount.clickDropDown()
    editAccount.clickMyAccount()
    editAccount.clickEditAccount()
  });

  it('Edit An Account Success', () => {
    editAccount.EditFirstName()
    editAccount.EditLastName()
    cy.buttonSave()
    cy.verifySuccess('You saved the account information.')
  });

  it('Edit An Account First Name Empty - Negative', () => {
    editAccount.ClearFirstName()
    editAccount.EditLastName()
    cy.buttonSave()
    cy.ErrorFirstName('This is a required field.')
  });

  it('Edit An Account Last Name Empty - Negative', () => {
    editAccount.EditFirstName()
    editAccount.ClearLastName()
    cy.buttonSave()
    cy.ErrorLastName('This is a required field.')
  });

  it('First Name and Last Name Empty - Negative', () => {
    editAccount.ClearFirstName()
    editAccount.ClearLastName()
    cy.buttonSave()
    cy.ErrorFirstName('This is a required field.')
    cy.ErrorLastName('This is a required field.')
  });
});
