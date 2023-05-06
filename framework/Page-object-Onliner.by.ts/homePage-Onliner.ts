import { BasePage } from "../basePage";


export class HomePageOnliner extends BasePage {
    public getSearchLine () {
        return this.page.locator("//input[contains(@class, 'fast-search__input')]");
    }
}