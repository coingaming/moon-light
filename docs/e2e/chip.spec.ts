import { test, expect } from "@playwright/test";
import {
  PLAYWRIGHT_DEFAULT_TIMEOUT,
  PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
} from "@/constants";

const COMPONENT_NAME = "chip";

test.beforeEach(async ({ page }, testInfo) => {
  const example = testInfo.title?.split(":")?.[0] ?? "Default";
  await page.goto(`/client/authcode/${example}`);
  await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);
});
test.afterEach(async ({ page }) => {
  // Cleanup from route
  await page.close();
});

test("Default: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Default.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Sizes: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Sizes.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Variants: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Variants.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("MaintainStateOnClick: should render and match screenshot", async ({
  page,
}) => {
  await expect(page).toHaveScreenshot(`chip-MaintainStateOnClick.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Customization: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Customization.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Active: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Active.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Disabled: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Disabled.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Icons: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Icons.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("IsStroke: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-IsStroke.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("StrokeWithIcons: should render and match screenshot", async ({
  page,
}) => {
  await expect(page).toHaveScreenshot(`chip-StrokeWithIcons.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("WithOnClick: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-WithOnClick.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});
