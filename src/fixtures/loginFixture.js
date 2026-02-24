const { test as base} = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

exports.test = test.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await use(loginPage);
    }
});

exports.expect = require('@playwright/test').expect;