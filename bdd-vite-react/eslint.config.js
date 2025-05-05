import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
  { ignores: ['dist', 'node_modules', 'cypress', '**/*.test.jsx'] },
  js.configs.recommended,
  // Jest and Node globals for test and setup files
  {
    files: ['**/*.test.{js,ts,jsx,tsx}', 'jest.setup.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsEslintParser,
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': 'error', // Show Prettier errors as lint errors
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];