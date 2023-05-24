// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { globalVariables } from '../environment/credentials';

const ghostPort = Cypress.env('GHOST_PORT');

Cypress.Commands.add('hacerClickEnFuncionalidad', (url_link) => {
    cy.get(`a[href="#/${url_link}/"]`).first().click();
    cy.wait(1000);
});

Cypress.Commands.add('hacerLogin', (password, expectedUrl, expectedElem) => {
    //Given the url
    let url = globalVariables.baseUrl;
    const aux = url.split(':');
    if (aux.length > 1) {
        const aux2 = aux[1].split('/');
        const noPort = [];
        for (let i = 1; i < aux2.length; i++) noPort.push(aux2[i]);

        url = aux[0] + ':' + ghostPort + noPort.join('/');
    }

    cy.visit(url);
    //And I enter login email
    cy.get('#ember8').type(globalVariables.email);
    //And I enter the password
    cy.get('#ember10').type(password);
    //And I click on submit button
    cy.get('#ember12').click();
    //Then url should end in #/site
    cy.url().should('equal', url + '#/' + expectedUrl);
    //Then navbar should exist
    cy.get(expectedElem).should('exist');
});
