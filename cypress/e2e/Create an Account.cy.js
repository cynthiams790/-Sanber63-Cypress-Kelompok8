describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('a').contains('Create an Account').click()
    cy.get('#firstname').type ('sanbercode')
    cy.get('#lastname').type ('kelompok8')
    cy.get('#email_address').type ('kelompok_8@gmail.com')
    cy.get('#password').type ('Sanbercodekelompok8')
    cy.get('#password-confirmation').type ('Sanbercodekelompok8')
    cy.get('button').contains('Create an Account').click()

    // Sign In
    cy.get('a').contains('Sign In').click()
    cy.get('#email').type('kelompok_8@gmail.com')
    cy.get('#pass').type('Sanbercodekelompok8');
    cy.get('button').contains('Sign In').click()

  })
})