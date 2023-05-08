import { globalVariables } from "../../environment/credentials";
import { faker } from "@faker-js/faker";

describe("Con mi usuario de ghost quiero enviar una invitacion a un email ya existente en las invitaciones", () => {
  //And I click on the tag function
  beforeEach("Hacer Login", () => {
    cy.hacerLogin(globalVariables.password, "site", "nav.gh-nav.ember-view");
  });
  it("Hacer click en la funcionalidad para crear tag y llenar formulario", () => {
    // Crear un post
    cy.hacerClickEnFuncionalidad("posts");
    cy.get(".gh-secondary-action.gh-nav-new-post.ember-view")
      .should("exist")
      .click();
    let titulo = faker.commerce.productName();
    cy.log(titulo);

    cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
      .should("exist")
      .click()
      .type(titulo);

    let contenido = faker.commerce.productDescription();
    cy.log(contenido);
    cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content")
      .should("exist")
      .click()
      .type(contenido);

    cy.get(".blue.link.fw4.flex.items-center.ember-view")
      .should("exist")
      .click();

    cy.get(".gh-content-entry-title").contains(titulo).should("exist").click();
    // Editar el post
    cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
      .should("exist")
      .click()
      .type(" editado");

    cy.log(contenido);
    cy.get(".koenig-editor__editor.__mobiledoc-editor")
      .should("exist")
      .click()
      .type(" editado");

    cy.get(".blue.link.fw4.flex.items-center.ember-view")
      .should("exist")
      .click();

    cy.get(".gh-content-entry-title").contains(titulo+" editado").should("exist").click();

    // Publicar el post
    //cy.wait(1000);
    //cy,get("span").contains("Publish").should("exist").click();
    //cy.get("gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").should("exist").click();

    //cy.get(".gh-alert.gh-alert-red.ember-view .gh-alert-content").should(
    //  "exist"
    //);
    //cy.hacerClickEnFuncionalidad("staff");
    //cy.wait(1000);
    //cy.get("button.gh-btn.gh-btn-green").click();
    //cy.get(`input[name="email"]`).first().type(existing_email);
    //
    //cy.get(".gh-btn.gh-btn-green.gh-btn-icon.ember-view").click();
    //cy.wait(3000);
    //cy.get(".gh-alert.gh-alert-red.ember-view .gh-alert-content").should(
    //  "exist"
    //);
  });
});
