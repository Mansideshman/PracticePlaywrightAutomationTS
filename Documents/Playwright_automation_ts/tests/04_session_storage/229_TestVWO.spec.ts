import { test , expect } from "@playwright/test";

//load saved session -already logged in
test.use({
    storageState:"./auth/user-session.json"
});

test("go directly to dashboard-no login",async({page})=>
{
    await page.goto("https://app.vwo.com/#/dashboard/get-started?accountId=1227004", {waitUntil: "domcontentloaded"});
    const url = page.url();
    console.log("Current URL:", url);
    if (url.includes("dashboard")) {
        console.log("✓ Dashboard loaded - no login needed!");
    } else if (url.includes("login")) {
        console.log("Note: Redirected to login (session may have expired or is invalid)");
    } else {
        console.log("Unexpected URL:", url);
    }

});

test("go directly to settings - no login",async({page})=>
{
    await page.goto("https://app.vwo.com/#/settings/accounts/general?accountId=1227007", {waitUntil: "domcontentloaded"});
    const url = page.url();
    console.log("Current URL:", url);
    if (url.includes("settings")) {
        console.log("✓ Settings loaded - still logged in");
    } else if (url.includes("login")) {
        console.log("Note: Redirected to login (session may have expired or is invalid)");
    }
}
);