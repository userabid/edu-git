/// <reference types="cypress" />

//Tugas
describe('Saucedemo Website', () => {

    beforeEach(() => {
        //Access Login
        cy.visit('https://www.saucedemo.com/')
        cy.get('#root > div > div.login_logo').should('contains.text', 'Swag Labs')
        cy.get('h4').should('contains.text', 'Accepted usernames are:')

        cy.fixture ("login").then(login => {
            const id = login.id1
            const pw = login.pw1
    
            cy.get('#user-name').type(login.id1)
            cy.get('#password').type(login.pw1)
            cy.get('#login-button').click()
            
            })
      
      })

    //Case 1
      it('Open Dashboard Website', () => {
        cy.get('#header_container > div.header_secondary_container > span').should('have.text', 'Products')
       
                
    });

    //Case 2
    it('Order Item', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container > a').click()
        cy.get('#header_container > div.header_secondary_container > span').should('have.text', 'Your Cart')

        cy.get('#checkout').click()
        cy.get('#header_container > div.header_secondary_container > span').should('have.text', 'Checkout: Your Information')

        cy.get('#first-name').type('Nama')
        cy.get('#last-name').type('Saya')
        cy.get('#postal-code').type('1212')
        cy.get('#continue').click()
        cy.get('#header_container > div.header_secondary_container > span').should('have.text', 'Checkout: Overview')

        cy.get('#finish').click()
        cy.get('#checkout_complete_container > h2').should('have.text', 'Thank you for your order!')
           
    });


})