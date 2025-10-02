import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  this.context = context;
  this.setPage(page);
});

// After(async function (this: CustomWorld) {
//   await this.page.close();
//   await this.context.close();
// });