import { test } from '@playwright/test';

test('multi-page test with multiple tabs', async ({ browser }) => {
    let context = await browser.newContext();

    //Tab 1
    let page1 = await context.newPage();
    await page1.goto("https://app.vwo.com/login");
    console.log("Tab1: Login");

    //Tab2 - same context, shares cookies with Tab 1
    let page2 = await context.newPage();
    await page2.goto("https://app.vwo.com/dashboard");
    console.log("Tab 2: dashboard");

    await context.close();
});