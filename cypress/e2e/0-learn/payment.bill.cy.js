/// <reference types="cypress" />

//Tugas
describe('Payment Bill Zero Bank', () => {

   //Case 1
      it('Open Dashboard Website', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#homeMenu > div > strong').should('contains.text', 'Home')
        cy.get('#signin_button').click()
        cy.get('h3').should('contains.text', 'Log in to ZeroBank')
       
        //Login Page
        // cy.masuk(email, password)           
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').click();
        cy.get('#login_form > div.form-actions > input').click();
        cy.get('body > div.wrapper > div.container > div > div:nth-child(2) > div > div > h2:nth-child(1)').should('contain.text', 'Cash Accounts')

        //Payment
        cy.get('#pay_bills_tab').click()
        cy.get('#sp_amount').type('1000')
        cy.get('#sp_date').type('2024-06-01')
        cy.get('#ui-datepicker-div > table > tbody > tr:nth-child(1) > td.ui-datepicker-week-end.ui-datepicker-days-cell-over.ui-datepicker-current-day > a').click()
        cy.get('#sp_description').type('Payment')
        cy.get('#pay_saved_payees').click()
        cy.get('#alert_content > span').should('contain.text', 'The payment was successfully submitted.')

      });


})