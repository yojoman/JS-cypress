const formPage = require("../support/pages/form.page");

describe("Support form page", () => {
  it("Open Home page and verify Title and Url", () => {
    formPage.open('/support-form');
    formPage.nameField.type("test name");
    formPage.emailField.type("test-email@gmail.com");
    formPage.subjectField.type("test");
    formPage.teamSelector.select("Technical Team");
    formPage.categories.check([
      "Integration Issue",
      "Hardware Issue",
      "Software Issue",
    ]);
    formPage.dateField.click();
    formPage.dayInDateField.click();
    formPage.messageArea.type("text example");
    formPage.submitButton.click();
    formPage.successMessage.should(
      "include.text",
      "Thanks for contacting us! We will be in touch with you shortly."
    );
  });
});
