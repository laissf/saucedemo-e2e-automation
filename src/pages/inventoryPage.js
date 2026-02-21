class InventoryPage {
    constructor(page) {
        this.page = page;
        this.productTitle = page.locator('.inventory-item-name"]');
        this.addToCartButton = page.locator('.add-to-cart-button');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]  ');
    }

    async addProductToCart(productName) {
        const product = this.page.locator(`.inventory-item-name:has-text("${productName}")`);
        await product.locator('.add-to-cart-button').click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}
module.exports = InventoryPage;
