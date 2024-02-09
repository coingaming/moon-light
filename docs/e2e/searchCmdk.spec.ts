import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "searchCmdk";

setupTest(COMPONENT_NAME);

test.describe(`${COMPONENT_NAME} in Light Theme`, () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
  });
});

test.describe(`${COMPONENT_NAME} functionality`, () => {
  test("Default: should render and match screenshot, should cover functionality", async ({
    page,
  }) => {
    const search = page.getByLabel("Search");
    const searchInput = page.getByPlaceholder("Search for a component");
    const resultItem = page.getByText("Aurum");
    const esc = page.getByText("Esc");
    // Test if Search results are rendered
    await search.click();
    await expect(searchInput).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Focus.png`);
    // Test Search result item by hover
    await resultItem.hover();
    await expect(resultItem).toHaveCSS(
      "background-color",
      "rgba(0, 0, 0, 0.04)",
    );
    // Test Search result item by click
    await resultItem.click();
    await expect(searchInput).toBeHidden();
    // Test Search for existing item
    await search.click();
    await searchInput.fill("Aurum");
    await expect(resultItem).toBeVisible();
    // Test Search for non-existing item
    await searchInput.fill("Test");
    await expect(page.getByText("No Results")).toBeVisible();
    // Test Search clear with mouse
    await esc.click();
    await expect(searchInput).toBeHidden();
    // Test Search clear with keyboard
    await search.click();
    await page.keyboard.press("Escape");
    await expect(searchInput).toBeHidden();
  });
});

test.describe(`${COMPONENT_NAME} in RTL`, () => {
  test("Default: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-RTL.png`);
  });
});

test.describe(`${COMPONENT_NAME} in Dark Theme`, () => {
  test("Default: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-Dark.png`);
  });
});
