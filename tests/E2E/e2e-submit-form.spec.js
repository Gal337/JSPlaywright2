const { test, expect } = require('@playwright/test');
import { HomePage } from '../../PageObjects/HomePage'
import { FeedbackPage } from '../../PageObjects/FeedbackPage';

test.describe.only("Feedback Form", () => {
  let homePage;
  let feedbackPage;
  
  test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    feedbackPage = new FeedbackPage(page);
    
    homePage.goTo();
    homePage.clickOnFeedbackLink();
  });
  //Reset Feedback form
  test("Reset feedback form", async ({page}) => {
    await feedbackPage.fillForm("name", "randomail@mail.com", "subject goes here", "my message");
    await feedbackPage.resetForm();
    await feedbackPage.assertReset();
  });
  //Submit Feedback form
  test("Submit feedback form", async ({page}) => {
    /* await page.type("#name", "some name");
    await page.type("#email", "4testing@gmail.com");
    await page.type("#subject", "some subject");
    await page.type("#comment", "some nice comment about the application");
    await page.click("input[type='submit']");
    await page.waitForSelector("#feedback-title"); */
    await feedbackPage.fillForm("name", "randomail@mail.com", "subject goes here", "my message");
    await feedbackPage.submitForm();
    await feedbackPage.feedbackFormSent();
  });
});
