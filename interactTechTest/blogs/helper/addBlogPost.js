const { expect } = require('@playwright/test');

const baseUrl = process.env.BASE_URL;
const username = process.env.USER_NAME;
const password = process.env.USER_PASSWORD;
const testText = process.env.TEST_TEXT

async function login(page) {
    await page.goto(baseUrl);
    await expect(page.getByPlaceholder('username')).toBeVisible();
    await page.getByPlaceholder('username').fill(username);
    await expect(page.getByPlaceholder('password')).toBeVisible();
    await page.getByPlaceholder('password').fill(password);
    await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
    await page.getByRole('button', { name: 'Log in' }).click();
}
exports.login = login;

async function addNewBlogPost(page) {
    await page.goto(baseUrl);
    await expect(page.getByRole('button', { name: 'Your profile and settings ' })).toBeVisible();
    await page.getByRole('button', { name: 'Your profile and settings ' }).click();
    await expect(page.getByRole('link', { name: 'Add Blog Post' })).toContainText("Add Blog Post")
    await expect(page.getByRole('link', { name: 'Add Blog Post' })).toBeVisible();
    await page.getByRole('link', { name: 'Add Blog Post' }).click();
    await expect(page.getByRole('textbox', { name: 'Image uploader for blog' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Image uploader for blog' }).click();
    await page.getByRole('textbox', { name: 'Image uploader for blog' }).setInputFiles('interactTechTest/fixtures/testImg.jpg');
    await expect(page.getByLabel('Post title')).toBeVisible();
    await page.getByLabel('Post title').fill(testText);
    await expect(page.getByLabel('Post Summary')).toBeVisible();
    await page.getByLabel('Post Summary').fill(testText);
    await expect(page.getByRole('textbox', { name: 'Rich Text Editor,' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Rich Text Editor,' }).fill(testText);
    await expect(page.getByLabel('Continue')).toBeVisible();
    await page.getByLabel('Continue').click();
    await expect(page.locator('ul').filter({ hasText: 'Publish?NoYes' })).toBeVisible();
    await page.locator('ul').filter({ hasText: 'Publish?NoYes' }).locator('label').click();
    await expect(page.locator('ul').filter({ hasText: 'Make Featured Post?NoYes' })).toBeVisible();
    await page.locator('ul').filter({ hasText: 'Make Featured Post?NoYes' }).locator('label').click();
    await expect(page.getByRole('link', { name: 'Save' })).toBeVisible();
    await page.getByRole('link', { name: 'Save' }).click();
    //a validation issue present on the site prevents submitting the form, strangely this works fine manually
}
exports.addNewBlogPost = addNewBlogPost;

async function verifyNewBlogPost(page) {
    await expect(page.getByRole('button', { name: 'All Posts' })).toBeVisible();
    await page.getByRole('button', { name: 'All Posts' }).click();
    await expect(page.getByRole('button', { name: 'All Posts' })).toBeVisible();
    await page.getByRole('link', { name: 'Automated test' }).first().click();
    await expect(page.getByText('Published')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Automated test' })).toBeVisible();
    await expect(page.locator('h1')).toContainText(testText);
    await expect(page.locator('p').filter({ hasText: /^Automated test$/ })).toBeVisible();
    await expect(page.locator('#blogs')).toContainText(testText);
}
exports.verifyNewBlogPost = verifyNewBlogPost;

async function verifyNewBlogPostAlt(page) {
    await page.getByRole('button', { name: 'Your profile and settings ' }).click();
    await page.getByRole('link', { name: 'My Profile' }).click();
    await page.getByRole('tab', { name: 'Blog' }).click();
    await page.getByRole('link', { name: 'Automated test' }).first().click();
    await expect(page.getByText('Published')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Automated test' })).toBeVisible();
    await expect(page.locator('h1')).toContainText(testText);
    await expect(page.locator('p').filter({ hasText: /^Automated test$/ })).toBeVisible();
    await expect(page.locator('#blogs')).toContainText(testText);
}
exports.verifyNewBlogPostAlt = verifyNewBlogPostAlt;