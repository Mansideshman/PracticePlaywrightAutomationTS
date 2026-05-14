import {test,expect } from '@playwright/test';

test('Basic Web test-verify page title',async({page})=>
{
    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    await page.locator('//div[@data-testid="dropdown-language"]').click();
    await page.getByText("JavaScript").click();
    await page.locator('#experience-trigger').click();
    await page.getByText('Mid-level (4-6 years)',{exact:true}).click();
});