//QA profile form

import{test,expect} from '@playwright/test';

test('Verify QA form',async({page})=>
    
{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");
    await page.locator("//input[@id='first-name']").fill("Mansi");
    await page.locator("//input[@id='last-name']").fill("Deshman");
    await page.locator("//input[@data-testid='gender-female']").click();
   // await page.locator("select[#years-experience]").click();
    await page.locator("//select[@name='yearsExperience']").click();
    await page.locator("//select[@name='yearsExperience']").selectOption('5');
    await page.locator("//input[@data-testid='profession-automation']").click();
    await page.locator("//input[@data-testid='tool-selenium']").click();
    await page.locator("//input[@data-testid='continent-asia']").click();
    await page.locator("//input[@data-testid='continent-europe']").click();
    await page.locator('button').filter({hasText:'Wait Commands'}).click();
    //assert #selenium-tab-panel now contains Wait commands.
    const Panel = await page.locator('#selenium-tab-panel').filter({hasText:" — wait until conditions are met — element visibility, clickability, custom predicates."});
    expect('Panel',' — wait until conditions are met — element visibility, clickability, custom predicates.');
    await page.locator('#profile-submit').click();

}
    );