/// <reference types="Cypress" />
import * as loginloc from "../page-object-model/locators/login-page-loc.json";
import * as loginstr from '../page-object-model/data/login-strings.json';
//import * as constants from "../page-object-model/data/constants";
import { LOGIN_CREDENTIALS } from "../page-object-model/data/constants";

describe('Hindu loginpage test suite', () => {

  beforeEach(() => {
    cy.visit(loginstr.urlPage);
  });

  it('Basic incorrect login', () => {
    cy.login(LOGIN_CREDENTIALS.bad.username, LOGIN_CREDENTIALS.bad.password);
    cy.get(loginloc.erroMsg).should("have.text", loginstr.badLoginMsg).and("exist");
  });

  it('Basic correct login', () => {
    cy.login(LOGIN_CREDENTIALS.good.username, LOGIN_CREDENTIALS.good.password);
    cy.get('div.col-lg-3 > .my-4').should("have.text", "Shop Name").and("exist");
  });
});