import { Page } from "@playwright/test";

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
      bodyElement.setAttribute("class", "theme-moon-dark");
    } else {
      throw new Error("setDarkTheme error: body element was not found");
    }
  });
  await page.waitForSelector("body[class=theme-moon-dark]");
}
