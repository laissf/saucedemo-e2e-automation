import { defineConfig, devices } from '@playwright/test';
module.exports = {
  testDir: 'src/tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: [['list'], ['html', { open: 'always' }]],
  use: {
    baseURL: 'https://www.saucedemo.com',
    testIdAttribute: 'data-test',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',  // Grava vídeo também quando falha
    trace: 'on-first-retry',     // Rastreia execução
    // slowMo: 500000,
    screenshot: true,
  },
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
      },
    },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 16 Pro'],
    //   },
    // },
  ],
};

