# 1. Use Page Component Architecture

* Status: Accepted
* Date: 2022-12-21

## Context and Problem Statement

The current React application is organized in a way that is not easy to understand nor maintain. The src/pages directory contains a mix of components and pages, and the way that pages are organized is not consistent.

## Decision

We will organize the application using a page component architecture. This means that each page will be a single component, and all of the components for that page will be organized as children of that page component.

## Consequences

* Pages will be easier to understand and maintain, since all of the components for a page will be organized in a single place.
* The src/pages directory will be easier to navigate, since it will only contain pages, and not a mix of components and pages.
* It will be easier to add new pages, since all of the components for the page will be organized in a single place.