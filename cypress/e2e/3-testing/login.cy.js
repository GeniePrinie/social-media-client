describe("Login and access user profile", () => {
  it("can login successfully", () => {
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
    cy.get("#loginForm button").contains("Login").should("be.visible").click();
    cy.wait(500);

    cy.url().should("include", "profile");
  });
});
