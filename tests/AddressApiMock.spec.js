import { expect, test } from "@playwright/test";
import loginData from "../test-data/loginData.json";

test("Test Playwright Network Mocking Feature", async ({ page, request }) => {
  // console.log(loginData.pfaData.userName);

  // const response = await request.get('https://dummy.restapiexample.com/api/v1/employee/1');

  // expect(response.status()).toBe(200);

  // console.log(response);

  // const loginResponse = await response.json();

  // console.log(loginResponse);

  // expect(loginResponse.status).toBe('success');
  // expect(loginResponse.data.id).toBe(1);
  // expect(loginResponse.data.employee_name).toBe('Tiger Nixon');

  const mockData = {
    status: "success",
    data: {
      id: 2,
      employee_name: "Rohith K",
      employee_salary: 320800,
      employee_age: 28,
      profile_image: "",
    },
    message: "Successfully! Record has been fetched.",
  };

  await page.route(
    "https://dummy.restapiexample.com/api/v1/employee/2",
    async (route) => {
      console.log("Request Intercepted");

      //Return Fake Response
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(mockData),
      });
    },
  );

  //make request from browser
  const response = await page.evaluate(async () => {
    const res = await fetch(
      "https://dummy.restapiexample.com/api/v1/employee/2",
    );

    return await res.json();
  });

  console.log(response);

  expect(response.data.employee_name).toBe("Rohith K");

  //   expect(loginResp.employee_name).toBe('Rohith k');
});
