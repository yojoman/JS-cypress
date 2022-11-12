const cartPage = require("../support/pages/cart.page");

describe("Cart page", () => {
  it("Upload file and assert file name", () => {
    cartPage.open("/cart");
    cartPage.inputFileField.selectFile("./cypress/fixtures/logo.png", {
      force: true,
    });
    cartPage.uploadFileButton.click();
    cartPage.uploadingStatusMessage.should(
      "contain.text",
      "uploaded successfully"
    );
  });
});
