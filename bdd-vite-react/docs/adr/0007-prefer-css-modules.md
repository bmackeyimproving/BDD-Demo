# 1. Prefer CSS Modules

* Status: Accepted
* Date: 2025-05-04

## Context and Problem Statement

CSS Modules contain the scope of styles within a component, which helps prevent global style conflicts and makes it easier to manage styles in a large application.  Plan to convert this application to use CSS Modules.  

Limited use of global styles will be allowed and should be used sparingly. Limit use to the index.scss file so these changes are centralized and well documented. Cases where global styles are needed for example are in MUI components to override default styles. Or more generally, to override styles from 3rd party components.

## Decision

Rename a file to ModuleName.module.scss from ModuleName.scss to allow the use of CSS Modules. Then you will need to fix imports. And apply the styles object to use the styles from the module.

