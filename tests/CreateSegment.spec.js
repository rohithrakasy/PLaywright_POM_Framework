import { test, expect } from "@playwright/test";
import { readExcel } from "../utils/excelreader";
import fs from "node:fs";

import pfaLogin from "../test-data/loginData.json";
import { generateDotNumber } from "../utils/generateRandomNumbers";

const testExcelData = readExcel(
  "test-data/experian_test_data.xlsx",
  "Image Extract",
);

test("Create a Segment with desired Audiences", async ({ browser }) => {
  const context = await browser.newContext();

  await context.grantPermissions(["notifications"], {
    origin: "https://dev.suretyforce.com/login",
  });

  const page = await context.newPage();

  await page.goto("https://dev.suretyforce.com/login");

  await page.waitForLoadState("domcontentloaded");

  // Login for DEV
  await page
    .getByPlaceholder("johndoe@email.com")
    .fill(pfaLogin.pfaData.userName);
  await page.getByPlaceholder("••••••••").fill(pfaLogin.pfaData.password);
  await page.getByRole("button", { name: "Sign In", exact: true }).click();

  //Skip MFA
  await page.getByRole("button", { name: "Skip for Now", exact: true }).click();
  await page.waitForLoadState("domcontentloaded");

  await page.waitForURL((url) => url.href.includes("home"));

  //Select Segment Module
  await page.getByRole("link", { name: "Segments", exact: true }).click();
  await page.waitForURL((url) => url.href.includes("segments"));

  const segmentsHeading = page.getByRole("heading", {
    name: "Segments",
    exact: true,
  });

  expect(segmentsHeading).toBeVisible();

  //Create Segment
  await page
    .getByRole("button", { name: "Create Segment", exact: true })
    .click();

  //Valid Segment Name
  const randomNumber = generateDotNumber();
  console.log("Random Number: ", randomNumber);

  const segmentName = `Segment Test Automate_${randomNumber}`;

  await page.getByPlaceholder("Segment name").fill(segmentName);

  //Click on Filter Button
  await page.getByRole("button", { name: "Filter", exact: true }).click();

  //Select Filter Accordingly 

  await page.locator("button[role='combobox']").nth(1).click();

  await page.getByText("Broker Name").last().click();

  //Enter First Filter value 
  await page.locator("input[type='text']").nth(1).fill("LYNN Trucking Services");

  let firstRow = page.locator("table tbody tr").first().locator("td").first();;
  await expect(firstRow).toHaveText("LYNN Trucking Services");

  //click on new filter
  await page.getByText("New filter").click();

  //Select second filter
  await page.locator("button[role='combobox']").nth(4).click();

  await page.getByText("Bond Type").last().click();

  //Selct Bond Value
  await page.locator("button[role='combobox']").last().click();

  await page.getByText("BMC-84",{exact: true}).click();

  //Save Segment
  await page.getByRole('button',{name:'Save Segment'}).click();

  //Click on Edit for Active state
  await page.getByRole('button',{name:'Edit'}).click();

  await page.locator("button[role='combobox']").click();

  await page.getByText("Active",{exact:true}).click();

  //Update Segment

  await page.getByRole('button',{name:'Update Segment'}).click();

  //Validate Active state is Presented or not
  await expect(page.getByText("Active",{exact:true})).toBeVisible();

  




  await page.pause();
});
