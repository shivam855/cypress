// # Feature: adding first time

// #   Background:
// #     Given I open Google page

// #   Scenario Outline: visiting the frontpage
// #     When I enter "<url>" on the "search" tab
// #     Then I verify the url contains "<urlContains>"

// #     Examples:
// #       | url               | urlContains |
// #       | {\"id\":\"url1\"} | Youtube     |
// #       | {\"id\":\"url2\"} | Facebook    |


// cypress/integration/login_spec.js

describe('Login Test', () => {
  it('should log in with valid credentials', () => {
    // Visit the login page
    cy.visit('https://www.google.com/');

  //   // Type username and password
  //   cy.get('input[name="username"]').type('your_username');
  //   cy.get('input[name="password"]').type('your_password');

  //   // Click the login button
  //   cy.get('button[type="submit"]').click();

  //   // Assert that the user is redirected to the dashboard or a page indicating successful login
  //   cy.url().should('include', '/dashboard');

  //   // Assert that a welcome message is visible
  //   cy.get('.welcome-message').should('be.visible');
  // });

  // it('should show an error with invalid credentials', () => {
  //   // Visit the login page
  //   cy.visit('https://example.com/login');

  //   // Type invalid username and password
  //   cy.get('input[name="username"]').type('invalid_username');
  //   cy.get('input[name="password"]').type('invalid_password');

  //   // Click the login button
  //   cy.get('button[type="submit"]').click();

  //   // Assert that an error message is displayed
  //   cy.get('.error-message').should('be.visible');
  });
});
