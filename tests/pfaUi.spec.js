import { test } from "@playwright/test";
import { request } from "node:http";

import loginData from "../test-data/loginData.json";

test("PFA UI Test scenarios", async ({ page }) => {
  page.on("request", (request) => {
    console.log("Request URL: " + request.url());
  });

  page.on("response", (response) => {
    console.log("Response Status: " + response.status());
    console.log("Response Body: " + response.body());
  });

  await page.goto("https://staging.suretyforce.com/login");

  await page
    .getByPlaceholder("johndoe@email.com")
    .fill(loginData.pfaData.userName);
  await page.getByPlaceholder("••••••••").fill(loginData.pfaData.password);

  await page.getByRole("button", { name: "Sign In" }).click();
});
