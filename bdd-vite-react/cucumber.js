export default [
  '--require-module',
  '@babel/register',
  '--require',
  './src/features/support.js',
  '--require',
  './src/**/*.steps.js',
  './src/**/*.feature',
];
