import { test, expect } from "@playwright/test";
import { PLAYWRIGHT_DEFAULT_TIMEOUT } from "@/constants";

const COMPONENT_NAME = "button";

test.beforeEach(async ({ page }, testInfo) => {
  const example = testInfo.title?.split(":")?.[0] ?? "Default";
  await page.goto(`/client/${COMPONENT_NAME}/${example}`);
  await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);
});
test.afterEach(async ({ page }) => {
  // Cleanup from route
  await page.close();
});

test.describe("ButtonAsLinkHTML tests", () => {
  test("ButtonAsLinkHTML: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`button-ButtonAsLinkHTML.png`);
  });
});

test.describe("Variants tests", () => {
  test("Variants: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-Variants.png`);
  });
});

test.describe("Sizes tests", () => {
  test("Sizes: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-Sizes.png`);
  });
});

test.describe("Icons tests", () => {
  test("Icons: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-Icons.png`);
  });
});

test.describe("FullWidth tests", () => {
  test("FullWidth: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-FullWidth.png`);
  });
});

test.describe("Disabled tests", () => {
  test("Disabled: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-Disabled.png`);
  });
});

test.describe("Animations tests", () => {
  test("Animations: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-Animations.png`, {
      animations: "disabled",
    });
  });
});

test.describe("Multiline tests", () => {
  test("Multiline: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-Multiline.png`);
  });
});
