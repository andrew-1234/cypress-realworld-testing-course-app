/// <reference types="cypress" />
// This is a custom command to make it easier to select elements with the
// data-test attribute
// It takes a selector as an argument and returns the element with the
// matching data-test attribute
Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
  })
  
export {}
  