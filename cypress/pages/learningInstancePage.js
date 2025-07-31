import testData from "../fixtures/testData.json";
class CreateLearningInstance {
  naviagteToDA() {
    //clicking ai
    cy.get('button[name="ai"]').should("be.visible").click();
    //clicking DA
    cy.get('a[name="module-cognitive-iqbot-learning-instances"]')
      .should("be.visible")
      .click();

    //Assertion cheking url matches or not
    cy.url().should(
      "include",
      "/modules/cognitive/iqbot/pages/learning-instances"
    );
  }
  //clicking Create Button for LI
  createInstanceButton() {
    cy.get("iframe.modulepage-frame")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap)
      .as("iframeLi");

    cy.get("@iframeLi")
      .find("#create-learning-instance-button button")
      .should("not.have.class", "command-button__button--is_disabled")
      .click({ force: true });

    // add names and descriptions
    cy.get("@iframeLi")
      .find('input[name="name"]')
      .clear()
      .type(testData.instanceDataName);
    cy.get("@iframeLi")
      .find('textarea[name="description"]')
      .clear()
      .type(testData.instanceDataDescription);

    cy.get("@iframeLi")
      .find(
        'div[data-name="domainId"] button[data-path="RioSelectInputQuery.toggle-button"]'
      )
      .click({ force: true });

    cy.wait(1000);
    cy.get("@iframeLi")
      .contains(
        ".rio-select-input-dropdown-option-label-line__text-label-line",
        "User-defined"
      )
      .click({ force: true });

    //clicking on button
    cy.get("@iframeLi").contains("button", "Next").click();
  }

  // Add fiels with test Data
  addFieldsData() {
    cy.get("@iframeLi").contains("button", "Add a field").click();
    cy.get("@iframeLi")
      .find('input[placeholder="Field name"]')
      .type(testData.instanceDataFieldName);
    cy.get("@iframeLi")
      .find('input[placeholder="Field label"]')
      .type(testData.instanceDataFieldLabel);
    cy.get("@iframeLi").find('input[name="confidenceThreshold"]').click();
  }

  // Final cretae Button
  finalCreateButton() {
    cy.get("@iframeLi")
      .find('button[aria-label="Create"].command-button__button--is_solid')
      .should("have.attr", "data-input-status", "INTERACTIVE")
      .click();
  }
}
export default CreateLearningInstance;
