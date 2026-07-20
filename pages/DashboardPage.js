const {expect} = require('@playwright/test');
const BasePage = require('./BasePage');
class DashboardPage extends BasePage{


  constructor(page) {
    super(page);
    this.headerLocator = page.getByRole('heading',{name: 'Dashboard'});
  }

  async verifyDashboardHeader(){
    await expect(this.headerLocator).toBeVisible();
  }


}

module.exports = DashboardPage;