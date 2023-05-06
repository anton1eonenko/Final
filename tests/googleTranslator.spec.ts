import { test, expect } from '@playwright/test';
import { BasePage } from '../framework/basePage';
import { HomePageGoogleTranslator, Languages } from '../framework/Page-object-GoogleTranslator/homePage-GoogleTranslator';
import { TestData } from '../framework/testData';

// test.describe("Test Google Translator", async () => {
//     test ("UI Validation", async ({page}) => {
//         await new BasePage(page).getOpenGoogleTranslator();  
//         await new HomePageGoogleTranslator(page).getFirstDropDownList().click(); 
//         await page.waitForTimeout(3000);
//         await new HomePageGoogleTranslator(page).getChooseFirstLanguage(Languages.English).click(); 
//         await new HomePageGoogleTranslator(page).getSecondDropDownList().click(); 
//         await new HomePageGoogleTranslator(page).getChooseSecondLanguage(Languages.Russian).click(); 

//         await new HomePageGoogleTranslator(page).getSourceTextField().fill(TestData.TextForTranslate); 

//         const ResultOfTranslate = new HomePageGoogleTranslator(page).getResultOfTranslate(); 
//         await expect(ResultOfTranslate).toHaveText('Тест'); 
//     })
// })

