const { test, expect } = require("../fixtures/baseFixture.js");

// const LoginPage = require("../pages/LoginPage");
// const DashboardPage = require('../pages/DashboardPage');
const tetsData = require('../test-data/loginData.json')


test("Login Orange Hrm Application", async ({ loginPage , dashboardPage }) => {
  
  // These are called from fixture
  
  // const mylogin = new LoginPage(page);
  // const dashboard = new DashboardPage(page);

  let fetchuserCredentials = [];

  await loginPage.openLoginPage();

  fetchuserCredentials = await loginPage.getLoginCredentials();

  await loginPage.login(tetsData.validUser.userName, tetsData.validUser.password);

  await dashboardPage.verifyDashboardHeader();

  
});
