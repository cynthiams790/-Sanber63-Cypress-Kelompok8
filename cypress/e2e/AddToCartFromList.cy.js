import homePage from "../support/pageObjects/homePage"
import productDetailPage from "../support/pageObjects/productDetailPage"

describe('User can add product to cart from list', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('Add to cart without login', () => {
    homePage.clickheroHoodieXS()
    homePage.clickheroHoodieGray()
    homePage.addheroHoodie()
    homePage.verifyCartCounter()
    homePage.verifySuccessMessage()
    homePage.verifyItemCountInCart()
    homePage.verifyCartSubtotal()
    homePage.verifyItemName()
    homePage.clickDetails()
    homePage.verifyItemSize()
    homePage.verifyItemColor()
    homePage.verifyItemPrice()
  })
  it('Add to cart with login', () => {
    cy.fixture("user.json").then((user) => {
      cy.loginEdit(user.email, user.password)
    })
    homePage.clickheroHoodieXS()
    homePage.clickheroHoodieGray()
    homePage.addheroHoodie()
    homePage.verifyCartCounter()
    homePage.verifySuccessMessage()
    homePage.verifyItemCountInCart()
    homePage.verifyCartSubtotal()
    homePage.verifyItemName()
    homePage.clickDetails()
    homePage.verifyItemSize()
    homePage.verifyItemColor()
    homePage.verifyItemPrice()
  })
  it('Add to cart without choose options - Negative', () => {
    homePage.addheroHoodie()
    productDetailPage.verifyWarningMessage()
    productDetailPage.clickHomePageNavigation()
  })
})