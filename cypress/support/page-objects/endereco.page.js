import { fa, faker } from '@faker-js/faker';


class EnderecoPage{
    

   

       editarEnderecoFaturamento() {

          var nome = faker.person.firstName()
          var sobrenome = faker.person.lastName()
          var endereco = faker.location.street()
          var numero = faker.number.int({max: 9999})
          var cep = faker.location.zipCode('########')
          var celular = faker.phone.number('11 9########')
          var email = faker.internet.email(nome)

        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#select2-billing_country-container').click().type('Brasil{enter}')
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#select2-billing_state-container').click().type('São Paulo{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(celular)
        cy.get('#billing_email').clear().type(email)
        cy.get(':nth-child(2) > .button').click()


       }

       editarEnderecoEntrega() {

              var nome = faker.person.firstName()
              var sobrenome = faker.person.lastName()
              var empresa = faker.company.name()
              var pais = 'franca'
              var endereco = faker.location.street()
              var numero = faker.number.int({max: 999})
              var cep = faker.location.zipCode('########')
              var cidade = faker.location.city()
              
 
              cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
              cy.get(':nth-child(2) > .title > .edit').click()
              cy.get('#shipping_first_name').clear().type(nome)
              cy.get('#shipping_last_name').clear().type(sobrenome)
              cy.get('#shipping_company').clear().type(empresa)
              cy.get('#select2-shipping_country-container').click().type(pais + '{enter}')
              cy.get('#shipping_address_1').clear().type(endereco)
              cy.get('#shipping_address_2').clear().type(numero)
              cy.get('#shipping_postcode').clear().type(cep)
              cy.get('#shipping_city').clear().type(cidade)
              cy.get(':nth-child(2) > .button').click()
              


              



        
       }

}

export default new EnderecoPage()