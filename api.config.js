const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests/api',
  timeout: 60000,
  retries: 0,
  use: {
    headless: true,
    viewport: {width: 1280, height: 720},
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: "off",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium'},
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox'},
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit'},
    }
  ]

});
