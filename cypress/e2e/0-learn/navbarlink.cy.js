/// <reference types="cypress" />

//Tugas
describe('NavBar Test', () => {
    beforeEach(() =>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('body > div.wrapper > div.container > div > div:nth-child(3) > div > h3').should('contain.text', 'Our Bank is trusted by over 1,000,000 customers world wide.')  
    });

    it('Should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#faq-link').should('include.text', 'Frequently Asked Questions')  
    });

    it('Should display Homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('#carousel > div > div.active.item > div > h4').should('include.text', 'Online Banking')  
    });

  })