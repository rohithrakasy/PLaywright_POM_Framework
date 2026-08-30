import { chromium, defineConfig, devices } from '@playwright/test';
import environments from './config/env';

const environment = process.env.TEST_ENV || 'dev';

export default defineConfig({
  testDir: './tests',

  workers:3,

  retries: 2,

  projects:[
    {
      name:'chromium',
      use: {
        ...devices['Desktop Chrome']
    }
  ]

  timeout: 30000,

  reporter: 'html',

  use: {
    browserName: 'firefox',
    // channel: 'chrome',
    headless: false,

    //Base Url

    // baseURL: environments[environment].baseURL,

    storageState: 'playwright/.auth/user.json',

    // Makes Playwright use the browser's actual window size
    viewport: null,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    // Opens Chrome maximized
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
});