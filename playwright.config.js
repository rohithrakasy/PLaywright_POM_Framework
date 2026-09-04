import { chromium, defineConfig, devices, firefox } from '@playwright/test';
import environments from './config/env';

const environment = process.env.TEST_ENV || 'dev';

export default defineConfig({
  testDir: './tests',

  // workers:3,

  // retries: 2,

  // projects: [{
  //   name: 'chromium',
  //   use: {
  //     ...devices['Desktop Chrome']
  //   }
  // },
  // {
  //   name: 'firefox',
  //   use: {
  //     ...devices['Desktop Firefox']
  //   }
  // },
  // {
  //   name: 'webkit',
  //   use: {
  //     ...devices['Desktop Safari']
  //   }
  // }


  // ],
  
  timeout: 30000,

  reporter: [['html',{
    outputFolder:'playwright-report',
    open: 'never'
  }],['list'],['allure-playwright']],

  use: {
    browserName: 'firefox',
    // channel: 'chrome',

    // headless: false,

    headless: !!process.env.CI,


    //Base Url

    // baseURL: environments[environment].baseURL,

    // storageState: 'playwright/.auth/user.json',

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