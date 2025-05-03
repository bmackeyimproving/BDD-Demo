const { Given, Then } = require('@cucumber/cucumber');
const { render, screen, cleanup } = require('@testing-library/react');
const React = require('react');
const HelloWorld = require('../HelloWorld').default;

Given('I am on the Hello World component', function () {
  render(React.createElement(HelloWorld));
});

Then('I should see {string}', function (text) {
  screen.getByText(text);
  cleanup();
});
