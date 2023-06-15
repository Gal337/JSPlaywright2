import { Page } from '@playwright/test'

export class AbstractPage {
  constructor(page) {
    this.page = page;
  }

  async wait(time) {
    await this.page.waitForTimeout(time);
  }
}
