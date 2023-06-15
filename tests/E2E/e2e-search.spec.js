import { test, expect } from '@playwright/test'
import { HomePage } from '../../PageObjects/HomePage'

test.describe("Search Results", async () => {
  test("Should find search results", async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.goTo();
    await homePage.searchFor("bank");

    const numberOfLinks = await page.locator("li > a");
    await expect(numberOfLinks).toHaveCount(2);
  });
});
