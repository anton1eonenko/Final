import { BasePage } from "../basePage";

export class SearchPage extends BasePage {
    public chooseItem (number: string) {
        return this.page.locator(`((//li[contains(@class, 'search__result')]))[${number}]`)
    }
    
}

export enum Items {
    One = '1'
}