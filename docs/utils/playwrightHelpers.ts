import { test } from "@playwright/test";
import type { Page } from "@playwright/test";

export async function setRtl(page: Page) {
  await page.evaluate(() => {
    const htmlElement = document?.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("dir", "rtl");
    } else {
      test.fail(true, "setRtl error: html element was not found");
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
      bodyElement.classList.add("text-bulma");
    } else {
      test.fail(true, "setDarkTheme error: body element was not found");
      throw new Error("setDarkTheme error: body element was not found");
    }
  });
  await page.waitForSelector("body.theme-moon-dark");
}

export async function setLightTheme(page: Page) {
  await page.evaluate(() => {
    const bodyElement = document?.querySelector("body");
    if (bodyElement) {
      if (!bodyElement.classList.contains("theme-moon-light")) {
        // Case the theme is dark
        bodyElement.classList.remove("theme-moon-dark");
        bodyElement.classList.add("theme-moon-light");
      }
    } else {
      test.fail(true, "setLightTheme error: body element was not found");
      throw new Error("setLightTheme error: body element was not found");
    }
  });
  await page.waitForSelector("body.theme-moon-light");
}

export function setupTest(name: string) {
  test.beforeEach(async ({ page }, testInfo) => {
    const example = testInfo.title?.split(":")?.[0] ?? "Default";
    await page.goto(`/client/${name}/${example}`, {
      waitUntil: "networkidle",
    });
  });
  test.afterEach(async ({ page }) => {
    // Cleanup from route
    // await page.close();
  });
  test.describe.configure({ mode: "parallel" });
}

// Usage: expect(bgColor).toBe(await getMoonColor(page, "chichi-10"));
export async function getMoonColor(page: Page, color: string) {
  let colorFromBrowser = await page.evaluate((color: string) => {
    return window
      .getComputedStyle(document.body)
      .getPropertyValue(`--${color}`);
  }, color);
  if (!colorFromBrowser) {
    const msg = `getMoonColor: ${color} was not found`;
    test.info().errors.push({
      message: msg,
    });
    test.fail(true, msg);
  }

  if (colorFromBrowser.match(/(\d+)\s(\d+)\s(\d+)\s\/\s(\d+\.\d+)/)) {
    colorFromBrowser = colorFromBrowser.replace(
      /(\d+)\s(\d+)\s(\d+)\s\/\s(\d+\.\d+)/,
      "rgba($1, $2, $3, $4)",
    );
  } else if (colorFromBrowser.match(/(\d+)\s(\d+)\s(\d+)/)) {
    colorFromBrowser = colorFromBrowser.replace(
      /(\d+)\s(\d+)\s(\d+)/,
      "rgb($1, $2, $3)",
    );
  }
  return colorFromBrowser;
}
