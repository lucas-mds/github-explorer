describe("Github Explorer", () => {
  describe("when searching for an user", () => {
    it("should return results", () => {
      cy.visit("http://localhost:3000");

      cy.get("input").type("lucas-mds");

      cy.contains("Search").click();

      cy.get("#user-card-lucas-mds").click();

      cy.get("[id^=repo-link-]").first().should("exist");
    });
  });
});
