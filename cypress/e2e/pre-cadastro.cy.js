/// <reference types="cypress" />
import { fa, faker } from '@faker-js/faker';


describe('pre-register', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });
    it('He must to complete pre-register successfully', () => {

       var senha = faker.internet.password() 
       var senha2 = faker.internet.password() 

        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('#password_current').type(senha)
        cy.get('#password_1').type(senha2)
        cy.get('#password_2').type(senha2)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });

    it('must complete pre-registration successfully using custom commands', () => {
        var senha = faker.internet.password() 
        var senha2 = faker.internet.password()
        var email = faker.internet.email(nome)
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()

        cy.precadastro(email,senha,nome,sobrenome,senha2)

        
    });
});