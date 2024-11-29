import * as loginloc from "../../page-object-model/locators/login-page-loc.json";

Cypress.Commands.add("login", (username, password) => {
    cy.get(loginloc.usernameInp).type(username);
    cy.get(loginloc.passwordInp).type(password);
    cy.get(loginloc.signInBtn).click();
});