export class UnderwritingPage {
  constructor(page) {
    this.page = page;

    this.underwritingModule = page.getByRole('link',{name:'Underwriting', exact:true});
    this.searchforApplicants = page.getByPlaceholder("Search applicants...");
    this.underwritingPendingApplicationsTable = page.locator("table.w-full");

    this.openReviewBtn = page.getByRole("button", {
      name: "Open Review",
      exact: true,
    });
  }

  async clickonUnderwritingModule() {
    await this.underwritingModule.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async searchforApplicantsinSearchBar(applicantName) {
    await this.searchforApplicants.fill(applicantName);
    await this.page.waitForLoadState("domcontentloaded");
  }

//   firstTable() {
  
//     return this.underwritingPendingApplicationsTable;
//   }

  async fetchStatus() {

    const firstTable = this.underwritingPendingApplicationsTable.first();
    
    const firstRow = await firstTable.locator("tbody tr td");

    await firstRow.nth(0).locator("button[role='checkbox']").click();

    const status = await firstRow.nth(3).locator("div").textContent();

    return status;
  }


  async clickChecboxofSignedApp() {

  const firstRow = this.underwritingPendingApplicationsTable
    .first()
    .locator("tbody tr")
    .first()
    .locator("td");

  await firstRow
    .nth(1)
    .locator("div div")
    .first()
    .click();

  await this.openReviewBtn.click();
}

  

}

// module.exports = UnderwritingPage;