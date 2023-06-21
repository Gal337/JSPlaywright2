import { test, expect } from '@playwright/test'
import { getRandomNumber, getRandomString } from '../../utils/data-helpers'

test.describe("Tips & Tricks Section", () => {
  test("TestInfo Object", async ({page}, testInfo) => {
    await page.goto("http://zero.webappsecurity.com/");
    //console.log(testInfo);

    let newNumber = await getRandomNumber();
    let newString = await getRandomString();

    console.log(newNumber);
    console.log(newString);
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
    test(`Running test for ${name}`, async ({page}) => {
      await page.goto("http://zero.webappsecurity.com/index.html");
      await page.type("#searchTerm", `${name}`);
      await page.waitForTimeout(3000);
    });
  };

  test("Mouse Movement Simulation", async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.mouse.move(14, 148);
    await page.mouse.down();
    await page.mouse.up();
  });
  
  test("Multiple Browser Tabs inside a browser", async ({browser}) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();

    await page1.goto("http://zero.webappsecurity.com/index.html");
    await page2.goto("http://zero.webappsecurity.com/index.html");
    await page3.goto("http://zero.webappsecurity.com/index.html");
    await page1.waitForTimeout(5000);
  });


})
