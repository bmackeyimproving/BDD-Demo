import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the Hello World page', () => {
  cy.visit('https://example.cypress.io');
});

Then('I should see {string}', (text) => {
  cy.contains(text);
});
