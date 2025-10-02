import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Page, BrowserContext } from '@playwright/test';

export class CustomWorld extends World {
  page!: Page;
  context!: BrowserContext;

  constructor(options: World) {
    super(options);
  }

  setPage(page: Page) {
    this.page = page;
  }

  getPage(): Page {
    return this.page;
  }
}

setWorldConstructor(CustomWorld);