// https://katalon-demo-cura.herokuapp.com/
// On the make appointment.  Next page, you are going to enter the username and password.3
// https://katalon-demo-cura.herokuapp.com/#appointment We need to verify that the URL is now changed to this. The page contains make appointments. Make Appointment

import {test,expect} from '@playwright/test';

test('verify Katalon website', async({page}) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/', { waitUntil: 'networkidle' });
    
    // Click menu toggle
    await page.locator("//a[@id='menu-toggle']").click();
      // Wait for navigation
    await page.waitForLoadState('networkidle');
    
   //click login button
    await page.getByRole('link', { name: 'Login' }).click();

     await page.locator("#txt-username").click();
     await page.locator("#txt-username").fill("John Doe");
     await page.locator("#txt-password").click();
     await page.locator("#txt-password").fill("ThisIsNotAPassword");
     await page.locator('#btn-login').click();
    
     //Make appointment

     await page.locator('#btn-make-appointment').click();
  

});