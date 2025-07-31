//Use Case1 - Create message box task [Assert bot creation]
import LoginPage from "../../pages/loginPage";
import MessageBoxPage from "../../pages/messageBoxPage";
import testData from "../../fixtures/testData.json";

describe("this is usecase 1: bot creation", () => {
  const loginPage = new LoginPage();
  const messageBoxPage = new MessageBoxPage();

  //login and creating message box
  it("logs in and creats message box", () => {
    // logging in
    loginPage.visit();
    loginPage.yourUsername(testData.username);
    loginPage.yourPassword(testData.password);
    loginPage.submitLoginButton();

    //finding bot creation button
    messageBoxPage.navigateToBotCreation();

    // creating bot
    messageBoxPage.createBot();

    // search for message box in Actions
    messageBoxPage.findMessageBox();

    // add message box to flow
    messageBoxPage.addMsgBox();

    //adding msg box title and content
    messageBoxPage.addMsgBoxTitleAndContent();

    //saving the bot
    messageBoxPage.saveBotProcess();

    //close bot
    messageBoxPage.closeTheBot();
  });
});
