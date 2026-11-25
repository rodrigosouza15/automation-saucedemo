import userData from "../fixtures/userData.json"
import Loginpage from "../pages/loginPage"
import ItemPage from "../pages/itemPage"
import CheckoutPage from "../pages/checkoutPage"

const loginPage = new Loginpage()
const itemPage = new ItemPage()
const checkoutPage = new CheckoutPage()

describe('buy item', () => {
    beforeEach(() => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.login.loginSuccess.username, userData.login.loginSuccess.password)
    })

    it('Add item to cart', () => {
        itemPage.addBackpackToCart()
        itemPage.validateCartBadgeCount('1')
        itemPage.addBikeToCart()
        itemPage.validateCartBadgeCount('2')
    })

    it.only('Checkout', () => {
        itemPage.addBackpackToCart()
        itemPage.addBikeToCart()
        checkoutPage.accessCheckoutPage()
        checkoutPage.fillCheckoutForm()
        checkoutPage.validateCheckoutSuccess()
    })
})