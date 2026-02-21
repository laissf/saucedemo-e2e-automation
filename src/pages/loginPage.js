class LoginPage {
    constructor(loginPage) {
        this.page = loginPage;
        this.usernameInput = loginPage.locator('[data-test="username"]');
        this.passwordInput = loginPage.locator('[data-test="password"]');
        this.loginButton = loginPage.locator('[data-test="login-button"]');
        this.errorMessage = loginPage.locator('[data-test="error"]');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }
}

module.exports = LoginPage;