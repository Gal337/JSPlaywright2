import {test, expect} from '@playwright/test'
import { HomePage } from '../../PageObjects/HomePage'
import { LoginPage } from '../../PageObjects/LoginPage'
import { PaymentPage } from '../../PageObjects/PaymentPage'
import { Navbar } from '../../PageObjects/components/Navbar'

test.describe("New Payment", () => {
  let homePage;
  let loginPage;
  let paymentPage;
  let navbar;
  
  test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    paymentPage = new PaymentPage(page);
    navbar = new Navbar(page);

    await homePage.goTo();
    await homePage.clickOnSignIn();
    await loginPage.login("username", "password");
    await homePage.clickOnBankingMenu();
  });

  test("Should send new payment", async ({page}) => {
    navbar.clickOnTab("Pay Bills");

    await paymentPage.createPayment();
    await paymentPage.assertSuccessMessage();
  });

});
