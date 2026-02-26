const { test, expect } = require('../fixtures/loginFixture');
const LoginPage = require('../pages/loginPage');
const { TEST_CREDENTIALS, ERROR_MESSAGES } = require('../utils/testData');


test('successful login', async ({ page, loginPage }) => {
    await loginPage.login(TEST_CREDENTIALS.standard.username, TEST_CREDENTIALS.standard.password);
    await expect(page).toHaveURL(/.*inventory.*/);
    await expect(page.locator('.inventory_list')).toBeVisible();
});

test('invalid username login attempt', async ({ loginPage }) => {
    await loginPage.login(TEST_CREDENTIALS.invalid.username, TEST_CREDENTIALS.standard.password);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(ERROR_MESSAGES.invalidCredentials);
});

test('invalid password login attempt', async ({ loginPage }) => {
    await loginPage.login(TEST_CREDENTIALS.standard.username, 'invalid_password');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(ERROR_MESSAGES.invalidCredentials);
});

test('empty username login attempt', async({ loginPage })=>{
    await loginPage.login('', TEST_CREDENTIALS.standard.password);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(ERROR_MESSAGES.emptyUsername);
});

test('empty password login attempt', async({ loginPage })=>{
    await loginPage.login(TEST_CREDENTIALS.standard.username, '');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(ERROR_MESSAGES.emptyPassword);
});