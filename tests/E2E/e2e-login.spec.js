import { test, expect, page } from '@playwright/test'
import { LoginPage } from '../../PageObjects/LoginPage'
import { HomePage } from '../../PageObjects/HomePage'

test.describe.parallel("Login / Logout Flow", () => {
  let loginPage;
  let homePage;
  //Before hook - to reduce code duplication
  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await homePage.goTo();
  });
  //Negative scenario
  test("Negative scenario for login", async ({page}) => {
    await homePage.clickOnSignIn();
    await loginPage.login("invalid username","invalid password");
    await loginPage.assertErrorMsg();
  });
  //Positive scenario + logout
  test("Positive scenario for login + logout", async ({page}) =>{
    await homePage.clickOnSignIn();
    await loginPage.login("username", "password");

    await page.goBack();
    await page.click("#onlineBankingMenu");
    
    const accountSummaryTab = await page.locator("#account_summary_link");
    await expect(accountSummaryTab).toBeVisible();
    
    await page.goto("http://zero.webappsecurity.com/logout.html")
    await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html");
  });

});
