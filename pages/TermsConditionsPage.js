import { expect } from "@playwright/test";

export class TermsConditionsPage {
  constructor(page) {
    this.page = page;

    this.termsheader = page.getByRole("heading", {
      name: "Terms & Conditions",
      exact: true,
    });
    this.rows = page.locator("table.w-full tbody tr");
    this.createTerms = page.getByRole("button", {
      name: "Create Terms",
      exact: true,
    });

    this.setNewVersion = page.locator("input#version");
    this.setEffectiveDate = page.locator("input[type='datetime-local']");

    this.uploadterms = page.locator("input#termsPdf");
    this.uploadpolicies = page.locator("input#policyPdf");

    this.createNewTermsButton = page.getByRole("button", {
      name: "Create Terms",
      exact: true,
    });
  }

  async createNewTerms() {
    await expect(this.termsheader).toBeVisible();

    const rows = this.rows;
    const fetchActiveRow = rows.filter({
      has: this.page.getByText("Active", { exact: true }),
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

    const newVersion = `${year}.${month}.${date}.${hour}.${min}`;

    console.log("New Version: " + newVersion);

    const verifyIsGreater = isNewversionGreater(
      newVersion,
      fetchVersionFromActiveRow,
    );

    console.log("Is New Version Greater than Active Version?", verifyIsGreater);

    expect(verifyIsGreater).toBe(true);

    await this.createTerms.click();

    //Fill all required details to create a New Version
    await this.setNewVersion.fill(newVersion);

    const seteffectiveDateTime = generateeffectiveDate(15);
    await this.setEffectiveDate.fill(seteffectiveDateTime);

    //UPload Terms and policy Files
    await this.uploadterms.setInputFiles(
      "C:/Users/rohit/Documents/Rohith/Playwright_OrangeHrm/test-data/TermsAndConditions_Data/Terms_and_Conditions.pdf",
    );

    await this.uploadpolicies.setInputFiles(
      "test-data/TermsAndConditions_Data/Privacy_Policy.pdf",
    );

    await this.createNewTermsButton.click();

    return newVersion;
  }

  
}

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
