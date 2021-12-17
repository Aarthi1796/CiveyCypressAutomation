import "../../support/commands";
import MainPage from "../../support/pageObject/MainPage";
import Login from "../../support/pageObject/Login";
import Signup from "../../support/pageObject/Signup";

/// <reference types="cypress" />

describe("Autoamating Register flow in Civey", function () {
  beforeEach(function () {
    cy.fixture("user").then(function (data) {
      var date = new Date();
      var user = date.getDate() + date.getSeconds();
      data.email = user + data.email;

      this.data = data;
    });
  });

  it("Navigating to Civey Page", function () {
    cy.visit("https://www.civey.com/");
  });

  it("Validating Success Message on Registering with valid user input", function () {
    const mainPage = new MainPage();
    const login = new Login();
    const signup = new Signup();

    mainPage.acceptCookie();
    mainPage.clickRegister();

    login.enterEmail(this.data.email);
    login.proceed();

    signup.selectGender(this.data.geschlecht);
    signup.enterBirth(this.data.geburtsjahr);
    signup.selectCountry(this.data.wohnort);
    signup.enterZipcode(this.data.zipCode);
    signup.checkTerms();
    cy.wait(1000);

    signup.clickRegister();
    signup
      .getMessage()
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.eq(this.data.success);
      });
  });
});
