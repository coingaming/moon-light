import { test, expect } from '@playwright/test'

test('should navigate to the main page', async ({ page }) => {
  await page.goto('/')

  // await page.screenshot({ path: 'main.png', fullPage: true });

  await expect(page).toHaveScreenshot("main.png", {
    maxDiffPixelRatio: 0.01
  });
  // await expect(page.getByText("Moon Design System")).toHaveScreenshot("main.png", {
  //   maxDiffPixelRatio: 0.01
  // });
})