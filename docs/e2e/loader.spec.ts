import { test, expect } from "@playwright/test";
import { setupTest } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "loader";

setupTest(COMPONENT_NAME);

test.describe("Default tests", () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`loader-Default.png`, {
      animations: "disabled",
    });
  });
});

test.describe("Sizes tests", () => {
  test("Sizes: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`loader-Sizes.png`, {
      animations: "disabled",
    });
  });
});

test.describe("Colors tests", () => {
  test("Colors: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`loader-Colors.png`, {
      animations: "disabled",
    });
  });
});

test.describe("RTL tests", () => {
  test("Default: should render and match screenshot in RTL", async ({
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
    await expect(page).toHaveScreenshot(`loader-Default-RTL.png`, {
      animations: "disabled",
    });
  });
});
