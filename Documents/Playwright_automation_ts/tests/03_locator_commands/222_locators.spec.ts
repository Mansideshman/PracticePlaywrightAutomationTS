//Finding elements on a page

import {test, expect} from '@playwright/test';

test("locators are lazy ,strict and auto wait",async ({page})=>
{

    //create locators - nothing happens yet(lazy)

    let usernameField = page.locator("#login-username");
    let passwordField = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");

    await usernameField.fill("admin");
    await passwordField.fill("pass123");
    await loginButton.click();
    console.log("All actions completed");

    let error_message = page.locator('#js-notification-box-msg');
    await expect(error_message).toContainText("your email,password,IP address or location did not match");

})


