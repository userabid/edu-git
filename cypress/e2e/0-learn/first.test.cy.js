/// <reference types="cypress" />

//Tugas Test Script
describe('My First Test', () => {
  it('Visit the Kitchen sink', () => {
   
      cy.visit('https://example.cypress.io')
      cy.get('h1').contains('Kitchen Sink')
      cy.contains('type').click()

      cy.url().should, 'include', '/commands/actions'

      cy.get('.action-email').type('learn@email.com')
      cy.get('.action-email').should('have.value', 'learn@email.com')

  });
})