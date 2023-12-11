import { test, expect } from '@playwright/test'

const COMPONENT_NAME = 'authcode'
const MAX_DIFF_PIXEL_RATIO = 0.01

const DEFAULT_TIMEOUT = 1000; // We wait max for 1 second for mounting

test.beforeEach(async ({ page }, testInfo) => {
    const example = testInfo.title?.split(':')?.[0] ?? "Default"
    const title = testInfo.title?.split(':')?.[1] || ''
    console.log(`Running ${example} | ${title}`);
    
    await page.goto(`/client/authcode/${example}`)
    await page.waitForTimeout(DEFAULT_TIMEOUT)
});

test('Default: should be visible in a short term', async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}.png`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})

test('Default: should exists 6 input in the DOM', async ({ page }) => {
    const elementExists = await page.$$('div > input')
    await expect(elementExists.length).toBe(6)
})

test('Default: user should be able to input in every box', async({ page, browser }) => {
    const inputs = (await page.$$('div > input'))
    await inputs[0].fill('1')
    await inputs[1].fill('1')
    await inputs[2].fill('1')
    await inputs[3].fill('1')
    await inputs[4].fill('1')
    await inputs[5].fill('1')

    await page.waitForTimeout(100)

    inputs.forEach(async(_, index) => {
        const input = await page.locator(`div > input:nth-child(${(index+1)})`)
        await expect(input).toHaveValue('1')
    })
})