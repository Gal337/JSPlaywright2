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
})
