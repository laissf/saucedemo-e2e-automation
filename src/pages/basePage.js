class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async waitForElement(selector) {
        await this.page.waitForSelector(selector);
    }
}

export default BasePage;