function generateRandomEmail() {
    const timestamp = Date.now();
    return `user${timestamp}@mailtest.com`;
  }
describe('login', () => {
    beforeEach(() => {
        cy.visit('')
    })
    it('The account sign-in was incorrect' , () => {
    const randomEmail = generateRandomEmail();
    cy.log(randomEmail);

    cy.get('a').contains('Sign In').click()
    cy.get('input[type="email"]').type(randomEmail);
    cy.get('#pass').type('Yahooo123')
    cy.get('button').contains('Sign In').click()
    cy.wait(5000);
    })

    it('Login Successfully', () => {
        cy.visit('')
        cy.get('a').contains('Sign In').click()
        cy.get('#email').type('kelompok_8@gmail.com')
        cy.get('#pass').type('Sanbercodekelompok8')
        cy.get('button').contains('Sign In').click()
      })
})