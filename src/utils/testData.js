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
    invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
    emptyUsername: 'Epic sadface: Username is required',
    emptyPassword: 'Epic sadface: Password is required'
};

module.exports = { TEST_CREDENTIALS, ERROR_MESSAGES };