import { test, expect } from '@playwright/test'

test('should navigate to the main page', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveScreenshot("main.png", {
    maxDiffPixelRatio: 0.01
  });
})
