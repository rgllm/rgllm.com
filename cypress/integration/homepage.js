describe('Homepage', () => {
  it('should navigate to the About page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="about"]').click()
    cy.url().should('include', '/about')
  })
})
