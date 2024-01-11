import { test, expect } from "@playwright/test";
import {
  setupTest,
  setDarkTheme,
  setRtl,
  getMoonColor,
} from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "tooltip";

setupTest(COMPONENT_NAME);

test.describe("Tooltip in Light Theme", () => {
  test.beforeEach(({ isMobile }) => {
    if (isMobile) {
      test.skip();
    }
  });
  /* Default tests */
  test.describe("Default tests", () => {
    test.beforeEach(async ({ page }) => {
      await page.getByText("Trigger").hover();
      await page.waitForTimeout(100);
    });

    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`tooltip-Default.png`);
    });
  });

  test.describe("ArrowPositions tests", () => {
    test.beforeEach(async ({ page }) => {
      await page.evaluate(() => {
        document.body.style.padding = "80px 140px";
      });
      await page.waitForTimeout(100);
    });
    test("ArrowPositions: should render and match screenshot", async ({
      page,
    }) => {
      // Top Start
      await page.getByText("top-start", { exact: true }).hover();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(`tooltip-ArrowPositions.png`);
    });

    test("ArrowPositions: should render and top-center should works", async ({
      page,
    }) => {
      await page.getByText("top-center").hover();
      await page.waitForTimeout(100);
      const tooltip = await page.locator("[data-side]");
      const side = await tooltip.getAttribute("data-side");
      expect(side).toBe("top");
      const align = await tooltip.getAttribute("data-align");
      expect(align).toBe("center");
    });

    test("ArrowPositions: should render and top-end should works", async ({
      page,
    }) => {
      await page.getByText("top-end").hover();
      await page.waitForTimeout(100);
      const tooltip = await page.locator("[data-side]");
      const side = await tooltip.getAttribute("data-side");
      expect(side).toBe("top");
      const align = await tooltip.getAttribute("data-align");
      expect(align).toBe("end");
    });

    test("ArrowPositions: should render and right should works", async ({
      page,
    }) => {
      await page.getByText("right").hover();
      await page.waitForTimeout(100);
      const tooltip = await page.locator("[data-side]");
      const side = await tooltip.getAttribute("data-side");
      expect(side).toBe("right");
      const align = await tooltip.getAttribute("data-align");
      expect(align).toBe("center");
    });

    test("ArrowPositions: should render and bottom-start should works", async ({
      page,
    }) => {
      await page.getByText("bottom-start").hover();
      await page.waitForTimeout(100);
      const tooltip = await page.locator("[data-side]");
      const side = await tooltip.getAttribute("data-side");
      expect(side).toBe("bottom");
      const align = await tooltip.getAttribute("data-align");
      expect(align).toBe("start");
    });

    test("ArrowPositions: should render and bottom-center should works", async ({
      page,
    }) => {
      await page.getByText("bottom-center").hover();
      await page.waitForTimeout(100);
      const tooltip = await page.locator("[data-side]");
      const side = await tooltip.getAttribute("data-side");
      expect(side).toBe("bottom");
      const align = await tooltip.getAttribute("data-align");
      expect(align).toBe("center");
    });

    test("ArrowPositions: should render and bottom-end should works", async ({
      page,
    }) => {
      await page.getByText("bottom-end").hover();
      await page.waitForTimeout(100);
      const tooltip = await page.locator("[data-side]");
      const side = await tooltip.getAttribute("data-side");
      expect(side).toBe("bottom");
      const align = await tooltip.getAttribute("data-align");
      expect(align).toBe("end");
    });

    test("ArrowPositions: should render and left should works", async ({
      page,
    }) => {
      await page.getByText("left").hover();
      await page.waitForTimeout(100);
      const tooltip = await page.locator("[data-side]");
      const side = await tooltip.getAttribute("data-side");
      expect(side).toBe("left");
      const align = await tooltip.getAttribute("data-align");
      expect(align).toBe("center");
    });
  });

  test.describe("Customization tests", () => {
    test("Customization: should render and match screenshot", async ({
      page,
    }) => {
      // Top Start
      await page.getByText("Custom background color").hover();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(`tooltip-Customization.png`);
    });

    test("Customization: should render and have custom background color", async ({
      page,
    }) => {
      await page.getByText("Custom background color").hover();
      await page.waitForTimeout(100);
      const tooltip = await page.locator("[data-side]");
      await expect(tooltip).toHaveClass(/bg-chichi-10/);
      const tooltipElement = await tooltip.elementHandle();
      const bgColor = await page.evaluate((element) => {
        // @ts-ignore
        return window.getComputedStyle(element).backgroundColor;
      }, tooltipElement);
      expect(bgColor).toBe(await getMoonColor(page, "chichi-10"));
    });

    test("Customization: should render and have custom font", async ({
      page,
    }) => {
      await page.getByText("Custom fonts").hover();
      await page.waitForTimeout(100);
      const tooltip = await page.locator("[data-side]");
      // Font size
      await expect(tooltip).toHaveClass(/text-moon-18/);
      const tooltipElement = await tooltip.elementHandle();
      const fontSize = await page.evaluate((element) => {
        // @ts-ignore
        return window.getComputedStyle(element).fontSize;
      }, tooltipElement);
      await expect(tooltip).toHaveClass(/font-medium/);
      const fontWeight = await page.evaluate((element) => {
        // @ts-ignore
        return window.getComputedStyle(element).fontWeight;
      }, tooltipElement);
      expect(fontSize).toBe("18px");
      expect(fontWeight).toBe("500");
    });
  });

  test.describe("RenderIntoSpecificContainer tests", () => {
    test.beforeEach(async ({ page }) => {
      await page.getByText("Trigger").hover();
      await page.waitForTimeout(100);
    });

    test("RenderIntoSpecificContainer: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `tooltip-RenderIntoSpecificContainer.png`,
      );
    });

    test("RenderIntoSpecificContainer: should render inside the box container", async ({
      page,
    }) => {
      const box = await page.getByTestId("box-container");
      // Playwright check if the element have child
      expect(await box.innerHTML()).not.toBe("");
    });
  });
});
test.describe("Tooltip in Dark Theme", () => {
  test.beforeEach(async ({ page, isMobile }) => {
    await setDarkTheme(page);
    if (isMobile) {
      test.skip();
    }
  });

  test.describe("Default tests", () => {
    test("Default: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await page.getByText("Trigger").hover();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(`tooltip-Dark-Default.png`);
    });
  });

  test.describe("ArrowPositions tests", () => {
    test.beforeEach(async ({ page }) => {
      await page.evaluate(() => {
        document.body.style.padding = "80px 140px";
      });
      await page.waitForTimeout(100);
    });
    test("ArrowPositions: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await page.getByText("top-start", { exact: true }).hover();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(`tooltip-Dark-ArrowPositions.png`);
    });
  });

  test.describe("Customization tests", () => {
    test("Customization: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await page.getByText("Custom background color").hover();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(`tooltip-Dark-Customization.png`);
    });
  });

  test.describe("RenderIntoSpecificContainer tests", () => {
    test.beforeEach(async ({ page }) => {
      await page.getByText("Trigger").hover();
      await page.waitForTimeout(100);
    });
    test("RenderIntoSpecificContainer: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `tooltip-Dark-RenderIntoSpecificContainer.png`,
      );
    });
  });
});
test.describe("Tooltip in RTL", () => {
  test.beforeEach(async ({ page, isMobile }) => {
    await setRtl(page);
    if (isMobile) {
      test.skip();
    }
  });

  test.describe("Default tests", () => {
    test("Default: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await page.getByText("Trigger").hover();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(`tooltip-RTL-Default.png`);
    });
  });

  test.describe("ArrowPositions tests", () => {
    test("ArrowPositions: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await page.getByText("top-start").hover();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(`tooltip-RTL-ArrowPositions.png`);
    });
  });

  test.describe("Customization tests", () => {
    test("Customization: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await page.getByText("Custom background color").hover();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(`tooltip-RTL-Customization.png`);
    });
  });

  test.describe("RenderIntoSpecificContainer tests", () => {
    test("RenderIntoSpecificContainer: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await page.getByText("Trigger").hover();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(
        `tooltip-RTL-RenderIntoSpecificContainer.png`,
      );
    });
  });
});
