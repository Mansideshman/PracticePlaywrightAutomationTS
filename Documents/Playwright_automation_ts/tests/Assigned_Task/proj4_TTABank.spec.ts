import {test, expect} from '@playwright/test';

test('Verify TTABank features',async({page})=>
{
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await page.locator('button').filter({ hasText: 'Sign Up' }).click();
    await page.locator("//input[@placeholder='John Doe']").fill("Mansi");
    await page.locator("//input[@placeholder='you@example.com']").fill("mansideshman@gmail.com");
    await page.locator('input[type="password"]').fill("Mansi@123");
    await page.locator("button").filter({hasText:"Create Account"}).click();
    const totalBalance =  await page.locator("//h3[@class='mt-2 text-3xl font-bold']");
    expect(totalBalance,"$50,000.00");
    console.log("total balance",totalBalance);
    await  page.locator("button").filter({hasText:'Transfer Funds'}).click();
    await page.locator("//input[@placeholder='0.00']").fill('5000');
    await page.getByRole('button',{name:'Continue'}).click();
    await page.getByRole('button',{name:'Confirm Transfer'}).click();
    await page.getByRole('button', { name: 'Dashboard' }).click();
    await expect (page.getByRole('heading', { name: '$45,000.00' })).toBeVisible();
    await expect(page.getByRole("main")).toContainText("$45,000.00");


})