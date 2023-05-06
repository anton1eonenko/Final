import { BasePage } from "../basePage";

export class SidebarPage extends BasePage {
    public getHeader () {
        return this.page.locator("((//div[contains(@class, 'product-recommended__subheader')]))[1]");
    }
    public goToCart () {
        return this.page.locator("//a[contains(@class, 'button-style button-style_another button-style_base-alter product-recommended__button')]");
    }
    public getContinueShopping () {
        return this.page.locator("//a[contains(@class, 'button-style button-style_auxiliary button-style_base-alter product-recommended__button helpers_hide_tablet')]"); 
    }
    public getQuantityOfItem () {
        return this.page.locator("//*[@id='container']/div/div/div/div/div[2]/div[1]/main/div/div/aside/div[1]/div[3]/div[1]/div[2]/div[5]/div[2]/div[2]/div/div[2]/div/div[4]/div/div[1]/div/input");
    }
    public getQuantityOfItemPlus () {}
    public getQuantityOfItemMinus () {}
}