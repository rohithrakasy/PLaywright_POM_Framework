import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: 'html',

  use: {
    browserName: 'chromium',
    channel: 'chrome',
    headless: false,

    // Makes Playwright use the browser's actual window size
    viewport: null,

    // Opens Chrome maximized
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
});