import { globalVariables } from "../../environment/credentials";
import { faker } from "@faker-js/faker";

describe("Con mi usuario de ghost quiero enviar una invitacion a un email ya existente en las invitaciones", () => {
  //And I click on the tag function
  beforeEach("Hacer Login", () => {
    cy.hacerLogin(globalVariables.password, "site", "nav.gh-nav.ember-view");
  });
  it("Hacer click en la funcionalidad para crear tag y llenar formulario", () => {
    cy.hacerClickEnFuncionalidad("general");
    cy.wait(1000);
  });
});
