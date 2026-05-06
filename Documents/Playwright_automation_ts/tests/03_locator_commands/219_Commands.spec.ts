import {test,expect } from '@playwright/test';


test("goto with different waitUntil options",async ({page})=>
{
    // commit - 2676ms
    await page.goto("https://app.vwo.com/page1",{waitUntil:"commit"});
    console.log("commit:server responded");
    
    // wait for HTML to be parsed - 407ms
    await page.goto("https://app.com/page2",{waitUntil:"domcontentloaded"});
    console.log("domcontentloaded:HTML parsed");

    // DEFAULT: wait for everything (images,CSS,scripts) - 448ms
    await page.goto("https://app.com/page3",{waitUntil:"load"});
    console.log("load:all resources loaded");

    // SLOWEST - wait for all network activity to stop - 924ms
    await page.goto("https://app.com/page4",{waitUntil: "networkidle"});
    console.log("networkidle:no requests for 500ms");

});