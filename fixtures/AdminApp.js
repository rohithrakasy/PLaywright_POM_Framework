import { test as base, expect } from "@playwright/test";

export const test = base.extend({

  adminAuthApi: async ({ request, page }, use) => {

    // 1. Login through API
    const adminResponse = await request.post(
      "https://devapi.suretyforce.com/apim/api/auth/userlogin",
      {
        data: {
          email: "rohith@coreaiconsulting.com",
          password: "test1234",
          device_id: "PFA-device-540",
        },
      }
    );

    expect(adminResponse.ok()).toBeTruthy();

    const loginJson = await adminResponse.json();

    console.log(loginJson);

    const token = loginJson.token;
    const user = loginJson.payload.user;

    // 2. Open Admin domain first
    await page.goto("https://dev-admin.suretyforce.com/login");

    // 3. Set authentication data
    await page.evaluate(
      ({ token, user }) => {

        localStorage.setItem("auth_token", token);

        const authStorage = {
          state: {
            user: user
          },
          version: 0
        };

        localStorage.setItem(
          "auth-storage",
          JSON.stringify(authStorage)
        );

      },
      { token, user }
    );

    // 4. Debug - confirm values exist
    const storage = await page.evaluate(() => ({
      token: localStorage.getItem("auth_token"),
      authStorage: localStorage.getItem("auth-storage")
    }));

    console.log("Auth Token exists:", !!storage.token);
    console.log("Auth Storage:", storage.authStorage);

    // 5. Navigate to Admin
    await page.goto(
      "https://dev-admin.suretyforce.com/admin",
      { waitUntil: "domcontentloaded" }
    );

    console.log("Current URL:", page.url());

    await use(page);
  },

});

export { expect };