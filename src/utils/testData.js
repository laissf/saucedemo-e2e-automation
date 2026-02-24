const TEST_CREDENTIALS = {
    standard: {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    invalid: {
        username: 'invalid_user',
        password: 'secret_sauce'
    }
};

const ERROR_MESSAGES = {
    invalidCredentials: 'Epic sadface: Username and password do not match any user in this service'
};

module.exports = { TEST_CREDENTIALS, ERROR_MESSAGES };