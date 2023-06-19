import { test, expect } from '@playwright/test'

test.describe.parallel("API Testing", () => {
  const baseUrl = "https://www.reqres.in/api/";

  test("Simple API Test - Assert Response Status", async ({request}) => {
    const response = await request.get(`${baseUrl}users/3`);
    expect(response.status()).toBe(404);

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });

  test("Simple API Test - Assert Invalid Endpoint", async ({request}) => {
    const response = await request.get(`${baseUrl}users/non-existing-endpoint`);
    expect(response.status()).toBe(404);
  });

});
