import { expect } from "@playwright/test"

export class AdminHomePage{

    constructor(page){
        this.page = page;

        this.termsConditionsBtn = page.getByRole('link',{name:'Terms & Conditions',exact:'true'});
        this.usersBtn = page.getByRole('link',{name:'Users',exact:true})
  
    }


    async navigateToTermsConditionsModule(){

        await expect(this.termsConditionsBtn).toBeEnabled();
        await this.termsConditionsBtn.click();

        
    }

    async navigateToUsersModule(){

        await expect(this.usersBtn).toBeEnabled();
        await this.usersBtn.click();

        
    }
}