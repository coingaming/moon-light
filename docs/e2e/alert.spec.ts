import { test, expect } from "@playwright/test";
import {
  PLAYWRIGHT_DEFAULT_TIMEOUT,
  PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
} from "@/constants";

const COMPONENT_NAME = "alert";

test.beforeEach(async ({ page }, testInfo) => {
  const example = testInfo.title?.split(":")?.[0] ?? "Default";
  await page.goto(`/client/${COMPONENT_NAME}/${example}`);
  await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);
});
test.afterEach(async ({ page }) => {
  // Cleanup from route
  await page.close();
});

test("Default: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`alert-Default.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("WithTitle: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`alert-WithTitle.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("WithIcons: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`alert-WithIcons.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("WithClose: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`alert-WithClose.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Customization: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`alert-Customization.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("WithClose: should callback onClick works", async ({ page }) => {
  await page.getByRole("button").click();
  await expect(page.getByText("Show Alert")).toBeVisible();
});
