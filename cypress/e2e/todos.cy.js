/// <reference types="Cypress"/>

describe("Checking todos application",()=>{
   beforeEach(()=>{
    cy.visit("http://example.cypress.io/todo");
   });
   
    it("should have the basic structure",()=>{
        
        cy.get(".new-todo").should("exist");
        cy.get(".todo-count").should("exist");
        cy.get(".todo-count").should("exist");
    })

    it("should be able to add some task",()=>{
        // cy.visit("http://example.cypress.io/todo");
        cy.get(".todo-list").children().should("have.length",2);
        cy.get(".new-todo").type("Learn React{enter}");
        cy.get(".new-todo").type("Learn Redux{enter}");
        cy.get(".new-todo").type("Learn Cypress{enter}");
        cy.get(".todo-list").children().should("have.length",5);

    });
    it("should be able to increase task length in footer", () => {
        // cy.visit("http://example.cypress.io/todo");
        cy.get(".todo-count strong").should("have.text", 2);
        cy.get(".new-todo").type("Learn Redux{enter}");
        cy.get(".todo-count strong").should("have.text", 3);
      });
})