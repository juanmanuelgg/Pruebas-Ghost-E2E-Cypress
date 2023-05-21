import { globalVariables } from '../../environment/credentials';
import { faker } from '@faker-js/faker';
//Funcionalidad Crear un Tag
//Escenario 1

describe('Con mi usuario de ghost creo un Tag', () => {
    //And I click on the tag function
    beforeEach('Hacer Login', () => {
        cy.hacerLogin(
            globalVariables.password,
            'site',
            'nav.gh-nav.ember-view'
        );
    });
    let current_slug = '';
    it('Hacer click en la funcionalidad para crear tag y llenar formulario', () => {
        cy.hacerClickEnFuncionalidad('tags');
        //Then I should have a new tag button
        cy.get("a[href='#/tags/new/']").should('exist');
        //And I click on the new tag button
        cy.wait(1000);
        cy.get("a[href='#/tags/new/']").click();
        cy.wait(1000);
        //Then I should have form to enter tag information and save button
        cy.get(
            '#tag-name,#tag-slug,#tag-description,section .view-actions > button'
        ).should('exist');
        cy.wait(1000);
        cy.get('#tag-name').type(faker.name.fullName());
        cy.wait(1000);
        //And I enter slug tag
        current_slug = faker.random.alphaNumeric(10);
        cy.get('#tag-slug').focus();
        cy.wait(1000);
        cy.get('#tag-slug').clear({ force: true });
        cy.wait(1000);
        cy.get('#tag-slug').type(current_slug, { force: true });
        cy.wait(1000);
        //And I enter tag description
        cy.get('#tag-description').type(faker.lorem.lines(1));
        cy.wait(1000);
        //And I click Save
        cy.get('section .view-actions button').click();
        cy.wait(1000);
        //And I click on the tag function
        cy.hacerClickEnFuncionalidad('tags');
        //Then I should have a new tag with correct slug link
        cy.get(`a[href='#/tags/${current_slug}/']`).should('exist');
    });
});
//Escenario 2
describe('Con mi usuario de ghost creo un Tag sin titulo y luego lo corrijo', () => {
    //And I click on the tag function
    beforeEach('Hacer Login', () => {
        cy.hacerLogin(
            globalVariables.password,
            'site',
            'nav.gh-nav.ember-view'
        );
    });
    let current_slug = '';
    it('Hacer click en la funcionalidad para crear tag y llenar formulario', () => {
        cy.hacerClickEnFuncionalidad('tags');
        //Then I should have a new tag button
        cy.get("a[href='#/tags/new/']").should('exist');
        //And I click on the new tag button
        cy.wait(1000);
        cy.get("a[href='#/tags/new/']").click();
        cy.wait(1000);
        //Then I should have form to enter tag information and save button
        cy.get(
            '#tag-name,#tag-slug,#tag-description,section .view-actions > button'
        ).should('exist');
        cy.wait(1000);
        cy.get('#tag-name').focus().clear({ force: true });
        cy.wait(1000);
        //And I enter slug tag
        current_slug = faker.random.alphaNumeric(10);
        cy.get('#tag-slug').focus();
        cy.wait(1000);
        cy.get('#tag-slug').clear({ force: true });
        cy.wait(1000);
        cy.get('#tag-slug').type(current_slug, { force: true });
        cy.wait(1000);
        //And I enter tag description
        cy.get('#tag-description').type(faker.lorem.lines(1));
        cy.wait(1000);
        //And I click Save
        cy.get('section .view-actions button').click();
        cy.wait(1000);
        //Then It should have an error to retry
        cy.get('svg.retry_svg__retry-animated').should('exist');
        cy.wait(1000);
        //And I retry tag name
        cy.get('#tag-name').type(faker.name.fullName());
        cy.wait(1000);
        //And I save again
        cy.get('section .view-actions button').click();
        cy.wait(1000);
        //And I click on the tag function
        cy.hacerClickEnFuncionalidad('tags');
        //And I click on the leave button
        cy.get('.modal-footer .gh-btn.gh-btn-red').first().click();
        cy.wait(1000);
        //Then I should have a new tag with correct slug link
        cy.get(`a[href='#/tags/${current_slug}/']`).should('exist');
    });
});

//Escenario 3
describe('Con mi usuario de ghost creo un Tag con un nombre que ya exista', () => {
    //And I click on the tag function
    beforeEach('Hacer Login', () => {
        cy.hacerLogin(
            globalVariables.password,
            'site',
            'nav.gh-nav.ember-view'
        );
    });
    let current_slug = '';
    let current_slug2 = '';

    it('Hacer click en la funcionalidad para crear tag y llenar formulario', () => {
        cy.hacerClickEnFuncionalidad('tags');
        //Then I should have a new tag button
        cy.get("a[href='#/tags/new/']").should('exist');
        //And I click on the new tag button
        cy.wait(1000);
        cy.get("a[href='#/tags/new/']").click();
        cy.wait(1000);

        //Then I should have form to enter tag information and save button

        cy.get(
            '#tag-name,#tag-slug,#tag-description,section .view-actions > button'
        ).should('exist');
        cy.wait(1000);
        cy.get('#tag-name').focus().clear({ force: true });
        cy.wait(1000);
        let current_name = faker.name.fullName();
        cy.get('#tag-name').type(current_name, { force: true });
        cy.wait(1000);
        //And I enter slug tag
        current_slug = faker.random.alphaNumeric(10);
        cy.get('#tag-slug').focus();
        cy.wait(1000);
        cy.get('#tag-slug').clear({ force: true });
        cy.wait(1000);
        cy.get('#tag-slug').type(current_slug, { force: true });
        cy.wait(1000);
        //And I enter tag description
        cy.get('#tag-description').type(faker.lorem.lines(1));
        cy.wait(1000);
        //And I click Save
        cy.get('section .view-actions button').click();
        cy.wait(1000);
        cy.hacerClickEnFuncionalidad('tags');
        cy.wait(1000);
        //Then I should have a new tag with correct slug link
        cy.get(`a[href='#/tags/${current_slug}/']`).should('exist');
        cy.wait(1000);
        cy.get("a[href='#/tags/new/']").click();
        cy.wait(1000);
        //Then I should have a new tag with correct slug link
        cy.get(
            '#tag-name,#tag-slug,#tag-description,section .view-actions > button'
        ).should('exist');
        cy.wait(1000);
        cy.get('#tag-name').focus().clear({ force: true });
        cy.wait(1000);
        cy.get('#tag-name').type(current_name, { force: true });
        cy.wait(1000);
        //And I enter slug tag
        current_slug2 = faker.random.alphaNumeric(10);
        cy.get('#tag-slug').focus();
        cy.wait(1000);
        cy.get('#tag-slug').clear({ force: true });
        cy.wait(1000);
        cy.get('#tag-slug').type(current_slug2, { force: true });
        cy.wait(1000);
        //And I enter tag description
        cy.get('#tag-description').type(faker.lorem.lines(1));
        cy.wait(1000);
        //And I click Save
        cy.get('section .view-actions button').click();
        cy.wait(1000);
        cy.hacerClickEnFuncionalidad('tags');
        cy.wait(1000);
        //Then I should have a new tag with correct slug link
        cy.get(`a[href='#/tags/${current_slug2}/']`).should('exist');
        cy.wait(1000);
    });
});
