const {chromium} = require("playwright");
const path = require("path");

async function saveSession()
{
    let browser = null;
    try {
        browser = await chromium.launch({headless: false});
        let context = await browser.newContext();
        let page = await context.newPage();

        console.log("Navigating to VWO login...");
        await page.goto("https://app.vwo.com/#login", {waitUntil: "domcontentloaded"});
        
        console.log("Waiting for login form...");
        await page.waitForSelector("#login-username", {timeout: 5000});
        
        console.log("Filling credentials...");
        await page.fill("#login-username","opg73@sungleuseemail.site");
        await page.fill("#login-password","Wingify@4321");
        
        console.log("Clicking login button...");
        await page.click("#login-btn");
        
        // Wait for navigation after login - could go to dashboard or stay on login
        console.log("Waiting for page to respond...");
        await page.waitForTimeout(5000);
        
        const currentUrl = page.url();
        console.log("Current URL after login attempt:", currentUrl);

        // Save session regardless
        const sessionPath = path.join(__dirname, "./auth/user-session.json");
        await context.storageState({path: sessionPath});
        console.log("✓ Session saved to:", sessionPath);
        
        await browser.close();
    } catch (error) {
        console.error("Error during session save:", error.message);
        if (browser) await browser.close();
        process.exit(1);
    }
}

saveSession();
