const { test, expect } = require("../fixtures/baseFixture.js");

// const LoginPage = require("../pages/LoginPage");
// const DashboardPage = require('../pages/DashboardPage');
const testData = require('../test-data/loginData.json')

test.beforeEach(async({loginPage})=>{

   await loginPage.openLoginPage();
})


test("Login Orange Hrm Application", async ({loginPage , dashboardPage }) => {
  
  // These are called from fixture
  
  // const mylogin = new LoginPage(page);
  // const dashboard = new DashboardPage(page);

  let fetchuserCredentials = [];



  fetchuserCredentials = await loginPage.getLoginCredentials();

  await loginPage.login(testData.validUser.userName, testData.validUser.password);

  await dashboardPage.verifyDashboardHeader();

  
});

test.only('Test PFA Application for Api', async({page})=>{


  await expect(page.locator("span").filter({ hasText: "SuretyForce" })).toHaveText("SuretyForce");
})
