import { test, expect } from "@playwright/test";
import {
  PLAYWRIGHT_DEFAULT_TIMEOUT,
  PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
} from "@/constants";

const COMPONENT_NAME = "avatar";

test.beforeEach(async ({ page }, testInfo) => {
  const example = testInfo.title?.split(":")?.[0] ?? "Default";
  await page.goto(`/client/${COMPONENT_NAME}/${example}`);
  await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);
});
test.afterEach(async ({ page }) => {
  // Cleanup from route
  await page.close();
});

test('Default: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`tagsInput-Default.png`, {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO
    })
})

test('DifferentSizes: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`tagsInput-DifferentSizes.png`, {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO
    })
})

test('States: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`tagsInput-States.png`, {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO
    })
})

test('UppercaseLowercase: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`tagsInput-UppercaseLowercase.png`, {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO
    })
})
