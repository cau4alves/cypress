describe('template spec', () => {
  it('Logar com sucesso', () => {
    cy.visit('http://localhost:3000')

    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('4DT')

    cy.contains('button', 'Entrar').click()
  })

  it('Campo em branco', () => {
    cy.visit('http://localhost:3000')

    cy.contains('button', 'Entrar').click()

    cy.contains('Ei, não esqueça de digitar seu email!')

    cy.contains('Você precisa de uma senha para entrar! 🔒')
  })

  it('Email/senha incorreta', () => {
    cy.visit('http://localhost:3000')

    cy.get('#email').type('bumbumMolhado@gmail.com')
    cy.get('#password').type('12345677')

    cy.contains('button', 'Entrar').click()

    cy.contains('Acesso negado! Tente novamente.')
  })
})