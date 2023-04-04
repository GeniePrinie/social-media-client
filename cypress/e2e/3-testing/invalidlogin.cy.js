describe('The user cannot submit the login form with invalid credentials and is shown a message', () => {
  it('shows a message when the form has invalid credentials', () => {
    cy.visit('http://127.0.0.1:5500/').wait(1000);

    cy.get(
      '#registerForm > div.modal-footer > button.btn.btn-outline-success'
    ).click();
    cy.wait(1000);

    cy.get('#loginEmail').type('anew@stud.noroff.no');

    cy.get('#loginPassword').type('WRONGpassword');

    cy.get('#loginForm > div.modal-footer > button.btn.btn-success').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        'Either your username was not found or your password is incorrect'
      );
    });
  });
});
