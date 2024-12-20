/// <reference types="cypress" />
describe('e2e', () => {

    it ('Should show header when react app loaded', () => {
        cy.visit('/');
    })
})