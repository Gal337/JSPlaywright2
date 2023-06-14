import {test, expect} from '@playwright/test'
import { HomePage } from '../../PageObjects/HomePage'
import { LoginPage } from '../../PageObjects/LoginPage'

test.describe.only("Filter Transactions", () => {
  let homePage;
  let loginPage;

  test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    await homePage.goTo();
    await homePage.clickOnSignIn();
    await loginPage.login("username", "password");
  });

  test("Verify the results for each account", async ({page}) => {
    await page.click("#onlineBankingMenu");
    await page.click("#account_activity_link");
    await page.selectOption("#aa_accountId", "2");

    const checkingAccount = await page.locator("#all_transactions_for_account tbody tr");
    await expect(checkingAccount).toHaveCount(3);
    await page.selectOption("#aa_accountId", "4");

    const loanAccount = await page.locator("#all_transactions_for_account tbody tr");
    await expect(loanAccount).toHaveCount(2);

    await page.selectOption("#aa_accountId", "6");
    
    const noResults = await page.locator(".well");
    await expect(noResults).toBeVisible();
  });

});
