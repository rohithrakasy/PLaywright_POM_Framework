const {expect} = require('@playwright/test');
class DashboardPage {


  constructor(page) {
    this.page = page;
    this.headerLocator = page.getByRole('heading',{name: 'Dashboard'});
  }

  async verifyDashboardHeader(){
    await expect(this.headerLocator).toBeVisible();
  }


}

module.exports = DashboardPage;