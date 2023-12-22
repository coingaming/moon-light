import { test, expect } from "@playwright/test";
import {
  PLAYWRIGHT_DEFAULT_TIMEOUT,
  PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
} from "@/constants";

test.beforeEach(async ({ page }, testInfo) => {
  const example = testInfo.title?.split(":")?.[0] ?? "Default";
  await page.goto(`/client/checkbox/${example}`);
  await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);
});

test.afterEach(async ({ page }) => {
  // Cleanup from route
  await page.close();
});

test.describe("Default Tests", () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`checkbox-Default.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Default: should be checked after click and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`checkbox-Default.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Default: RTL support - should render and match screenshot", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const htmlElement = document?.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        throw new Error("RTLProvider error: html element was not found");
      }
    });
    await page.waitForSelector("html[dir=rtl]");
    await expect(page).toHaveScreenshot(`checkbox-RTL-Default.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});

test.describe("WithLabel Tests", () => {
  test("WithLabel: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`checkbox-WithLabel.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("WithLabel: RTL support - should render and match screenshot", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const htmlElement = document?.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        throw new Error("RTLProvider error: html element was not found");
      }
    });
    await page.waitForSelector("html[dir=rtl]");
    await expect(page).toHaveScreenshot(`checkbox-RTL-WithLabel.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});

test.describe("Checked Tests", () => {
  test("Checked: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`checkbox-Checked.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Checked: RTL support - should render and match screenshot", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const htmlElement = document?.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        throw new Error("RTLProvider error: html element was not found");
      }
    });
    await page.waitForSelector("html[dir=rtl]");
    await expect(page).toHaveScreenshot(`checkbox-RTL-Checked.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});

test.describe("Disabled Tests", () => {
  test("Disabled: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`checkbox-Disabled.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Disabled: RTL support - should render and match screenshot", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const htmlElement = document?.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        throw new Error("RTLProvider error: html element was not found");
      }
    });
    await page.waitForSelector("html[dir=rtl]");
    await expect(page).toHaveScreenshot(`checkbox-RTL-Disabled.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});

test.describe("ReadOnly Tests", () => {
  test("ReadOnly: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`checkbox-ReadOnly.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("ReadOnly: RTL support - should render and match screenshot", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const htmlElement = document?.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        throw new Error("RTLProvider error: html element was not found");
      }
    });
    await page.waitForSelector("html[dir=rtl]");
    await expect(page).toHaveScreenshot(`checkbox-RTL-ReadOnly.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});

test.describe("PartiallySelected Tests", () => {
  test("PartiallySelected: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`checkbox-PartiallySelected.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("PartiallySelected: RTL support - should render and match screenshot", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const htmlElement = document?.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        throw new Error("RTLProvider error: html element was not found");
      }
    });
    await page.waitForSelector("html[dir=rtl]");
    await expect(page).toHaveScreenshot(`checkbox-RTL-PartiallySelected.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});

test.describe("Customization Tests", () => {
  test("Customization: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`checkbox-Customization.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Customization: RTL support - should render and match screenshot", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const htmlElement = document?.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        throw new Error("RTLProvider error: html element was not found");
      }
    });
    await page.waitForSelector("html[dir=rtl]");
    await expect(page).toHaveScreenshot(`checkbox-RTL-Customization.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});
