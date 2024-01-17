import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "search";

setupTest(COMPONENT_NAME);

test.describe(`${COMPONENT_NAME} in Light Theme`, () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
  });
  test("WithTransition: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithTransition.png`);
  });
});

test.describe(`${COMPONENT_NAME} functionality`, () => {
  test("WithTransition: should render and match screenshot by focus", async ({
    page,
  }) => {
    const search = page.getByLabel("Search");
    const resultHeading = page.getByRole("heading", { name: "Results" });
    const resultItem = page.getByText("Home#home");
    const clear = page.getByRole("button", { name: "Clear" });
    // Test if Search results are rendered
    await search.focus();
    await expect(search).toBeFocused();
    await expect(resultHeading).toBeVisible();
    // Test Search result item by hover
    await resultItem.hover();
    await expect(resultItem).toHaveCSS(
      "background-color",
      "rgba(0, 0, 0, 0.04)",
    );
    // Test Search result item by click
    await resultItem.click();
    await expect(page).toHaveURL(new RegExp("#home$"));
    // Test Search for existing item
    await search.fill("Home");
    await expect(resultItem).toBeVisible();
    // Test Search for non-existing item
    await search.fill("Test");
    await expect(page.getByText('Search for "Test"')).toBeVisible();
    // Test Search clear with mouse
    await search.fill("Test");
    await clear.click();
    await expect(resultItem).toBeVisible();
    // Test Search clear with keyboard
    await search.fill("Test");
    await page.keyboard.press("Escape");
    await expect(resultItem).toBeVisible();
  });
});

test.describe(`${COMPONENT_NAME} in RTL`, () => {
  test("Default: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-RTL.png`);
  });
  test("WithTransition: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithTransition-RTL.png`,
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
  test("WithTransition: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithTransition-Dark.png`,
    );
  });
});
