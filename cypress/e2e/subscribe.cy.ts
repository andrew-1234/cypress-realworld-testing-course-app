/// <reference types="cypress" />

// This is a test file for the newsletter subscribe form
describe("Newsletter subscribe form", () => {

    // Before each test, visit the home page
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    // Test that a user can subscribe to the newsletter, and a success message is displayed
    it("allows a user to subscribe to the newsletter", () => {
        // Get the email input and type in the email address
        cy.getByData("email-input").type("andrew@gmail.com")
        // Click the submit button
        cy.getByData("submit-button").click()
        // Check that the success message is displayed
        cy.getByData("success-message").should("exist").contains("Success: andrew@gmail.com has been successfully subscribed")
        // This also works
        cy.getByData("success-message").should("exist").contains("andrew@gmail.com")
    })

    // This test checks if a user enters an invalid email address, no success message is displayed
    it("does not allow a user to subscribe with an invalid email address", () => {
        // Get the email input and type in the email address
        cy.getByData("email-input").type("andrew")
        // Click the submit button
        cy.getByData("submit-button").click()
        // Check that the error message is displayed
        cy.getByData("success-message").should("not.exist")
    })

    // This test checks if a user is already subscribed, an error is displayed
    it("checks if a user is already subscribed", () => {
        // Get the email input and type in the email address
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("already")
    })

    // This test checks if the email field is blank, an error is displayed
    it("checks if the email field is blank", () => {
        cy.getByData("submit-button").click()
        cy.getByData("error-message").should("exist").contains("Email is required")
    })

})

export {}

