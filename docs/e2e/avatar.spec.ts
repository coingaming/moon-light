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

test("Default: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Default: should render and match screenshot in RTL", async ({ page }) => {
  await page.evaluate(() => {
    const htmlElement = document?.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("dir", "rtl");
    } else {
      throw new Error("RTLProvider error: html element was not found");
    }
  });
  await page.waitForSelector("html[dir=rtl]");
  await page.waitForTimeout(1000);
  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Rtl.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    threshold: 0,
    omitBackground: false,
  });
});

test("Variants: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Variants.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Sizes: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Sizes.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("ActiveStatus: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-ActiveStatus.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("StatusOrigin: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-StatusOrigin.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Customization: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Customization.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});
