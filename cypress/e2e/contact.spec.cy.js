const homePage = require("../support/pages/home.page");
const contactPage = require("../support/pages/contact.page");

describe("Contact Us page", () => {
  it("Handling Contact Us page to open in the current tab", () => {
    homePage.open();
    homePage.contactUsButton.invoke("removeAttr", "target").click();
    contactPage.heading.should("have.text", "Contact");
  });
});
