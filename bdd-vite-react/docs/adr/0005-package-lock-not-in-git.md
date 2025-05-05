# 1. Package-lock.json not in git

* Status: Accepted
* Date: 2025-05-04

## Context and Problem Statement

Due to conflicts with package-lock.json which are often difficult to resolve, we will not include it in git. Instead, developers should standardize on a single version of Node.js and npm.