import {test , expect} from '@playwright/test';

test('Basic test verification',async({page})=>
{
    await page.goto('https://app.thetestingacademy.com/playwright/frames/');

   // await page.frameLocator('#frame-one').locator('#RESULT_TextField-1').fill('hyundai i10');
    //await page.frameLocator('#frame-one').locator('#RESULT_TextField-2').fill('hyundai i10');
    //await page.frameLocator('#frame-one').locator('#RESULT_TextField-3').fill('hyundai i10');

    let vehicleFrame = await page.frameLocator('#frame-one');
    await vehicleFrame.locator('#RESULT_TextField-1').fill('hyundai i10');
    await vehicleFrame.locator('#RESULT_TextField-2').fill('Mansi');
    await vehicleFrame.locator('#RESULT_TextField-3').fill('2012');
    await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');
    await vehicleFrame.locator('#RESULT_TextField-4').fill('2015');
    await vehicleFrame.locator('#RESULT_TextArea-1').fill('Amazing car ');
    await vehicleFrame.getByText('Submit registration', {exact:true} ).click();
    let output=await vehicleFrame.locator('#vehicle-output').innerText();
    console.log(output);
   // await expect(vehicleFrame.).toContain()


    await page.waitForTimeout(5000);
}
)