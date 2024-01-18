/// <reference types="cypress" />

context('functionality  make shopping', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });
    
    it('he must add shopping in the shopping cart', () => {

        var quantidade = 20

        cy.get('[class="product-block grid"]').contains('Aether Gym Pant').click()
        cy.get('.button-variable-item-36').click().click()
        cy.get('.button-variable-item-Brown').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',(quantidade))
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Aether Gym Pant” foram adicionados no seu carrinho.')


        
    });
});