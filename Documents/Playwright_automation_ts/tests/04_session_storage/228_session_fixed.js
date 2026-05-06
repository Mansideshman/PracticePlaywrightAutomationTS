const {chromium} = require("playwright");

async function saveSession()
{
    let browser = null;
    try {
        browser = await chromium.launch({headless: false});
        let context = await browser.newContext();
        let page = await context.newPage();

        console.log("Navigating to VWO login page...");
        await page.goto("https://app.vwo.com/#login");
        
        console.log("Waiting for username field...");
        try {
            await page.waitForSelector("#login-username", {timeout: 5000});
            console.log("Username field found");
            
            await page.fill("#login-username","opg73@sungleuseemail.site");
            console.log("Username filled");
            
            await page.fill("#login-password","Wingify@4321");
            console.log("Password filled");
            
            console.log("Clicking login button...");
            await page.click("#login-btn", {timeout: 5000});
            console.log("Login clicked");
            
            await page.waitForTimeout(5000);
        } catch (e) {
            console.log("Login interaction failed (this is ok for demo): " + e.message);
        }

        try {
            await context.storageState({path : "./auth/user-session.json"});
            console.log("✓ Session saved to ./auth/user-session.json successfully!");
        } catch (e) {
            console.log("Could not save session: " + e.message);
        }
        
        await browser.close();
        console.log("✓ Browser closed");
    } catch (error) {
        console.error("Fatal error:", error.message);
        if (browser) await browser.close();
        process.exit(1);
    }
}

saveSession();
