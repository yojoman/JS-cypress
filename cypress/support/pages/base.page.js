class BasePage {
  open(path) {
    cy.visit(`https://practice.automationbro.com/${path}`);
  }
}

module.exports = BasePage;
