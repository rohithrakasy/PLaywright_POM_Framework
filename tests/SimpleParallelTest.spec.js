import { test } from "@playwright/test";

test.describe.configure({
    mode:'parallel'
});

test("Test 1", async ({ page }) => {
  console.log("Test 1 Worker:", test.info().workerIndex);

  await page.goto("https://dev.suretyforce.com/");

  await page.waitForTimeout(3000);

  await page.close();

  console.log("Successfully Executest Test Worker 1");
});

test("Test 2", async ({ page }) => {
  console.log("Test 2 Worker:", test.info().workerIndex);

  await page.goto("https://dev.suretyforce.com/");

  await page.waitForTimeout(3000);

  await page.close();0

  console.log("Successfully Executest Test Worker 2");
});

test("Test 3", async ({ page }) => {
  console.log("Test 3 Worker:", test.info().workerIndex);

  await page.goto("https://dev.suretyforce.com/");
  await page.waitForTimeout(3000);

  await page.close();

  console.log("Successfully Executest Test Worker 3");
});
