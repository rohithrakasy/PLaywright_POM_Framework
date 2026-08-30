import loginData from "../test-data/loginData.json";
import BaseApi from "./BaseApi";

class AuthApi extends BaseApi {
  constructor(requestContext) {
    super(requestContext);
  }

   

  async login(loginrequestData) {
    const response = await this.post("/api/auth/userlogin", loginrequestData);

    if (!response.ok()) {
      const errorBody = await response.text();

      throw new Error(
        `Login Response failed to produce token: ${response.status()}: ${response.errorBody}`,
      );
    }

    const fetchresponseJson = await response.json();

    if(!fetchresponseJson.token){
      throw new Error('Login Response does not contain token'
      );
    }

    return fetchresponseJson;
    
  }

  // async login({ email, password, device_id }) {
  //   const response = await this.requestContext.post('/api/auth/userlogin', {
  //     data: {
  //       email,
  //       password,
  //       device_id,
  //     },
  //   });

  //   if (!response.ok()) {
  //     const errorBody = await response.text();
  //     throw new Error(`Login failed: ${response.status()} ${errorBody}`);
  //   }

  //   const responseBody = await response.json();

  //   return responseBody.token;
  // }
}

export default AuthApi;
