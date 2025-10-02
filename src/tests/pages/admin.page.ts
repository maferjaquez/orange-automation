import { Page, expect} from '@playwright/test'; 

export class AdminPage{
    constructor(readonly page: Page){
    }
    private usernameInputAdmin = this.page.getByRole('textbox').filter( {: 'Username'} );;
    private searchSystemUsersButton = this.page.getByLabel('Search');
    
    getNavigationBarOption(menuitem: string){
        return this.page.locator('li').filter({ hasText: menuitem});
    }
//Topbar Menu Admin
    async topbarListitemAdmin(menuitem: string, listitem: string, sectionLabel: string){
        await this.getNavigationBarOption(menuitem).click();
        await this.page.getByRole('menuitem', { name: listitem}).click();
        await expect(this.page.getByLabel(sectionLabel)).toBeVisible();
    }
//System Users
    async searchUsernameSystemUsers(username: string){
        await this.usernameInputAdmin.fill(username);
        await this.searchSystemUsersButton.click();
    }
    async userRoleDropdownSystemUsers(){
        await this.page.locator("oxd-select-wrapper").click();
    }
    async employeeNameSystemUsers(employeename: string){
        await this.page.getByPlaceholder("Type for hints...").fill(employeename);
    }
    async selectStatusSystemUsers(){
        await this.page.locator("oxd-select-text oxd-select-text--active");
    }
//Add >> Add User
    async userRoleAddUser(userRole: string){
        await this.page.getByLabel('--Select--').selectOption(userRole);
    }
    async statusAddUser(status: string){
        await this.page.getByLabel('--Select--').selectOption({ label: status });
    }
    async employeeName(employenameAddUser: string){
        await this.page.getByRole('textbox').fill(employenameAddUser);
    }
    async usernameAddUser(usernameAddUser: string){
        await this.page.getByRole('textbox').fill(usernameAddUser);
    }
    async passwordAddUser(passwordAddUser: string){
        await this.page.locator('oxd-input oxd-input--active').fill(passwordAddUser);
    }
    async confirmPassword(confirmPasswordAddUser: string){
        await this.page.getByLabel('Confirm Password*').fill(confirmPasswordAddUser);
    }
    async saveButtonAddUser(){
        await this.page.getByRole('button').click();
    }
    async cancelButtonAddUser(){
        await this.page.getByLabel('Cancel').click();
    }

//Records Found
 async isChecked(){
        await this.page.getByLabel('mfgj@hotmail.com').check();
 }
}
