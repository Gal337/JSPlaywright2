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

Then("I wait for 3 seconds", async function () {
  await loginPage.pause();
});

When(/^I fill the login form with "([^"]*)" and "([^"]*)"$/, async function (username, password) {
  await loginPage.submitLoginWithParameters(username, password);
});
