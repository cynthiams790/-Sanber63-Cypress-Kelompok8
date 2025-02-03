export class checkout {

    Product = ':nth-child(3) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo'
    SizeProduct = '#option-label-size-143-item-169'
    ColorProduct = '#option-label-color-93-item-52'
    AddToCartButton = '#product-addtocart-button'
    CheckoutButton = '#top-cart-btn-checkout'
    CounterCart = '.counter-number'
    CartButton = '.showcart'
    CartProduct = '#mini-cart > .item > :nth-child(1) > .product-item-details > .product-item-name > a'

    selectProduct()
    {
        cy.get(this.Product).click()
    }

    selectSize()
    {
        cy.get(this.SizeProduct).click()
    }

    selectColor()
    {
        cy.get(this.ColorProduct).click()
    }

    addToCart()
    {
        cy.get(this.AddToCartButton).click()
    }

    validateAddToChart()
    {
        // cy.get('.message-success > div').should('be.visible')
        cy.get('.message-success > div').should('contain.text','You added Argus All-Weather Tank to your shopping cart.')
        cy.get(this.CounterCart).should('be.visible')
    }

    wait()
    {
        cy.wait(2000)
    }

    toCart()
    {
        cy.get(this.CartButton).click()
    }

    verifyProduct()
    {
        cy.get('#top-cart-btn-checkout').should('be.visible')
        // cy.get(this.CartProduct).should('have.text','Argus All-Weather Tank')
    }

    checkout()
    {
        cy.get(this.CheckoutButton).click()
    }

}

module.exports = new checkout()
