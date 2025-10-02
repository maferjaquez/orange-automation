
import { Given, When, Then } from "@cucumber/cucumber";
import { Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { CustomWorld } from "../../support/world";

  let loginPage: LoginPage;

  Given('The user login to the OrangeHRM website and see home', async function (this: CustomWorld) {
    const page: Page = this.page;
    loginPage = new LoginPage(page);
    await loginPage.navigate();
    //await this.page.waitForTimeout(100000);
  });

  When('A User enters Username {string}, the Password {string}, and clicks on the login button', async function (this: CustomWorld, username: string, password: string) {
    const page: Page = this.page;
    loginPage = new LoginPage(page);
    await loginPage.login(username, password);
  }); 

  Then('Redirects to Main screen and validate', async function (this: CustomWorld) {
    const page: Page = this.page;
    loginPage = new LoginPage(page);
    await loginPage.validateMainScreen();
  });

