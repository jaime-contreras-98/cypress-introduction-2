import * as loginstr from '../page-object-model/data/login-strings.json';
//import * as constants from "../page-object-model/data/constants";
import { LOGIN_CREDENTIALS } from "../page-object-model/data/constants";

describe("Purchase products", () => {

    beforeEach(() => {
        cy.visit(loginstr.urlPage);
        cy.login(LOGIN_CREDENTIALS.good.username, LOGIN_CREDENTIALS.good.password);
        cy.get('div.col-lg-3 > .my-4').should("have.text", "Shop Name").and("exist");
    });

    it("Purchase a blackberry", () => {
        cy.shop();
        //cy.addProductToCard('Nokia Edge');
        // cy.get('.btn.btn-info').eq(0).click();
        //cy.get('.btn.btn-info').first().click();
        //cy.get('.btn.btn-info').last().click();
        // cy.get('.card-body').contains('Nokia Edge').parents('app-card').find('.btn.btn-info').click();
    });
});