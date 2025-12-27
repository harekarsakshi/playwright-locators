import {test, expect} from '@playwright/test';

test('Locators Practice Test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByLabel('Username').fill('standard_user');
    await page.getByLabel('Password').fill('secret_sauce');
    await page.getByRole('button',{ name: 'Login'}).click();
    await page.getByText('Error message');
    await page.getByRole('button', { name: 'Open Menu'}).click();
    await page.getByRole('link', { name: 'Logout'}).click();
});