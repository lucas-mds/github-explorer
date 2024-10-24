describe("when adding api token", () => {
  describe("when clicking on the settings button", () => {
    it("should open a dialog that enables the customer to type and confirm it", () => {
      cy.visit("http://localhost:3000");

      cy.get("#settings-button").click();

      cy.get("input").last().type("my fake github token");

      cy.get("button").contains("Add").click();

      cy.get("button").contains("Add").should("not.exist");
    });
  });
});
