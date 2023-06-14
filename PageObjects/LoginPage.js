import { expect } from '@playwright/test'

export class LoginPage {
  // Initializing selectors using constructor
  constructor(page)
  {
    this.page = page;
    this.userName = page.locator("#user_login");
    this.password = page.locator("#user_password");
    this.signInBtn = page.locator("text=Sign in");
    this.errorMessage = page.locator(".alert-error");
  }
  
  // Defining login page methods
  
  async login(username, password) {
    await this.userName.type(username);
    await this.password.type(password);
    await this.signInBtn.click();
    await this.page.goBack();
  }

  async assertErrorMsg() {
    await expect(this.errorMessage).toContainText("Login and/or password are wrong");
  }

}
