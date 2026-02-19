// This file contains end-to-end tests for the login functionality using Playwright.

const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test.describe('SauceDemo Login Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('Successful login with valid credentials', async () => {
        await loginPage.enterUsername('standard_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.submitLogin();
        
        // Assert that the inventory page is displayed
        await expect(page).toHaveURL(/.*inventory/);
    });

    test('Unsuccessful login with invalid credentials', async () => {
        await loginPage.enterUsername('invalid_user');
        await loginPage.enterPassword('wrong_password');
        await loginPage.submitLogin();
        
        // Assert that an error message is displayed
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe('Username and password do not match any user in this service');
    });
});