//creating first playwright test 

//Test structure
//Basic assertions
//navigation
//element interaction

import{ test,expect } from '@playwright/test';

test('Verify our first TC',async({page})=>
{
   await page.goto('https://app.vwo.com');
   await expect(page).toHaveTitle('Login - VWO');
   const img_VWO = page.locator('img');
   await expect(img_VWO).toBeVisible();
   
   

}


);