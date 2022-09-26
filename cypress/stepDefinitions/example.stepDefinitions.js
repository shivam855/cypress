import { Given, Then , When } from "cypress-cucumber-preprocessor/steps";
import actions from "..//action/action.js";

Given('I open Google page', () => {
  actions.visitingUrl();
});

When("I enter {string} on the {string} tab", (url ,field) => {
  actions.enteringValue(url);
});

Then("I verify the url contains {string}", value => {
  cy.url().should('contain', value);
});

