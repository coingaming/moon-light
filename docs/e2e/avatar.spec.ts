import { test, expect } from "@playwright/test";
import { setupTest } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "avatar";

setupTest(COMPONENT_NAME);

test("Default: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
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
  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Rtl.png`);
});

test("Variants: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Variants.png`);
});

test("Sizes: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Sizes.png`);
});

test("ActiveStatus: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-ActiveStatus.png`);
});

test("StatusOrigin: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-StatusOrigin.png`);
});

test("Customization: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Customization.png`);
});
