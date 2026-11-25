class LoginPage {

    selectorList(){
        const selectors = {
            usernameField: '[data-test="username"]',
            passwordField: '[data-test="password"]',
            loginButton: '[data-test="login-button"]',
            errorMessage: '[data-test="error"]'
        }
        return selectors
    }

    accessLoginPage(){
        cy.visit("/");
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()

    }

    checkLoginSuccess(){
        cy.url().should('include', '/inventory.html')
    }

    checkLoginFail(){
          cy.get(this.selectorList().errorMessage).should('contain', 'Epic sadface: Sorry, this user has been locked out.')
    }
}

export default LoginPage;