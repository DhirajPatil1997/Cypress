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
Cypress.Commands.add('login', (username, password) =>{
  cy.get('#username').type(username, { delay: 50 });
  cy.get('#password').type(password, { delay: 50 });
  cy.get("[aria-label='Sign in']").click();
  cy.get('#logout').should('exist'); 
})

Cypress.Commands.add('NavigateToRL', function(){
    cy.get('[href="#/library/X98972"]').click()
    cy.get('#mainContentResource_0').should('exist')

})

Cypress.Commands.add('SelectLibraryOnRL', function(library){
    cy.get('#notstudent-library-ddl').parent().find('button').click();
    cy.get('.list_item_name').should('exist').contains(library).click(); 
    cy.get('#mainContentResource_0').should('exist')

})

Cypress.Commands.add('SearchPackage',function(packagename){
    cy.get('#search_input').should('exist').clear().type(`${packagename}{enter}`)
    cy.get('#mainContentResource_0').should('exist')       
})
import 'cypress-drag-drop';
import 'cypress-iframe';
