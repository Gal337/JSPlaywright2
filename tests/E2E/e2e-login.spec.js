import { test, expect } from '@playwright/test'
import { LoginPage } from '../../PageObjects/LoginPage';

test.describe.parallel.only("Login / Logout Flow", () => {
  let loginPage;
  //Before hook - to reduce code duplication
  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    await loginPage.goTo();
  });
  //Negative scenario
  test("Negative scenario for login", async ({page}) => {
    await page.click("#signin_button");
    await loginPage.login("invalid username","invalid password");
    await loginPage.assertErrorMsg();
  });
  //Positive scenario + logout
  test("Positive scenario for login + logout", async ({page}) =>{
    await page.click("#signin_button");
    /* await page.type("#user_login", "username");
    await page.type("#user_password", "password");
    await page.click("text=Sign in"); */
    await loginPage.login("username", "password");

    await page.goBack();
    await page.click("#onlineBankingMenu");
    
    const accountSummaryTab = await page.locator("#account_summary_link");
    await expect(accountSummaryTab).toBeVisible();
    
    await page.goto("http://zero.webappsecurity.com/logout.html")
    await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html");
  });

});
