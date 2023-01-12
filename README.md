## CYPRESS ##

For Scheduling a Job On Given Interval https://crontab-generator.org/


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
    
    
    
