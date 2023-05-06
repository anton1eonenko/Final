import { BasePage } from "../basePage";

export class CartPage extends BasePage {
    public getItemIcon () {
        return this.page.locator("//div[contains(@class, 'cart-form__offers-unit cart-form__offers-unit_primary')]");
    }
    public removeItem () {
        return this.page.locator("//a[contains(@class, 'button-style button-style_auxiliary button-style_small cart-form__button cart-form__button_remove')]")
    }
    public closeItem () {
        return this.page.locator("((//a[contains(@class, 'cart-form__link cart-form__link_other cart-form__link_small')]))[1]");
    }
    public getMessage () {
        return this.page.locator("//div[contains(@class, 'cart-message__title cart-message__title_big')]");
    }
}