import { expect } from "@playwright/test";

export class TermsConditionsPage {

    constructor(page){
        this.page = page;

        this.termsheader = page.getByRole('heading',{name:"Terms & Conditions", exact: true});
    }

    
}