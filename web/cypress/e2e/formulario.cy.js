describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('4DT')

    cy.contains('button', 'Entrar').click()

    cy.contains('h4', 'Formulários').click()

    cy.get('#name').type('Cauã Alves')

    cy.get('#email').type('cauaalves@gmail.com')

    cy.get('#phone').type('11 888880000').should('have.value', '(11) 88888-0000')

    cy.get('#consultancyType').select('In Company')

    cy.contains('span', 'Pessoa Física').click()

    cy.contains('label', 'Pessoa Jurídica').find('input').should('be.not.checked')

    cy.get('#document').type('11111111111').should('have.value', '111.111.111-11')

    const redes = [
      'Instagram',
      'LinkedIn',
      'Udemy',
      'YouTube',
      'Indicação de Amigo'
    ]

    redes.forEach((item) => {
      cy.contains('label', item).find('input').check().should('be.checked')
    })

    cy.get('input[type="file"]').selectFile('./cypress/fixtures/feijaocomfarinha.jpg', {force: true})

    cy.get("#details").type("Ola mundo")


    cy.get('#technologies').type('Javascript').type('{enter}')

    cy.contains('label', 'Li e aceito os').find('input').check().should('be.checked')
    cy.contains('button', 'Enviar formulário').click()  

  })
})