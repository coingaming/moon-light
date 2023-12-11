import { test, expect } from '@playwright/test'

const COMPONENT_NAME = 'authcode'
const MAX_DIFF_PIXEL_RATIO = 0.01

const DEFAULT_TIMEOUT = 500; // We wait max for .5 second for mounting

test.beforeEach(async ({ page }, testInfo) => {
    const example = testInfo.title?.split(':')?.[0] ?? "Default"
    await page.goto(`/client/authcode/${example}`)
    await page.waitForTimeout(DEFAULT_TIMEOUT)
});
test.afterEach(async ({ page }, testInfo) => {
    // Cleanup from route
    await page.close({ runBeforeUnload: true })
})

test('Default: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}.png`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})

test('ErrorState: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-ErrorState.png`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})

test('AllowedCharacters: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-AllowedCharacters.png`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})

test('CustomLength: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-CustomLength.png`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})

test('DifferentGaps: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-DifferentGaps.png`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})

test('HintMessage: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-HintMessage.png`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})

test('Password: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Password.png`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})

test('Placeholder: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Placeholder.png`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})

test('WithAutoSubmit: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithAutoSubmit.png`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})

test('WithManualSubmit: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithManualSubmit.png`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})


test('Default: should exists 6 input in the DOM', async ({ page }) => {
    const inputs = await page.locator('div > input')
    const input = await inputs.all()
    await expect(input.length).toBe(6)
})

test('Default: should be able to input in every box', async ({ page }) => {
    const inputs = await (await page.locator('div > input')).all()
    await inputs[0].fill('1')
    await inputs[1].fill('1')
    await inputs[2].fill('1')
    await inputs[3].fill('1')
    await inputs[4].fill('1')
    await inputs[5].fill('1')

    await page.waitForTimeout(100)

    inputs.forEach(async (_, index) => {
        const input = await page.locator(`div > input:nth-child(${(index + 1)})`)
        await expect(input).toHaveValue('1')
    })
})

test('Default: should change focus when the user finish the input', async ({ page }) => {
    // Get the first input
    const input = await page.locator(`div > input:nth-child(1)`)
    const secondInput = await page.locator(`div > input:nth-child(2)`)

    await input.press('1')
    await page.waitForTimeout(100)
    await expect(secondInput).toBeFocused()
})

test('Password: should not print any character', async ({ page }) => {
    await page.getByLabel('Character 1').click();
    await page.getByLabel('Character 1').fill('1');
    await page.getByLabel('Character 2').fill('1');
    await page.getByLabel('Character 3').fill('1');
    await page.getByLabel('Character 4').fill('1');
    await page.getByLabel('Character 5').fill('1');
    await page.getByLabel('Character 6').fill('1');
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Password-filled.png`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})

test('ErrorState: Should the error be visible until it get fixed', async ({ page }) => {
    const inputs = await (await page.locator('div > input')).all()
    const error = await page.getByText('Must be 3 or more characters long')
    await expect(error).toBeVisible()

    // Input 4 characters
    await inputs[0].fill('1')
    await inputs[1].fill('1')
    await inputs[2].fill('1')
    await inputs[3].fill('1')

    await expect(error).not.toBeVisible()
})

test('AllowedCharacters: should not allow not valid characters', async ({ page }) => {
    const inputs = await (await page.locator('div > input')).all()

    // Input 4 characters
    await inputs[0].press('1')
    await inputs[1].press('1')
    await inputs[2].press('A')
    const inputRight = await inputs[1].inputValue()
    const inputsWrong = await inputs[2].inputValue()

    await expect(inputRight).toBe('1')
    await expect(inputsWrong).toBe('')
})

test('WithManualSubmit: should submit on the button click', async ({ page }) => {
    await page.getByLabel('Character 1').click();
    await page.getByLabel('Character 1').fill('1');
    await page.getByLabel('Character 2').fill('2');
    await page.getByLabel('Character 3').fill('3');
    await page.getByLabel('Character 4').fill('4');
    await page.getByLabel('Character 5').fill('5');
    await page.getByLabel('Character 6').fill('6');
    let dialogMessage = ''
    page.on('dialog', async dialog => {
        dialogMessage = dialog.message()
        dialog.dismiss()
    });
    await page.waitForTimeout(100);

    await expect(dialogMessage).toBe('')
    await page.getByRole('button').click()
    await page.waitForTimeout(100)
    await expect(dialogMessage).toBe('123456')
})

