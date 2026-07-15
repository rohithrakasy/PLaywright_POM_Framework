import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: 'html',

  use: {
    browserName: 'chromium',
    channel: 'chrome',
    headless: false,

    //Base Url
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth',

    // Makes Playwright use the browser's actual window size
    viewport: null,

    // Opens Chrome maximized
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
});