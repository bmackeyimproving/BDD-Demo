const { Given, When, Then } = require('@cucumber/cucumber');
const { render, screen } = require('@testing-library/react');
const React = require('react');
const { expect } = require('chai');
const Farewell = require('../../Components/Farewell').default;
const Greeting = require('../../Components/Greeting').default;

Given('I have a name {string}', function (name) {
  this.name = name;
});

When('I render the Farewell component', function () {
  render(<Farewell name={this.name} />);
});

When('I render the Greeting component', function () {
  render(<Greeting name={this.name} />);
});

Then('I should see text {string}', function (expectedText) {
  const elements = screen.getAllByText(expectedText); // Declare elements
  expect(elements.length).to.be.greaterThan(0); // Ensure at least one match
});