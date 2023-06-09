import { expect } from '@playwright/test'
import { AbstractPage } from '../PageObjects/AbstractPage';

export class LoginPage extends AbstractPage {
  // Initializing selectors using constructor
  constructor(page)
  {
    //this.page = page;
    super(page);
    this.userName = page.locator("#user_login");
    this.password = page.locator("#user_password");
    this.signInBtn = page.locator("text=Sign in");
    this.errorMessage = page.locator(".alert-error");
    this.loginForm = page.locator("#login_form");
  }
  
  // Defining login page methods
  
  async login(username, password) {
    await this.userName.type(username);
    await this.password.type(password);
    await this.signInBtn.click();
    //await this.page.goBack();
  }

  async assertErrorMsg() {
    await expect(this.errorMessage).toContainText("Login and/or password are wrong");
  }

  async snapshotLoginForm() {
    await expect(await this.loginForm.screenshot()).toMatchSnapshot("login_form.png");
  }

  async snapshotErrorMessage() {
    await expect(await this.errorMessage.screenshot()).toMatchSnapshot("login_error.png");
  }

}
