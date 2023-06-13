import { expect, Locator, Page } from '@playwright/test'

export class LoginPage {
  // Initializing selectors using constructor
  constructor(page)
  {
    this.page = page;
    this.userName = page.locator("#user_login");
    this.password = page.locator("#user_password");
    this.signInButton = page.locator("#signin_button");
    this.errorMessage = page.locator(".alert-error");
  }
  
  // Defining login page methods
  async goTo() {
    await this.page.goto("http://zero.webappsecurity.com/");
  }

}

/* class LoginPage {
  
  async goTo()
  {
    await this.page.goto("https://rahulshettyacademy.com/client/");
  }

  async validLogin(username, password)
  {
    await this.userName.type(username);
    await this.password.type("Abc!2345");
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');
  }
  
}

module.exports = {LoginPage}; */
