import { BasePage } from "../basePage"

export class HomePageRelax extends BasePage {
    public getSearchLine () {
        return this.page.locator("//input[@id='search_open']");
    }
    public getTopMenu (name: string) {
        return this.page.locator(`//div[contains(@class, 'Gallery__list CategoriesMainMenu__list')]//*[text()='${name}']`)
    }
}

export enum TopMenuItems {
    Food = 'Еда', 
    PostersAndMovie = 'Афиша, кино', 
    BeautyAndSport = 'Красота, спорт', 
}