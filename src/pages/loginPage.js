class LoginPage {
    constructor(loginPage) {
        this.page = loginPage;
        this.usernameInput = loginPage.getByTestId('username');
        this.passwordInput = loginPage.getByTestId('password');
        this.loginButton = loginPage.getByTestId('login-button');
        this.errorMessage = loginPage.getByTestId('error');
        
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