import {test, expect} from '@playwright/test'

test('should navigate to the about page', async ({page}) => {
  await page.goto('http://localhost:3000/')
  await page.locator('.umami--click--menu-about').click()

  await expect(page).toHaveURL('http://localhost:3000/about')
  await expect(page.locator('h1')).toContainText('About Me')
})

test('should navigate to the blog page', async ({page}) => {
  await page.goto('http://localhost:3000/')
  await page.locator('.umami--click--home-view-all-posts').click()

  await expect(page).toHaveURL('http://localhost:3000/blog')
  await expect(page.locator('h1')).toContainText('Writing')
})

test('should navigate to the bookmarks page', async ({page}) => {
  await page.goto('http://localhost:3000/')
  await page.locator('.umami--click--home-view-all-bookmarks').click()

  await expect(page).toHaveURL('http://localhost:3000/bookmarks')
  await expect(page.locator('h1')).toContainText('Bookmarks')
})
