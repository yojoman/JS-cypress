const BasePage = require("./base.page");

class ContactPage extends BasePage {
  get heading() {
    return cy.get("h1");
  }
}

module.exports = new ContactPage();
