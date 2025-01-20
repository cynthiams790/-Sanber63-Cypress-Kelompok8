function generateRandomEmail() {
    const timestamp = Date.now();
    return `user${timestamp}.com`;
  }
  function generateRandomPassword(length = 4) {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }
  function generateRandomUsername(prefix = 'user', length = 8) {
    const randomString = Math.random().toString(36).substring(2, length + 2);
    return `${prefix}_${randomString}`;
  }

describe('Create an Account', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    })
    it('please enter valid email and password weak' , () => {
    const randomEmail = generateRandomEmail();
    cy.log(randomEmail);
    const randomPassword = generateRandomPassword();
    cy.log(randomPassword);
    const randomUsername = generateRandomUsername();
    cy.log(randomUsername);

    // execute
    cy.get('#firstname').type(randomUsername);
    cy.get('#lastname').type(randomUsername);
    cy.get('#email_address').type(randomEmail);
    cy.get('#password').type(randomPassword);
    cy.get('#password-confirmation').type(randomPassword);
    cy.get('button').contains('Create an Account').click()
    cy.wait(5000);
    
})
  it('Valid mail and Password Strength: Weak' , () => {
    const randomUsername = generateRandomUsername();
    cy.log(randomUsername);
    const randomPassword = generateRandomPassword();
    cy.log(randomPassword);
    
    // execute
    cy.get('#firstname').type(randomUsername);
    cy.get('#lastname').type(randomUsername);
    cy.get('#email_address').type('test123456@gmail.com')
    cy.get('#password').type(randomPassword);
    cy.get('#password-confirmation').type(randomPassword);
    cy.get('button').contains('Create an Account').click()
    cy.wait(5000);
    
})
it('already an account with this email address' , () => {
    const randomUsername = generateRandomUsername();
    cy.log(randomUsername);
    const randomPassword = generateRandomPassword();
    cy.log(randomPassword);
    
    // execute
    cy.get('#firstname').type(randomUsername);
    cy.get('#lastname').type(randomUsername);
    cy.get('#email_address').type('kelompok_8@gmail.com')
    cy.get('#password').type('Mail123456789')
    cy.get('#password-confirmation').type('Mail123456789')
    cy.get('button').contains('Create an Account').click()
    })
})
