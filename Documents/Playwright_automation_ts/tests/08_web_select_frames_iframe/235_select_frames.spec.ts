import {test,expect } from '@playwright/test';

test('Basic Web test-verify page title',async({page})=>
{
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator("#dropdown").selectOption("Option 1");
    await page.waitForTimeout(5000);
    
})