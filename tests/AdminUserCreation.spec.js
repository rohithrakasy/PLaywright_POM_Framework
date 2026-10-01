import { test, expect } from "@playwright/test";
import { AdminAppLoginPage } from "../pages/AdminAppLoginPage";
import adminuserLogin from "../test-data/adminApp.json";
import { AdminHomePage } from "../pages/AdminHomePage";

test("Create User As a Super Admin ", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const url = "https://dev-admin.suretyforce.com/login";

  //Page declarations
  const loginPage = new AdminAppLoginPage(page);
  const adminHomePage = new AdminHomePage(page);

  await test.step("Login With Valid Credentials", async () => {
    await loginPage.loginwithvalidCredentials(
      url,
      adminuserLogin.email,
      adminuserLogin.password,
    );

    await page.waitForURL(
      (url) =>
        url.pathname.includes("accept-terms") || url.pathname.includes("admin"),
    );

    console.log("Url After Login: ", page.url());
    if (page.url().includes("accept-terms")) {
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

  await test.step("Navigate to Users Module", async () => {
    await adminHomePage.navigateToUsersModule();

    await page.waitForLoadState("domcontentloaded");
  });

  await test.step("Fetch Active Users", async () => {
    const rows = page.locator("table.w-full tbody tr");

    await expect(rows.first()).toBeVisible();

    const fetchActiveRows = rows.filter({
      has: page.getByText("Active", { exact: true }),
    });

    const listOfActiveUsers = [];

    const activeRowscount = await fetchActiveRows.count();

    console.log("Active Rows Count: ", activeRowscount);

    for (let i = 0; i < activeRowscount; i++) {
      const currentActiveRow = fetchActiveRows.nth(i);

      const userNameofActiveUser = await currentActiveRow
        .locator("td div div")
        .nth(0).textContent();

      listOfActiveUsers.push(userNameofActiveUser);
    }
    console.log("Users: ", listOfActiveUsers);
  });
});
