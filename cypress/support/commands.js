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
import {globalVariables} from "../environment/credentials"

Cypress.Commands.add('hacerClickEnFuncionalidad',(url_link)=>{
    cy.get(`a[href="#/${url_link}/"]`).first().click()
    cy.wait(1000);
})

Cypress.Commands.add('hacerLogin',
 (password,expectedUrl,expectedElem) => {
    //Given the url
    cy.visit(globalVariables.baseUrl)
    //And I wait for 2 seconds 
    cy.wait(2000)
    //And I enter login email    
    cy.get('#ember8').type(globalVariables.email)
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I enter the password
    cy.get('#ember10').type(password);
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I click on submit button
    cy.get("#ember12").click();
    //And I wait for 2 seconds
    cy.wait(2000);
    //Then url should end in #/site
    cy.url().should('equal',globalVariables.baseUrl+"#/"+expectedUrl)
    //Then navbar should exist
    cy.get(expectedElem).should("exist")
    cy.wait(2000);
  
})