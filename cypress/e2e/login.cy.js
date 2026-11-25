import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"



const loginPage = new LoginPage()

describe('Login', () => {
  beforeEach(() => {
    loginPage.accessLoginPage()
  })
  
  it('Login success', () => {
    loginPage.loginWithAnyUser(userData.login.loginSuccess.username, userData.login.loginSuccess.password)
    loginPage.checkLoginSuccess()
  })

  it('Login fail', () => {
    loginPage.loginWithAnyUser(userData.login.loginFail.username, userData.login.loginFail.password)
    loginPage.checkLoginFail()
  })
}) 