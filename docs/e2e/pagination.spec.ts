import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "pagination";

setupTest(COMPONENT_NAME);

test.describe(`${COMPONENT_NAME} in Light Theme`, () => {
  test.describe("Defaults tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
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
  });
  test.describe("WithButton tests", () => {
    test("WithButton: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithButton.png`);
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
