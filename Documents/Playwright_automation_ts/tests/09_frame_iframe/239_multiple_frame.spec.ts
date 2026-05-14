import{test,expect,FrameLocator } from '@playwright/test';

test('Basic Web test-verify page title',async({page})=>
{
    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');
    let mainFrame:FrameLocator = await page.frameLocator('[name="main"]');
    const headerText = await mainFrame.locator('h2').innerText();
    console.log(headerText);
    await page.waitForTimeout(5000);

    //total number of <frame>elements on the page
    const allFrames: Locator[]=await page.locator('//frame').all();
    console.log('total no.of frames:'+allFrames.length);


})