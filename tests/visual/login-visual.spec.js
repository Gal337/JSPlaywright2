import { test,expect } from '@playwright/test'
import { HomePage } from '../../PageObjects/HomePage'
import { LoginPage } from '../../PageObjects/LoginPage'

test.describe.only("Login Page Visual Tests", () => {
let homePage;
let loginPage;

  test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    await homePage.goTo();
    await homePage.clickOnSignIn();
  });

  test("Login Form", async ({page}) => {
    await loginPage.snapshotLoginForm();
  });

  //Below test is failing because I am using function goBack in LoginPage class
  test("Login Error Message", async ({page}) => {
    await loginPage.login("fail", "invalid pass");
    await loginPage.snapshotErrorMessage();
  });

})

