import { test, expect } from '@playwright/test';

test('stránka sa načíta so správnym názvom', async ({ page }) => {
    await page.goto('https://cactus-collection.pages.dev/');
    await expect(page).toHaveTitle('House cacti — a home cactus and succulent collection, with care notes');
});

test('hlavný nadpis je viditeľný', async ({ page }) => {
    await page.goto('https://cactus-collection.pages.dev/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Patience, with spines.');
});

test('klik na Cacti v menu presunie na sekciu kaktusov', async ({ page }) => {
    await page.goto('https://cactus-collection.pages.dev/');
    await page.getByRole('link', { name: 'Cacti', exact: true }).click();
    await expect(page).toHaveURL(/#cacti/);
    await expect(page.getByRole('heading', { name: 'Sea urchin' })).toBeInViewport();
});

test('klik na Chin cactus v navigácii zobrazí nadpis Chin cactus', async ({ page }) => {
    await page.goto('https://cactus-collection.pages.dev/');
    await page.getByRole('navigation', { name: 'Plants' }).getByRole('link', { name: /Chin cactus/ }).click();
    await expect(page).toHaveURL(/#castellanosii/);
    await expect(page.getByRole('heading', { name: 'Chin cactus', exact: true })).toBeInViewport();
});
