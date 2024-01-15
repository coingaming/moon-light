import { test, expect } from "@playwright/test";
import {
  setupTest,
  setDarkTheme,
  setRtl,
  setLightTheme,
} from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "iconbutton";

setupTest(COMPONENT_NAME);

test.describe("IconButton in Light Theme", () => {
  test.beforeEach(async ({ page }) => await setLightTheme(page));
  test.describe("Default tests", () => {
    test("Default: should render and match the screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
    });
  });
  test.describe("Animations tests", () => {
    test("Animations: should render and match the screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Animations.png`);
    });
  });
  test.describe("ButtonAsALinkHTML tests", () => {
    test("ButtonAsALinkHTML: should render and match the screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-ButtonAsALinkHTML.png`,
      );
    });
  });
  test.describe("Disabled tests", () => {
    test.describe("Disabled tests", () => {
      test("Disabled: should render and match the screenshot", async ({
        page,
      }) => {
        await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Disabled.png`);
      });
    });
  });
  test.describe("Sizes tests", () => {
    test("Sizes: should render and match the screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Sizes.png`);
    });
  });
  test.describe("Variants tests", () => {
    test("Variants: should render and match the screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Variants.png`);
    });
  });
});
test.describe("IconButton in Dark Theme", () => {
  test.beforeEach(async ({ page }) => await setDarkTheme(page));

  test.describe("Default tests", () => {
    test("Default: should render and match the screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Dark-Default.png`);
    });
  });
  test.describe("Animations tests", () => {
    test("Animations: should render and match the screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Dark-Animations.png`,
      );
    });
  });
  test.describe("ButtonAsALinkHTML tests", () => {
    test("ButtonAsALinkHTML: should render and match the screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Dark-ButtonAsALinkHTML.png`,
      );
    });
  });
  test.describe("Disabled tests", () => {
    test.describe("Disabled tests", () => {
      test("Disabled: should render and match the screenshot", async ({
        page,
      }) => {
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-Dark-Disabled.png`,
        );
      });
    });
  });
  test.describe("Sizes tests", () => {
    test("Sizes: should render and match the screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Dark-Sizes.png`);
    });
  });
  test.describe("Variants tests", () => {
    test("Variants: should render and match the screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Dark-Variants.png`,
      );
    });
  });
});
test.describe("IconButton in RTL", () => {
  test.beforeEach(async ({ page }) => await setRtl(page));

  test.describe("Default tests", () => {
    test("Default: should render and match the screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RTL-Default.png`);
    });
  });
  test.describe("Animations tests", () => {
    test("Animations: should render and match the screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-RTL-Animations.png`,
      );
    });
  });
  test.describe("ButtonAsALinkHTML tests", () => {
    test("ButtonAsALinkHTML: should render and match the screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-RTL-ButtonAsALinkHTML.png`,
      );
    });
  });
  test.describe("Disabled tests", () => {
    test.describe("Disabled tests", () => {
      test("Disabled: should render and match the screenshot", async ({
        page,
      }) => {
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-RTL-Disabled.png`,
        );
      });
    });
  });
  test.describe("Sizes tests", () => {
    test("Sizes: should render and match the screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RTL-Sizes.png`);
    });
  });
  test.describe("Variants tests", () => {
    test("Variants: should render and match the screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RTL-Variants.png`);
    });
  });
});
