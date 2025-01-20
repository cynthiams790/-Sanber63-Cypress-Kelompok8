import homePage from "../support/pageObjects/homePage"
import productDetailPage from "../support/pageObjects/productDetailPage"

describe('User can add product to cart from list', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('Add to cart without login', () => {
    cy.addRemoveHeroHoodie()
  })
  it('Add to cart with login', () => {
    cy.fixture("user.json").then((user) => {
      cy.loginEdit(user.email, user.password)
    })
    cy.addRemoveHeroHoodie()
  })
  it('Add to cart without choose options - Negative', () => {
    homePage.addheroHoodie()
    productDetailPage.verifyWarningMessage()
    productDetailPage.clickHomePageNavigation()
  })
})