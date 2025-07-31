import LoginPage from "../../pages/loginPage";
import testData from "../../fixtures/testData.json";
import CreateLearningInstance from "../../pages/learningInstancePage";

describe("this is usecase2", () => {
  const loginPage = new LoginPage();
  const learningInstance = new CreateLearningInstance();

  it("logs in and creats Learning instance ", () => {
    // logging in
    loginPage.visit();
    loginPage.yourUsername(testData.username);
    loginPage.yourPassword(testData.password);
    loginPage.submitLoginButton();

    // navigating to DA and creating LI
    learningInstance.naviagteToDA();
    learningInstance.createInstanceButton();
    learningInstance.addFieldsData();
    learningInstance.finalCreateButton();
  });
});
