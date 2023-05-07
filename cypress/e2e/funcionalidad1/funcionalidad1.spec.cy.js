
//Funcionalidad hacer Login
import {globalVariables} from "../../environment/credentials"
//Escenario 1
describe('Con mi usuario y contraseña de ghost quiero hacer login en la pagina', 
  () => {
    it('Hacer Login',()=>{
      cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view");
    })}
  
)
//Escenario 2

describe('Con mi usuario y contraseña de ghost quiero hacer login en la pagina utilizando una contraseña incorrecta', 
  () => {
    it('Hacer Login',()=>{
      cy.hacerLogin("Worng password","signin","p.main-error");
    })}
  
)
//Escneario 3
describe('Con mi usuario y contraseña de ghost quiero hacer login en la pagina haciendo inyeccion de codigo', 
  () => {
    it('Hacer Login',()=>{
      cy.hacerLogin("' or 1=1","signin","p.main-error");
    })}
  
)