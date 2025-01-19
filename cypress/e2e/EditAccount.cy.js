import editAccount from '../support/pageObject/editAccount';

describe('Edit Account Validation', () => {
  beforeEach(() => {
    cy.visit('');
    cy.loginEdit('kelompok_8@gmail.com', 'Sanbercodekelompok8')

    editAccount.clickDropDown()
    editAccount.clickMyAccount()
    editAccount.clickEditAccount()
  });

  it('Edit An Account Success', () => {
    editAccount.EditFirstName()
    editAccount.EditLastName()
    editAccount.ClickButtonSave()
    editAccount.VerifySuccess()
  });

  it('Edit An Account First Name Empty - Negative', () => {
    editAccount.ClearFirstName()
    editAccount.EditLastName()
    editAccount.ClickButtonSave()
    editAccount.ErrorFirsName()
  });

  it('Edit An Account Last Name Empty - Negative', () => {
    editAccount.EditFirstName()
    editAccount.ClearLastName()
    editAccount.ClickButtonSave()
    editAccount.ErrorLasName()
  });

  it.only('First Name and Last Name Empty - Negative', () => {
    editAccount.ClearFirstName()
    editAccount.ClearLastName()
    editAccount.ClickButtonSave()
    editAccount.ErrorFirsName()
    editAccount.ErrorLasName()
  });
});
