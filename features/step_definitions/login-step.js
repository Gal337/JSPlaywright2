const { Given, When, Then, defineStep } = require('@cucumber/cucumber');
const { test, expect } = require('@playwright/test');

Given("I visit a login page", async function () {
  await page.goto("https://www.saucedemo.com/");
});
