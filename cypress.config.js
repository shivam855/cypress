const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // env: {
  //   url: "https://google.com/",
  // },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
        return require('./cypress/plugins/index.js')(on, config);
    },
    specPattern: "./cypress/integration/*.js",
  },
});
