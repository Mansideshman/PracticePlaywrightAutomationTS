//automate the App.vwo invalid username and password with error message using get by role

import {test,expect} from '@playwright/test';

test("verify error message for invalid credentials",async({browser})=>
{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://app.vwo.com/#login");
    let username =  await page.locator('#login-username');
    username.fill("xyz@gmail.com");
    let password = await page.locator("#login-password");
    password.fill("Test@123");
    let login_button = await page.locator("#js-login-btn");
    login_button.click();
    let error_message = await page.locator('div').filter({ hasText: 'Your email, password, IP address or location did not match' }).first();
   //verify error message if login fails message should be Your email, password, IP address or location did not match
    
    await expect(error_message).toBeVisible({timeout:5000});
    await expect(error_message).toContainText('Your email, password, IP address or location did not match');
    console.log("Error message verified successfully");
    await context.close();

})