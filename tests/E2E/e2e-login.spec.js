const { test, expect } = require('@playwright/test');

test.describe("Login / Logout Flow", () => {
  //Before hook - to reduce code duplication
  test.beforeEach(async ({page}) => {
    /*URL in the course: https://zero.webappsecurity.com/*/
    /*Below URL is used for replacement, in case above URL is not working from specific locations*/
    await page.goto("https://www.saucedemo.com/");
  });
  //Negative scenario
  test("Negative scenario for login", async ({page}) => {
    await page.type("#user-name", "invalid username");
    await page.type("#password", "invalid password");
    await page.click("#login-button");

    const errorMessage = await page.locator(".error-message-container");
    await expect(errorMessage).toContainText("Epic sadface: Username and password do not match any user in this service");
  });
  //Positive scenario + logout
  test("Positive scenario for login + logout", async ({page}) =>{
    await page.type("#user-name", "standard_user");
    await page.type("#password", "secret_sauce");
    await page.click("#login-button");
    
    const menuButton = await page.locator("#react-burger-menu-btn");
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await page.click("#logout_sidebar_link");
    await expect(page).toHaveURL("https://www.saucedemo.com/");
  });

});
