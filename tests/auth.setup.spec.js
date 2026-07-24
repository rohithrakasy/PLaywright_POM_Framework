import { test,expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

const testData = require("../test-data/loginData.json");

test("Authenticate user", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage();

  await loginPage.loginPFA(
    testData.pfaData.userName,
    testData.pfaData.password,
  );

  // Wait until the application stores the token
  await expect
    .poll(async () => {
      return await page.evaluate(() => localStorage.getItem("auth_token"));
    })
    .not.toBeNull();

  await page.context().storageState({
    path: "playwright/.auth/user.json",
  });
});
