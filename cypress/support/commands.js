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


Cypress.Commands.add('login', (email, senha) => {
    cy.get('#username').type(email)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
 })

 Cypress.Commands.add('precadastro', (email, senha, nome, sobrenome, senha2) => { 
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('#password_current').type(senha)
    cy.get('#password_1').type(senha2)
    cy.get('#password_2').type(senha2)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
  })

  Cypress.Commands.add('produtos', (produto,tamanho,cor,quantidade) => { 
    
    cy.get('[class="product-block grid"]').contains(produto).click()
    cy.get('.button-variable-item-'+ tamanho).click().click()
    cy.get('.button-variable-item-'+ cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain',(quantidade))

   })