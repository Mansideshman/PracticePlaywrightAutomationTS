import { test , expect} from '@playwright/test';

test("locators are lazy,strict and auto-wait", async ({ page }) => {
    await page.goto("https://awesomeqa.com/practice.html");
    //const input_firstname= await page.getByRole("textbox",{name: 'firstname'});
    await page.locator("input[name='firstname']").fill("The testing academy");
   // input_firstname.fill("The Testing Academy");
    await page.waitForTimeout(5000);   
    await page.goto("https://app.vwo.com/login");
    await page.goBack();
    await page.waitForTimeout(5000);
});
