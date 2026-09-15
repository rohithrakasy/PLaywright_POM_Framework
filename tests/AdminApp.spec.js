
// import { test, expect } from '@playwright/test';

import { test, expect } from '../fixtures/AdminApp';
import adminLoginData from '../test-data/adminApp';



test("Validate Terms and conditions", async({adminAuthApi})=>{

    const page = adminAuthApi;

    // const context= await browser.newContext();

    // const page = await context.newPage();

    

    // await page.getByPlaceholder("admin@suretyforce.com").fill(adminLoginData.email);

    // await page.getByPlaceholder("Enter your password").fill(adminLoginData.password);

    // await page.getByRole('button',{name:'Sign In',exact:true}).click();

    // await page.waitForURL(url=>url.href.includes("admin"));

    await expect(page.getByText("Admin Portal")).toBeVisible();

    await page.getByRole('link',{name:'Terms & Conditions',exact:'true'}).click();



    await page.pause();


});
