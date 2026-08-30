import { test } from "@playwright/test";

test("Test Network mocking", async ({ page }) => {
  await page.route(
    "https://dummy.restapiexample.com/api/v1/employee/2",

    async (route) => {
      console.log(" Route Intercepted actual request");
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          id: 3,
          employee_name: "Rohith K",
          employee_salary: 3500,
          employee_age: 25,
          profile_image: "",
        }),
      });
    },
  );

  //Execute Mock response
  const response = await page.evaluate(async () => {
    const loginresponse = await fetch(
      "https://dummy.restapiexample.com/api/v1/employee/2",
    );

    return await loginresponse.json();
  });

  console.log("Routed response: " + JSON.stringify(response));
});

test.only("Network interception using route.continue", async ({ page }) => {
  await page.route(
    "https://dummy.restapiexample.com/api/v1/employee/2",
    async (route) => {
      const request = await route.request();

      console.log("Original URL: " + request.url());

      await route.continue({
        headers: headers,
      });
    },
  );

  const response = await page.evaluate(async () => {
    const loginResponse = await fetch(
      "https://dummy.restapiexample.com/api/v1/employee/2",
    );

    return loginResponse;
  });
});
