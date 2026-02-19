# Saucedemo E2E Automation

This project is an end-to-end automation framework for testing the Saucedemo website using Playwright with JavaScript and Object-Oriented Programming (OOP) principles.

## Project Structure

```
saucedemo-e2e-automation
├── src
│   ├── pages
│   │   ├── basePage.js        # Contains common methods for all page objects
│   │   ├── loginPage.js       # Contains methods specific to the login page
│   │   └── inventoryPage.js   # Contains methods specific to the inventory page
│   ├── tests
│   │   ├── login.test.js      # End-to-end tests for login functionality
│   │   └── inventory.test.js   # End-to-end tests for inventory functionality
│   └── utils
│       └── helpers.js         # Utility functions for tests and page objects
├── package.json                # npm configuration file
├── playwright.config.js        # Playwright configuration file
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd saucedemo-e2e-automation
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the tests:**
   To execute all tests, use the following command:
   ```
   npx playwright test
   ```

## Usage

- The `src/pages` directory contains page object classes that encapsulate the functionality of each page.
- The `src/tests` directory contains test files that utilize the page objects to perform end-to-end tests.
- Utility functions can be found in the `src/utils/helpers.js` file, which can be imported as needed.

## Examples

- To run the login tests:
  ```
  npx playwright test src/tests/login.test.js
  ```

- To run the inventory tests:
  ```
  npx playwright test src/tests/inventory.test.js
  ```

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.