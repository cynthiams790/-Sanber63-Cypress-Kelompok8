import homePage from "../support/pageObjects/homePage"
import productDetailPage from "../support/pageObjects/productDetailPage"

describe('User can add product to cart from list', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('Plus 1 to current amount on cart', () => {
    homePage.clickheroHoodieXS()
    homePage.clickheroHoodieGray()
    homePage.addheroHoodie()
    homePage.verifyCartCounter()
    homePage.verifySuccessMessage()
  })
  it('Display correct details on cart', () => {
    homePage.clickheroHoodieXS()
    homePage.clickheroHoodieGray()
    homePage.addheroHoodie()
    homePage.verifyItemCountInCart()
    homePage.verifyCartSubtotal()
    homePage.verifyItemName()
    homePage.clickDetails()
    homePage.verifyItemSize()
    homePage.verifyItemColor()
    homePage.verifyItemPrice()
  })
  it('Display message on detail page if click add to cart without choose options', () => {
    homePage.addheroHoodie()
    productDetailPage.verifyWarningMessage()
    productDetailPage.clickHomePageNavigation()
  })
})