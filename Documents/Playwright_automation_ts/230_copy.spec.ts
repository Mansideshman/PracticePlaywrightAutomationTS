import { test , expect } from '@playwright/test';

test('verify that login works',async({page}) =>
{
    await page.goto("https://app.vwo.com/#login");
    await page.waitForTimeout(2000);

    console.log("Waiting for login form...");
    await page.waitForSelector("#login-username", {timeout: 5000});
        
    console.log("Filling credentials...");
    await page.fill("#login-username","opg73@sungleuseemail.site");
    await page.fill("#login-password","Wingify@4321");
        
    console.log("Clicking login button...");
    await page.click("#login-btn");

    //wait for login to actually complete before snapshotting storage -
    //otherwise the auth cookie isn't set yet and the saved state is empty

    await page.waitForURL(/#\/(dashboard|home)/,{timeout:15000});
    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle("Dashboard");
});