import { globalVariables } from '../../environment/credentials';
import { faker } from '@faker-js/faker';

describe('Con mi usuario de ghost quiero administrar los post de la plataforma', () => {
    //And I click on the tag function
    beforeEach('Hacer Login', () => {
        cy.hacerLogin(
            globalVariables.password,
            'site',
            'nav.gh-nav.ember-view'
        );
    });
    it('Crear un nuevo post, editarlo y revisarlo', () => {
        // Crear un post
        cy.hacerClickEnFuncionalidad('posts');
        cy.get('.gh-secondary-action.gh-nav-new-post.ember-view')
            .should('exist')
            .click();
        let titulo = faker.commerce.productName();
        cy.log(titulo);

        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view')
            .should('exist')
            .click()
            .type(titulo);

        let contenido = faker.commerce.productDescription();
        cy.log(contenido);
        cy.get('.koenig-editor__editor.__mobiledoc-editor.__has-no-content')
            .should('exist')
            .click()
            .type(contenido);

        cy.get('.blue.link.fw4.flex.items-center.ember-view')
            .should('exist')
            .click();

        cy.get('.gh-content-entry-title')
            .contains(titulo)
            .should('exist')
            .click();
        // Editar el post
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view')
            .should('exist')
            .click()
            .type(' editado');

        cy.log(contenido);
        cy.get('.koenig-editor__editor.__mobiledoc-editor')
            .should('exist')
            .click()
            .type(' editado');

        cy.get('.blue.link.fw4.flex.items-center.ember-view')
            .should('exist')
            .click();

        cy.get('.gh-content-entry-title')
            .contains(titulo + ' editado')
            .should('exist')
            .click();

        // Publicar el post
        //cy.wait(1000);
        //cy,get("div > div > span").contains("Publish").should("exist").click();
        //cy.get("gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").should("exist").click();

        // Eliminar el post
    });
});
