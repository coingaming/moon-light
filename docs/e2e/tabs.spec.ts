import { test, expect } from "@playwright/test";
import { PLAYWRIGHT_DEFAULT_TIMEOUT } from "@/constants";

const COMPONENT_NAME = "tabs";

test.beforeEach(async ({ page }, testInfo) => {
  const example = testInfo.title?.split(":")?.[0] ?? "Default";
  await page.goto(`/client/${COMPONENT_NAME}/${example}`);
  await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);
});
test.afterEach(async ({ page }) => {
  // Cleanup from route
  await page.close();
});

test("SelectedIndex: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`tabs-SelectedIndex.png`);
});

test("SegmentControlView: should render and match screenshot", async ({
  page,
}) => {
  await expect(page).toHaveScreenshot(`tabs-SegmentControlView.png`);
});

test("TabsOnlyView: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`tabs-TabsOnlyView.png`);
});

test("Sizes: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`tabs-Sizes.png`);
});

test("WithHandler: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`tabs-WithHandler.png`);
});

test("WithCustomStyle: should render and match screenshot", async ({
  page,
}) => {
  await expect(page).toHaveScreenshot(`tabs-WithCustomStyle.png`);
});

test("Pill: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`tabs-Pill.png`);
});

test('SelectedIndexSegment: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(`tabs-SelectedIndexSegment.png`, {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO
    })
})
