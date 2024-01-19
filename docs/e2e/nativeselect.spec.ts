import { test, expect } from "@playwright/test";
import {
  setupTest,
  setDarkTheme,
  setRtl,
  setLightTheme,
  getMoonColor,
} from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "nativeselect";

setupTest(COMPONENT_NAME);

test.describe("NativeSelect in Light Theme", () => {
  test.beforeEach(async ({ page }) => await setLightTheme(page));

  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`NativeSelect-Default.png`);
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
        `NativeSelect-Default-Hover.png`,
      );
    });

    test("Default: should render and have focus on the select", async ({
      page,
    }) => {
      await page.getByTestId("select").focus();
      await page.waitForTimeout(100);
      await expect(page.getByTestId("select")).toHaveScreenshot(
        `NativeSelect-Default-Focus.png`,
      );
    });
  });
  test.describe("Sizes tests", () => {
    test("Sizes: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`NativeSelect-Size.png`);
    });

    test("Sizes: should render and expect first option to be selected [sm]", async ({
      page,
    }) => {
      const firstOption = await page
        .getByTestId("select-sm")
        .evaluate((el: any) => el.value);
      expect(firstOption).toBe("Italy");
    });

    test("Sizes: should render and expect first option to be selected [md]", async ({
      page,
    }) => {
      const firstOption = await page
        .getByTestId("select-md")
        .evaluate((el: any) => el.value);
      expect(firstOption).toBe("Italy");
    });

    test("Sizes: should render and expect first option to be selected [lg]", async ({
      page,
    }) => {
      const firstOption = await page
        .getByTestId("select-lg")
        .evaluate((el: any) => el.value);
      expect(firstOption).toBe("Italy");
    });

    test("Sizes: should render and expect to change value [sm]", async ({
      page,
    }) => {
      await page.getByTestId("select-sm").selectOption("Spain");
      const selectedOption = await page
        .getByTestId("select-sm")
        .evaluate((el: any) => el.value);
      expect(selectedOption).toBe("Spain");
    });

    test("Sizes: should render and expect to change value [md]", async ({
      page,
    }) => {
      await page.getByTestId("select-md").selectOption("Spain");
      const selectedOption = await page
        .getByTestId("select-md")
        .evaluate((el: any) => el.value);
      expect(selectedOption).toBe("Spain");
    });

    test("Sizes: should render and expect to change value [lg]", async ({
      page,
    }) => {
      await page.getByTestId("select-lg").selectOption("Spain");
      const selectedOption = await page
        .getByTestId("select-lg")
        .evaluate((el: any) => el.value);
      expect(selectedOption).toBe("Spain");
    });

    test("Sizes: should render and have hover on the select [sm]", async ({
      page,
    }) => {
      const elm = page.getByTestId("select-sm");
      await elm.hover();
      await page.waitForTimeout(100);
      await expect(elm).toHaveScreenshot(`NativeSelect-Sizes-smHover.png`);
    });

    test("Sizes: should render and have focus on the select [sm]", async ({
      page,
    }) => {
      const elm = page.getByTestId("select-sm");
      await elm.focus();
      await page.waitForTimeout(100);
      await expect(elm).toHaveScreenshot(`NativeSelect-Sizes-smFocus.png`);
    });

    test("Sizes: should render and have hover on the select [md]", async ({
      page,
    }) => {
      const elm = page.getByTestId("select-md");
      await elm.hover();
      await page.waitForTimeout(100);
      await expect(elm).toHaveScreenshot(`NativeSelect-Sizes-mdHover.png`);
    });

    test("Sizes: should render and have focus on the select [md]", async ({
      page,
    }) => {
      const elm = page.getByTestId("select-md");
      await elm.focus();
      await page.waitForTimeout(100);
      await expect(elm).toHaveScreenshot(`NativeSelect-Sizes-mdFocus.png`);
    });

    test("Sizes: should render and have hover on the select [lg]", async ({
      page,
    }) => {
      const elm = page.getByTestId("select-lg");
      await elm.hover();
      await page.waitForTimeout(100);
      await expect(elm).toHaveScreenshot(`NativeSelect-Sizes-lgHover.png`);
    });

    test("Sizes: should render and have focus on the select [lg]", async ({
      page,
    }) => {
      const elm = page.getByTestId("select-lg");
      await elm.focus();
      await page.waitForTimeout(100);
      await expect(elm).toHaveScreenshot(`NativeSelect-Sizes-lgFocus.png`);
    });
  });
  test.describe("CustomStyles tests", () => {
    test("CustomStyles: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`NativeSelect-CustomStyles.png`);
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
      await expect(page).toHaveScreenshot(`NativeSelect-DifferentStates.png`);
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
test.describe("NativeSelect in Dark Theme", () => {
  test.beforeEach(async ({ page }) => await setDarkTheme(page));

  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`NativeSelect-Dark-Default.png`);
    });
  });
  test.describe("Sizes tests", () => {
    test("Sizes: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`NativeSelect-Dark-Size.png`);
    });
  });
  test.describe("CustomStyles tests", () => {
    test("CustomStyles: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`NativeSelect-Dark-CustomStyles.png`);
    });
  });
  test.describe("DifferentStates tests", () => {
    test("DifferentStates: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `NativeSelect-Dark-DifferentStates.png`,
      );
    });
  });
});
test.describe("NativeSelect in RTL", () => {
  test.beforeEach(async ({ page }) => await setRtl(page));

  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`NativeSelect-RTL-Default.png`);
    });
  });
  test.describe("CustomStyles tests", () => {
    test("CustomStyles: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`NativeSelect-RTL-CustomStyles.png`);
    });
  });
  test.describe("DifferentStates tests", () => {
    test("DifferentStates: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `NativeSelect-RTL-DifferentStates.png`,
      );
    });
  });
});
