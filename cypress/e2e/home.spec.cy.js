const homePage = require("../support/pages/home.page.js");

describe("Home page", () => {
  it("Open Home page and verify Title and Url", () => {
    homePage.open();
    cy.url().should("include", "automationbro");
    cy.title().should("eq", "Practice E-Commerce Site – Automation Bro");
  });

  it("Click Get Started button and assert Url", () => {
    homePage.getStartedButton.click();
    cy.url().should("include", "#get-started");
  });

  it("Get text from Heading and assert it", () => {
    homePage.headingText
      .should("have.text", "Think different. Make different.")
      .and("have.class", "elementor-size-default");
  });

  it("Verify text form the first item of the menu", () => {
    homePage.primaryMenu.find("li").first().should("have.text", "Home");
  });

  it("Verify length and text for all menu items", () => {
    const menuLinksText = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];
    homePage.menuItems.should("have.length", "6");
    homePage.menuItems.each((item, index, list) => {
      cy.wrap(item).should("contain.text", menuLinksText[index]);
    });
  });
});
