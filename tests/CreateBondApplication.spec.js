import { test, expect } from "@playwright/test";
// import {test,expect} from '../fixtures/pfaBaseFixtures'
import { readExcel } from "../utils/excelreader";
import {
  generatePhnNum,
  generateDotNumber,
} from "../utils/generateRandomNumbers";

import pfaLogin from '../test-data/loginData.json';

const testExcelData = readExcel(
  "test-data/filtered_person_data.xlsx",
  "Extracted Data",
);

test("Create a Bond Application", async ({ browser }) => {
  // let companyName = "TRAVIS Trucking Services";
  // const page = authenticationPage;
  const context = await browser.newContext();

  await context.grantPermissions(["notifications"], {
    origin: "https://dev.suretyforce.com/login",
  });

  const page = await context.newPage();

  await page.goto("https://dev.suretyforce.com/login");

  await page.waitForLoadState("domcontentloaded");

  // Login
  await page
    .getByPlaceholder("johndoe@email.com")
    .fill(pfaLogin.pfaData.userName);
  await page.getByPlaceholder("••••••••").fill(pfaLogin.pfaData.password);
  await page.getByRole("button", { name: "Sign In", exact: true }).click();

  //Skip MFA
  await page.getByRole("button", { name: "Skip for Now", exact: true }).click();
  await page.waitForLoadState("domcontentloaded");

  //Click on Bond Section

  await page.getByText("Bonds").click();
  await page.waitForURL((url) => url.href.includes("bonds"));

  // Read details from 1st row
  const applicationData = testExcelData[6];
  console.log(applicationData);

  const firstName = applicationData["First Name"];
  const lastName = applicationData["Last Name"];

  let phoneNumber;
  if (applicationData["PHONE 1"]) {
    phoneNumber = applicationData["PHONE 1"].toString();
  } else {
    phoneNumber = generatePhnNum();
  }

  console.log("Phone Number: " + phoneNumber);

  //Email creation
  let email = `rohith+${firstName}@coreaiconsulting.com`;
  //Company Name Creation
  let companyName = `${firstName} Trucking Services`;
  //Generate Random DOT Number
  let dotNumber = generateDotNumber();

  //Click on New Bond
  await page.getByText("New Bond", { exact: true }).click();

  //click on New Customer

  await page.getByText("New Customer", { exact: true }).click();

  // // Read details from 1st row
  // const applicationData = testExcelData[0];

  // const firstName = applicationData["First Name"];
  // const lastName = applicationData["Last Name"];

  // let phoneNumber;
  //  if(applicationData["PHONE 1"]){
  //    phoneNumber = applicationData["PHONE 1"].toString();
  //  }
  //  else{
  //   phoneNumber = generatePhnNum();
  //  }

  //  console.log("Phone Number: " + phoneNumber);

  //  //Email creation
  //  let email = `rohith+${firstName}@coreaiconsulting.com`;
  //  //Company Name Creation
  //  let companyName = `${firstName} Trucking Services`;
  //  //Generate Random DOT Number
  //  let dotNumber = generateDotNumber();

  await page.getByPlaceholder("First name").fill(applicationData["First Name"]);
  await page.getByPlaceholder("Last name").fill(applicationData["Last Name"]);
  await page.locator("input#nc-phoneNumber").fill(phoneNumber);
  await page.locator("input[type='email']").fill(email);
  await page.getByPlaceholder("Company name").fill(companyName);
  await page.locator("input#nc-dotNumber").fill(dotNumber.toString());

  await page
    .getByRole("button", { name: "Start Application", exact: true })
    .click();

  //   //Search for Comapny Name
  //   await page
  //     .getByPlaceholder("Search broker, contact, or ID...")
  //     .fill(companyName);

  //   const firstRow = page.locator("table.caption-bottom tbody tr").first();

  //   const cells = firstRow.locator("td");

  //   await firstRow.scrollIntoViewIfNeeded();

  //   const fetchBrokerName = await cells.nth(0).locator("div a").textContent();
  //   expect(fetchBrokerName?.trim()).toBe(companyName);

  //   const fetchStatus = await cells.nth(2).locator("div").textContent();
  //   expect(fetchStatus?.trim()).toBe("Info Pending");

  //   await cells.last().getByRole("button").click();

  //   //   await cells.last().locator("button[type='button']")

  //   await page.getByText("Continue Application", { exact: true }).click();

  /* General Info */

  //Fill General Information To Move status from Info Pending to Credit Check

  //Select business Type
  await page.locator("div.space-y-2 select").first().selectOption("LLC");

  //Select Years in Business
  await page.locator("div.space-y-2 select").nth(1).selectOption("3-5 years");
  //Fill Federal Tax ID
  await page.locator("#federalTaxId").fill(phoneNumber);

  //Select Previous Bond
  await page.locator("div.space-y-2 select").nth(3).selectOption("No");

  // Address
  let house = applicationData["House #"];
  let streetname = applicationData["Street Name"];
  let strSuf = applicationData["Str Suf"];
  let unit = applicationData.Unit;
  let unitVal = applicationData["Unit #"];

  let city = applicationData.City;
  let state = applicationData.State;

  let zip = applicationData["ZIP Code"];

  const streetAddress = `${house} ${streetname} ${strSuf} ${unit} ${unitVal}`;

  //Enter STreet Address

  await page
    .getByPlaceholder("Enter street address")
    .first()
    .fill(streetAddress.toString());

  //Enter City
  await page.getByPlaceholder("Enter city").fill(city);

  //Select State
  await page.locator("div.space-y-2 select").nth(5).selectOption(state);

  //Enter Zip Code
  await page.getByPlaceholder("Enter ZIP code").fill(zip);

  //Select gross Revenue
  await page.locator("div.space-y-2 select").nth(6).selectOption("100 - 150K");

  //Enter ownership Percentage
  await page.getByPlaceholder("Enter ownership percentage").fill("100");

  //Fill DOB
  const dob = applicationData.DOB.toString();

  const month = dob.substring(0, 2);
  const day = dob.substring(2, 4);
  const year = dob.substring(4);

  const formattedDOB = `${year}-${month}-${day}`;

  console.log("Formatted DOB:", formattedDOB);

  await page.locator("input[type='date']").fill(formattedDOB);

  //Fill Ssn
  await page.getByPlaceholder("XXX-XX-XXXX").clear();
  await page.getByPlaceholder("XXX-XX-XXXX").fill(applicationData.SSN);

  //Click same as Business Address
  await page.getByLabel("Same as Business Address", { exact: true }).click();

  //Click on Continue to Credit Check
  await page
    .getByRole("button", { name: "Continue to Credit Check", exact: true })
    .click();

  //Credit Check Consent

  await page.getByLabel("Credit Check Authorization *").click();

  await page.getByLabel("Information Accuracy *").click();

  await page.getByLabel("Privacy Policy Agreement *").click();

  const pullCreditBtn = page.getByRole("button", { name: "Pull credit" });

  if (pullCreditBtn.isEnabled()) {
    await pullCreditBtn.click();

    await expect(
      page.getByText("Credit pulled", { exact: true }),
    ).toBeVisible();
  }

  let fullTextCreditScore = await page
    .locator("div.text-green-800 span")
    .textContent();

  let scoreText = fullTextCreditScore.split(".")[1];

  let score = scoreText.split(":")[1];

  console.log("Score: " + score);

  //   //Search for Comapny Name
  //   await page
  //     .getByPlaceholder("Search broker, contact, or ID...")
  //     .fill(companyName);

  //   const firstRow = page.locator("table.caption-bottom tbody tr").first();

  //   const cells = firstRow.locator("td");

  //   await firstRow.scrollIntoViewIfNeeded();

  //   const fetchBrokerName = await cells.nth(0).locator("div a").textContent();
  //   expect(fetchBrokerName?.trim()).toBe(companyName);

  //   const fetchStatus = await cells.nth(2).locator("div").textContent();
  //   expect(fetchStatus?.trim()).toBe("Info Pending");

  //   await cells.last().getByRole("button").click();

  //   //   await cells.last().locator("button[type='button']")

  //   await page.getByText("Continue Application", { exact: true }).click();

  // await page.pause();

  await page.getByRole("button", { name: "Continue", exact: true }).click();

  // Search for Comapny Name
  // await page.pause();

  await page
    .getByPlaceholder("Search broker, contact, or ID...")
    .fill(companyName);

  const row = page.locator("table.caption-bottom tbody tr").first();

  const cell = row.locator("td");

  const fetchBrokerName = await cell.nth(0).locator("div a").textContent();

  expect(fetchBrokerName?.trim()).toBe(companyName);

  await cell.nth(6).click();

  await page.getByText("View Details").click();

  //Click on Quotes Tab

  await page.locator("div[role='tablist'] button").nth(2).click();

  const approveBtn = page.getByRole("button", { name: "Approve", exact: true });

  expect(approveBtn).toBeVisible();

  await approveBtn.click();

  await page.getByRole("button", { name: "Send Quote" }).click();

  const acceptQuote = page.getByRole("button", { name: "Accept" });

  if (acceptQuote.isDisabled()) {
    await page.locator("button.border-purple-300").click();

    await acceptQuote.click();
  }

  await page
    .getByRole("button", { name: "Move to Underwriting", exact: true })
    .click();

    
});
