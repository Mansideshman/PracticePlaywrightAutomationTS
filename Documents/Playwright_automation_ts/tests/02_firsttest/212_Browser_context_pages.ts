import { chromium, Browser, BrowserContext, Page } from 'playwright';

async function run()
{
    //Level1:Launch browser -heaviest operationdo it once
    let browser: Browser = await chromium.launch({headless:false});
    console.log("Browser Launched",browser);

    //Level2: Create Context - fresh session,isolated cookies

    let context: BrowserContext = await browser.newContext();
    console.log("Context created",context);

    //level3: open page - a tab inside the context
    let page:Page = await context.newPage();
    console.log("Page opened");

    await page.goto("https://example.com");
    console.log("Title:",await page.title());

    //Cleanup -reverse order

    await page.close();
    await context.close();
    await browser.close();


}
run();

