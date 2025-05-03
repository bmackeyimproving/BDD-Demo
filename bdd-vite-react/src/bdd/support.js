// This file will be required before all Cucumber tests to set up jsdom
const { JSDOM } = require('jsdom');
const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);
global.window = dom.window;
global.document = dom.window.document;

Object.defineProperty(global, 'navigator', {
  value: dom.window.navigator,
  configurable: true,
  enumerable: true,
  writable: true
});