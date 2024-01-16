import { test, expect } from "@playwright/test";
import {
  setupTest,
  setDarkTheme,
  setRtl,
  setLightTheme,
} from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "insetnativeselect";

setupTest(COMPONENT_NAME);

test.describe("InsetNativeSelect in Light Theme", () => {
  test.beforeEach(async ({ page }) => await setLightTheme(page));

  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`insetnativeselect-Default.png`);
    });

    test("Default: should render and expect first option to be selected", async ({
      page,
    }) => {
      const firstOption = await page
        .getByTestId("select")
        .evaluate((el: any) => el.value);
      expect(firstOption).toBe("Italy");
    });

    test("Default: should render and expect to change value", async ({
      page,
    }) => {
      await page.getByTestId("select").selectOption("Spain");
      const selectedOption = await page
        .getByTestId("select")
        .evaluate((el: any) => el.value);
      expect(selectedOption).toBe("Spain");
    });

    test("Default: should render and have hover on the select", async ({
      page,
    }) => {
      await page.getByTestId("select").hover();
      await page.waitForTimeout(100);
      await expect(page.getByTestId("select")).toHaveScreenshot(
        `insetnativeselect-Default-Hover.png`,
      );
    });

    test("Default: should render and have focus on the select", async ({
      page,
    }) => {
      await page.getByTestId("select").focus();
      await page.waitForTimeout(100);
      await expect(page.getByTestId("select")).toHaveScreenshot(
        `insetnativeselect-Default-Focus.png`,
      );
    });
  });
  test.describe("CustomStyles tests", () => {
    test("CustomStyles: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`insetnativeselect-CustomStyles.png`);
    });

    test("CustomStyles: should render and expect to change value", async ({
      page,
    }) => {
      await page.getByTestId("select").selectOption("Spain");
      const selectedOption = await page
        .getByTestId("select")
        .evaluate((el: any) => el.value);
      expect(selectedOption).toBe("Spain");
    });
  });
  test.describe("DifferentStates tests", () => {
    test("DifferentStates: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `insetnativeselect-DifferentStates.png`,
      );
    });

    test("DifferentStates: should render and [disabled] expect to NOT change value", async ({
      page,
    }) => {
      try {
        await page.getByTestId("dis-1").selectOption("Spain", {
          noWaitAfter: true,
          timeout: 500,
        });
      } catch (error) {
        // This means it works
      }
      expect(
        await page.getByTestId("dis-1").evaluate((el: any) => el.value),
      ).toBe("Italy");
    });

    test("DifferentStates: should render and [error] expect to change value", async ({
      page,
    }) => {
      await page.getByTestId("err-1").selectOption("Spain");
      expect(
        await page.getByTestId("err-1").evaluate((el: any) => el.value),
      ).toBe("Spain");
    });

    test("DifferentStates: should render and [readOnly] expect to NOT change value", async ({
      page,
    }) => {
      try {
        await page.getByTestId("ro-1").selectOption("Spain", {
          noWaitAfter: true,
          timeout: 500,
        });
      } catch (error) {
        // This means it works
      }
      expect(
        await page.getByTestId("ro-1").evaluate((el: any) => el.value),
      ).toBe("Italy");
    });
  });
});
test.describe("InsetNativeSelect in Dark Theme", () => {
  test.beforeEach(async ({ page }) => await setDarkTheme(page));

  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`insetnativeselect-Dark-Default.png`);
    });
  });
  test.describe("CustomStyles tests", () => {
    test("CustomStyles: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `insetnativeselect-Dark-CustomStyles.png`,
      );
    });
  });
  test.describe("DifferentStates tests", () => {
    test("DifferentStates: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `insetnativeselect-Dark-DifferentStates.png`,
      );
    });
  });
});
test.describe("InsetNativeSelect in RTL", () => {
  test.beforeEach(async ({ page }) => await setRtl(page));

  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`insetnativeselect-RTL-Default.png`);
    });
  });
  test.describe("CustomStyles tests", () => {
    test("CustomStyles: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `insetnativeselect-RTL-CustomStyles.png`,
      );
    });
  });
  test.describe("DifferentStates tests", () => {
    test("DifferentStates: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `insetnativeselect-RTL-DifferentStates.png`,
      );
    });
  });
});
