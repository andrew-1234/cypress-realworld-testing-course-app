/// <reference types="cypress" />

// This is a test file for the home page
describe("Home page", () => {

  // Before each test, visit the home page
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  // Test that the h1 contains the correct text
  it("Check if h1 contains the correct text", () => {
    // Here, I use the data-test attribute to select the matching element
    // I also use the .contains method ( a query) to get the element that contains the text
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })

  // Test that the features on the homepage are correct
  it("Check the features on the homepage are correct", () => {
    // cy.get returns a jQuery object, so we can use jQuery methods on it
    // .eq returns the element at the specified index
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
})
