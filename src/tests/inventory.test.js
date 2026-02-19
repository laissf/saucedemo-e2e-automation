import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

test.describe('Inventory Page Tests', () => {
    let loginPage;
    let inventoryPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        
        // Navigate to the login page and log in
        await loginPage.navigate();
        await loginPage.enterUsername('standard_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.submitLogin();
    });

    test('should display the product list', async () => {
        await inventoryPage.navigate();
        const productList = await inventoryPage.getProductList();
        expect(productList.length).toBeGreaterThan(0);
    });

    test('should add a product to the cart', async () => {
        await inventoryPage.navigate();
        await inventoryPage.addToCart('Sauce Labs Backpack');
        const cartCount = await inventoryPage.getCartCount();
        expect(cartCount).toBe(1);
    });
});