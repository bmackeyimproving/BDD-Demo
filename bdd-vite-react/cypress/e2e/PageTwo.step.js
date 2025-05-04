import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the Landing page', () => {
  cy.visit('/');
});

Given('I click the Page Two link', () => {
  cy.get('a').contains('Page Two').click();
});

Then('I should see text {string}', (text) => {
  cy.contains(text);
});
