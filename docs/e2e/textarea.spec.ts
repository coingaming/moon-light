import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "textarea";

setupTest(COMPONENT_NAME);

test.describe(`${COMPONENT_NAME} in Light Theme`, () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
  });
  test("States: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-States.png`);
  });
  test("WithButton: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithButton.png`);
  });
  test("Customization: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Customization.png`);
  });
});

test.describe(`${COMPONENT_NAME} functionality`, () => {
  test("Default: should render and match screenshot by hover", async ({
    page,
  }) => {
    await page.getByLabel("Textarea").hover();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-hover.png`);
  });
  test("Default: should render and match screenshot by focus", async ({
    page,
  }) => {
    await page.getByLabel("Textarea").focus();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-focus.png`);
  });
  test("Default: should fill and display data", async ({ page }) => {
    const textarea = page.getByLabel("Textarea");
    await textarea.fill("Test");
    await expect(textarea).toHaveValue("Test");
  });
});

test.describe(`${COMPONENT_NAME} in RTL`, () => {
  test("Default: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-RTL.png`);
  });
  test("States: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-States-RTL.png`);
  });
  test("WithButton: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithButton-RTL.png`);
  });
  test("Customization: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-Customization-RTL.png`,
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
  test("States: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-States-Dark.png`);
  });
  test("WithButton: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithButton-Dark.png`,
    );
  });
  test("Customization: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-Customization-Dark.png`,
    );
  });
});
