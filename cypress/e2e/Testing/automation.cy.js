/// <reference types="cypress" />

//Tugas
describe('Saucedemo Website', () => {

    beforeEach(() => {
        //Access Login
        cy.visit('/')
        cy.get('#root > div > div.login_logo').should('contains.text', 'Swag Labs')
        cy.get('h4').should('contains.text', 'Accepted usernames are:')
      
      })

    //Case 1
      it('Login With Valid Data', () => {
        cy.fixture ("login").then(login => {
            const id = login.id1
            const pw = login.pw1
    
            cy.get('#user-name').type(login.id1)
            cy.get('#password').type(login.pw1)
            cy.get('#login-button').click()
            
            })
        cy.get('#header_container > div.header_secondary_container > span').should('have.text', 'Products')
       
                
    });

    //Case 2
    it('Login With Invalid Data', () => {
      
      cy.get('#user-name').type('login.id1')
      cy.get('#password').type('login.pw1')
      cy.get('#login-button').click()
          
      cy.get('#login_button_container > div > form > div.error-message-container.error > h3').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
     
              
  });

    //Case 3
    it('Order Item', () => {

      //Login Page
      cy.fixture ("login").then(login => {
        const id = login.id1
        const pw = login.pw1

        cy.get('#user-name').type(login.id1)
        cy.get('#password').type(login.pw1)
        cy.get('#login-button').click()
        
        })
        
        cy.get('#header_container > div.header_secondary_container > span').should('have.text', 'Products')

        //Order Item
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

    //Case 4
    it('See Detail Item', () => {
      //Login Page
      cy.fixture ("login").then(login => {
          const id = login.id1
          const pw = login.pw1
  
          cy.get('#user-name').type(login.id1)
          cy.get('#password').type(login.pw1)
          cy.get('#login-button').click()
          
          })
      cy.get('#header_container > div.header_secondary_container > span').should('have.text', 'Products')

      //See Detail Item
      cy.get('#item_4_img_link > img').click()
      cy.get('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size').should('contain.text', 'Sauce Labs Backpack')
              
  });

  it('LogOut Test', () => {
    //Login Page
    cy.fixture ("login").then(login => {
        const id = login.id1
        const pw = login.pw1

        cy.get('#user-name').type(login.id1)
        cy.get('#password').type(login.pw1)
        cy.get('#login-button').click()
        
        })
    cy.get('#header_container > div.header_secondary_container > span').should('have.text', 'Products')

    //Log Out
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('#root > div > div.login_logo').should('contain.text', 'Swag Labs')
            
});
  

it('Sort Item', () => {
  //Login Page
  cy.fixture ("login").then(login => {
      const id = login.id1
      const pw = login.pw1

      cy.get('#user-name').type(login.id1)
      cy.get('#password').type(login.pw1)
      cy.get('#login-button').click()
      
      })
  cy.get('#header_container > div.header_secondary_container > span').should('have.text', 'Products')

  //Sort Item
  //cy.get('#header_container > div.header_secondary_container > div').click()
  cy.get('#header_container > div.header_secondary_container > div > span > select').select(3)
});

})