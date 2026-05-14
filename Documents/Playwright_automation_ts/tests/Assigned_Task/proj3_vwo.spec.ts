//You need to go to
//  https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage 
// and for the incorrect Gmail ID, verify that the message will come. 


import{test,expect} from '@playwright/test';

test('verify message',async({page})=>
{
    await page.goto(' https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage ');
    await page.locator('#page-v1-step1-email').click();
    await page.locator('#page-v1-step1-email').fill("manside@gmail.com");
    await page.locator('#page-free-trial-step1-cu-gdpr-consent-checkbox').click();
    await page.locator('button').filter({ hasText: 'Create a Free Trial Account' }).click();
    const errorElement = page.getByText("gmail.com doesn't look like a business domain");
    await expect(errorElement).toBeVisible();
  


});



