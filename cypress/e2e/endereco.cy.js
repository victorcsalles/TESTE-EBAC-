/// <reference types="cypress" />

import enderecoPage from "../support/page-objects/endereco.page";


context('He must alteration address successfully', () => {
   
    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario ,dados.senhna)
        })
       
    });

 it('Must successfully pre-register your address billing ', () => {

    enderecoPage.editarEnderecoFaturamento()
    cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')

 });


 it.only('Must successfully pre-register your Shipping Address ', () => {
    enderecoPage.editarEnderecoEntrega()

 });
    
});