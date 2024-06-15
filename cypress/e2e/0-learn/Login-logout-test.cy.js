/// <reference types="cypress" />

//Tugas
describe('Login Logout', () => {
    beforeEach(() =>{
         cy.visit('http://zero.webappsecurity.com/index.html')
         cy.get('#homeMenu > div > strong').should('contains.text', 'Home')
         cy.get('#signin_button').click()
         cy.get('h3').should('contains.text', 'Log in to ZeroBank')
    }
);

    //Case 1
       it('Login with Valid Data', () => {
        cy.fixture('login').then(login => {
            const id = login.id
            const pw = login.pw
        
         cy.get('#user_login').type(id)
         cy.get('#user_password').type(pw)
         cy.get('#user_remember_me').click();
         cy.get('#login_form > div.form-actions > input').click();
         
         //Assertion
         cy.get('body > div.wrapper > div.container > div > div:nth-child(2) > div > div > h2:nth-child(1)').should('contain.text', 'Cash Accounts')
        
        })
    });
 
    //Case 2
    it('Login with invalid data', () => {
        
         cy.get('#user_login').type('id')
         cy.get('#user_password').type('pw')
         cy.get('#user_remember_me').click();
         cy.get('#login_form > div.form-actions > input').click();
         
         //Assertion
         cy.get('#login_form > div.alert.alert-error').should('contain.text', 'Login and/or password are wrong.')
        
    });

    //Case 1
    it('LogOut Page', () => {
        cy.fixture('login').then(login => {
            const id = login.id
            const pw = login.pw
        
         cy.get('#user_login').type(id)
         cy.get('#user_password').type(pw)
         cy.get('#user_remember_me').click();
         cy.get('#login_form > div.form-actions > input').click();
         
         cy.get('body > div.wrapper > div.container > div > div:nth-child(2) > div > div > h2:nth-child(1)').should('contain.text', 'Cash Accounts')
        
        cy.get('#settingsBox > ul > li:nth-child(3) > a').click()
        cy.get('#logout_link').click()

        cy.get('#signin_button').should('contain.text', 'Signin')

        })
    });
 })