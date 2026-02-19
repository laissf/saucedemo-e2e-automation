class LoginPage {
    constructor() {
        this.usernameInput = '#username';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
    }

    enterUsername(username) {
        cy.get(this.usernameInput).type(username);
    }

    enterPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    clickLogin() {
        cy.get(this.loginButton).click();
    }
}