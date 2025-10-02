import { DataTable, Then } from "@cucumber/cucumber";
import { Page } from "@playwright/test";
import { AdminPage } from "../pages/admin.page";
import { CustomWorld } from "../../support/world";

let adminPage: AdminPage;

Then('On Topbar Menu Admin from {string}, select {string} option and validate section {string}', 
  async function (this: CustomWorld, menuitem: string, listitem: string, sectionLabel: string){
    const page: Page = this.page;
    adminPage = new AdminPage(page);
    await adminPage.topbarListitemAdmin(menuitem, listitem, sectionLabel);
});
Then('Search an user {string} in System Users', async function (this: CustomWorld, username: string){
    const page: Page = this.page;
    adminPage = new AdminPage(page);
    await adminPage.searchUsernameSystemUsers(username);

});



