import { BasePage } from "../basePage"

export class HomePageGoogleTranslator extends BasePage {
    getFirstDropDownList () {
        return this.page.locator("((//span[contains(@class, 'zQ0atf')]))[1]")
    }
    getSecondDropDownList () {
        return this.page.locator("((//span[contains(@class, 'zQ0atf')]))[2]")
    }
    getChooseFirstLanguage (name: string) {
        return this.page.locator(`((//div[@jsname='rPx1uf']//div//*[text()='${name}']))[1]`)
    }
    getChooseSecondLanguage (name: string) {
        return this.page.locator(`((//div[contains(@class, 'F29iQc')]))[5]//*[text()='${name}']`)
    }
    getSourceTextField () {
        return this.page.locator("//textarea")
    }
    getResultOfTranslate () {
        return this.page.locator("//span[contains(@class, 'ryNqvb')]")
    }
}


export enum Languages {
    English = 'English', 
    Russian = 'Russian', 
    Deutsch = 'German'

}