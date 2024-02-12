import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "icons";

setupTest(COMPONENT_NAME);

test.describe(`${COMPONENT_NAME} in Light Theme`, () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
  });

  test("Customization: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Customization.png`);
  });
});

test.describe(`${COMPONENT_NAME} in Dark Theme`, () => {
  test.beforeEach(async ({ page }) => {
    await setDarkTheme(page);
  });
  test("Default: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Default.png`);
  });

  test("Customization: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-Customization.png`,
    );
  });
});

test.describe(`${COMPONENT_NAME} in RTL`, () => {
  test.beforeEach(async ({ page }) => {
    await setRtl(page);
  });
  test("Default: should render and match screenshot in RTL", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Default.png`);
  });

  test("Customization: should render and match screenshot in RTL", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-rtl-Customization.png`,
    );
  });
});
