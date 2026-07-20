class BasePage {

    constructor(page){
        this.page = page;
    }

    async navigate(url){
        await this.page.goto(url);
    }

    async takescreenshot(fileName){
        await this.page.screenshot({
            path: `test-result/${fileName}.png`,
            fullPage: true
        });
    }

    async waitForPageLoad(){
        await this.page.waitForPageLoad('networkidle');
    }

    async click(locator){
        await locator.click();
    }

    async fill(locator,text){
        await locator.fill(text);
    }

    async getText(locator){
        return await locator.textContent();
    }

    async isvisible(locator){
        return await locator.isvisible();
    }

    async waitforElement(locator){
        await locator.waitfor();
    }
}

module.exports = BasePage;