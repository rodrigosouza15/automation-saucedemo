import { faker } from '@faker-js/faker'

class CheckoutPage {
    selectorList() {
        const selectors = {
            cartButton: '[data-test="shopping-cart-link"]',
            checkoutButton: '[data-test="checkout"]',
            firstNameField: '[data-test="firstName"]',
            lastNameField: '[data-test="lastName"]',
            postalCodeField: '[data-test="postalCode"]',
            continueButton: '[data-test="continue"]',
            finishButton: '[data-test="finish"]',
            checkoutCompleteMessage: '[data-test="complete-header"]'
        }
        return selectors
    }

    accessCheckoutPage() {
        cy.get(this.selectorList().cartButton).click()
        cy.get(this.selectorList().checkoutButton).click()
    }

    fillCheckoutForm(
        firstName = faker.person.firstName(),
        lastName = faker.person.lastName(),
        postalCode = faker.location.zipCode()
    ) {
        cy.get(this.selectorList().firstNameField).type(firstName)
        cy.get(this.selectorList().lastNameField).type(lastName)
        cy.get(this.selectorList().postalCodeField).type(postalCode)
        cy.get(this.selectorList().continueButton).click()
        cy.get(this.selectorList().finishButton).click()
    }

    validateCheckoutSuccess() {
        cy.get(this.selectorList().checkoutCompleteMessage).should('contain', 'Thank you for your order!')
    }
}

export default CheckoutPage;