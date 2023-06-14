import { test, expect } from '@playwright/test'
import { HomePage } from '../../PageObjects/HomePage'
import { LoginPage } from '../../PageObjects/LoginPage'

test.describe("Transfer Funds & Make Payments", () => {
  let homePage;
  let loginPage;

  test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    await homePage.goTo();
    await homePage.clickOnSignIn();
    await loginPage.login("username", "password");
  });

  test("Transfer funds", async ({page}) =>{
    await page.click("#transfer_funds_link");
    await page.selectOption("#tf_fromAccountId", "4");
    await page.selectOption("#tf_toAccountId", "3");
    await page.type("#tf_amount", "500");
    await page.type("#tf_description", "Test message");
    await page.click("#btn_submit");

    const boardHeader = await page.locator("h2.board-header");
    await expect(boardHeader).toContainText("Verify");
    await page.click("#btn_submit");

    const message = await page.locator(".alert-success");
    await expect(message).toContainText("You successfully submitted your transaction");
  });

});
