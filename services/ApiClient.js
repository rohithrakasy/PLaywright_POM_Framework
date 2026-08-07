import { error } from "node:console";

class ApiClient {
  constructor(requestContext) {
    this.requestContext = requestContext;
    console.log("API Client Created");
  }

  async getUser(userId) {
    const response = await this.requestContext.get(`/users/${userId}`);
    console.log("Fetching user details");

    if (!response.ok()) {
      throw new Error(
        `Get Api Request failed with Response ${response.status}`,
      );
    }

    return await response.json();
  }

  async createQuote(requestData) {
    const response = await this.requestContext.post('/lead/api/quotes',{
        data: requestData
    });
    console.log("Creating Quote...");

    

    return await response.json();
  }

  async closeApiClient() {

    await this.requestContext.dispose();
    console.log("Api Client Closed");
  }
}

export default ApiClient;
