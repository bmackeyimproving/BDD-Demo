import { Before, After } from '@cucumber/cucumber';

Before(function () {
    console.log("Fake login hook")
});

After(function () {
    console.log("Fake logout hook")
});