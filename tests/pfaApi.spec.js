import { expect, test } from "@playwright/test";
import { request } from "node:http";

test("PFA Login functionality", async ({ page, request }) => {
  const response = await request.post(
    "http://pfa-auth-alb-qa-1606533570.us-east-2.elb.amazonaws.com/apim/api/auth/userlogin",
    {
      data: {
        email: "rohith+staging@coreaiconsulting.com",
        password: "test12345",
        device_id: "PFA-device-540",
      },
    },
  );

  const responseJson = await response.json();

  console.log(responseJson);

  await expect(response.status()).toBe(200);

  const token = responseJson.token;
  const tenantID = responseJson.payload.user.tenant_id.id;

  console.log("Token: " + token);
  console.log("Tenant ID: " + tenantID);

  const addressResponse = await request.post(
    "http://pfa-auth-alb-qa-1606533570.us-east-2.elb.amazonaws.com/apim/api/auth/addresses",
    {
      headers: {
        "Authorization" : "Bearer " + token,
        "X-Tenant-ID" : tenantID,
      },
      data: {
        line1: "74185 E University Drive Blvd",
        line2: "3rd block",
        city: "Tempe",
        state: "AZ",
        postalCode: 745120,
        country: "USA",
      },
    },
  );

    await expect(addressResponse.status()).toBe(200);

    

    const addressResponseJson = await addressResponse.json();

    console.log(addressResponseJson);

    const addressID = addressResponseJson.id;

    console.log("Address ID: "+ addressID);

    const fetchAddressResponse = await request.get(`http://pfa-auth-alb-qa-1606533570.us-east-2.elb.amazonaws.com/apim/api/auth/addresses/${addressID}`,{
        headers:{
            "Authorization": 'Bearer '+ token,
            "X-Tenant-ID": tenantID
        }
    });

    const fetchAddressResponseJson = await fetchAddressResponse.json();

    console.log(fetchAddressResponseJson);

    await expect(fetchAddressResponse.status()).toBe(200);

    let city = fetchAddressResponseJson.city;
    

    

    await expect(city).toContain("Tempe");


});
