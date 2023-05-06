import { Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async getOpenRelax() {
     return this.page.goto('https://www.relax.by/');
  }
  async getOpenGoogleTranslator () {
    return this.page.goto("https://translate.google.com/")
  }
  async getOpenOnliner () {
    return this.page.goto("https://www.onliner.by/")
  }
  async getOpenPageWithProduct () {
    return this.page.goto("https://catalog.onliner.by/mobile/samsung/sma525fzkdser")
  }
  async getClose () {
    return this.page.close()
  }
} 

