const { Given, When, Then, defineStep } = require('@cucumber/cucumber');
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../PageObjects/login-page');

const loginPage = new LoginPage();


Given("I visit a login page", async function () {
  //await page.goto("https://www.saucedemo.com/");
  await loginPage.navigateToLogin();
});

When("I fill login form with valid credentials", async function () {
  //await page.fill("#user-name", "standard_user");
  //await page.fill("#password", "secret_sauce");
  //await page.click("#login-button");
  await loginPage.submitLoginForm();
});

Then("I should see the homepage", async function () {
  //await page.waitForSelector(".inventory_list");
  await loginPage.assertUserIsLoggedIn();
});
