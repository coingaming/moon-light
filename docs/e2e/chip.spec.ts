import { test, expect } from "@playwright/test";
import { setupTest } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "chip";

setupTest(COMPONENT_NAME);

test("Default: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Default.png`);
});

test("Sizes: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Sizes.png`);
});

test("Variants: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Variants.png`);
});

test("Customization: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Customization.png`);
});

test("Active: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Active.png`);
});

test("Disabled: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Disabled.png`);
});

test("Icons: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-Icons.png`);
});

test("IsStroke: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-IsStroke.png`);
});

test("WithOnClick: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`chip-WithOnClick.png`);
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
  await expect(button).toHaveClass(/bg-jiren/);
  await button.click();
  await expect(button).toHaveClass(/bg-jiren/);
});

test("Active: should set active state if clicked", async ({ page }) => {
  const button = await page.getByText("football", { exact: true });
  await expect((await button.getAttribute("class"))?.split(" ")).not.toEqual(
    expect.arrayContaining(["bg-jiren"]),
  );
  await button.click();
  await expect(button).toHaveClass(/bg-jiren/);
});

test("Active: should set active state if clicked, and remove if clicked twice", async ({
  page,
}) => {
  const button = await page.getByText("football", { exact: true });
  await expect((await button.getAttribute("class"))?.split(" ")).not.toEqual(
    expect.arrayContaining(["bg-jiren"]),
  );
  await button.click();
  await expect(button).toHaveClass(/bg-jiren/);

  await button.click();
  await expect((await button.getAttribute("class"))?.split(" ")).not.toEqual(
    expect.arrayContaining(["bg-jiren"]),
  );
});
