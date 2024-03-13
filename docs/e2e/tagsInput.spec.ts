import { test, expect } from "@playwright/test";
import { setupTest } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "tagsInput";

setupTest(COMPONENT_NAME);

test.describe("Default Testing", () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`tagsInput-Default.png`);
  });

  test("Default: Input should be editable", async ({ page }) => {
    const input = await page.locator("input");
    await input.focus();
    await input.pressSequentially("Test");
    await expect(await input.inputValue()).toBe("Test");
  });

  test("Default: Input should clear after pressing enter", async ({ page }) => {
    const input = await page.locator("input");
    await input.focus();
    await input.pressSequentially("Test");
    await expect(await input.inputValue()).toBe("Test");
    await page.keyboard.press("Enter");
    await expect(await input.inputValue()).toBe("");
  });

  test("Default: tagsInput should create the tag after pressing enter", async ({
    page,
  }) => {
    const input = await page.locator("input");
    await input.focus();
    await input.pressSequentially("Test");
    await expect(await input.inputValue()).toBe("Test");
    await page.keyboard.press("Enter");
    await expect(await input.inputValue()).toBe("");
    await expect(await page.locator(".text-moon-10-caption")).toBeVisible();
  });

  test("Default: tagsInput should remove the tag after pressing the arrow", async ({
    page,
  }) => {
    const input = await page.locator("input");
    await input.focus();
    await input.pressSequentially("Test");

    await expect(await input.inputValue()).toBe("Test");
    await page.keyboard.press("Enter");

    await expect(await input.inputValue()).toBe("");
    await expect(await page.locator(".text-moon-10-caption")).toBeAttached();
    await expect(await page.locator(".text-moon-10-caption")).toBeVisible();

    const svgButton = page.locator("svg");
    await svgButton.click();
    expect((await svgButton.all()).length).toBe(0);
  });

  test("Default: tagsInput should create the tags after pressing enter twice", async ({
    page,
  }) => {
    const input = await page.locator("input");
    await input.focus();
    await input.pressSequentially("Test");
    await expect(await input.inputValue()).toBe("Test");
    await page.keyboard.press("Enter");
    await input.pressSequentially("Test 2");
    await expect(await input.inputValue()).toBe("Test 2");
    await page.keyboard.press("Enter");
    await expect(await input.inputValue()).toBe("");
    await expect(await page.locator(".text-moon-10-caption").count()).toBe(2);
  });
});

test.describe("DifferentSizes", () => {
  test("DifferentSizes: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`tagsInput-DifferentSizes.png`);
  });
});

test.describe("States", () => {
  test("States: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`tagsInput-States.png`);
  });

  test("States: input disabled should not be editable", async ({ page }) => {
    const input = await page.locator("input").first(); // Disabled input

    expect(await input.getAttribute("disabled")).toBe("");
    await input.focus();
    await input.pressSequentially("Test");
    await expect(await input.inputValue()).toBe("");
  });
});

test.describe("UppercaseLowercase tests", () => {
  test("UppercaseLowercase: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`tagsInput-UppercaseLowercase.png`);
  });
});
