

// 1. First one is browser with multiple context, one browser with multiple context and multiple pages.




//browser with multiple context

import {test} from '@playwright/test';

test('browser with multiple context', async({browser})=>
{
    
    let context1 = await browser.newContext();
    console.log("context1 created");
    let page1 = await context1.newPage();
    await page1.goto("https://app.vwo.com/#login");

    let context2 = await browser.newContext();
    console.log("context2 created");
    let page2 = await context2.newPage();
    await page2.goto("https://app.vwo.com/#login");

});



// 2. Another one will be same context, multiple pages, and the practice which I have given. 


test('browser with same context', async({browser})=>
{
    
    let context1 = await browser.newContext();
    console.log("context1 created");
    let page1 = await context1.newPage();
    await page1.goto("https://app.vwo.com/#login");

   // let context2 = await browser.newContext();
   // console.log("context2 created");
    let page2 = await context1.newPage();
    await page2.goto("https://app.vwo.com/#dashboard");

});