export default [
  '--require-module',
  '@babel/register',
  '--require',
  './src/bdd/support.js',
  '--require',
  './src/bdd/hooks.js',
  '--require',
  './src/**/*.steps.js',
  './src/**/*.feature',
];
