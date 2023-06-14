import { expect } from '@playwright/test'

export class HomePage {
  constructor(page){
    this.page = page;
    this.signInButton = page.locator("#signin_button");
  }

  async goTo() {
    await this.page.goto("http://zero.webappsecurity.com/");
  }

  async clickOnSignIn() {
    await this.signInButton.click();
  }

}

