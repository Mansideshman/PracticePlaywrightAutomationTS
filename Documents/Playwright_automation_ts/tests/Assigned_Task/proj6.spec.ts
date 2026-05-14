import {test,expect} from '@playwright/test';

test("Handle webtable",async({page})=>
{

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    const searchbox= await page.locator("//input[@id='employee-search']");
    await searchbox.fill("Kabir");
    await page.locator(`//tr[td[contains(., 'Kabir.Khan')]]//input[@type='checkbox']`).click();


});