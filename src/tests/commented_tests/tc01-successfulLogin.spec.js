// TC-01 – Successful Login
// User: standard_user
// Expected: Redirect to inventory page

const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginPage');

test('standard_user successful login', async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('/'); // uses baseURL from config
    await login.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory.*/);
    await expect(page.locator('.inventory_list')).toBeVisible();
});

