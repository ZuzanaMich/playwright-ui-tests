import { test, expect } from '@playwright/test';

test('úspešné prihlásenie do e-shopu', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory.html/);
});

test('neúspešné prihlásenie so zlým heslom zobrazí chybu', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('zle_heslo');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Username and password do not match')).toBeVisible();
});

test('pridanie produktu do košíka po prihlásení', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();

    await page.locator('.shopping_cart_link').click();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    await page.getByRole('button', { name: 'Checkout' }).click();
    await expect(page).toHaveURL(/checkout-step-one.html/);
});