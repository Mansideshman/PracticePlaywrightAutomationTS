import {test ,expect} from '@playwright/test';

test("locators are lazy ,strict and auto wait", async({page})=>
{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    let button = await page.getByRole("link",{name:'Make Appointmenr'});
    await button.click();



})