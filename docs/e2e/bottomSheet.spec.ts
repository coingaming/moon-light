import { test, expect } from "@playwright/test";

const COMPONENT_NAME = "bottomsheet";
const MAX_DIFF_PIXEL_RATIO = 0.01;

const DEFAULT_TIMEOUT = 500; // We wait max for .5 second for mounting

test.beforeEach(async ({ page }, testInfo) => {
  const example = testInfo.title?.split(":")?.[0] ?? "Default";
  await page.goto(`/client/bottomsheet/${example}`);
  await page.waitForTimeout(DEFAULT_TIMEOUT);
});
test.afterEach(async ({ page }) => {
  // Cleanup from route
  await page.close();
});

test("Default: should open default bottomsheet and match screenshot", async ({
  page,
}) => {
  await page.getByRole("button", { name: "Default Bottomsheet" }).click();
  await page.waitForTimeout(100);

  const state = await page
    .getByRole("dialog")
    .getAttribute("data-headlessui-state");

  await expect(state).toEqual("open");

  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`, {
    maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO,
  });
});

test("Default: should close default bottomsheet", async ({ page }) => {
  await page.getByRole("button", { name: "Default Bottomsheet" }).click();
  await page.waitForTimeout(100);

  const state = await page
    .getByRole("dialog")
    .getAttribute("data-headlessui-state");

  await expect(state).toEqual("open");

  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-closed.png`, {
    maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO,
  });
});
