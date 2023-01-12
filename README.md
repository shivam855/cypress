## CYPRESS ##

For Scheduling a Job On Given Interval https://crontab-generator.org/

** For Domain Issues **
https://download.cypress.io/desktop/10.7.0
CYPRESS_INSTALL_BINARY=0 npm install
CYPRESS_INSTALL_BINARY=/c/SSIBUIBOOKING/cypress.zip npm install cypress

**For web pack issue we need this**
In Index File :
const cucumber = require("cypress-cucumber-preprocessor").default;
  module.exports = (on, config) => {
    on("file:preprocessor", cucumber());
    }
In cypress file :
setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
For Feature File we want read :    
specPattern: 'cypress/integration/**/*/*.{feature,features}',
    
    
    
