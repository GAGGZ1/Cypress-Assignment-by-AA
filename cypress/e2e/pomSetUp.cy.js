//Setting up POM and loggin in username and password
import LoginPage from "../pages/loginPage";
import testData from "../fixtures/testData.json";

describe("Logging in using POM", () => {
  const loginPage = new LoginPage();

  it("loggin in AA cloud community", () => {
    loginPage.visit();
    loginPage.yourUsername(testData.username);
    loginPage.yourPassword(testData.password);
    loginPage.submitLoginButton();
  });
});
