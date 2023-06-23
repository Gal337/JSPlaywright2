/*This POM file is used for Cucumber framework*/

class LoginPage {
  async navigateToLogin() {
    await page.goto("https://www.saucedemo.com/");
  }

  async submitLoginForm() {
    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");
    await page.click("#login-button");
  }

  async assertUserIsLoggedIn() {
    await page.waitForSelector(".inventory_list");
  }

}

module.exports = { LoginPage }