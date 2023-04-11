describe('Logout with the logout button', () => {
  it('can logout successfully', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.wait(1000);
    cy.get(
      '#registerForm > div.modal-footer > button.btn.btn-outline-success'
    ).click();
    cy.wait(1000);
    cy.get('#loginEmail').type('anew@stud.noroff.no');
    cy.get('#loginPassword').type('anew12345');
    cy.get('#loginForm > div.modal-footer > button.btn.btn-success').click();
    cy.wait(1000);

    cy.visit('http://127.0.0.1:5500/?view=profile&name=anew');

    cy.get(
      'body > header > div > div > div > button.btn.btn-outline-warning.me-2'
    ).click();
    cy.wait(1000);

    cy.get('#registerModalLabel').contains('Create Profile');
  });
});
