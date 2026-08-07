import { test } from "../fixtures/baseFixture";

test('Fetch User Login Details',async ({apiClient})=>{
    const userDetails = await apiClient.getUser(1);

});

test('create quote', async ({apiClient})=>{

    const requestBody = {
    title: 'Playwright API Test',
    body: 'Learning worker-scoped fixtures',
    userId: 1
  };
    await apiClient.createQuote(requestBody);
});