[![Code Review](https://github.com/GeniePrinie/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/GeniePrinie/social-media-client/actions/workflows/gpt.yml)
[![Automated Unit Testing](https://github.com/GeniePrinie/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/GeniePrinie/social-media-client/actions/workflows/unit-test.yml)
[![Automated E2E Testing](https://github.com/GeniePrinie/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/GeniePrinie/social-media-client/actions/workflows/e2e-test.yml)
[![Deploy static content to Pages](https://github.com/GeniePrinie/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/GeniePrinie/social-media-client/actions/workflows/pages.yml)

# Social Media Client - Workflow CA by Prinyapon Prinyanut

### The existing application starting point:
Note that the starting point for this project was a social media app provided by Noroff (https://github.com/NoroffFEU/social-media-client).
The application already contained:
- A front-end login form connected to an API JWT endpoint
- A front-end logout button connected to browser storage
- Front-end CRUD functionality for at least one object type
- A front-end profile page

### Prettier configurations
Prettier was installed and configured to run on commit. The default settings worked well enough for this CA.
If desired, other configurations (e.g. prettier on-save) could be implemented. 

### ESLint configurations
ESLint was installed and configured with pre-commit hooks.
To edit the configuration (e.g. add or remove rules), access the .eslintrc.json

### A protected default branch
The branch 'workflow-v2' has been used to deploy site, because the 'master' branch is reserved for submission of the CA. Therefore, both the 'workflow-v2' branch and the 'master' branch have got protection rules on them. Both the Unit tests and the E2E tests need to run successfully before you are allowed to merge into there two branches.

### Jest Unit tests
The coverage of Unit tests is very slim. Only two functionalities have been testet with the testing tool Jest (the login and logout functionality). These tests do however cover important features, fetch request towards a Noroff api and interaction with local storage in browser.

### Cypress E2E tests
The coverage of End-to-End tests is very slim. Only two functionalities have been testet with the testing tool Cypress (the login and logout functionality). To run these tests locally, add a file `cypress.env.json` in your root and add the following code (with valid username and password):
```json
{
    "user": {
        "email": "email",
        "password": "password",
        "wrongpassword": "wrongpassword"
    }
}
  ```

### Github actions workflow
The project is configured to run Unit tests, E2E tests, build and deploy to pages on merge to 'workflow-v2' branch.
