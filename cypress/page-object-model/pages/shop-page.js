Cypress.Commands.add('addProductToCard', (productName) => {
    cy.get('.card-body').contains(productName).parents('app-card').find('.btn.btn-info').click();
});

Cypress.Commands.add('shop', () => {
    cy.get('.btn.btn-info').then(mynuevavar => {
        for (var i = 0; i < mynuevavar.length; i++)
            cy.wrap(mynuevavar).eq(i).click();
    });
});
