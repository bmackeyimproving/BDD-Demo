export default [
  '--require-module',
  '@babel/register',
  '--require',          // Remove these 2 lines to go back to the original broken state
  './src/bdd/setup.js', // This does have an impact on BDD test results
  '--require',
  './src/bdd/support.js',
  '--require',
  './src/bdd/hooks.js',
  '--require',
  './src/**/*.steps.js',
  './src/**/*.feature',
];