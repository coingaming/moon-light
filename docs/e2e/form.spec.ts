import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "form";

setupTest(COMPONENT_NAME);

test.describe(`${COMPONENT_NAME} in Light Theme`, () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
  });
  test("Size: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Size.png`);
  });
  test("WithInsetItems: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithInsetItems.png`);
  });
});

test.describe(`${COMPONENT_NAME} functionality`, () => {
  test("Default: should submit a form", async ({ page }) => {
    const msgPromise = page.waitForEvent("console");
    await page.getByRole("button", { name: "Create account" }).click();
    const msg = await msgPromise;
    expect(msg.text()).toEqual("Submit");
  });
});

test.describe(`${COMPONENT_NAME} in RTL`, () => {
  test("Default: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-RTL.png`);
  });
  test("Size: should render and match screenshot in RTL", async ({ page }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Size-RTL.png`);
  });
  test("WithInsetItems: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithInsetItems-RTL.png`,
    );
  });
});

test.describe(`${COMPONENT_NAME} in Dark Theme`, () => {
  test("Default: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-Dark.png`);
  });
  test("Size: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Size-Dark.png`);
  });
  test("WithInsetItems: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithInsetItems-Dark.png`,
    );
  });
});
