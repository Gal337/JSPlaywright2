const { test, expect } = require('@playwright/test');
import { HomePage } from '../../PageObjects/HomePage'
import { FeedbackPage } from '../../PageObjects/FeedbackPage';

test.describe("Feedback Form", () => {
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
  test("Submit feedback form", async ({page}) => {a
    await feedbackPage.fillForm("name", "randomail@mail.com", "subject goes here", "my message");
    await feedbackPage.submitForm();
    await feedbackPage.feedbackFormSent();
  });
});
