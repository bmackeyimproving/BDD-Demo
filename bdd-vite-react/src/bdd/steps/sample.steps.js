const { Given, Then, When } = require('@cucumber/cucumber');
const { render, screen, cleanup, fireEvent } = require('@testing-library/react');
const React = require('react');
const HelloWorld = require('../../Components/HelloWorld').default;

Given('I am on the Hello World component', function () {
  render(React.createElement(HelloWorld));
});

Given('I am on the Hello World component with text {string}', function (customText) {
  render(React.createElement(HelloWorld, { text: customText }));
});

When('I click the button', function () {
  fireEvent.click(screen.getByRole('button', { name: /clicked/i }));
});

When('I click the reset button', function () {
  fireEvent.click(screen.getByRole('button', { name: /reset/i }));
});

Then('I should see {string}', function (text) {
  screen.getByText(text);
  cleanup();
});
