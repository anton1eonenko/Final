import { BasePage } from "../basePage"


export class RestaurantsPage extends BasePage {
    public getFilters () {
        return this.page.locator("//*[text()='Фильтры']");
    }
    public getDistrict () {
        return this.page.locator("((//div[contains(@class, 'FilterSidebar__content')]//div))[4]"); 
    }
    public chooseDisctrict (name: string) {
        return this.page.locator(`//*[text()='${name}']`)
    }
    public getTakeAwayFood () {
        return this.page.locator("//label[contains(@class, 'ToggleSwitch__label FilterSidebar__toggleSwitch')]//span[text()='Еда навынос']")
    }
    public MoreCuisines() {
        return this.page.locator("//div[contains(@class, 'FilterSidebar__item --itemSpace')][1]//div[contains(@class, 'CompositeButtons__toggle')]")
    }
    public getCuisine(name: string) {
        return this.page.locator(`//*[text()='${name}']`);
    }
    public getTakeAwayMenuYES () {
        return this.page.locator("((//*[text()='Да']))[1]")
    }
    public showResultsOfFilter () {
        return this.page.locator("//*[text()='Показать']")
    }

}


export enum Districts {
    Zavodskoy = 'Заводской'
}


export enum Cuisines {
    Belorussian = 'Белорусская'
}