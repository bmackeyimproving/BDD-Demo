const { Given, When, Then } = require('@cucumber/cucumber');
const { render, screen, cleanup } = require('@testing-library/react');
const React = require('react');
const { expect } = require('chai');
const Farewell = require('../../Components/Farewell').default;
const Greeting = require('../../Components/Greeting').default;

Given('I have a name {string}', function (name) {
  console.log('name comes in as' + name)
  console.log(name);
  this.name = name;
});

When('I render the Farewell component', function () {
  render(<Farewell name={this.name} />);
});

When('I render the Greeting component', function () {
  render(<Greeting name={this.name} />);
});

Then('I should see {string} message twice because it is in 2 components', function (expectedText) {
  const elements = screen.getAllByText(expectedText); // Declare elements
  if (elements.length !== 2) {
    screen.debug(); // Log the current DOM state
  }
  expect(elements.length).to.be.equal(2); // Ensure at least one match
  cleanup();
});

Then('I should see text {string}', function (expectedText) {
  const elements = screen.getAllByText(expectedText); // Declare elements
  if (elements.length !== 1) {
    screen.debug(); // Log the current DOM state
  }
  expect(elements.length).to.be.equal(1); // Ensure at least one match
  cleanup();
});