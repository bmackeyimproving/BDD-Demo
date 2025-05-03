const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { render, screen } = require('@testing-library/react');
const React = require('react');
const { MemoryRouter } = require('react-router-dom');
const PageOne = require('../../pages/PageOne').default;
const PageTwo = require('../../pages/PageTwo').default;

Given('I am on the {string} page', function (page) {
  if (page === 'Page One') {
    render(
      <MemoryRouter>
        <PageOne />
      </MemoryRouter>
    );
  } else if (page === 'Page Two') {
    render(
      <MemoryRouter>
        <PageTwo />
      </MemoryRouter>
    );
  }
});


