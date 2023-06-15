import { expect } from '@playwright/test'

export class PaymentPage {
  constructor(page) {
    this.page = page;
    this.payeeSelectbox = page.locator("#sp_payee");
    this.payeeDetailButton = page.locator("#sp_get_payee_details");
    this.payeeDetail = page.locator("#sp_payee_details");
    this.accountSelectbox = page.locator("#sp_account");
    this.amountInput = page.locator("#sp_amount");
    this.dateInput = page.locator("#sp_date");
    this.descriptionInput = page.locator("#sp_description");
    this.submitPaymentButton = page.locator("#pay_saved_payees");
    this.message = page.locator("#alert_content > span");
  }

  async createPayment() {
    await this.payeeSelectbox.selectOption("apple");
    await this.payeeDetailButton.click();
    await expect(this.payeeDetail).toBeVisible();
    await this.accountSelectbox.selectOption("6");
    await this.amountInput.type("5000");
    await this.dateInput.type("2023-06-23");
    await this.descriptionInput.type("Some message");
    await this.submitPaymentButton.click();
  }
  
  async assertSuccessMessage() {
    await expect(this.message).toBeVisible();
    await expect(this.message).toContainText("The payment was successfully submitted");
  }

}

