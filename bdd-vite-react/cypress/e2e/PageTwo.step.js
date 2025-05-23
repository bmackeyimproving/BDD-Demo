import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the Landing page', () => {
  cy.visit('/');
});

Given('I click the Data Grid link', () => {
  cy.get('a').contains('Data Grid').click();
});

Then('I should get data using HTML5 attributes', () => {
  cy.get('[data-test-example="get-data"]').should('have.text', 'Get Data in ways that are not fragile');
});

Then('I should see text {string}', (text) => {
  cy.contains(text);
});
