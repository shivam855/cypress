const { defineConfig } = require("cypress");
const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib");
// const TestRailReporter = require("cypress-testrail");

module.exports = defineConfig({
  video: true,
  experimentalStudio: true,
  experimentalInteractiveRunEvents: true,
  chromeWebSecurity: true,
  trashAssetsBeforeRuns: true,
  pageLoadTimeout: 120000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: true,
  },
  env: {
    CYPRESS_ENV: "DEV",
    CYPRESS_USER: "admin",
    CYPRESS_PASSWORD: "admin",
    QA_BASE_URL: "https://admin-qa.simpleonlinehealthcare.co.uk/",
    DEV_BASE_URL: "https://admin-dev.simpleonlinehealthcare.co.uk/",
    PROD_BASE_URL: "https://simpleonlinehealthcare.co.uk/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("before:run", async (details) => {
        console.log("override before:run");
        await beforeRunHook(details);
      });

      on("after:run", async () => {
        console.log("override after:run");
        await afterRunHook();
      });
      require("cypress-mochawesome-reporter/plugin")(on);

      // new TestRailReporter(on, config).register();
      // return config;
    },
  },
});
