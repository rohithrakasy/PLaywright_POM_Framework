const { test, expect } = require("@playwright/test");

const LoginPage = require("../pages/LoginPage");
const { get } = require("node:http");

test("Login Orange Hrm Application", async ({ page }) => {
  const mylogin = new LoginPage(page);

  let fetchuserCredentials = [];

  await mylogin.openLoginPage();

  fetchuserCredentials = await mylogin.getLoginCredentials();

  await mylogin.login(fetchuserCredentials[0], fetchuserCredentials[1]);

  await expect(page).toHaveURL(/dashboard/);

  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});
