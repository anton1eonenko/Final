import { test, expect } from '@playwright/test';
import { BasePage } from '../framework/basePage';
import { TestData } from '../framework/testData';
import { HomePageOnliner } from '../framework/Page-object-Onliner.by.ts/homePage-Onliner';
import { SearchPage, Items } from '../framework/Page-object-Onliner.by.ts/searchPage';
import { ItemPage, NumbersOfItemsInAside } from '../framework/Page-object-Onliner.by.ts/itemPage';
import { SidebarPage } from '../framework/Page-object-Onliner.by.ts/sidebarPage';
import { CartPage } from '../framework/Page-object-Onliner.by.ts/cartPage';

// test.describe("Test Onliner.by", async () => {
    // test ("Search products", async ({page}) => {
    //     await new BasePage(page).getOpenOnliner();  
    //     const SearchLine = new HomePageOnliner(page).getSearchLine();
    //     await SearchLine.click(); 
    //     await SearchLine.fill(TestData.SearchDataOnliner); 

    //     const gotToItem = new SearchPage(page).chooseItem(Items.One); 

    //     const goToFrame = await page.frameLocator("//iframe[contains(@class, 'modal-iframe')]").locator(gotToItem).click(); 

    //     const titel = await new ItemPage(page).getHeader(); 
    //     await expect(titel).toHaveText(TestData.SamsungTitel); 
    // }); 
//     test ("Adding the product into the cart from product’s page", async ({page}) => {
//         await new BasePage(page).getOpenPageWithProduct(); 

//         const titel = new ItemPage(page).getHeader(); 
//         await expect(titel).toHaveText(TestData.SamsungTitel); 

//         const descriptionModule = new ItemPage(page).getDescriptionModule(); 
//         await expect(descriptionModule).toBeVisible(); 

//         await new ItemPage(page).addToCartItemOfAside(NumbersOfItemsInAside.One).click(); 

//         const header = new SidebarPage(page).getHeader(); 
//         await expect(header).toHaveText('Товар добавлен в корзину');

//         const goToCartButton = new SidebarPage(page).goToCart(); 
//         await expect(goToCartButton).toBeVisible();

//         const continueShoppingButton = new SidebarPage(page).getContinueShopping(); 
//         await expect(continueShoppingButton).toBeVisible(); 
        
//         const quantityOfItemLine = new SidebarPage(page).getQuantityOfItem();
//         await expect(quantityOfItemLine).toHaveAttribute('input', '1');
//     })
// });

// test.describe("Test Onliner.by", () => {
//     test.beforeEach(async ({ page }) => {
//       await new HomePageOnliner(page).getOpenPageWithProduct(); 
//       await new ItemPage(page).addToCartItemOfAside(Items.One).click(); 
//     });
  
//     test("Added product is displayed in the cart", async ({ page }) => {
//       const header = new SidebarPage(page).getHeader(); 
//       await expect(header).toBeVisible(); 

//       await new SidebarPage(page).goToCart().click(); 
      
//       const itemIcon = new CartPage(page).getItemIcon(); 
//       await expect(itemIcon).toBeVisible(); 
//     });
//   });

test.describe("Test Onliner.by", () => {
    test.beforeEach(async ({ page }) => {
      await new HomePageOnliner(page).getOpenPageWithProduct(); 
      await new ItemPage(page).addToCartItemOfAside(Items.One).click(); 
      await new SidebarPage(page).goToCart().click(); 
    });
  
    test("Removing a product from the cart", async ({ page }) => {
      const removeButton = new CartPage(page).removeItem(); 

      const elementHandle = await removeButton.evaluateHandle((el) => el);
      await page.evaluate((el) => {el.style.visibility = 'visible';
      }, elementHandle);
      
      await removeButton.click(); 
      await page.waitForTimeout(2000);

      await new CartPage(page).closeItem().click(); 

      const message = new CartPage(page).getMessage(); 
      await expect(message).toHaveText('Ваша корзина пуста'); 
    })
  });