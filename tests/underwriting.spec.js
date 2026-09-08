import { test, expect } from "@playwright/test";

import { PfaLoginPage } from "../pages/PfaLoginPage";
import { UnderwritingPage } from "../pages/UnderwritingPage";
import {
  feature,
  story,
  description,
  owner,
  severity,
} from "allure-js-commons";
import { attachment } from "allure-js-commons";

test.only("Underwriting Module", async ({ browser }) => {
  const context = await browser.newContext();

  await context.grantPermissions(["notifications"], {
    origin: "https://dev.suretyforce.com/login",
  });

  const page = await context.newPage();

  const pfaLoginPage = new PfaLoginPage(page);
  const underwritingPage = new UnderwritingPage(page);

  await feature("Underwriting");
  await owner("Rrk");
  await severity("normal");

  //Navigate to Login Page
  await test.step("Navigate to Login Page", async () => {
    await pfaLoginPage.navigateToWebsite("https://dev.suretyforce.com/login");
  });

  await test.step("Login with Valid Credentials", async () => {
    await pfaLoginPage.Userlogin(
      "rohith+pfaadmin@coreaiconsulting.com",
      "test1234",
    );

    await pfaLoginPage.clickNotifications();
  });

  await test.step("Perform Validation in Underwriting functionality", async () => {
    await underwritingPage.clickonUnderwritingModule();

    await underwritingPage.searchforApplicantsinSearchBar(
      "Test User Trucking Service",
    );

    // await underwritingPage.firstCheckBox();

    const statusoftheApplicant = await underwritingPage.fetchStatus();
    console.log("Company Status: " + statusoftheApplicant);

    expect(statusoftheApplicant?.trim()).toBe("Approved");

    const screenshot = await page.screenshot();

    await attachment("Underwriting status Approved", screenshot, "image/png");

    await underwritingPage.clickChecboxofSignedApp();
  });

  await page.close();
});
