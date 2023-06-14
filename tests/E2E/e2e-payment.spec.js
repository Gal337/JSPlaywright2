import {test, expect} from '@playwright/test'
import { HomePage } from '../../PageObjects/HomePage'
import { LoginPage } from '../../PageObjects/LoginPage'

test.describe.only("New Payment", () => {
  let homePage;
  let loginPage;
  
  test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    await homePage.goTo();
    await homePage.clickOnSignIn();
    await loginPage.login("username", "password");
    await homePage.clickOnBankingMenu();
  });

  test("Should send new payment", async ({page}) => {
    await page.click("#pay_bills_link");
    await page.selectOption("#sp_payee", "apple");
    await page.click("#sp_get_payee_details");
    await page.waitForSelector("#sp_payee_details");
    await page.selectOption("#sp_account", "6");
    await page.type("#sp_amount", "4400");
    await page.type("#sp_date", "2023-06-23");
    await page.type("#sp_description", "Enjoy your day!");
    await page.click("#pay_saved_payees");

    const message = await page.locator("#alert_content > span");
    await expect(message).toBeVisible();
    await expect(message).toContainText("The payment was successfully submitted");
  });
});
