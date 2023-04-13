describe("The user cannot submit the login form with invalid credentials and is shown a message", () => {
  it("shows a message when the form has invalid credentials", () => {
    cy.visit("/");
    cy.wait(500);

    cy.get("#registerForm > div.modal-footer > button.btn.btn-outline-success")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(500);

    cy.get("#loginEmail").type(Cypress.env("user").email);
    cy.get("#loginPassword").type(Cypress.env("user").wrongpassword);

    cy.get("#loginForm > div.modal-footer > button.btn.btn-success")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(500);

    cy.on("window:alert", (Text) => {
      expect(Text).to.eq(
        "Either your username was not found or your password is incorrect"
      );
    });
  });
});
