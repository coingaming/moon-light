import { test, expect } from '@playwright/test'

test('accordion ', async ({ page }) => {
  await page.goto('/client/accordion')

  await expect(page).toHaveScreenshot("accordion.png", {
    maxDiffPixelRatio: 0.01
  });
})