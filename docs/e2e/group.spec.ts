import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "group";

setupTest(COMPONENT_NAME);

test.describe("Group in Light Theme", () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`group-Default.png`);
  });
  test("Direction: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`group-Direction.png`);
  });
  test("Options: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`group-Options.png`);
  });
  test("Size: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`group-Size.png`);
  });
  test("States: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`group-States.png`);
  });
});

test.describe("Group functionality", () => {
  test("Default: should render and match screenshot by hover input", async ({
    page,
  }) => {
    await page.getByPlaceholder("First input").hover();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(`group-input-hover.png`);
  });
  test("Default: should render and match screenshot by hover select", async ({
    page,
  }) => {
    await page.getByRole("combobox").hover();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(`group-select-hover.png`);
  });
  test("Default: should render and match screenshot by focus on input", async ({
    page,
  }) => {
    await page.getByPlaceholder("First input").focus();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(`group-input-focus.png`);
  });
  test("Default: should render and match screenshot by focus on select", async ({
    page,
  }) => {
    await page.getByRole("combobox").focus();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(`group-select-focus.png`);
  });
  test("Default: should fill input and select", async ({ page }) => {
    await page.getByPlaceholder("First input").fill("Test input");
    await page.getByRole("combobox").selectOption("Option 1");
    await expect(page.getByPlaceholder("First input")).toHaveValue(
      "Test input",
    );
    await expect(page.getByRole("combobox")).toHaveValue("Option 1");
  });
});

test.describe("Group in RTL", () => {
  test("Default: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`group-Default-RTL.png`);
  });
  test("Direction: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`group-Direction-RTL.png`);
  });
  test("Options: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`group-Options-RTL.png`);
  });
  test("Size: should render and match screenshot in RTL", async ({ page }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`group-Size-RTL.png`);
  });
  test("States: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`group-States-RTL.png`);
  });
});

test.describe("Group in Dark Theme", () => {
  test("Default: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`group-Default-Dark.png`);
  });
  test("Direction: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`group-Direction-Dark.png`);
  });
  test("Options: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`group-Options-Dark.png`);
  });
  test("Size: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`group-Size-Dark.png`);
  });
  test("States: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`group-States-Dark.png`);
  });
});
