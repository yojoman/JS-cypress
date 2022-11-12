const BasePage = require("./base.page");

class HomePage extends BasePage {
  get getStartedButton() {
    return cy.get("#get-started");
  }

  get headingText() {
    return cy.get("h1.elementor-heading-title");
  }

  get primaryMenu() {
    return cy.get("#primary-menu");
  }

  get menuItems() {
    return cy.get("#primary-menu [id*=menu-item]");
  }

  get contactUsButton() {
    return cy.get("#contact-us");
  }

  open() {
    cy.visit("https://practice.automationbro.com/");
  }
}

module.exports = new HomePage();
