import { BasePage } from "../basePage"


export class PosterPage extends BasePage {
    public goToItem (name: string) {
        return this.page.locator(`((//div[contains(@class, 'b-afisha_blocks-strap_item_lnk_img')]))[${name}]`);
    }
    public getCategoryOfItem () {
        return this.page.locator("//a[contains(@class, 'b-afisha-layout-theater_movie-tag')]");
    }
    public getFeedBackForm () {
        return this.page.locator("//div[@id='review-form']");
    }
}



export enum PosterItems {
    One = '1', 
    Two = '2', 
    Three = '3'
}