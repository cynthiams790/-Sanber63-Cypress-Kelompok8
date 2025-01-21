import addAddress from "../support/pageObjects/addAddress";

describe('My Account > Add Address', () => {
    beforeEach(() => {
        cy.visit('');
        cy.loginEdit('kelompok_8@gmail.com', 'Sanbercodekelompok8')

        addAddress.clickDropDown()
        addAddress.clickMyAccount()
        addAddress.clickAddressBook()
        addAddress.clickAddAddressBook()
    });

    it('fill all the fields - positive', () => {
        addAddress.fillAllFields()
        addAddress.saveAddress()
        addAddress.verifyAddressSaved()
    });

    it('fill all the required fields - positive', () => {
        addAddress.fillRequiredFields()
        addAddress.saveAddress()
        addAddress.verifyAddressSaved()
    });

    it('all the required fields are not filled - negative', () => {
        addAddress.saveAddress()
        addAddress.verifyErrorMessage()
    });

    it('not selected the country - negative', () => {
        addAddress.notSelectedTheRegion()
        addAddress.saveAddress()
        addAddress.verifyError()
    });
});  