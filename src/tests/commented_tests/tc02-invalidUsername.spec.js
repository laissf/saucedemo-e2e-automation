// TC-02 – Invalid Username
// User: invalid_user
// Expected: Error message displayed
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginPage');

test('invalid_user login attempt', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/'); // uses baseURL from config
    await loginPage.login('invalid_user', 'secret_sauce');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});