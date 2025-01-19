class homePage {
    heroHoodieXS = '.swatch-opt-158 > .size > .swatch-attribute-options > #option-label-size-143-item-166'
    heroHoodieGray = '.swatch-opt-158 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-52'
    heroHoodieAddToCart = 'body > div:nth-child(5) > main:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > ol:nth-child(1) > li:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > button:nth-child(4) > span:nth-child(1)'
    cartCounter = '.counter-number'
    successMessage = '.message-success'
    itemInCart = '.count'
    cartSubtotal = '.amount > .price-wrapper > .price'
    itemName = '.item > :nth-child(1) > .product-item-details > .product-item-name > a'
    seeDetails = '.toggle > span'
    itemSize = '.product > :nth-child(2) > span'
    itemColor = '.product > :nth-child(4) > span'
    itemPrice = '.minicart-price > .price'

    clickheroHoodieXS(){
        cy.get(this.heroHoodieXS).click()
    }

    clickheroHoodieGray(){
        cy.get(this.heroHoodieGray).click()
    }

    addheroHoodie(){
        cy.get(this.heroHoodieAddToCart).invoke('show').click({force: true})
    }

    verifyCartCounter(){
        cy.get(this.cartCounter).should('have.text', 1)
    }

    verifySuccessMessage(){
        cy.get(this.successMessage).should('contain', 'You added Hero Hoodie to your shopping cart.')
    }

    verifyItemCountInCart(){
        cy.get(this.itemInCart).should('have.text', 1)
    }

    verifyCartSubtotal(){
        cy.get(this.cartSubtotal).should('have.text', '$54.00')
    }

    verifyItemName(){
        cy.get(this.itemName).should('have.text', 'Hero Hoodie')
    }

    clickDetails(){
        cy.get(this.seeDetails).click({force: true})
    }

    verifyItemSize(){
        cy.get(this.itemSize).should('have.text', 'XS')
    }

    verifyItemColor(){
        cy.get(this.itemColor).should('have.text', 'Gray')
    }

    verifyItemPrice(){
        cy.get(this.itemPrice).should('have.text', '$54.00')
    }
}
module.exports = new homePage()