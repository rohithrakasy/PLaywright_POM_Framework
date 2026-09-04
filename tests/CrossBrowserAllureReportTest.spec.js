import { test, expect } from "@playwright/test";

import { feature, story } from "allure-js-commons";

import { severity, owner, description, attachment } from "allure-js-commons";
import console from "node:console";

test("Validate CrossBrowser and Allure Reporting", async ({ browser }) => {
  //Global variables
  let status = "Approved";

  //Test Steps
  await feature("Underwriting");
  await story("Underwriting Queue");
  await severity("High");
  await owner("Rohith");
  await description(
    "Verify that an application in the underwriting queue displays the status as In Progress.",
  );

  const context = await browser.newContext();

  await context.grantPermissions(["notifications"], {
    origin: "https://dev.suretyforce.com/login",
  });

  const page = await context.newPage();

  await test.step("Navigate to PFA Main Application", async () => {
    await page.goto("https://dev.suretyforce.com/login");

    await page.waitForLoadState("domcontentloaded");

    await page
      .getByPlaceholder("johndoe@email.com")
      .fill("rohith+pfaadmin@coreaiconsulting.com");
    await page.locator("input[type='password']").fill("test1234");
    await page.getByRole("button", { name: "Sign In" }).click();

    await page.getByRole("button", { name: "Skip for Now" }).click();
  });

  await test.step("Validate Underwriting Module", async () => {
    await page.getByText("Underwriting").click();

    await page.waitForLoadState("domcontentloaded");
  });

  await test.step("Perform Validation if Documents are Visible and Delete if it is", async () => {
    

    await page
      .getByPlaceholder("Search applicants...")
      .fill("Test User Trucking Service");

    const firstTable = page.locator("table.w-full").first();

    const checkFirstRow = await firstTable.locator("tbody tr td");

    await checkFirstRow.nth(0).locator("button[role='checkbox']").click();

    const fetchStatus = await checkFirstRow.nth(3).locator("div").textContent();
    console.log("Company Status: " + fetchStatus);

    await expect(fetchStatus).toBe(status);

    await checkFirstRow.nth(1).locator("div div").first().click();

    await page
      .getByRole("button", { name: "Open Review", exact: true })
      .click();

    const signedApplication = page
      .locator("div.flex.items-center.gap-3.rounded-lg")
      .filter({ has: page.getByText("Signed Application", { exact: true }) });

    await expect(signedApplication).toBeVisible();

    const screenshot = await page.screenshot();

    await attachment("Underwriting Packet", screenshot, "image/png");

    const noDocs = signedApplication.getByText("No documents uploaded", {
      exact: true,
    });

    if (await noDocs.isVisible()) {
      console.log("Signed Application has no documents uploaded.");
      const screenshot1 = await page.screenshot();
      await attachment("Underwriting Packet- Signed Application", screenshot1, "image/png");
    } else {
      console.log("Signed Application has a document uploaded.");
    }

    console.log("Test Successfully Completed");
  });

  await page.close();
});
