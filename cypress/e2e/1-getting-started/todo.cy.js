/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("To-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/todos");
  });

  it("displays todo form by default", () => {
    cy.get("#todo-form").should("have.length", 1);
  });

  it("can add new todo items", () => {
    // We'll store our item text in a variable so we can reuse it
    const newItem = "Nova tarefa";

    // Let's get the input element and use the `type` command to
    // input our new list item. After typing the content of our item,
    // we need to type the enter key as well in order to submit the input.
    // This input has a data-test attribute so we'll use that to select the
    // element in accordance with best practices:
    // https://on.cypress.io/selecting-elements
    cy.get("#todo").type(`${newItem}{enter}`);

    // Now that we've typed our new item, let's check that it actually was added to the list.
    // Since it's the newest item, it should exist as the last element in the list.
    // In addition, with the two default items, we should have a total of 3 elements in the list.
    // Since assertions yield the element that was asserted on,
    // we can chain both of these assertions together into a single statement.
    cy.get("#todo-list li")
      .should("have.length", 1)
      .last()
      .should("have.text", newItem);
  });

  it("can mark todo item as completed", () => {
    const newItem = "Nova tarefa";
    cy.get("#todo").type(`${newItem}{enter}`);
    cy.get("#completed-1").check();
    cy.get("#completed-1").should("be.checked");
  });
});
