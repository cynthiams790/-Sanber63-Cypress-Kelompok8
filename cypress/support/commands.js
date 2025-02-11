import homePage from "./pageObjects/homePage";
import productDetailPage from "./pageObjects/productDetailPage";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('loginEdit', (email, password) => {
  cy.get('.panel > .header > .authorization-link > a').click();
  cy.get('#email').type(email);
  cy.get('#pass').type(password);
  cy.get('#send2').click();
});

Cypress.Commands.add('verifyText', (locator, correctText) => {
  cy.get(locator).should('have.text', correctText)
});

Cypress.Commands.add('verifyContain', (locator, correctText) => {
  cy.get(locator).should('contain', correctText)
});

Cypress.Commands.add('addRemoveHeroHoodie', () => {
  homePage.clickheroHoodieXS()
      homePage.clickheroHoodieGray()
      homePage.addheroHoodie()
      homePage.verifyCartCounterNumber()
      homePage.verifySuccessMessage()
      homePage.verifyItemCountInCart()
      homePage.verifyCartSubtotal()
      homePage.verifyItemName()
      homePage.clickDetails()
      homePage.verifyItemSize()
      homePage.verifyItemColor()
      homePage.verifyItemPrice()
      homePage.removeProduct()
      homePage.verifyCartCounterNotVisible()
      homePage.showCart()
      homePage.verifyNoItemOnCartMessage()
});

Cypress.Commands.add('buttonSave', () => {
  cy.get('button[title="Save"]').click();
});

Cypress.Commands.add('clickButtonSave', () => {
  cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
});

Cypress.Commands.add('verifySuccess', (message) => {
  cy.get('[data-ui-id="message-success"]').should('contain.text', message);
});

Cypress.Commands.add('ErrorFirstName', (message) => {
  cy.get('#firstname-error').should('be.visible').and('contain.text', message);
});

Cypress.Commands.add('ErrorLastName', (message) => {
  cy.get('#lastname-error').should('be.visible').and('contain.text', message);
});

Cypress.Commands.add('EmailError', (message) => {
  cy.get('#email-error').should('be.visible').and('contain.text', message);
});

Cypress.Commands.add('Error', (message) => {
  cy.get('[data-ui-id="message-error"]').should('contain.text', message);
});

Cypress.Commands.add('ErrorPassword', (message) => {
  cy.get('#current-password-error').should('be.visible').and('contain.text', message);
});

Cypress.Commands.add('PasswordError', (message) => {
  cy.get('#password-error').should('be.visible').and('contain.text', message);
});

Cypress.Commands.add('PasswordErrorConfirmation', (message) => {
  cy.get('#password-confirmation-error').should('be.visible').and('contain.text', message);
});

Cypress.Commands.add('ErrorTelephone', (message) => {
  cy.get('#telephone-error').should('be.visible').and('contain.text', message);
});

Cypress.Commands.add('ErrorStreet1', (message) => {
  cy.get('#street_1-error').should('be.visible').and('contain.text', message);
});

Cypress.Commands.add('ErrorCity', (message) => {
  cy.get('#city-error').should('be.visible').and('contain.text', message);
});

Cypress.Commands.add('ErrorZip', (message) => {
  cy.get('#zip-error').should('be.visible').and('contain.text', message);
});

Cypress.Commands.add('ErrorCountry', (message) => {
  cy.get('#country-error').should('be.visible').and('contain.text', message);
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })