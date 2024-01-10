import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "tooltip";

setupTest(COMPONENT_NAME);

test.describe("Alert in Light Theme", () => {
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`tooltip-Default.png`);
    });
  });

  test.describe("ArrowPositions tests", () => {
    test("ArrowPositions: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`tooltip-ArrowPositions.png`);
    });
  });

  test.describe("Customization tests", () => {
    test("Customization: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`tooltip-Customization.png`);
    });
  });

  test.describe("RenderIntoSpecificContainer tests", () => {
    test("RenderIntoSpecificContainer: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `tooltip-RenderIntoSpecificContainer.png`,
      );
    });
  });
});
test.describe("Alert in Dark Theme", () => {
  test.beforeEach(({ page }) => setDarkTheme(page));

  test.describe("Default tests", () => {
    test("Default: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`tooltip-Dark-Default.png`);
    });
  });

  test.describe("ArrowPositions tests", () => {
    test("ArrowPositions: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`tooltip-Dark-ArrowPositions.png`);
    });
  });

  test.describe("Customization tests", () => {
    test("Customization: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`tooltip-Dark-Customization.png`);
    });
  });

  test.describe("RenderIntoSpecificContainer tests", () => {
    test("RenderIntoSpecificContainer: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `tooltip-Dark-RenderIntoSpecificContainer.png`,
      );
    });
  });
});
test.describe("Alert in RTL", () => {
  test.beforeEach(({ page }) => setRtl(page));

  test.describe("Default tests", () => {
    test("Default: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`tooltip-RTL-Default.png`);
    });
  });

  test.describe("ArrowPositions tests", () => {
    test("ArrowPositions: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`tooltip-RTL-ArrowPositions.png`);
    });
  });

  test.describe("Customization tests", () => {
    test("Customization: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`tooltip-RTL-Customization.png`);
    });
  });

  test.describe("RenderIntoSpecificContainer tests", () => {
    test("RenderIntoSpecificContainer: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `tooltip-RTL-RenderIntoSpecificContainer.png`,
      );
    });
  });
});
