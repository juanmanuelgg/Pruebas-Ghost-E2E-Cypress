import { globalVariables } from "../../environment/credentials";
import { faker } from "@faker-js/faker";

describe("Con mi usuario de ghost quiero enviar una invitacion a un email ya existente en las invitaciones", () => {
  //And I click on the tag function
  beforeEach("Hacer Login", () => {
    cy.hacerLogin(globalVariables.password, "site", "nav.gh-nav.ember-view");
  });
  it("Hacer click en la funcionalidad para crear tag y llenar formulario", () => {
    cy.hacerClickEnFuncionalidad("staff");
    cy.wait(1000);
    cy.get("button.gh-btn.gh-btn-green").should("exist");
    cy.wait(1000);
    cy.get("button.gh-btn.gh-btn-green").click();
    cy.wait(1000);
    cy.get(`input[name="email"],input[name="role"]`).should("exist");
    cy.wait(1000);
    let existing_email = faker.internet.email();
    cy.log(existing_email);
    cy.get(`input[name="email"]`).type(faker.internet.email());
    cy.wait(1000);
    cy.get(".gh-btn.gh-btn-green.gh-btn-icon.ember-view").click();
    cy.wait(1000);
    cy.get(".gh-alert.gh-alert-red.ember-view .gh-alert-content").should(
      "exist"
    );
    cy.hacerClickEnFuncionalidad("staff");
    cy.wait(1000);
    cy.get("button.gh-btn.gh-btn-green").click();
    cy.get(`input[name="email"]`).first().type(existing_email);

    cy.get(".gh-btn.gh-btn-green.gh-btn-icon.ember-view").click();
    cy.wait(3000);
    cy.get(".gh-alert.gh-alert-red.ember-view .gh-alert-content").should(
      "exist"
    );
  });
});
