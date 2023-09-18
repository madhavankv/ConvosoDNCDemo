import "./commands";
var baseURL = "";
var internalAdminUserName = "";
var internalAdminPwd = "";
import loginPage from "../support/PageObjects/LoginPage";
import apiRequest from "../support/PageObjects/APIRequest";
before(() => {
  //switch is for choosing the envt and credentials&data based on the envt(set through the CurrentRun parameter on cypressconfig)
  //here only one envt that set as prod
  switch (Cypress.env("currentRun")) {
    case "PROD": {
      cy.fixture("prod-data").then(function (data) {
        globalThis.data = data;
      });

      baseURL = Cypress.env("baseUrlPROD");
      internalAdminUserName = Cypress.env("prodUsers")["userNameProd"];
      internalAdminPwd = Cypress.env("prodUsers")["passwordProd"];

      break;
    }

    default:
      cy.log("Entered " + currentRun + " is not in the available list");
  } //end switch

  Cypress.on("uncaught:exception", (e, runnable) => {
    console.log("error is ", e);
    console.log("runnable", runnable);
    return false;
  });
});

beforeEach(() => {
  cy.clearCookies();
  loginPage.loginValidateHomeScreen(
    baseURL,
    internalAdminUserName,
    internalAdminPwd,
    data.urlText[0]
  );
});
afterEach(() => {
  apiRequest.searchAndDeleteNumbers(baseURL);
});
