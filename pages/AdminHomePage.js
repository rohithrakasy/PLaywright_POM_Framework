import { expect } from "@playwright/test"

export class AdminHomePage{

    constructor(page){
        this.page = page;

        this.termsConditionsBtn = page.getByRole('link',{name:'Terms & Conditions',exact:'true'});
    }


    async navigateToTermsConditionsModule(){

        await expect(this.termsConditionsBtn).toBeEnabled();
        await this.termsConditionsBtn.click();

        
    }
}