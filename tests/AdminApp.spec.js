import { test, expect } from "@playwright/test";

// import { test, expect } from '../fixtures/AdminApp';
import adminLoginData from "../test-data/adminApp";

//Pages
import { AdminHomePage } from "../pages/AdminHomePage";
import { AdminAppLoginPage } from "../pages/AdminAppLoginPage";

test("Validate Terms and conditions", async ({ browser }) => {
  // const page = adminAuthApi;

  const url = "https://dev-admin.suretyforce.com/login";

  // const versionNumber = "2026.09.17.13.49";
  let newVersion;

  const context = await browser.newContext();

  const page = await context.newPage();

  const adminHomePage = new AdminHomePage(page);
  const adminLoginPage = new AdminAppLoginPage(page);

  await test.step("Login with Valid credentials", async () => {
    await adminLoginPage.loginwithvalidCredentials(
      url,
      adminLoginData.email,
      adminLoginData.password,
    );

    await page.waitForURL(
      (url) =>
        url.pathname.includes("/accept-terms") ||
        url.pathname.includes("admin"),
    );

    console.log("URL After Login: ", page.url());

    if (page.url().includes("/accept-terms")) {
      const continueBtn = page.getByRole("button", {
        name: "Continue",
        exact: true,
      });

      expect(continueBtn).toBeDisabled();

      await page
        .getByLabel(
          "By checking this box, you agree to both the Privacy Policy and Terms and Conditions.",
        )
        .click();

      expect(continueBtn).toBeEnabled();

      await continueBtn.click();
    } else {
      console.log("Terms and Conditions are not required");
      await page.waitForURL((url) => url.href.includes("admin"));

      await page.waitForLoadState("domcontentloaded");
    }
  });

  await test.step("Click on Terms and Conditions Page", async () => {
    await adminHomePage.navigateToTermsConditionsModule();

    await page.waitForURL((url) => url.href.includes("admin/terms"));
  });

  await test.step("Create a New Terms And Conditions", async () => {
    const headerTerms = page.getByRole("heading", {
      name: "Terms & Conditions",
      exact: true,
    });

    await expect(headerTerms).toBeVisible();

    //Fetch Current Active Version

    const rows = page.locator("table.w-full tbody tr");

    const fetchActiveRow = rows.filter({
      has: page.getByText("Active", { exact: true }),
    });

    const fetchVersionFromActiveRow = await fetchActiveRow
      .locator("td")
      .nth(0)
      .innerText();

    console.log("Active Version Number: " + fetchVersionFromActiveRow);

    //Create a New version Date
    const nowDate = new Date();

    const year = nowDate.getFullYear();
    const month = String(nowDate.getMonth() + 1).padStart(2, "0");
    const date = String(nowDate.getDate()).padStart(2, "0");

    const hour = String(nowDate.getHours()).padStart(2, "0");
    const min = String(nowDate.getMinutes()).padStart(2, "0");

    newVersion = `${year}.${month}.${date}.${hour}.${min}`;

    console.log("New Version: " + newVersion);

    //Compare Active and new Version That we are about to create

    //Map converts every split value into number

    // const activeParts = fetchVersionFromActiveRow.split('.').map(Number);
    // const newVersionParts = newVersion.split('.').map(Number);

    // console.log("Active Parts: ", activeParts);
    // console.log("New Version Parts", newVersionParts);

    function isNewversionGreater(newVersion, fetchVersionFromActiveRow) {
      const activeParts = fetchVersionFromActiveRow.split(".").map(Number);
      const newVersionParts = newVersion.split(".").map(Number);

      for (let i = 0; i < newVersionParts.length; i++) {
        if (newVersionParts[i] > activeParts[i]) {
          return true;
        }

        if (newVersionParts[i] < activeParts[i]) {
          return false;
        }
      }

      return false;
    }

    const verifyIsGreater = isNewversionGreater(
      newVersion,
      fetchVersionFromActiveRow,
    );

    console.log("Is New Version Greater than Active Version?", verifyIsGreater);

    expect(verifyIsGreater).toBe(true);

    await page
      .getByRole("button", { name: "Create Terms", exact: true })
      .click();

    //Fill all required details to create a New Version
    await page.locator("input#version").fill(newVersion);

    function generateeffectiveDate(setMinutes) {
      const effectiveDate = new Date();

      effectiveDate.setMinutes(effectiveDate.getMinutes() + setMinutes);

      const year = effectiveDate.getFullYear();
      const month = String(effectiveDate.getMonth() + 1).padStart(2, "0");
      const day = String(effectiveDate.getDate()).padStart(2, "0");

      const hour = String(effectiveDate.getHours()).padStart(2, "0");
      let min = String(effectiveDate.getMinutes()).padStart(2, "0");

      const effectiveDateTime = `${year}-${month}-${day}T${hour}:${min}`;

      console.log("Effective Date and Time: ", effectiveDateTime);

      return effectiveDateTime;
    }

    const seteffectiveDateTime = generateeffectiveDate(15);
    await page
      .locator("input[type='datetime-local']")
      .fill(seteffectiveDateTime);

    //UPload Terms and policy Files
    await page
      .locator("input#termsPdf")
      .setInputFiles(
        "C:/Users/rohit/Documents/Rohith/Playwright_OrangeHrm/test-data/TermsAndConditions_Data/Terms_and_Conditions.pdf",
      );

    await page
      .locator("input#policyPdf")
      .setInputFiles("test-data/TermsAndConditions_Data/Privacy_Policy.pdf");

    await page
      .getByRole("button", { name: "Create Terms", exact: true })
      .click();
  });

  await test.step("Validate If New Version is Listed in table", async () => {
    const fetchfirstRow = page.locator("table.w-full tbody tr").first();
    const versionCell = await fetchfirstRow.locator("td").nth(0);
    await expect(versionCell).toHaveText(newVersion, { timeout: 10000 });

    console.log(
      "New Terms and Conditions Version: ",
      await versionCell.innerText(),
    );

    // await expect(fetchVersion).toHaveText(newVersion,{timeout: 10000});
  });

  await page.pause();
});
