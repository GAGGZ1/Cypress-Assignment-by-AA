class LoginPage {
  visit() {
    // visiting the site
    cy.visit(
      "https://community2.cloud-2.automationanywhere.digital/#/login?next=/index"
    );

    cy.url().should("include", "/login"); // Assertion - usl should contains 'login'
    // waiting the site to load due to slow internet
    cy.wait(5000);
  }
  yourUsername(username) {
    // finding username input box and typing username
    cy.get('input[name="username"]')
      .should("be.visible") //Assertion- the element should be visible
      .type(username)
      .should("have.value", username); // Assertion- the element should have value 'username'
  }
  yourPassword(password) {
    // finding password input box and typing password
    cy.get('input[name="password"]')
      .should("be.visible") //Assertion- the element should have value 'password'
      .type(password);
  }
  submitLoginButton() {
    // clicking on login button
    cy.get('[name="submitLogin"]', { timeout: 5000 })
      .should("be.visible") // Assertion- login buttons should be visible
      .click();
  }
}
export default LoginPage;
