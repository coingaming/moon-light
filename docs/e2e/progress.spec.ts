import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "progress";

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
  test("Pin: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Pin.png`);
  });
  test("Size: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Size.png`);
  });
  test("Value: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Value.png`);
  });
  test("WithLabels: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithLabels.png`);
  });
});

test.describe(`${COMPONENT_NAME} functionality`, () => {
  test("Pin: should return correct aria attributes", async ({ page }) => {
    const progress = page.getByRole("progressbar");
    await expect(progress).toHaveAttribute("aria-valuenow", "75");
    await expect(progress).toHaveAttribute("aria-label", "75%");
    await expect(page.getByText("75%")).toBeVisible();
  });
});

test.describe(`${COMPONENT_NAME} in RTL`, () => {
  test("Default: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-RTL.png`);
  });
  test("Customization: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-Customization-RTL.png`,
    );
  });
  test("Pin: should render and match screenshot in RTL", async ({ page }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Pin-RTL.png`);
  });
  test("Size: should render and match screenshot in RTL", async ({ page }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Size-RTL.png`);
  });
  test("Value: should render and match screenshot in RTL", async ({ page }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Value-RTL.png`);
  });
  test("WithLabels: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithLabels-RTL.png`);
  });
});

test.describe(`${COMPONENT_NAME} in Dark Theme`, () => {
  test("Default: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-Dark.png`);
  });
  test("Customization: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-Customization-Dark.png`,
    );
  });
  test("Pin: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Pin-Dark.png`);
  });
  test("Size: should render and match screenshot in RTL", async ({ page }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Size-RTL.png`);
  });
  test("Value: should render and match screenshot in RTL", async ({ page }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Value-RTL.png`);
  });
  test("WithLabels: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithLabels-RTL.png`);
  });
});
