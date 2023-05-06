import { BasePage } from "../basePage";


export class ItemPage extends BasePage { 
    public getHeader () {
        return this.page.locator("//h1");
    }
    public getDescriptionModule () {
        return this.page.locator("((//div[contains(@class, 'offers-description__info')]//p))[1]")
    }
    public addToCartItemOfAside (number: string) {
        return this.page.locator (`((//a[contains(@class, 'button-style button-style_base-alter button-style_primary product-aside__button product-aside__button_narrow product-aside__button_cart button-style_expletive')]))[${number}]`)
    }
}

export enum NumbersOfItemsInAside {
    One = '1',
    Two = '2'
}