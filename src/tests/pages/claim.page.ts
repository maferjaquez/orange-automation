import { DataTable } from '@cucumber/cucumber';
import { Page, expect } from '@playwright/test';

export class ClaimPage {
    constructor(readonly page: Page){
    }
    //title tab panel | section screen
    getTabByName(tabname: string){ 
        return this.page.getByRole('link', { name: tabname, exact: true });
    }

    getTopBarItem(listItem: string){
        return this.page.getByRole('listitem')
        .filter ({ hasText: listItem });
    }

    getEmployeeName(){
        return this.page.locator("input[placeholder='Type for hints...']");
    }
    getAutocompleteEmployeeName = this.page.locator(".oxd-autocomplete-dropdown");
    
    getAutocompleteValue(){
        return this.page.locator(".oxd-autocomplete-dropdown");
    }
    getSelectDropdown = this.page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)");
    getCurrencyDropdown = this.page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)");
    getRemarks = this.page.locator(".oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical");

    createButton = this.page.getByRole('button', { name: "Create", exact: true });

    successToast = this.page.locator(".odx-toast.oxd-toast--success.odx-toast-container--toast");

    getMessageToast = '`${Success Successfully Saved}`';

    getDisabledEmployee = this.page.locator(".oxd-input oxd-input--active");

    getLabelText(label: string){
        return this.page.getByLabel(label);
    };

    /////////////////////////////////Actions////////////////////////////////////////    

    async selectAndValidateTitleTab(tabname: string) {
        await expect(this.getTabByName(tabname).first()).toBeVisible();
        await this.getTabByName(tabname).click();
        }

    async selectListItemFromTopBarMenu(listItem: string) {
        await this.getTopBarItem(listItem).click();
        await expect(this.page.locator(".oxd-text.oxd-text--h6.orangehrm-main-title")).toBeVisible();
    }

    async createClaimRequest(dataclaimtable: DataTable){
        type formdataclaim = {
            employeename: string,
            autocompletevalue: string,
            eventname: string,
            currencyoption: string,
            remarkstext: string
        }
        const dataclaim = dataclaimtable.rowsHash() as formdataclaim;
        const fillformdataclaim = {
        employeename: dataclaim['employeename'],
        autocompletevalue: dataclaim['autocompletevalue'],
        eventname: dataclaim['eventname'],
        currencyoption: dataclaim['currencyoption'],
        remarkstext: dataclaim['remarkstext']
        };

        await this.getEmployeeName().fill(fillformdataclaim.employeename);
        await this.page.waitForSelector('.oxd-autocomplete-dropdown:not(:has-text("Searching..."))', {
            state: 'visible',
            timeout: 5000
        });
        await this.getAutocompleteEmployeeName.click();
        
        await this.getSelectDropdown.click(); 
        await this.page.getByRole('option', { name: 'Medical Reimbursement' }).click();
        await this.getCurrencyDropdown.click(); 
        await this.page.getByRole('option', { name: 'Euro' }).click();
        await this.getRemarks.fill(fillformdataclaim.remarkstext);

        await this.createButton.click();
    }

    async validateSucessToast(){
        await this.successToast.filter({ hasText: this.getMessageToast}).isVisible();   
    }

    // async isDisabled(){
    //     await expect(this.getDisabledEmployee).toBeDisabled();
    // }

    // async addExpenses(label: string){
    //     await this.getLabelText(label);
    //     await this.page.getByRole('button', { name: "Add"});
    // }
    // async submitButton(){
    //     await this.page.getByRole('button', { name: 'Submit' });
    // }
}
