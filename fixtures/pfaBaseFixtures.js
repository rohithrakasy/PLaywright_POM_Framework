import { test as base, expect } from "@playwright/test";
import { PfaLoginPage } from "../pages/PfaLoginPage";
import { UnderwritingPage } from "../pages/UnderwritingPage";


export const test = base.extend({
  
  authenticationPage: async ({ page, request },use) => {
    const loginResponse = await request.post(
      "https://dev.suretyforce.com/api/auth/userlogin",
      {
        data: {
          email: "rohith+pfaadmin@coreaiconsulting.com",
          password: "test1234",
          device_id: "PFA-device-540",
        },
      },
    );

    expect(loginResponse.ok()).toBeTruthy();

    const responseJson = await loginResponse.json();

    const token = responseJson.token;
    const tenantId = responseJson.payload.user.tenant_id.id;

    const context = page.context();

    await context.grantPermissions(["notifications"],{
      origin:'https://dev.suretyforce.com/login'
    });

    await page.goto("https://dev.suretyforce.com/login");

    await page.evaluate((token)=>{
      localStorage.setItem("auth_token",token);
    },token);

    //Reload with home page
    await page.goto("https://dev.suretyforce.com/dashboard/home");

    //Give authentication Page to test 
    await use(page);
  },
  pfaLoginPage: async ({ authenticationPage }, use) => {
    const pfaLoginPage = new PfaLoginPage(authenticationPage);

    await use(pfaLoginPage);
  },

  underwritingPage: async ({ authenticationPage }, use) => {
    const underwritingPage = new UnderwritingPage(authenticationPage);

    await use(underwritingPage);
  },
});

export { expect };
