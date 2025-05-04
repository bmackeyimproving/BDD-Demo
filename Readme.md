A Project template for React + Vite + Cypress w/ Cucumber + Jest + MUI + ESLint

Uses Github Actions for CI/CD.  Gated by linting, testing, and BDD testing


## All commands run from FE base directory
cd bdd-vite-react

## Setup
npm install
### Launches to http://localhost:5173/
npm run dev

## Run unit tests
npm test

## Run BDD tests headless
### First launch the website using npm run dev
### Then run the BDD tests
npm run bdd:headless

### Opens Cypress
npm run bdd:open

# Component library
https://mui.com/material-ui/react-tabs/


# Helpful links 

https://github.com/cucumber/cucumber-js-examples?tab=readme-ov-file