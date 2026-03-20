describe('template spec', () => {
  it('errors', () => {
    cy.visit('http://localhost:3000')
    cy.get('#email').type('4dt@gmail.coms')
    cy.get('#password').type('4DTs')
    cy.contains('button', 'Entrar').click()
  })
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('4DT')
    cy.contains('button', 'Entrar').click()
  })

  it('should show error email message', () => {
    cy.visit('http://localhost:3000')
    cy.get('#email').type('4')
    cy.get('#password').type('4')
    cy.contains('button', 'Entrar').click()
    cy.wait(3000)
    cy.contains('Hmm... esse email parece estar errado 🤔')
  })

  it('should show error password message', () => {
cy.visit('http://localhost:3000')
    cy.contains('button', 'Entrar').click()
    cy.contains('Ei, não esqueça de digitar seu email!')
    cy.contains('Você precisa de uma senha para entrar! 🔒')

  })
})