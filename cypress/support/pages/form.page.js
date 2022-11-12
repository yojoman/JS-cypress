const BasePage = require("./base.page");

class FormPage extends BasePage{
  get nameField() {
    return cy.get("#evf-680-field_lVizlNhYus-1");
  }

  get emailField() {
    return cy.get("#evf-680-field_XYnMdkQDKM-3");
  }

  get subjectField() {
    return cy.get("#evf-680-field_xJivsqAS2c-2");
  }

  get teamSelector() {
    return cy.get("#evf-680-field_82kaAPhrnW-6");
  }

  get categories() {
    return cy.get("#evf-680-field_sOAJfxP1Lf-7 input");
  }

  get dateField() {
    return cy.get("#evf-680-field_s1KysSbUW6-8");
  }

  get dayInDateField() {
    return cy.get(".dayContainer span:nth-child(15)");
  }

  get messageArea() {
    return cy.get("#evf-680-field_YalaPcQ0DO-4");
  }

  get submitButton() {
    return cy.xpath("//button[text()='Submit']");
  }

  get successMessage() {
    return cy.get("[role='alert']");
  }
}

module.exports = new FormPage();
