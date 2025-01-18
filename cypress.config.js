const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', // Directory to save the report
    overwrite: false,
    html: true,
    json: true},  
  "defaultCommandTimeout": 600000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/Tests'
  },
});
