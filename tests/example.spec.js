const {test, expect} = require('@playwright/test');

/* test("Selectors", async ({page}) => {
  //text
  await page.click("text=value of selector");
  //CSS
  await page.click("button");
  await page.click("#id");
  await page.click(".class");
  //Only visible CSS
  await page.click(".submit-button:visible");
  //Combinations
  await page.click("#username .first");
  //Xpath
  await page.click("//button");
}); */

test("Simple basic test", async ({page}) => {
  await page.goto("https://www.example.com");
  const pageTitle = await page.locator("h1");
  await expect(pageTitle).toContainText("Example Domain");
  console.log(pageTitle);
});

test("Clicking on web elements", async ({page}) => {
  await page.goto("https://zero.webappsecurity.com/index.html");
  await page.click("#signin_button");
  await page.click("text=Sign in");

  const errorMessage = await page.locator(".alet-error");
  await expect(errorMessage).toContainText("Login and/or password are wrong.");
});

test("Working with inputs", async ({page}) => {
  await page.goto("https://zero.webappsecurity.com/index.html");
  await page.click("#signin_button");
  
  await page.type("#user_login", "some username");
  await page.type("#user_password", "some password");
  await page.click("text=Sign in");

  const errorMessage = await page.locator(".alet-error");
  await expect(errorMessage).toContainText("Login and/or password are wrong.");
});
