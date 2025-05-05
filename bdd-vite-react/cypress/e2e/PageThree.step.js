import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

beforeEach(() => {
  cy.log('fake login')
});

afterEach(() => {
  cy.log('fake logout')
});

Given('I open the Page Three page', () => {
  cy.visit('/page-three'); // Adjust the URL to match the route for Page Three
});

Then('I should see text {string}', (text) => {
  cy.contains(text);
});
