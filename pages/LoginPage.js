const BasePage = require("./BasePage");

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async openLoginPage() {
    await this.navigate("/web/index.php/auth/login");
  }

  async login(userName, password) {
    
    await this.fill(this.usernameInput, userName);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);

    
  }

  //Inside a class No need of using Function keyword, its a java script syntax

  splitValue(text, splitter) {
    return text.split(splitter)[1].trim();
  }

  async getLoginCredentials() {
    let credentials = [];

    for (let index = 0; index < 2; index++) {
      let fetchloginDetails = await this.page
        .locator("p.oxd-text")
        .nth(index)
        .textContent();

      credentials.push(this.splitValue(fetchloginDetails, ":"));
    }

    console.log("User Name: " + credentials[0]);
    console.log("Password: " + credentials[1]);
    return credentials;
  }
}

module.exports = LoginPage;
