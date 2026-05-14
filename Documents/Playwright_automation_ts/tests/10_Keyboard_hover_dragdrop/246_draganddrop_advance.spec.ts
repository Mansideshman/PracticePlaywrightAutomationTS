import {test,expect} from '@playwright/test';


    test('Drag and drop', async({page})=>
    {
      await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');

      await page.locator('#card-write-spec').dragTo(page.getByTestId('col-in-progress'));
      //await page.locator(".column[data-status='in-progress']")
      await page.getByTestId('card-fix-bug-42').dragTo(page.locator("//div[@data-status='review']"));

     
     //manual mouse path - for flicky DnD libraries

     let source: Locator =  page.locator('#card-review-pr-21')

     const sBox = await source.boundingBox();
     
     let target: Locator = page.locator("//div[@data-status='review']")
     const tBox = await target.boundingBox();
     
  
  
     await page.waitForTimeout(5000);


    });