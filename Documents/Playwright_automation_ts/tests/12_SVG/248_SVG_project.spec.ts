import { test, expect, Locator } from '@playwright/test';
//import { title } from 'node:process';


test.describe('SVG Project Tests', () => {
 

  test('Locate SVG root and assert visible', async ({ page }) => {
    await page.goto('https://www.flipkart.com/search');
   
    await page.locator('input[name="q"]').fill("macmini");
    //await page.getByTitle('Search for products,brands and more').fill('macmini');
    const SVG_elements:Locator =page.locator('svg');
    await SVG_elements.first().click();
    await page.waitForTimeout(5000);
    
    // const svgAllElement: Locator [] =await page.locator('svg').all();
    // console.log(svgAllElement);
    // for(let svgElement in svgAllElement)
    // {
    //     console.log(svgElement);
    // }

 
   
    const firstResult:Locator =page.locator('//div[contains(@data-id,"CPU")]/div/a[2]');
    await expect(firstResult.first()).toBeVisible({timeout:15000});
  

    const titleResults:Locator =page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'MP')]/div/a[2]");


     const count:number = await titleResults.count();
    console.log(`Total products found: ${count}`);

    for(let i=0;i<count;i++)
    {
        const title:string | null = await titleResults.nth(i).textContent();
        console.log(title?.trim());
    }
    await page.waitForTimeout(5000);
   
});









});
