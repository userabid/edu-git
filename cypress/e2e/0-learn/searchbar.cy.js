/// <reference types="cypress" />

//Tugas
describe('Search Box Test Zero Bank', () => {
    before(() =>{
        cy.visit('http://zero.webappsecurity.com/index.html')
         cy.get('#homeMenu > div > strong').should('contains.text', 'Home')
         cy.get('#signin_button').click()
         cy.get('h3').should('contains.text', 'Log in to ZeroBank')

         //Login Page      
         cy.get('#user_login').type('username')
         cy.get('#user_password').type('password')
         cy.get('#user_remember_me').click();
         cy.get('#login_form > div.form-actions > input').click();
         cy.get('body > div.wrapper > div.container > div > div:nth-child(2) > div > div > h2:nth-child(1)').should('contain.text', 'Cash Accounts')
    }
);

    //Case
       it('Mencari Kata', () => {
         cy.get('#searchTerm').type('search{enter}')
         cy.get('body > div.wrapper > div.container > div > h2').should('contain.text', 'Search Results:')
       });
 
 })