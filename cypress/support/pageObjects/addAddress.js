class addAddress {
    DropDown = ':nth-child(2) > .customer-welcome > .customer-name > .action'
    MyAccount = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'
    AddressBook = '.items :nth-child(6) > a'
    AddAddressBook = '.column > .actions-toolbar > div.primary > .action > span'
    Company = '#company'
    Street = '#street_1'
    City = '#city'
    Region = '#region_id'
    Postcode = '#zip'
    Telephone = '#telephone'
    Country = '#country'
    Save = '#form-validate > .actions-toolbar > div.primary > .action'
    Error = '#street_1-error'
    Errorregion = '#region_id-error'

    clickDropDown() {
        cy.get(this.DropDown).click()
    }
    clickMyAccount() {
        cy.get(this.MyAccount).click()
    }
    clickAddressBook() {
        cy.get(this.AddressBook).click()
    }
    clickAddAddressBook() {
        cy.get(this.AddAddressBook).click()
    }
    fillAllFields() {
        cy.get(this.Company).type('Sanbercode');
        cy.get(this.Street).type('ABC');
        cy.get(this.City).type('Padang');
        cy.get(this.Region).select('Arizona');
        cy.get(this.Postcode).type('11111');
        cy.get(this.Telephone).type('081122334455');
    }
    fillRequiredFields() {
        cy.get(this.Street).type('ABC');
        cy.get(this.City).type('Padang');
        cy.get(this.Region).select('Arizona');
        cy.get(this.Postcode).type('11111');
        cy.get(this.Telephone).type('081122334455');
    }
    saveAddress() {
        cy.get(this.Save).click()
    }
    verifyAddressSaved() {
        cy.contains('You saved the address.').should('be.visible');
    }
    verifyErrorMessage() {
        cy.get(this.Error).should('have.text', 'This is a required field.');
    }
    notSelectedTheRegion() {
        cy.get(this.Street).type('ABC');
        cy.get(this.City).type('Padang');
        cy.get(this.Postcode).type('11111');
        cy.get(this.Telephone).type('081122334455');
    }
    verifyError() {
        cy.get(this.Errorregion).should('have.text', 'Please select an option.')
    }

}

module.exports = new addAddress()