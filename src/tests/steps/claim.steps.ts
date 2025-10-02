import { DataTable, Then } from "@cucumber/cucumber";
import { Page } from "@playwright/test";
import { ClaimPage } from "../pages/claim.page";
import { CustomWorld } from "../../support/world";

  let claimPage: ClaimPage;

  Then('Go to {string} tab', async function (this: CustomWorld, tabname: string) {
    const page: Page = this.page;
    claimPage = new ClaimPage(page);
    await claimPage.selectAndValidateTitleTab(tabname);
  });

  Then('On Top Bar Menu, select {string} option', async function (this: CustomWorld, listItem: string) {
    const page: Page = this.page;
    claimPage = new ClaimPage(page);
    await claimPage.selectListItemFromTopBarMenu(listItem);
  });

  Then('User types Employee Name and selects from Autocomplete, select Event with Currency and Remarks', 
    async function (this: CustomWorld, formdataclaim: DataTable){
    const page: Page = this.page;
    claimPage = new ClaimPage(page);
    await claimPage.createClaimRequest(formdataclaim);
    await claimPage.validateSucessToast();
  });

  // Then('Verify Assign Claim setted', async function (this: CustomWorld){
  //   const page: Page = this.page;
  //   claimPage = new ClaimPage(page);
  //   await claimPage.isDisabled();
  // });

  // Then('Add Expenses record', async function (this: CustomWorld){
  //   const page: Page = this.page;
  //   claimPage = new ClaimPage(page);
  //   // await claimPage.addExpenses(label);
  //   await claimPage.submitButton();
  // });

