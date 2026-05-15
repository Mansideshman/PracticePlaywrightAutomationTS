import {test,expect,Locator} from '@playwright/test';

test('verify iframe related task',async({page})=>

{
 await page.goto("https://app.thetestingacademy.com/playwright/frames/");
 await page.frameLocator('#frame-one').locator('#RESULT_TextField-1').fill("FORD");
 await page.frameLocator('#frame-one').locator('#RESULT_TextField-2').fill('Mansi');
 await page.frameLocator('#frame-one').locator('#RESULT_TextField-3').fill('MH-16-1098');
 await page.frameLocator('#frame-one').locator('#RESULT_RadioButton-1').selectOption("Hatchback");
 //await page.frameLocator('#frame-one').locator('option:has-text("Hatchback")').selectOption("");
 await page.frameLocator('#frame-one').locator('#RESULT_TextField-4').fill('2026');
 await page.frameLocator('#frame-one').getByPlaceholder('Any notes about the registration', { exact: true }).fill('Goal achieved');
 await page.frameLocator('#frame-one').locator("#vehicle-submit").click();
 const iframe_heading = await page.locator('h3').filter({ hasText: 'Vehicle registration · iframe practice' });
 await expect(iframe_heading).toContainText('Vehicle registration · iframe practice');
 const frameset_heading = await page.locator('h2').filter({ hasText: '① Single iframe — fill the embedded form' });
 await expect(frameset_heading).toContainText('① Single iframe — fill the embedded form');


 // total number of <frame> elements on the page
  const allFrames: Locator[] = await page.locator('//frame').all();
  console.log('total number of frames: ' + allFrames.length);

  for (const frameEle of allFrames) {
    console.log(await frameEle.getAttribute('name'), ': ', await frameEle.getAttribute('src'));
  }

  // page.frames() includes the main page frame too
  console.log(page.frames().length);

}
);