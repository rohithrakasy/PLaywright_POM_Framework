import { expect } from "@playwright/test";

export class AdminAppLoginPage{

    constructor(page){
        this.page = page;

        this.email = page.getByPlaceholder("admin@suretyforce.com");
        this.password = page.getByPlaceholder("Enter your password");
        this.signinBtn = page.getByRole('button',{name:'Sign In',exact:true});
    }

    async loginwithvalidCredentials(url,userName, password){

        await this.page.goto(url);

        await this.email.fill(userName);
        await this.password.fill(password);

        await expect(this.signinBtn).toBeEnabled();

        await this.signinBtn.click();
    }
}