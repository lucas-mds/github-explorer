describe("when loading more users", () => {
  it("it should fetch and display more results", () => {
    cy.visit("http://localhost:3000");

    cy.get("input").type("lucas");

    cy.contains("Search").click();

    cy.contains("Load more").click();

    cy.get("[id^=user-card-]").should("have.length", 10);
  });
});
