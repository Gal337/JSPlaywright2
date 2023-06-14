import {test, expect} from '@playwright/test'
import { HomePage } from '../../PageObjects/HomePage'
import { LoginPage } from '../../PageObjects/LoginPage'

test.describe("Currency Exchange", () => {
  let homePage;
  let loginPage;

  test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    homePage.goTo();
    homePage.clickOnSignIn();
    loginPage.login("username", "password");
    homePage.clickOnBankingMenu();
  });

  test("Purchasing foreign currency", async ({page}) => {
    await page.click("#pay_bills_link");
    await page.click("text=Purchase Foreign Currency");
    await page.selectOption("#pc_currency","EUR");

    const checkRate = await page.locator("#sp_sell_rate");
    await expect(checkRate).toContainText("1 euro (EUR)");

    await page.type("#pc_amount", "3021");
    await page.click("#pc_inDollars_true");
    await page.click("#pc_calculate_costs");

    const conversionAmount = await page.locator("#pc_conversion_amount");
    await expect(conversionAmount).toContainText("U.S. dollar (USD)");

    await page.click("#purchase_cash");

    const confirmExchange = await page.locator("#alert_content");
    await expect(confirmExchange).toBeVisible();
    await expect(confirmExchange).toContainText("Foreign currency cash was successfully purchased.");
  });
});
