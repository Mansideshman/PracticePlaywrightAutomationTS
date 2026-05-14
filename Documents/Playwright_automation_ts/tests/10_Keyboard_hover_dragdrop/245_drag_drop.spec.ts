import {test,expect} from '@playwright/test';


    test('Drag and drop', async({page})=>
    {
      await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

      const columnA = page.locator('#column-a');
      const columnB= page.locator('#column-b');

      await expect(columnA).toHaveText('A');
      await expect(columnB).toHaveText('B');

      await columnA.dragTo(columnB);

      await expect(columnA).toHaveText('B');
      await expect(columnB).toHaveText('A');

      await page.waitForTimeout(5000);


    });