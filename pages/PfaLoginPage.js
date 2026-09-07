export class PfaLoginPage {

    constructor(page){
        this.page = page;

        this.emailInput =  page.getByPlaceholder("johndoe@email.com");
        this.passwordInput = page.locator("input[type='password']");
        this.signinBtn = page.getByRole('button',{name:'Sign In'});
        this.skipBtn = page.getByRole("button", { name: "Skip for Now" });
    }

    async navigateToWebsite(url){

        await this.page.goto(url);
        await this.page.waitForLoadState('domcontentloaded');

    }

    async Userlogin(email,password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signinBtn.click();        
    }

    async clickNotifications(){

        await this.skipBtn.click();
    }




}

// module.exports = PfaLoginPage;