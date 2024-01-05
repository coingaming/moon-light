import { PLAYWRIGHT_DEFAULT_TIMEOUT } from "@/constants";
import { test, Page } from "@playwright/test";

export async function setRtl(page: Page) {
  await page.evaluate(() => {
    const htmlElement = document?.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("dir", "rtl");
    } else {
      throw new Error("setRtl error: html element was not found");
    }
  });
  await page.waitForSelector("html[dir=rtl]");
}

export async function setDarkTheme(page: Page) {
  await page.evaluate(() => {
    const bodyElement = document?.querySelector("body");
    if (bodyElement) {
      bodyElement.classList.add("theme-moon-dark");
    } else {
      throw new Error("setDarkTheme error: body element was not found");
    }
  });
  await page.waitForSelector("body.theme-moon-dark");
}

export function setupTest(name: string) {
  test.beforeEach(async ({ page }, testInfo) => {
    const example = testInfo.title?.split(":")?.[0] ?? "Default";
    await page.goto(`/client/${name}/${example}`);
    await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);
  });
  test.afterEach(async ({ page }) => {
    // Cleanup from route
    // await page.close();
  });
}
