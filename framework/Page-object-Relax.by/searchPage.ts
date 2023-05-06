import { Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class SearchPage extends BasePage {
    public getSearchLine () {
        return this.page.locator("//div[contains(@class, 'SearchModal Overlay--animation isOpen')]//input[@type='text']")
    }
    public getLunaRestobar () {
        return this.page.locator("//*[text()='Luna']");
    }
    public getLunaAdress () {
        return this.page.locator("//a[@href='https://luna-resto.relax.by/']//span[contains(@class, 'SearchResults__address')]")
    }
    public getLunaWorkindHours () {
        return this.page.locator("//*[text()='до 00:00']")
    }
}


