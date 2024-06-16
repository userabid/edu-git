const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com/',
    defaultCommandTimeout: 6000,
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
