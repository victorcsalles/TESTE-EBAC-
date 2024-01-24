/// <reference types="cypress" />

context('He must alteration address successfully', () => {
   
    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario ,dados.senhna)
        })
       
    });

 it('Must successfully pre-register your billing', () => {


 });

    
});