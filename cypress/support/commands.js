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