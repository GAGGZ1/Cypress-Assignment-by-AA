import testData from "../fixtures/testData.json";
class MesssageBoxPage {
  navigateToBotCreation() {
    // finding a button with text  to create a bot
    cy.get('[title="Create a bot…"]').should("be.visible").click();
  }

  createBot() {
    // finding input box with name=name
    cy.wait(5000);
    cy.get('input[name="name"]')
      .should("be.visible")
      .and("have.attr", "placeholder", "Required")
      .type(testData.botName);

    //click on create and edit button
    cy.get('button[name="submit"]')
      .should("contain.text", "Create & edit") // Assertion should have title create and edit
      .click();
  }

  findMessageBox() {
    cy.get('input[placeholder="Search actions"]')
      .should("be.visible")
      .type(testData.messageBox);
  }

  addMsgBox() {
    cy.get(
      ".editor-palette__accordion--is_active > .editor-palette-section > .editor-palette-section__scroller > .editor-palette-section__list > .editor-palette-group-container > .editor-palette-group__children > .editor-palette-item > .editor-palette-item__child > .rio-focus > .clipped-text > .clipped-text__string--for_presentation",
      { timeout: 10000 }
    )
      .should("be.visible")
      .dblclick();
  }

  //adding msg box Title and its content
  addMsgBoxTitleAndContent() {
    //title
    cy.get('div[contenteditable="true"][name="title"][placeholder="Required"]')
      .should("be.visible")
      .clear()
      .type(testData.msgBoxTitle);
    //content
    cy.get(
      'div[contenteditable="true"][name="content"][placeholder="Required"]'
    )
      .should("be.visible")
      .clear()
      .type(testData.msgBoxContent);
  }

  saveBotProcess() {
    //clicking on save
    cy.contains("button", "Save").click();
  }

  closeTheBot() {
    cy.wait(2000);
    cy.get('button[name="close"]').should("be.visible").click();
  }
}
export default MesssageBoxPage;
