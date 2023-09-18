const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  execTimeout: 50000,
  requestTimeout: 50000,
  taskTimeout: 30000,
  responseTimeout: 30000,
  video: false,
  chromeWebSecurity: false,
  retries1: {
    runMode: 3,
  },
  env: { currentRun: "PROD" },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  videoUploadOnPasses: false,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
