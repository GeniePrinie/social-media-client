describe("Logout with the logout button", () => {
  it("can logout successfully", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);

    cy.get("#registerForm > div.modal-footer > button.btn.btn-outline-success")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(500);

    cy.get("#loginEmail").type(Cypress.env("user").email);
    cy.get("#loginPassword").type(Cypress.env("user").password);
    cy.get("#loginForm > div.modal-footer > button.btn.btn-success")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(2000);

    cy.get(
      "body > header > div > div > div > button.btn.btn-outline-warning.me-2"
    )
      .contains("Logout")
      .click();
    cy.wait(2000).should(() => {
      expect(localStorage.token).eq(undefined);
    });
  });
});
