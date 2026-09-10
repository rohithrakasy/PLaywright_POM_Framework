import { test, expect } from "../fixtures/pfaBaseFixtures";

import {
  feature,
  story,
  description,
  owner,
  severity,
} from "allure-js-commons";
import { attachment } from "allure-js-commons";

test.only("Underwriting Module", async ({
  authenticationPage,
  pfaLoginPage,
  underwritingPage
}) => {

  const page = authenticationPage;

 

  await feature("Underwriting");
  await owner("Rrk");
  await severity("normal");

  

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

  // await page.close();
});
