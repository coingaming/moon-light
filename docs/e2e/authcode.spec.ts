import { test, expect } from '@playwright/test'

const COMPONENT_NAME = 'authcode'
const MAX_DIFF_PIXEL_RATIO = 0.01

test('should be visible in a short term', async({ page }) => {
    await page.goto('/client/authcode/Default')

    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}.png`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})