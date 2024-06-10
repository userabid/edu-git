/// <reference types="cypress" />

//Demo Test
describe('Test Books Website', () => {

    beforeEach(() => {
        //Access Website
        cy.visit('books.toscrape.com', {timeout: 10000})
        
      })
    it('Should load books website', () => {
     
        cy.get('#default > header > div > div > div > a').should('have.text','Books to Scrape')
                
        // //Trial Test
        // cy.get('h1').contains('Kitchen Sink')
        // cy.contains('type').click()
  
        // cy.url().should, 'include', '/commands/actions'
  
        // cy.get('.action-email').type('learn@email.com')
        // cy.get('.action-email').should('have.value', 'learn@email.com')
  
    });

    it('Should click on Travel Category', () => {
        
        cy.get('#default > div > div > div > aside > div.side_categories > ul > li > ul > li:nth-child(1) > a').contains('Travel').click()
        cy.get('h1').should('have.text', 'Travel')

    })
  })