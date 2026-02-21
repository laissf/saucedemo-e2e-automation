module.exports = {
  testDir: 'src/tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: 'list',
  use: {
    baseURL: 'https://www.saucedemo.com',
    // headless: false,           // Abre o navegador
    // slowMo: 5000,              // Pausa de 1 segundo entre cada ação
    // viewport: { width: 1280, height: 720 }, // Define tamanho da janela
  },
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
};