import { expect } from '@playwright/test'

export class HomePage {
  constructor(page){
    this.page = page;
    this.searchBox = page.locator("#searchTerm");
    this.signInButton = page.locator("#signin_button");
  }

  async goTo() {
    await this.page.goto("http://zero.webappsecurity.com/");
  }

  async clickOnSignIn() {
    await this.signInButton.click();
  }

  async searchFor(phrase) {
    await this.searchBox.type(phrase);
    await this.page.keyboard.press("Enter");
  }

}

