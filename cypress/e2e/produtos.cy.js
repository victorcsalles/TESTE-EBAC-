/// <reference types="cypress" />
import { fa, faker } from '@faker-js/faker';

context(' functionality  make shopping ', () => {

    beforeEach(() => {
        cy.visit("https://www.lojasrenner.com.br")
    });
    
    it('he must add shopping in the shopping cart', () => {
        cy.get('.menu-hamburguer > .ic-grid').click()
        cy.get('.all-departments > :nth-child(4) > .responsive-image > img').click()
        cy.get('[href="/c/masculino/camisetas/-/N-1gu70uy?s_icid=230213_MENU_MASC_CAMISETAS"]').click()
        cy.get('[class="ProductBox_productBox__juRuk"]').contains('Camiseta Relaxed em Algodão Peruano com Gola Média').click()
        cy.get(':nth-child(4) > .ProductAttributes_labelOption__4v8Qz > .ProductAttributes_contentOption__9bNmU > .ProductAttributes_contentColor__RQaeR').click()
        cy.get(':nth-child(3) > .ProductAttributes_labelOption__4v8Qz > .ProductAttributes_contentOption__9bNmU > span').click()
        cy.get('.ProductInformation_actionBuy__8RfyL').click()
        cy.get('.quantitySelect').clear().type(5)
        cy.get('.button').click()
    });

    
});