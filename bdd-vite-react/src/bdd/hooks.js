import { Before, After } from '@cucumber/cucumber';
const { render, screen, cleanup } = require('@testing-library/react');

Before(function () {
    console.log("Fake login hook");
    cleanup();
});

After(function () {
    console.log("Fake logout hook");
    cleanup();
});