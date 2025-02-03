const { DropDown } = require("./addAddress")
export class shipping 
{
    fieldEmail = '#customer-email-fieldset > .required > .control > #customer-email'
    fieldFirstname = '[name="shippingAddress.firstname"]'
    fieldLastname = '[name="shippingAddress.lastname"]'
    fieldCompany = '[name="shippingAddress.company"]'
    fieldAddress1 = '[name="shippingAddress.street.0"]'
    fieldCity = '[name="shippingAddress.city"]'
    // dropdownProvince = '[name="shippingAddress.region_id"]'//hanya muncul saat memilih country "United Stated"
    dropdownProvince = '[name="region_id"]'
    fieldProvince = '[name="region"]'
    fieldZip = '[name="shippingAddress.postcode"]'
    dropDownCountry = '[name="country_id"]'
    fieldPhone = '[name="shippingAddress.telephone"]'
    shippingMethods = 'tbody > :nth-child(1) > :nth-child(1)'
    orderSummary = '.block > .title'
    orderSummaryProduct = '.product-item-name'
    validateErrorShipping = '.message > span'
    validateEmail = '#customer-email-error'
    validateData ='[data-bind="text: element.error"]'
    validateFirstname = '#error-WMEKY7K > span'
    validateLastname = '#error-HWJER8C > span'
    validateAddress1 = '#error-G5KRGSM > span'
    validateCity = '#error-QT84J5C'
    validateZip = '#error-II4KNNV > span'
    validatePhone = '#error-CUVT4DG'
    proceedToPayment = '.button'
    placeOrder = '.payment-method-content > :nth-child(4) > div.primary > .action'
    cartLabel = '.sub > .mark'
    shippingLabel = '.mark > .label'
    totalLabel = '.mark > strong'
    editBilling = '.billing-address-details > .action'
    billingsameshipping = '#billing-address-same-as-shipping-checkmo'
    discountButton = '#block-discount-heading'
    editShipping = '.ship-to > .shipping-information-title > .action'
    editShippingMethod = '.ship-via > .shipping-information-title > .action'
    discountCode = '#discount-code'
    applyDiscount = '#discount-form > .actions-toolbar > .primary > .action'
    thankYou = '.base'

    validateEmailNull()
    {
        cy.get(this.validateEmail).should('have.text','This is a required field.')
    }

    validateEmailFormat()
    {
        cy.get(this.validateEmail).should('contain.text','Please enter a valid email address')
    }

    validateDataNull()
    {
        cy.get(this.validateData).should('have.text', 'This is a required field.'.repeat(7))
    }

    validateShippingAddress()
    {
        cy.get(this.validateErrorShipping).should('have.text','The shipping method is missing. Select the shipping method and try again.')
    }

    verifyOrderSummary()
    {
        cy.get(this.orderSummary).click()
        cy.get(this.orderSummaryProduct).should('have.text','Argus All-Weather Tank')   
    }

    shippingInput()
    {
        cy.get(this.fieldEmail).type("admin@app.com")
        cy.get(this.fieldFirstname).type("firstname")
        cy.get(this.fieldLastname).type("lastname")
        cy.get(this.fieldCompany).type("company")
        cy.get(this.fieldAddress1).type("test")
        cy.get(this.fieldCity).type("City")
        cy.get(this.fieldZip).type("12345")
        cy.get(this.dropDownCountry).select('United States')
        cy.get(this.dropdownProvince).select('Arizona')
        cy.get(this.fieldPhone).type("081234567890")
        cy.get(this.shippingMethods).click()
     }

    shippingInputNotUS()
    {
        cy.get(this.fieldEmail).type("admin@app.com")
        cy.get(this.fieldFirstname).type("firstname")
        cy.get(this.fieldLastname).type("lastname")
        cy.get(this.fieldCompany).type("company")
        cy.get(this.fieldAddress1).type("test")
        cy.get(this.fieldCity).type("City")
        cy.get(this.fieldZip).type("12345")
        cy.get(this.dropDownCountry).select('Indonesia')
        cy.get(this.fieldProvince).type('DKI Jakarta')
        cy.get(this.fieldPhone).type("081234567890")
        cy.get(this.shippingMethods).click()
    }

    nextToPayment()
    {
        cy.get(this.proceedToPayment).click()
    }

    verifyBeforePayment()
    {
        // cy.get(this.cartLabel).should('containt.text','Cart Subtotal')
        // cy.get(this.shippingLabel).should('containt.text','Shipping')
        // cy.get(this.totalLabel).should('containt.text','Order Total')
        cy.get(this.placeOrder).should('be.visible')
    }

    payment()
    {
        cy.get(this.placeOrder).click()
    }

    verifyAfterPayment()
    {
        cy.get(this.thankYou).should('be.visible')
        cy.get(this.thankYou).should('have.text','Thank you for your purchase!')
    }

    editShippingAddress()
    {
        cy.get(this.editShipping).click()
        cy.get(this.fieldEmail).clear().type("admin@app.com")
        cy.get(this.fieldFirstname).clear().type("Admin")
        cy.get(this.fieldLastname).clear().type("Admin")
        cy.get(this.fieldCompany).clear().type("company")
        cy.get(this.fieldAddress1).clear().type("test")
        cy.get(this.fieldCity).clear().type("Bogor")
        // cy.get(this.fieldZip).clear().type("12345")
        // cy.get(this.dropDownCountry).select('Indonesia')
        // cy.get(this.fieldProvince).clear().type('Jawa Barat')
        cy.get(this.fieldPhone).clear().type("081234567890")

    }

    shippingInputNoValidEmail()
    {
        cy.get(this.fieldEmail).type("admin")
        cy.get(this.fieldFirstname).type("firstname")
        cy.get(this.fieldLastname).type("lastname")
        cy.get(this.fieldCompany).type("company")
        cy.get(this.fieldAddress1).type("test")
        cy.get(this.fieldCity).type("City")
        cy.get(this.fieldZip).type("12345")
        cy.get(this.dropDownCountry).select('Indonesia')
        cy.get(this.fieldProvince).type('DKI Jakarta')
        cy.get(this.fieldPhone).type("081234567890")
        cy.get(this.shippingMethods).click()
    }
}

module.exports = new shipping()
