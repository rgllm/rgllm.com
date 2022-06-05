import {test, expect} from '@playwright/test'

test('should navigate to the resume page', async ({page}) => {
  await page.goto('http://localhost:3000/about')
  await page.locator('text=resume page').click()

  await expect(page).toHaveURL('http://localhost:3000/resume')
  await expect(page.locator('h1')).toContainText('Rogério Moreira')
})
