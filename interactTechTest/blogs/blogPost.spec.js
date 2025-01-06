import { test } from '@playwright/test';
import { addNewBlogPost, verifyNewBlogPost, login, verifyNewBlogPostAlt } from './helper/addBlogPost'

test.beforeEach(async ({ page }) => {
  await login(page);
})

//Currently the first test below fails in the "verifyNewBlogPost" function due to an issue where when submitting the form.
//The application reads the blog post fields as empty even though the fields have been populated correctly, therefore preventing successful form submission.
//This issue only seems to occur when running through playwright, manually executing the test works fine as well running the test in Cypress

test('add new blog post and verify blog post data', async ({ page }) => {
  await addNewBlogPost(page);
  await verifyNewBlogPost(page);
});

//Below is an alternative version of test which navigates to a previously existing blog post to prove that the code to verify the blog data works successfully
test('Alternate add new blog post and verify blog post data', async ({ page }) => {
  await addNewBlogPost(page);
  await verifyNewBlogPostAlt(page);
});
