/// <reference types="cypress" />
describe('e2e', () => {

    it ('Should show header when react app loaded', () => {
        cy.visit('/');
    });

    /*
    it('register user', () => {

        cy.visit('/');

        // Button "Registrieren" klicken
        cy.get('button.nav-register').then(item => {
            cy.wrap(item).should('exist');
            cy.wrap(item).click();
        });

        // Prüfen, ob die Registrierungseite geöffnet wurde
        cy.get('h1#title').should('exist');

        // Vorname
        cy.get('input#firstName').then(item => {
            cy.wrap(item).should('exist');
            cy.wrap(item).type('Max');
        });

        // Nachname
        cy.get('input#lastName').then(item => {
            cy.wrap(item).should('exist');
            cy.wrap(item).type('Mustermann');
        });

        // E-Mail
        cy.get('input#email').then(item => {
            cy.wrap(item).should('exist');
            cy.wrap(item).type('max@mustermann.com');
        });

        // Password
        cy.get('input#password').then(item => {
            cy.wrap(item).should('exist');
            cy.wrap(item).type('123456');
        });

        // Register
        cy.get('button#password').then(item => {
            cy.wrap(item).should('exist');
            cy.wrap(item).click();
        });

    });
    */

    it('login user', () => {

        cy.visit('/');

        // Button "Registrieren" klicken
        cy.get('button.nav-login').then(item => {
            cy.wrap(item).should('exist');
            cy.wrap(item).click();
        });

        // Prüfen, ob die Registrierungseite geöffnet wurde
        cy.get('h1#title').should('exist');

        // E-Mail
        cy.get('input#email').then(item => {
            cy.wrap(item).should('exist');
            cy.wrap(item).type('max@mustermann.com');
        });

        // Password
        cy.get('input#password').then(item => {
            cy.wrap(item).should('exist');
            cy.wrap(item).type('123456');
        });

        // Register
        cy.get('button#login').then(item => {
            cy.wrap(item).should('exist');
            cy.wrap(item).click();
        });

        cy.url().should(
            'be.equal',
            `${Cypress.config("baseUrl")}/admin`
        );
    
    });

})