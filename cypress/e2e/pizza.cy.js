describe("order spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/Order");
  });

  it("can add name text", () => {
    const name = "Cansu";

    cy.get("[data-cy=customer-name-text]").type(`${name}`);

    cy.get("[data-cy=customer-name-text]").should("have.value", name);
  });

  it("can check multiple toppings", () => {
    cy.get("[data-cy=Sucuk]").check();
    cy.get("[data-cy=Mısır]").check();
    cy.get("[data-cy=Cheddar").check();

    cy.get("[data-cy=toppings]")
      .find('input[type="checkbox"]:checked')
      .should("have.length", 3);
  });

  it("should submit form", () => {
    const name = "Cansu";
    cy.get("[data-cy=customer-name-text]").type(`${name}`);
    cy.get("[data-cy=Sucuk]").check();
    cy.get("[data-cy=Mısır]").check();
    cy.get("[data-cy=Cheddar").check();
    cy.get("[data-cy=Ananas]").check();
    cy.get("[data-cy=kucuk-radio]").check();
    cy.get("[data-cy=dough-toggle]").click();
    cy.get("[data-cy=medium-dough]").click();
    cy.intercept("POST", "https://reqres.in/api/pizza").as("postRequest");
    cy.get("[data-cy=submit-button]").click();

    cy.wait("@postRequest").then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
      expect(interception.request.body).to.include({ name: "Cansu" });
      expect(interception.request.body).to.include({ size: "Küçük" });
      expect(interception.request.body).to.include({ dough: "Orta" });
      //   expect(interception.request.body).to.include({
      //     toppings: ["Mısır", "Cheddar", "Ananas", "Sucuk"],
      //   });
      expect(interception.request.body.toppings).to.include.members([
        "Mısır",
        "Cheddar",
        "Ananas",
        "Sucuk",
      ]);
    });
  });
});
