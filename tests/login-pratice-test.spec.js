import{test, expect} from '@playwright/test';

test('Valid Login', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByLabel('Username').fill('standard_user');
    await page.getByLabel('Password').fill('secret_sauce');
    await page.getByRole('button',{ name: 'Login'}).click();

    //assertion to verify successful login
    await expect(page).toHaveURL(/inventory.html/);

});

test('Invalid Password', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByLabel('Username').fill('standard_user');
    await page.getByLabel('Password').fill('invalid_password');
    await page.getByRole('button',{ name: 'Login'}).click();

    //assertion to verify error message
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');

});


test('Empty Username', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByLabel('Username').fill('');
    await page.getByLabel('Password').fill('secret_sauce');
    await page.getByRole('button',{ name: 'Login'}).click();

    //assertion to verify error message
    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');

});


test('Logout flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.getByRole('button', { name: /open menu/i }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // Assertion to verify successful logout
  await expect(page).toHaveURL('https://www.saucedemo.com/');


});
