module.exports = {
  testDir: 'src/tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: 'list',
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        connectOptions: {
          wsEndpoint: 'ws://localhost:3000', // URL do MCP Server
        },
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
        connectOptions: {
          wsEndpoint: 'ws://localhost:3000', // URL do MCP Server
        },
      },
    },
  ],
};