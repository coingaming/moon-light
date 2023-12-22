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
  await expect(page).toHaveScreenshot(`tabs-SelectedIndex.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("SegmentControlView: should render and match screenshot", async ({
  page,
}) => {
  await expect(page).toHaveScreenshot(`tabs-SegmentControlView.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("TabsOnlyView: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`tabs-TabsOnlyView.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Sizes: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`tabs-Sizes.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("WithHandler: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`tabs-WithHandler.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("WithCustomStyle: should render and match screenshot", async ({
  page,
}) => {
  await expect(page).toHaveScreenshot(`tabs-WithCustomStyle.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});
