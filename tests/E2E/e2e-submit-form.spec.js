const { test, expect } = require('@playwright/test');

test.describe("Feedback Form", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.click("#feedback");
  });
  //Reset Feedback form
  test("Reset feedback form", async ({page}) => {
    await page.type("#name", "some name");
    await page.type("#email", "4testing@gmail.com");
    await page.type("#subject", "some subject");
    await page.type("#comment", "some nice comment about the application");
    await page.click("input[name='clear']");
    
    const nameInput = await page.locator("#name");
    const commentInput = await page.locator("#comment");
    await expect(nameInput).toBeEmpty();
    await expect(commentInput).toBeEmpty();
  });
  //Submit Feedback form

});
