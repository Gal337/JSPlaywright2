import { test, expect } from '@playwright/test'

test.describe.only("Visual Regression Testing example", () => {
  test("Full Page Snapshot", async ({page}) => {
    await page.goto("https://www.example.com");
    expect(await page.screenshot()).toMatchSnapshot("homepage.png");
  });

})
