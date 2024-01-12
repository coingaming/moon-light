import { test, expect } from "@playwright/test";
import {
  setupTest,
  getMoonColor,
  setLightTheme,
} from "@/utils/playwrightHelpers";
import { MOON_THEME_COLORS } from "@/constants";

const COMPONENT_NAME = "alert";

setupTest(COMPONENT_NAME);

test.describe("Themes", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`, {
      waitUntil: "networkidle",
    });
  });

  test("Check Moon Theme colors in light theme", async ({ page }) => {
    await setLightTheme(page);
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
