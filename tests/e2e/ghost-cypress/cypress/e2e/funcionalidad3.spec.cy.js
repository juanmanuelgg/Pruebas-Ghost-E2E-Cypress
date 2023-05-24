import { globalVariables } from '../environment/credentials';
import { faker } from '@faker-js/faker';

const ghostVersion = Cypress.env('GHOST_VERSION');
const ghostPort = Cypress.env('GHOST_PORT');

//Funcionalidad Enviar e-mail de invitacion al staff
//Escenario 1

describe('Con mi usuario de ghost quiero enviar una invitacion a un email', () => {
    //And I click on the tag function
    beforeEach('Hacer Login', () => {
        cy.hacerLogin(
            globalVariables.password,
            'site',
            'nav.gh-nav.ember-view'
        );
    });
    it('Hacer click en la funcionalidad para crear tag y llenar formulario', () => {
        //And I click on the staff function
        cy.hacerClickEnFuncionalidad('staff');

        //Then A save button should exist
        cy.get('button.gh-btn.gh-btn-green').should('exist');

        //And I click on add new tag
        cy.get('button.gh-btn.gh-btn-green').click();

        //Then A form should esxist
        cy.get(`input[name="email"],input[name="role"]`).should('exist');

        //And I enter an email
        cy.get(`input[name="email"]`).type(faker.internet.email());

        //And I save the invitation
        cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click();

        //Then An Error must exist
        cy.get('.gh-alert.gh-alert-red.ember-view .gh-alert-content').should(
            'exist'
        );
    });
});

//Escenario 2

describe('Con mi usuario de ghost quiero enviar una invitacion a un email con email invalido', () => {
    //And I click on the tag function
    beforeEach('Hacer Login', () => {
        cy.hacerLogin(
            globalVariables.password,
            'site',
            'nav.gh-nav.ember-view'
        );
    });
    it('Hacer click en la funcionalidad para crear tag y llenar formulario', () => {
        cy.hacerClickEnFuncionalidad('staff');

        cy.get('button.gh-btn.gh-btn-green').should('exist');

        cy.get('button.gh-btn.gh-btn-green').click();

        cy.get(`input[name="email"],input[name="role"]`).should('exist');

        cy.get(`input[name="email"]`).type(faker.name.fullName());

        cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click();

        cy.get('.retry_svg__retry-animated').should('exist');
    });
});

//Escenario 3

describe('Con mi usuario de ghost quiero enviar una invitacion a un email ya existente en las invitaciones', () => {
    //And I click on the tag function
    beforeEach('Hacer Login', () => {
        cy.hacerLogin(
            globalVariables.password,
            'site',
            'nav.gh-nav.ember-view'
        );
    });
    it('Hacer click en la funcionalidad para crear tag y llenar formulario', () => {
        cy.hacerClickEnFuncionalidad('staff');

        cy.get('button.gh-btn.gh-btn-green').should('exist');

        cy.get('button.gh-btn.gh-btn-green').click();

        cy.get(`input[name="email"],input[name="role"]`).should('exist');

        let existing_email = faker.internet.email();
        cy.log(existing_email);
        cy.get(`input[name="email"]`).type(existing_email);

        cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click();

        cy.get('.gh-alert.gh-alert-red.ember-view .gh-alert-content').should(
            'exist'
        );
        cy.hacerClickEnFuncionalidad('staff');

        cy.get('button.gh-btn.gh-btn-green').click();
        cy.get(`input[name="email"]`).first().type(existing_email);

        cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click();

        cy.get(
            '.gh-alert.gh-alert-red.ember-view .gh-alert-content,p.response'
        ).should('exist');
    });
});

//Escenario 4

describe('Con mi usuario de ghost quiero enviar una invitacion a un email con un rol dirente', () => {
    //And I click on the tag function
    beforeEach('Hacer Login', () => {
        cy.hacerLogin(
            globalVariables.password,
            'site',
            'nav.gh-nav.ember-view'
        );
    });
    it('Hacer click en la funcionalidad para crear tag y llenar formulario', () => {
        cy.hacerClickEnFuncionalidad('staff');

        cy.get('button.gh-btn.gh-btn-green').should('exist');

        cy.get('button.gh-btn.gh-btn-green').click();

        cy.get(`input[name="email"],input[name="role"]`).should('exist');

        cy.get('#new-user-role').select('6457302b5ab6ff0001fba497');

        cy.get(`input[name="email"]`).type(faker.internet.email());

        cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click();

        cy.get('.gh-alert.gh-alert-red.ember-view .gh-alert-content').should(
            'exist'
        );
    });
});
