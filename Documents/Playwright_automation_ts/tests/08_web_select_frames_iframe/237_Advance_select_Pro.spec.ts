import{test,expect} from 'playwright/test';


test('Basic Web test -verify page title',async({page})=>
{
    //single select
    
    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
    await page.locator('#rs-single').click();
    await page.getByText('Cypress', { exact: true });


    //multi check box

    await page.locator('#rs-multi').click();
    await page.getByText("Pytest",{exact:true}).click();
    await page.getByText("JUnit",{exact:true}).click();

    //

    await page.locator('#rs-creatable').click();
    await page.getByText("api-testing",{exact:true}).click();
    await page.getByText("security",{exact:true}).click();
    await page.keyboard.press("Escape");

    await page.locator('#rs-async').click();
    await page.getByTestId('rs-async-input').fill('pun');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
    await page.getByRole('option',{name:'Pune'}).click();

    //await page.waitForSelector(".tta-rs_menu-notice");
    //await page.getByText("New Delhi").click();


    await page.waitForTimeout(5000);
    
})