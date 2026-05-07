import {test ,expect}  from '@playwright/test';

test.describe('Web Table tests',()=>
{
    test('Verify web table is displayed with correct headers',async({page})=>
    {
        await page.goto('https://awesomeqa.com/webtable.html');
        //table[@id="customers"]/tbody/tr['']/td[''];


        const firstPart =  '//table[@id="customers"]/tbody/tr[';
        const secondPart  = ']/td[';
        const thirdPart = ']';

        const rows = await page.locator('//table[@id="customers"]/tbody/tr').count();
        const cols = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();

        for(let i=2;i<=rows;i++)
        {
            for(let j=1;j<=cols;j++)
            {
                const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
                console.log(dynamicPath);
                const data = await page.locator(dynamicPath).innerText();
                console.log(data);

                if(data.includes('Helen Bennett'))
                {
                    const countryPath = `${dynamicPath}/following-sibling::td`;
                    const countryText = await page.locator(countryPath).innerText();
                    console.log("---------");
                    console.log(`Helen Bennett is in - ${countryText}`);
                }
            }
        }

        const row1 = page.locator('#customers tbody tr',{ hasText:'Helen Bennett'});
        const country1 = await row1.locator('td').nth(2).innerText();
        console.log(`Helen Bennett is in - ${country1}`);


    })
});

