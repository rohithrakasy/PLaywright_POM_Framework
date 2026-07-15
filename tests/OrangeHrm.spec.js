const { test, expect } = require("@playwright/test");

const LoginPage = require("../pages/LoginPage");
const DashboardPage = require('../pages/DashboardPage');
const tetsData = require('../test-data/loginData.json')


test("Login Orange Hrm Application", async ({ page }) => {
  const mylogin = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  let fetchuserCredentials = [];

  await mylogin.openLoginPage();

  fetchuserCredentials = await mylogin.getLoginCredentials();

  await mylogin.login(tetsData.validUser.userName, tetsData.validUser.password);

  await dashboard.verifyDashboardHeader();

  
});
