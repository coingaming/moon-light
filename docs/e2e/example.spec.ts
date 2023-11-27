import { test, expect } from '@playwright/test'

test('should navigate to the main page', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveScreenshot("main.png", {
    maxDiffPixelRatio: 0.01
  });
})

test('accordion ', async ({ page }) => {
  await page.goto('/server/accordion')

  await expect(page).toHaveScreenshot("accordion.png", {
    maxDiffPixelRatio: 0.01
  });
})