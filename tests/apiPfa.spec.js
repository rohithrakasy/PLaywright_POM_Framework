import { test as setup, expect } from "@playwright/test";

const authFile = "playwright/.auth/pfasetup.json";

setup("Login functionallity is by passed by API", async ({ request,page }) => {
  const loginResponse = await request.post("https://dev.suretyforce.com/api/auth/userlogin", {
    data: {
      email: "rohith+tracy@coreaiconsulting.com",
      password: "test1234",
      device_id: "PFA-device-540",
    },
  });

  expect(loginResponse.ok()).toBeTruthy();

  const loginJson = await loginResponse.json();

  const token = loginJson.token;
  const tenantId = loginJson.payload.user.tenant_id.id;

  console.log("Token: "+ token);

  console.log(`Tenant Id for this user is: ${tenantId}`);

  await page.goto("https://dev.suretyforce.com/dashboard/home");

  await page.evaluate((token)=>{

    localStorage.setItem("auth_token",token)
  },token);

  await page.context().storageState({
    path: authFile
  });


});
