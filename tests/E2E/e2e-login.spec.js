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
  });
  //Positive scenario + logout

});
