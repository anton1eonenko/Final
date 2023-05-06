import { Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class LunaPage extends BasePage {
    public getLunaAdressOnPage () {
        return this.page.locator("//button[@title='Могилев, ул. Ленинская, 22']").textContent(); 
    }
    public getLundWorkingHoursOnPage () {
        return this.page.locator("//*[text()='до 00:00']").textContent(); 
    }
}

