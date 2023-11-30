// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// const cucumber = require('cypress-cucumber-preprocessor').default;
// const fs = require("fs");

// module.exports = (on, config) => {
//   on('file:preprocessor', cucumber());
//   on("task", {
//     getData({ filter }) {
//       return new Promise(resolve => {
//           console.log("Data is appended to file successfully.");
//           resolve("");
//           client.close();
//         });
//     }
//   });
// }

//// <reference types=”@shelex/cypress-allure-plugin” />
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  allureWriter(on, config);
  // other configurations...

  return config;
};

