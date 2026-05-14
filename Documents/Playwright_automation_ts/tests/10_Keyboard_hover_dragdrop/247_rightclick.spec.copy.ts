import {test,expect, FrameLocator, Locator} from '@playwright/test';


    test('right click', async({page})=>
    {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
       
        await page.locator('span.context-menu-one').first().click({button:'right'});
        await page.getByText('copy',{exact:true}).first().click();
      

    }

);