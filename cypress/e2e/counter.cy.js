//<reference types="Cypress"/>

describe("Checking Counter",()=>{
  it("should exist in document",()=>{
    cy.visit("http://localhost:3000");
    cy.get("h2").should("exist");
    cy.get(".increment_count").should("exist");
    cy.get(".decrement_count").should("exist")
  });
  it("should increment counter",()=>{
    cy.visit("http://localhost:3000");
    cy.get("h2").should("have.text","Count is 0");
    cy.get(".increment_count").click();
    cy.get("h2").should("have.text","Count is 1");
  })  ;
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should intercept GET request", () => {
    cy.intercept("GET", "http://localhost:8080/counter", {
      value: 10,
    }).as("getReq"); //spying

    cy.wait("@getReq").should((data) => {});
  });

  it("should intercept POST request", () => {
    cy.intercept("GET", "http://localhost:8080/counter", {
      fixture: "counter.json",
    }).as("getReq");
    cy.intercept("POST", "http://localhost:8080/counter", {
      value: 100,
    }).as("postReq");

    cy.wait("@getReq");
    cy.get(".increment_count").click();
    cy.wait("@postReq").then((r) => {
      console.log("XLRI data", r);
    });
});


})