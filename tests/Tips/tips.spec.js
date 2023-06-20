import { test, expect } from '@playwright/test'

test.describe.only("Tips & Tricks Section", () => {
  test("TestInfo Object", async ({page}, testInfo) => {
    await page.goto("http://zero.webappsecurity.com/");
    console.log(testInfo);
  });

  test("Test Skip Browser", async ({page, browserName}) => {
    test.skip(browserName === "chromium", "Feature not ready in Chrome browser");
    await page.goto("http://zero.webappsecurity.com/");
  });

  test("Test FixMe Annotation", async ({page, browserName}) => {
    test.fixme(browserName === "chromium", "Test is not stable, needs revision");
    await page.goto("http://zero.webappsecurity.com/");
  });

  const people = ["Mike", "Judy", "Elon", "Galadriel"];
  for(const name of people) {
    test.only(`Running test for ${name}`, async ({page}) => {
      await page.goto("http://zero.webappsecurity.com/index.html");
      await page.type("#searchTerm", `${name}`);
      await page.waitForTimeout(3000);
    });
  }
  
})
