import { test, expect } from '@playwright/test'

const COMPONENT_NAME = 'authcode'
const MAX_DIFF_PIXEL_RATIO = 0.01

const DEFAULT_TIMEOUT = 1000; // We wait max for 1 second for mounting

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    const example = testInfo.title?.split(':')?.[0] ?? "Default"
    await page.goto(`/client/authcode/${example}`)
    await page.waitForTimeout(DEFAULT_TIMEOUT)
});

test('Default: should be visible in a short term', async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}.png`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})