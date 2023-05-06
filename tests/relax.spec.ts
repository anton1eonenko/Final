import { test, expect } from '@playwright/test';
import { BasePage } from '../framework/basePage';
import { HomePageRelax } from '../framework/Page-object-Relax.by/homePage-Relax';
import { SearchPage } from '../framework/Page-object-Relax.by/SearchPage';
import { TestData } from '../framework/testData';
import { LunaPage } from '../framework/Page-object-Relax.by/lunaPage';
import { TopMenuItems } from '../framework/Page-object-Relax.by/homePage-Relax';
import { TopMenuFoodPage, TopMenuFoodPageItems } from '../framework/Page-object-Relax.by/topMenu(Food)Page';
import { RestaurantsPage, Districts, Cuisines } from '../framework/Page-object-Relax.by/restaurantsPage';
import { PosterPage, PosterItems } from '../framework/Page-object-Relax.by/posterPage';

// test.beforeAll(async ({browser}) => {
//     const context = await browser.newContext()
//     const page = await context.newPage(); 
//     await new BasePage(page).getOpenRelax(); 
// }) 

// test.describe("Test Relax.by", async () => {
//     test ("Search validation", async ({page}) => {
//         await new BasePage(page).getOpenRelax();  
//         await new HomePageRelax(page).getSearchLine().click(); 
//         await new SearchPage(page).getSearchLine().fill(TestData.Luna); 

//         const LunaAdressInSearch = await new SearchPage(page).getLunaAdress().textContent(); 
//         const LunaWorkindHoursInSearch = await new SearchPage(page).getLunaWorkindHours().textContent();

//         await new SearchPage(page).getLunaRestobar().click(); 

//         await page.waitForTimeout(5000); 
        
//         const LunaAdressOnPage = await new LunaPage(page).getLunaAdressOnPage();  
//         const LunaWorkindHoursOnPage = await new LunaPage(page).getLundWorkingHoursOnPage(); 

//         expect(LunaAdressOnPage).toContain(LunaAdressInSearch)
//         expect(LunaWorkindHoursInSearch).toContain(LunaWorkindHoursOnPage);

//     })
//     test ("Filters Validation", async ({page}) => {
//         await new BasePage(page).getOpenRelax(); 
//         await new HomePageRelax(page).getTopMenu(TopMenuItems.Food).click();
//         await new TopMenuFoodPage(page).getFoodPageItems(TopMenuFoodPageItems.Restaurants).click();

//         await new RestaurantsPage(page).getFilters().click(); 
//         await new RestaurantsPage(page).getDistrict().click(); 
//         await new RestaurantsPage(page).chooseDisctrict(Districts.Zavodskoy).click(); 
//         await new RestaurantsPage(page).getTakeAwayFood().click(); 
//         await new RestaurantsPage(page).MoreCuisines().click(); 
//         await new RestaurantsPage(page).getCuisine(Cuisines.Belorussian).click(); 
//         await new RestaurantsPage(page).getTakeAwayMenuYES().click(); 
//         await new RestaurantsPage(page).showResultsOfFilter().click(); 

//         const TestValue = page.locator("//span[contains(@class, 'CatalogNav__count u-grayLightest')]")
//         await expect(TestValue).toHaveText('2');
//     })
//     test("Poster validation", async ({page}) => {
//         await new BasePage(page).getOpenRelax(); 

//         await new HomePageRelax(page).getTopMenu(TopMenuItems.PostersAndMovie).click(); 

//         await new PosterPage(page).goToItem(PosterItems.One).click(); 
//         // await page.waitForTimeout(5000); 

//         const CategoryOfItem = new PosterPage(page).getCategoryOfItem();
//         const FeedBackForm = new PosterPage(page).getFeedBackForm(); 

//         await expect(CategoryOfItem).toHaveText('Кино');
//         await expect(FeedBackForm).toBeVisible(); 
//     })
// })

