import { test, expect } from '@playwright/test'

test.describe("Tips & Tricks Section", () => {
  test("TestInfo Object", async ({page}, testInfo) => {
    await page.goto("https://www.example.com");
    console.log(testInfo);
  });
})
