import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(readonly page: Page) {
    }
//login
    private usernameInput = this.page.locator("input[placeholder='Username']");
    private passwordInput = this.page.locator("input[placeholder='Password']");
    private loginButton = this.page.locator("button[type='submit']");

    async navigate() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async validateMainScreen(){
    await expect(this.page.locator(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")).toBeVisible();
    }
}