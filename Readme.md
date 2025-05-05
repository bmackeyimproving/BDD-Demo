![CI](https://github.com/bmackeyimproving/BDD-Demo/actions/workflows/ci.yml/badge.svg) ![Node.js Version](https://img.shields.io/node/v/vite) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)

A Project template for React + Vite + Cypress w/ Cucumber + Jest + MUI + ESLint + Prettier

Uses Github Actions for CI/CD.  Gated by linting, testing, and BDD testing

## Architecture Decisions
See [bdd-vite-react/docs/adr/](bdd-vite-react/docs/adr/) for key architectural decisions in this project.

## All commands run from FE base directory
cd bdd-vite-react

## Setup
npm install
npm run dev # Launches to http://localhost:5173/

## Run unit tests
npm test

## Run BDD tests headless
### First launch the website using npm run dev

### Then run the BDD tests
npm run bdd:headless
### OR Open Cypress - good for local development and debugging
npm run bdd:open

# Component library
https://mui.com/material-ui/react-tabs/


# Helpful links 

https://docs.cypress.io/app/get-started/why-cypress#End-to-end-Testing

https://github.com/badeball/cypress-cucumber-preprocessor
