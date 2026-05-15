import{test,expect} from '@playwright/test';


test('Verify hover menus',async({page})=>
{
   // 1.Hover on addons
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
    await page.getByTestId('nav-add-ons').hover();
    await page.locator("//a[@data-testid='test-id-Wifi']").click();

    //2. Hover on bookings
     await page.getByText('Account', { exact: true }).hover();
    await page.getByText('Bookings', { exact: true }).hover();


  // 3. read every Add-ons child after hover
    await page.getByText('Add-ons', { exact: true }).hover();
    const addons = await page.locator('[data-testid="nav-add-ons"] .submenu .submenu-item').allInnerTexts();
    console.log(addons);
});