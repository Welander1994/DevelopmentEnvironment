describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('add and remove task', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:5173/');
    cy.get('input').clear('a');
    cy.get('input').type('new test{enter}');
    cy.get('header').click();
    cy.get('button').click();
    /* ==== End Cypress Studio ==== */
  });
})