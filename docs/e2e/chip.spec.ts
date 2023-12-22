import { test, expect } from "@playwright/test";
import {
  PLAYWRIGHT_DEFAULT_TIMEOUT,
  PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
} from "@/constants";

const COMPONENT_NAME = "chip";

test.beforeEach(async ({ page }, testInfo) => {
  const example = testInfo.title?.split(":")?.[0] ?? "Default";
  await page.goto(`/client/${COMPONENT_NAME}/${example}`);
  await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);
});
test.afterEach(async ({ page }) => {
  // Cleanup from route
  await page.close();
});

test("Default: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Default.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Sizes: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Sizes.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Variants: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Variants.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Customization: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Customization.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Active: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Active.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Disabled: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Disabled.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Icons: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Icons.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("IsStroke: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-IsStroke.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("WithOnClick: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-WithOnClick.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("WithOnClick: should callback onClick works", async ({ page }) => {
  const button = await page.locator("button");
  let wasClicked = false;
  page.on("dialog", (dialog) => {
    wasClicked = true;
    dialog.accept();
  });
  await button.click();

  await expect(wasClicked).toBe(true);
});

test("WithOnClick: should multiple callback onClick works", async ({
  page,
}) => {
  const button = await page.locator("button");
  let counter = 0;
  page.on("dialog", async (dialog) => {
    counter += 1;
    await dialog.accept();
  });
  await button.click();
  await button.click();
  await button.click();
  expect(counter).toBe(3);
});

test("IsStroke: should stroke on the hover", async ({ page }) => {
  const buttons = await page.locator("button").all();

  await buttons[0].hover();
  await page.waitForSelector("button:nth-child(1):hover");
  await expect(page).toHaveScreenshot(`chip-HoverIcon1.png`);
  await buttons[1].hover();
  await page.waitForSelector("button:nth-child(2):hover");
  await expect(page).toHaveScreenshot(`chip-HoverIcon2.png`);
  await buttons[2].hover();
  await page.waitForSelector("button:nth-child(3):hover");
  await expect(page).toHaveScreenshot(`chip-HoverIcon3.png`);
});

test("Active: should keep active state if selected always true", async ({
  page,
}) => {
  const button = await page.getByText("Poker", { exact: true });
  await expect((await button.getAttribute("class"))?.split(" ")).toEqual(
    expect.arrayContaining(["bg-jiren"]),
  );
  await button.click();
  await expect((await button.getAttribute("class"))?.split(" ")).toEqual(
    expect.arrayContaining(["bg-jiren"]),
  );
});

test("Active: should set active state if clicked", async ({ page }) => {
  const button = await page.getByText("football", { exact: true });
  await expect((await button.getAttribute("class"))?.split(" ")).not.toEqual(
    expect.arrayContaining(["bg-jiren"]),
  );
  await button.click();
  await expect((await button.getAttribute("class"))?.split(" ")).toEqual(
    expect.arrayContaining(["bg-jiren"]),
  );
});

test("Active: should set active state if clicked, and remove if clicked twice", async ({
  page,
}) => {
  const button = await page.getByText("football", { exact: true });
  await expect((await button.getAttribute("class"))?.split(" ")).not.toEqual(
    expect.arrayContaining(["bg-jiren"]),
  );
  await button.click();
  await expect((await button.getAttribute("class"))?.split(" ")).toEqual(
    expect.arrayContaining(["bg-jiren"]),
  );
  await button.click();
  await expect((await button.getAttribute("class"))?.split(" ")).not.toEqual(
    expect.arrayContaining(["bg-jiren"]),
  );
});
