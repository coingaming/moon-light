import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "pagination";

setupTest(COMPONENT_NAME);

test.describe(`${COMPONENT_NAME} in Light Theme`, () => {
  test.describe("Defaults tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
    });
    test("Default: should render and change the page [2]", async ({ page }) => {
      const btn = page.getByText("2");
      await btn.click();
      await expect(btn).toHaveClass(/bg-piccolo/);
      await expect(btn).toHaveClass(/font-medium/);
      await expect(btn).toHaveClass(/text-goten/);
    });

    test("Default: should render and change the page [3] should render the [4]", async ({
      page,
    }) => {
      const btn = page.getByText("3");
      await btn.click();
      await expect(page.getByText("4")).toBeAttached();
    });

    test("Default: should render and change the page [4] should render the [5]", async ({
      page,
    }) => {
      await page.getByText("3").click();
      await page.getByText("4").click();
      await expect(page.getByText("5")).toBeAttached();
    });
  });
  test.describe("WithArrayOfPageHREFs tests", () => {
    test("WithArrayOfPageHREFs: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-WithArrayOfPageHREFs.png`,
      );
    });

    test("WithArrayOfPageHREFs: should render and change the page [2] and URL should change", async ({
      page,
    }) => {
      await page.getByText("2").click();
      await expect(page).toHaveURL(/#\?2/);
    });
  });
  test.describe("WithButton tests", () => {
    test("WithButton: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithButton.png`);
    });

    test("WithButton: should render and should have button [1]", async ({
      page,
    }) => {
      await expect(page.getByText("1")).toBeAttached();
      await expect(await page.getByText("1").evaluate((el) => el.tagName)).toBe(
        "BUTTON",
      );
    });
    test("WithButton: should render and should have button [26]", async ({
      page,
    }) => {
      await expect(page.getByText("26")).toBeAttached();
      await expect(
        await page.getByText("26").evaluate((el) => el.tagName),
      ).toBe("BUTTON");
    });
  });
});

test.describe(`${COMPONENT_NAME} in Dark Theme`, () => {
  test.beforeEach(async ({ page }) => {
    await setDarkTheme(page);
  });
  test.describe("Defaults tests", () => {
    test("Default: should render and match screenshot in Dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Dark-Default.png`);
    });
  });
  test.describe("WithArrayOfPageHREFs tests", () => {
    test("WithArrayOfPageHREFs: should render and match screenshot in Dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Dark-WithArrayOfPageHREFs.png`,
      );
    });
  });
  test.describe("WithButton tests", () => {
    test("WithButton: should render and match screenshot in Dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Dark-WithButton.png`,
      );
    });
  });
});

test.describe(`${COMPONENT_NAME} in RTL`, () => {
  test.beforeEach(async ({ page }) => {
    await setRtl(page);
  });
  test.describe("Defaults tests", () => {
    test("Default: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RTL-Default.png`);
    });
  });
  test.describe("WithArrayOfPageHREFs tests", () => {
    test("WithArrayOfPageHREFs: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-RTL-WithArrayOfPageHREFs.png`,
      );
    });
  });
  test.describe("WithButton tests", () => {
    test("WithButton: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-RTL-WithButton.png`,
      );
    });
  });
});
