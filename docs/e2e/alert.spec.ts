import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "alert";

setupTest(COMPONENT_NAME);

test.describe("Alert in Light Theme", () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`alert-Default.png`);
  });
  test("WithTitle: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`alert-WithTitle.png`);
  });
  test("WithIcon: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`alert-WithIcon.png`);
  });
  test("WithClose: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`alert-WithClose.png`);
  });
  test("Customization: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`alert-Customization.png`);
  });
});

test.describe("Alert functionality", () => {
  test("WithClose: should callback onClick works", async ({ page }) => {
    await page.getByRole("button").click();
    await expect(page.getByText("Show Alert")).toBeVisible();
  });
});

test.describe("Alert in RTL", () => {
  test("Default: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`alert-Default-RTL.png`);
  });
  test("WithTitle: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`alert-WithTitle-RTL.png`);
  });
  test("WithIcon: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`alert-WithIcon-RTL.png`);
  });
  test("WithClose: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`alert-WithClose-RTL.png`);
  });
  test("Customization: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`alert-Customization-RTL.png`);
  });
});

test.describe("Alert in Dark Theme", () => {
  test("Default: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`alert-Default-Dark.png`);
  });
  test("WithTitle: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`alert-WithTitle-Dark.png`);
  });
  test("WithIcon: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`alert-WithIcon-Dark.png`);
  });
  test("WithClose: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`alert-WithClose-Dark.png`);
  });
  test("Customization: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`alert-Customization-Dark.png`);
  });
});
