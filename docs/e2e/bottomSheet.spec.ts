import { test, expect } from "@playwright/test";
import { PLAYWRIGHT_DEFAULT_TIMEOUT } from "@/constants";
import {
  PlayWrightEndTouch,
  PlayWrightMoveTouch,
  PlayWrightStartTouch,
  createTouchEvent,
} from "@/utils/playwrightDrag";

const COMPONENT_NAME = "bottomsheet";
const MAX_DIFF_PIXEL_RATIO = 0.01;

const DEFAULT_TIMEOUT = 500; // We wait max for .5 second for mounting

test.beforeEach(async ({ page }, testInfo) => {
  const example = testInfo.title?.split(":")?.[0] ?? "Default";
  await page.goto(`/client/bottomsheet/${example}`);
  await page.waitForTimeout(DEFAULT_TIMEOUT);
});
test.afterEach(async ({ page }) => {
  // Cleanup from route
  await page.close();
});

test("Default: should open default bottomsheet and match screenshot", async ({
  page,
}) => {
  await page.getByRole("button", { name: "Default Bottomsheet" }).click();
  await page.waitForTimeout(100);

  const state = await page
    .getByRole("dialog")
    .getAttribute("data-headlessui-state");

  await expect(state).toEqual("open");

  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`, {
    maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO,
  });
});

test("Default: should close default bottomsheet", async ({ page }) => {
  await page.getByRole("button", { name: "Default Bottomsheet" }).click();
  await page.waitForTimeout(100);

  const state = await page
    .getByRole("dialog")
    .getAttribute("data-headlessui-state");

  await expect(state).toEqual("open");

  await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-closed.png`, {
    maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO,
  });
});

test("WithDraghandle: should not close default bottomsheet if drag less than half", async ({
  page,
  isMobile,
}) => {
  if (!isMobile) {
    return;
  }
  await page.locator("button.text-moon-14").click();
  await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);

  const state = await page
    .getByRole("dialog")
    .getAttribute("data-headlessui-state");
  // Check if open
  await expect(state).toEqual("open");

  // Import the functions
  await page.evaluate(createTouchEvent);
  await page.evaluate(PlayWrightStartTouch);
  await page.evaluate(PlayWrightMoveTouch);
  await page.evaluate(PlayWrightEndTouch);

  await page.evaluate(async () => {
    const s = ".after\\:bg-beerus";
    const size = document
      .querySelector("div[role=dialog] .bg-goku")
      ?.getBoundingClientRect()?.height;
    //@ts-ignore
    window.PlayWrightStartTouch(s, { x: 0, y: 0 });
    //@ts-ignore
    window.PlayWrightMoveTouch(s, size / 2 - 30, 10); // Important check the steps, cannot be 0
    await new Promise((res) =>
      setTimeout(() => {
        //@ts-ignore
        window.PlayWrightEndTouch(s);
        res(0);
      }, 300)
    );
  });
  // Wait
  await page.waitForTimeout(300);
  const endState = await page
    .getByRole("dialog")
    .getAttribute("data-headlessui-state");
  // Should be still open
  await expect(endState).toEqual("open");
});

test("WithDraghandle: should close default bottomsheet if drag less than half", async ({
  page,
  isMobile,
}) => {
  if (!isMobile) {
    return;
  }
  await page.locator("button.text-moon-14").click();
  await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);

  const state = await page
    .getByRole("dialog")
    .getAttribute("data-headlessui-state");
  // Check if open
  await expect(state).toEqual("open");

  // Import the functions
  await page.evaluate(createTouchEvent);
  await page.evaluate(PlayWrightStartTouch);
  await page.evaluate(PlayWrightMoveTouch);
  await page.evaluate(PlayWrightEndTouch);

  await page.evaluate(async () => {
    const s = ".after\\:bg-beerus";
    const size = document
      .querySelector("div[role=dialog] .bg-goku")
      ?.getBoundingClientRect()?.height;
    //@ts-ignore
    window.PlayWrightStartTouch(s, { x: 0, y: 0 });
    //@ts-ignore
    window.PlayWrightMoveTouch(s, size / 2 + 30, 10); // Important check the steps, cannot be 0
    await new Promise((res) =>
      setTimeout(() => {
        //@ts-ignore
        window.PlayWrightEndTouch(s);
        res(0);
      }, 300)
    );
  });
  // Wait
  await page.waitForTimeout(500);
  // Should be still open
  await expect(page.locator("div[role=dialog] .bg-goku")).not.toBeAttached();
});
