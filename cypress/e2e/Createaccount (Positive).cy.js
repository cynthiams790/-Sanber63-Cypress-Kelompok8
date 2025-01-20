function generateRandomEmail() {
    const timestamp = Date.now();
    return `test${timestamp}@mail.com`;
  }

  function generateRandomUsername(prefix = 'user', length = 3) {
    const randomString = Math.random().toString(36).substring(2, length + 0);
    return `${prefix}_${randomString}`;
  }
describe('Create an Account', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    })
    it('Create account succesfully' , () => {
        const randomEmail = generateRandomEmail();
        cy.log(randomEmail);
        const randomUsername = generateRandomUsername();
        cy.log(randomUsername);
    
        // execute
        cy.get('#firstname').type(randomUsername);
        cy.get('#lastname').type(randomUsername);
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type('Testpassword123')
        cy.get('#password-confirmation').type('Testpassword123')
        cy.get('button').contains('Create an Account').click()
        cy.wait(3000);
        
    })
})