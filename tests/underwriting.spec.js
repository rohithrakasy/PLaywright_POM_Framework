import {test, expect} from '@playwright/test'

import {PfaLoginPage} from '../pages/PfaLoginPage';
import {UnderwritingPage}  from '../pages/UnderwritingPage';

test.only('Underwriting Module', async({browser})=>{

    const context = await browser.newContext();

    await context.grantPermissions(['notifications'],{
        origin: 'https://dev.suretyforce.com/login'
    });

    const page = await context.newPage();

    const pfaLoginPage = new PfaLoginPage(page);
    const underwritingPage = new UnderwritingPage(page);

    //Navigate to Login Page
    await test.step("Navigate to Login Page", async()=>{

        await pfaLoginPage.navigateToWebsite("https://dev.suretyforce.com/login");


    });

    await test.step("Login with Valid Credentials", async()=>{

        await pfaLoginPage.Userlogin("rohith+pfaadmin@coreaiconsulting.com","test1234");

        await pfaLoginPage.clickNotifications();
    });

    await test.step("Perform Validation in Underwriting functionality", async()=>{

        await underwritingPage.clickonUnderwritingModule();

        await underwritingPage.searchforApplicantsinSearchBar("Test User Trucking Service");

        // await underwritingPage.firstCheckBox();

        const statusoftheApplicant = await underwritingPage.fetchStatus();
        console.log("Company Status: "+ statusoftheApplicant);

        expect(statusoftheApplicant?.trim()).toBe("Approved");

        await underwritingPage.clickChecboxofSignedApp();

    });

    await page.close();


})