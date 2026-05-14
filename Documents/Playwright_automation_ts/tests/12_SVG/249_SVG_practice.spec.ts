import{test,expect, Locator} from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg';

test.describe('SVG handling',()=>
{
    test.beforeEach(async({page})=>
{
    await page.goto(URL);

});

test('Locate SVG root and assert visible',async({page})=>
    {await page.locator('input[name="q"]').fill("macmini");

        const circleShape:Locator =page.locator('#circle-red');
        await circleShape.click();

        const expectedResult = await page.locator('#shapes-output').innerText();
        expect(expectedResult).toContain('Blue circle');

    })
});