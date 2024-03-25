import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "group";

setupTest(COMPONENT_NAME);

test.describe(`${COMPONENT_NAME} in Light Theme`, () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
  });
  test("Direction: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Direction.png`);
  });
  test("Options: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Options.png`);
  });
  test("Size: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Size.png`);
  });
  test("States: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-States.png`);
  });
});

test.describe(`${COMPONENT_NAME} functionality`, () => {
  test("Options: should render and match screenshot by hover first input", async ({
    page,
  }) => {
    await page.getByPlaceholder("First input").first().hover();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-first-input-hover.png`,
    );
  });
  test("Options: should render and match screenshot by hover first insetInput", async ({
    page,
  }) => {
    await page.getByPlaceholder("First inset input").first().hover();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-first-insetInput-hover.png`,
    );
  });
  test("Options: should render and match screenshot by hover last input", async ({
    page,
  }) => {
    await page.getByPlaceholder("Last input").first().hover();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-last-input-hover.png`,
    );
  });
  test("Options: should render and match screenshot by hover last insetInput", async ({
    page,
  }) => {
    await page.getByPlaceholder("Last inset input").first().hover();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-last-insetInput-hover.png`,
    );
  });

  test("Options: should render and match screenshot by focus on first input", async ({
    page,
  }) => {
    await page.getByPlaceholder("First input").first().focus();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-first-input-focus.png`,
    );
  });
  test("Options: should render and match screenshot by focus on first insetInput", async ({
    page,
  }) => {
    await page.getByPlaceholder("First inset input").first().focus();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-first-insetInput-focus.png`,
    );
  });
  test("Options: should render and match screenshot by focus on last input", async ({
    page,
  }) => {
    await page.getByPlaceholder("Last input").first().focus();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-last-input-focus.png`,
    );
  });
  test("Options: should render and match screenshot by focus on last insetInput", async ({
    page,
  }) => {
    await page.getByPlaceholder("Last inset input").first().focus();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-last-insetInput-focus.png`,
    );
  });

  test("Options: first input should enter and display value", async ({
    page,
  }) => {
    const input = page.getByPlaceholder("First input").first();
    await input.fill("testFirstInput");
    await expect(input).toHaveValue("testFirstInput");
  });
  test("Options: first insetInput should enter and display value", async ({
    page,
  }) => {
    const input = page.getByPlaceholder("First inset input").first();
    await input.fill("testFirstInsetInput");
    await expect(input).toHaveValue("testFirstInsetInput");
  });
  test("Options: last input should enter and display value", async ({
    page,
  }) => {
    const input = page.getByPlaceholder("Last input").first();
    await input.fill("testLastInput");
    await expect(input).toHaveValue("testLastInput");
  });
  test("Options: last insetInput should enter and display value", async ({
    page,
  }) => {
    const input = page.getByPlaceholder("Last inset input").first();
    await input.fill("testLastInsetInput");
    await expect(input).toHaveValue("testLastInsetInput");
  });

  test("Options: should render and match screenshot by hover first select", async ({
    page,
  }) => {
    await page.getByRole("combobox").nth(1).hover();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-first-select-hover.png`,
    );
  });
  test("Options: should render and match screenshot by hover first insetSelect", async ({
    page,
  }) => {
    await page.getByRole("combobox").nth(5).hover();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-first-insetSelect-hover.png`,
    );
  });
  test("Options: should render and match screenshot by hover last select", async ({
    page,
  }) => {
    await page.getByRole("combobox").first().hover();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-last-select-hover.png`,
    );
  });
  test("Options: should render and match screenshot by hover last insetSelect", async ({
    page,
  }) => {
    await page.getByRole("combobox").nth(4).hover();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-last-insetSelect-hover.png`,
    );
  });

  test("Options: should render and match screenshot by focus on first select", async ({
    page,
  }) => {
    await page.getByRole("combobox").nth(1).focus();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-first-select-focus.png`,
    );
  });
  test("Options: should render and match screenshot by focus on first insetSelect", async ({
    page,
  }) => {
    await page.getByRole("combobox").nth(5).focus();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-first-insetSelect-focus.png`,
    );
  });
  test("Options: should render and match screenshot by focus on last select", async ({
    page,
  }) => {
    await page.getByRole("combobox").first().focus();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-last-select-focus.png`,
    );
  });
  test("Options: should render and match screenshot by focus on last insetSelect", async ({
    page,
  }) => {
    await page.getByRole("combobox").nth(4).focus();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-last-insetSelect-focus.png`,
    );
  });

  test("Options: first select should select and display value", async ({
    page,
  }) => {
    const select = page.getByRole("combobox").nth(1);
    await select.selectOption("Option 1");
    await expect(select).toHaveValue("1");
  });
  test("Options: first insetSelect should select and display value", async ({
    page,
  }) => {
    const select = page.getByRole("combobox").nth(5);
    await select.selectOption("Option 1");
    await expect(select).toHaveValue("1");
  });
  test("Options: last select should select and display value", async ({
    page,
  }) => {
    const select = page.getByRole("combobox").first();
    await select.selectOption("Option 1");
    await expect(select).toHaveValue("1");
  });
  test("Options: last insetSelect should select and display value", async ({
    page,
  }) => {
    const select = page.getByRole("combobox").nth(4);
    await select.selectOption("Option 1");
    await expect(select).toHaveValue("1");
  });
});

test.describe(`${COMPONENT_NAME} in RTL`, () => {
  test("Default: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-RTL.png`);
  });
  test("Direction: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Direction-RTL.png`);
  });
  test("Options: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Options-RTL.png`);
  });
  test("Size: should render and match screenshot in RTL", async ({ page }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Size-RTL.png`);
  });
  test("States: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-States-RTL.png`);
  });
});

test.describe(`${COMPONENT_NAME} in Dark Theme`, () => {
  test("Default: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-Dark.png`);
  });
  test("Direction: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Direction-Dark.png`);
  });
  test("Options: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Options-Dark.png`);
  });
  test("Size: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Size-Dark.png`);
  });
  test("States: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-States-Dark.png`);
  });
});
