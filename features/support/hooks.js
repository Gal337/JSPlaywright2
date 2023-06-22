const playwright = require('@playwright/test');
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');

BeforeAll(async function () {
  console.log("Launch Browser");
  this.browser = await playwright.chromium.launch({headless: false});
  const context = await browser.newContext();
  this.page = await context.newPage();
});

AfterAll(async function () {
  console.log("Close Browser");
  const browser = await playwright.chromium.launch({headless: false});
  await this.browser.close();
});

Before(async function () {
  console.log("Create new context and page");
});

After(async function () {
  console.log("Close context and page");
  await browser.close();
});

