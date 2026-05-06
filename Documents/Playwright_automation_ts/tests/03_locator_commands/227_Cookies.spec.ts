import {test, expect} from '@playwright/test';

test("locators are lazy,strict and auto-wait",async({page,context})=>
{
    await page.goto("https://awesomeqa.com/practice.html");
    await page.locator('[name="firstname"]').pressSequentially(
        "the testing academy",{delay:200});
        await page.goto("https://app.vwo.com/#login");


        //Read All cookies
        let cookies = await context.cookies();
        console.log("Total cookies:",cookies.length);

        await context.addCookies(
            [
                {
                    name:"session_id",
                    value:"fake_session_abc",
                    domain:"app.com",
                    path:"/"
                },
                {
                    name:"user_role",
                    value:"admin",
                    domain:"app.com",
                    path:"/"
                }
            ]
        );
     console.log("total cookies:",cookies.length);

     //To delete cookies
     
     //await context.clearCookies();

     cookies.forEach(function (cookie)
    {
        console.log(" "+cookie.name + " = "+ cookie.value);
    })

    await page.waitForTimeout(5000);
});


