class ItemPage {
    selectorList() {
        const selectors = {
            addBackpackButton: '[data-test="add-to-cart-sauce-labs-backpack"]',
            cartBadge: '[data-test="shopping-cart-badge"]',
            addBikeButton: '[data-test="add-to-cart-sauce-labs-bike-light"]'
        }
        return selectors
    }

    addBackpackToCart() {
        cy.get(this.selectorList().addBackpackButton).click()
    }

    addBikeToCart() {
        cy.get(this.selectorList().addBikeButton).click()
    }

    validateCartBadgeCount(quantity) {
        cy.get(this.selectorList().cartBadge).should('contain', quantity)
    }
}

export default ItemPage;