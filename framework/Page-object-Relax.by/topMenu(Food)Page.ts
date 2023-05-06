import { BasePage } from "../basePage"

export class TopMenuFoodPage extends BasePage {
    public getFoodPageItems (name: string) {
        return this.page.locator(`//*[text()='${name}']`)
    }
}




export enum TopMenuFoodPageItems {
    Restaurants = 'Рестораны'
}