// TC-03 – Invalid Password
// Expected: Error message displayed

//importa dois objetos da biblioteca playwright/test: test e expect. 
const { test, expect } = require('@playwright/test');

//importação do poo, a classe LoginPage do arquivo loginpage.js 
const LoginPage = require('../pages/loginPage');

//async = função assíncrona que recebe o objeto page como argumento. O objeto page é fornecido pelo Playwright e representa a página web onde as ações de teste serão realizadas. 
//page = é a instância do navegador, é o objeto que representa a página web onde as ações serão realizadas. Ele é fornecido pelo Playwright e é usado para interagir com a página, como navegar, clicar em elementos, preencher formulários, etc.
test('invalid_password login attempt', async ({ page }) => {
    const loginPage = new LoginPage(page); //crio uma nova instância da classe LoginPage, passando o objeto page como argumento. Isso permite que a classe LoginPage utilize o objeto page para interagir com a página web durante os testes.
    await page.goto('/'); // uses baseURL from config
    //chamo o método login da classe LoginPage, passando o nome de usuário "standard_user" e a senha "invalid_password". Isso simula uma tentativa de login com uma senha incorreta.
    await loginPage.login('standard_user', 'invalid_password');
    //verifico se a mensagem de erro é exibida e se o texto da mensagem corresponde ao esperado. 
    await expect(loginPage.errorMessage).toBeVisible();
    //verifico se a mensagem de erro é exibida e se o texto da mensagem corresponde ao esperado. 
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});