import { test, expect, Page } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";
import { MOON_THEME_COLORS } from "@/constants";

const COMPONENT_NAME = "alert";

setupTest(COMPONENT_NAME);

async function getMoonColor(page: Page, color: string) {
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
  }
  return colorFromBrowser;
}

test.describe("Themes", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`, {
      waitUntil: "networkidle",
    });
  });

  test("Check colors in light theme", async ({ page }) => {
    for await (const iterator of Object.keys(MOON_THEME_COLORS)) {
      const color = await getMoonColor(page, iterator);
      expect(color).toBe(
        MOON_THEME_COLORS[iterator].replace(
          /(\d+)\s(\d+)\s(\d+)\s\/\s(\d+\.\d+)/,
          "rgba($1, $2, $3, $4)",
        ),
      );
    }
  });
});
