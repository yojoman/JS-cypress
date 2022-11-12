const BasePage = require("./base.page");

class CartPage extends BasePage {
  get inputFileField() {
    return cy.get("input[type=file]");
  }

  get uploadFileButton() {
    return cy.get("input[value='Upload File']");
  }

  get uploadingStatusMessage() {
    return cy.get("#wfu_messageblock_header_1_label_1", { timeout: 10000 });
  }
}

module.exports = new CartPage();
