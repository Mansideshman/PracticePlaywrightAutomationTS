import { test, expect } from '@playwright/test';

test('test regex', async ({ page }) => {
    const pattern = /#\/(dashboard|home)/;
    const url = '#/dashboard';
    expect(url).toMatch(pattern);
});
