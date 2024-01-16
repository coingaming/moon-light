import { test, expect } from "@playwright/test";
import {
  setupTest,
  setDarkTheme,
  setRtl,
  getMoonColor,
} from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "menuitem";

setupTest(COMPONENT_NAME);

test.describe("Menuitem in Light Theme", () => {
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`menuitem-Default.png`);
    });
    test("Default: should render and have correct text", async ({ page }) => {
      const element = page.getByText("Menu item text");
      await expect(element).toBeAttached();
    });
    test("Default: should render and have correct type", async ({ page }) => {
      const element = page.getByText("Menu item text");
      expect(await element.getAttribute("type")).toBe("button");
    });
    test("Default: should render and have correct hover state", async ({
      page,
    }) => {
      const element = page.getByText("Menu item text");
      await element.hover();
      await page.waitForTimeout(100);
      const elementHoverBgColor = await page.evaluate(
        (element) => {
          if (!element) return "";
          const { backgroundColor } = window.getComputedStyle(element);
          return backgroundColor;
        },
        await element.elementHandle(),
      );
      expect(elementHoverBgColor).toBe(await getMoonColor(page, "heles"));
    });
  });
  test.describe("AsLink tests", () => {
    test("AsLink: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`menuitem-AsLink.png`);
    });
    test("AsLink: should render and have correct text", async ({ page }) => {
      const element = page.getByText("Menu item text");
      await expect(element).toBeAttached();
    });
    test("AsLink: should render and have correct type", async ({ page }) => {
      const element = page.getByText("Menu item text");
      expect(await element.evaluate((el) => el.tagName)).toBe("A");
    });
    test("AsLink: should render and have href", async ({ page }) => {
      const element = page.getByText("Menu item text");
      expect(await element.getAttribute("href")).toBe("#");
    });
    test("AsLink: should render and have href, click on link should redirect the user", async ({
      page,
    }) => {
      const element = page.getByText("Menu item text");
      await element.click();
      await page.waitForTimeout(100);
      expect(page.url()).toBe("http://localhost:3000/client/menuitem/AsLink#");
    });
    test("AsLink: should render and have correct hover state", async ({
      page,
    }) => {
      const element = page.getByText("Menu item text");
      await element.hover();
      await page.waitForTimeout(100);
      const elementHoverBgColor = await page.evaluate(
        (element) => {
          if (!element) return "";
          const { backgroundColor } = window.getComputedStyle(element);
          return backgroundColor;
        },
        await element.elementHandle(),
      );
      expect(elementHoverBgColor).toBe(await getMoonColor(page, "heles"));
    });
  });
  test.describe("Checkbox tests", () => {
    test("Checkbox: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`menuitem-Checkbox.png`);
    });
    test("Checkbox: should render 2 checkboxes", async ({ page }) => {
      // Checkboxes is render as SVGs
      expect((await page.locator("svg").all()).length).toBe(2);
    });
    test("Checkbox: should render and click on the first checkbox should change the state", async ({
      page,
    }) => {
      const span = page.locator(`span[role="checkbox"]`).first();
      await span.click();
      await page.waitForTimeout(100);
      expect(await span.getAttribute("aria-checked")).toBe("true");
    });
    test("Checkbox: should render and click on the second checkbox should change the state", async ({
      page,
    }) => {
      const span = page.locator(`span[role="checkbox"]`).last();
      await span.click();
      await page.waitForTimeout(100);
      expect(await span.getAttribute("aria-checked")).toBe("true");
    });
    test("Checkbox: should render and click on menuitem should trigger the checkbox click", async ({
      page,
    }) => {
      const span = page.locator(`span[role="checkbox"]`).first();
      await page.locator("button").first().click();
      await page.waitForTimeout(100);
      expect(await span.getAttribute("aria-checked")).toBe("true");
    });
    test("Checkbox: should render and have correct icon", async ({ page }) => {
      const element = page.getByTestId("playwright-test-menuitem");
      await page.locator(`button`).first().click();
      await page.locator(`button`).last().click();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(100);
      await expect(element).toHaveScreenshot(`menuitem-Checkbox-Checked.png`);
    });
  });
  test.describe("ExpandCollapse tests", () => {
    test("ExpandCollapse: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-ExpandCollapse.png`);
    });

    test("ExpandCollapse: should render and click on first expandable should close it", async ({
      page,
    }) => {
      const expandable = page.getByTestId("expandable-1");
      await expect(expandable).toBeAttached();
      await page.getByText("Tailwind", { exact: true }).click();
      await page.waitForTimeout(100);
      await expect(expandable).not.toBeAttached();
    });
    test("ExpandCollapse: should render and click on second expandable should close it", async ({
      page,
    }) => {
      const expandable = page.getByTestId("expandable-2");
      await expect(expandable).toBeAttached();
      await page.getByTestId("right-trigger").click();
      await page.waitForTimeout(100);
      await expect(expandable).not.toBeAttached();
    });
  });
  test.describe("MultiTitle tests", () => {
    test("MultiTitle: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`menuitem-MultiTitle.png`);
    });
    test("MultiTitle: should render and have correct hover state [1]", async ({
      page,
    }) => {
      const element = page.getByTestId("menu-item-1");
      await element.hover();
      await page.waitForTimeout(100);
      const elementHoverBgColor = await page.evaluate(
        (element) => {
          if (!element) return "";
          const { backgroundColor } = window.getComputedStyle(element);
          return backgroundColor;
        },
        await element.elementHandle(),
      );
      expect(elementHoverBgColor).toBe(await getMoonColor(page, "heles"));
    });
    test("MultiTitle: should render and have correct hover state [2]", async ({
      page,
    }) => {
      const element = page.getByTestId("menu-item-2");
      await element.hover();
      await page.waitForTimeout(100);
      const elementHoverBgColor = await page.evaluate(
        (element) => {
          if (!element) return "";
          const { backgroundColor } = window.getComputedStyle(element);
          return backgroundColor;
        },
        await element.elementHandle(),
      );
      expect(elementHoverBgColor).toBe(await getMoonColor(page, "heles"));
    });
    test("MultiTitle: should render and have correct click behavior", async ({
      page,
    }) => {
      await page.getByTestId("menu-item-2").click();
      await page.waitForTimeout(100);
      const checkbox = await page.locator(`span[role="checkbox"]`);
      expect(await checkbox.getAttribute("aria-checked")).toBe("true");
    });
  });
  test.describe("MultiLineItems tests", () => {
    test("MultiLineItems: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-MultiLineItems.png`);
    });
  });
  test.describe("Radio tests", () => {
    test("Radio: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`menuitem-Radio.png`);
    });
  });
  test.describe("WithIcon tests", () => {
    test("WithIcon: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`menuitem-WithIcon.png`);
    });
  });
  test.describe("WithMeta tests", () => {
    test("WithMeta: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`menuitem-WithMeta.png`);
    });
  });
});

test.describe("MenuItem in Dark Theme", () => {
  test.beforeEach(async ({ page }) => {
    await setDarkTheme(page);
  });
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-Dark-Default.png`);
    });

    test("Default: should render and have correct text", async ({ page }) => {
      const element = page.getByText("Menu item text");
      await expect(element).toBeAttached();
    });
    test("Default: should render and have correct type", async ({ page }) => {
      const element = page.getByText("Menu item text");
      expect(await element.getAttribute("type")).toBe("button");
    });
  });
  test.describe("AsLink tests", () => {
    test("AsLink: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-Dark-AsLink.png`);
    });
  });
  test.describe("Checkbox tests", () => {
    test("Checkbox: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-Dark-Checkbox.png`);
    });
  });
  test.describe("ExpandCollapse tests", () => {
    test("ExpandCollapse: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-Dark-ExpandCollapse.png`);
    });
  });
  test.describe("MultiLineItems tests", () => {
    test("MultiLineItems: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-Dark-MultiLineItems.png`);
    });
  });
  test.describe("Radio tests", () => {
    test("Radio: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-Dark-Radio.png`);
    });
  });
  test.describe("WithIcon tests", () => {
    test("WithIcon: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-Dark-WithIcon.png`);
    });
  });
  test.describe("WithMeta tests", () => {
    test("WithMeta: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-Dark-WithMeta.png`);
    });
  });
});

test.describe("MenuItem in RTL", () => {
  test.beforeEach(async ({ page }) => {
    await setRtl(page);
  });

  test.describe("Default tests", () => {
    test("Default: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-RTL-Default.png`);
    });
  });
  test.describe("AsLink tests", () => {
    test("AsLink: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-RTL-AsLink.png`);
    });
  });
  test.describe("Checkbox tests", () => {
    test("Checkbox: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-RTL-Checkbox.png`);
    });
  });
  test.describe("ExpandCollapse tests", () => {
    test("ExpandCollapse: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-RTL-ExpandCollapse.png`);
    });
  });
  test.describe("MultiLineItems tests", () => {
    test("MultiLineItems: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-RTL-MultiLineItems.png`);
    });
  });
  test.describe("Radio tests", () => {
    test("Radio: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-RTL-Radio.png`);
    });
  });
  test.describe("WithIcon tests", () => {
    test("WithIcon: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-RTL-WithIcon.png`);
    });
  });
  test.describe("WithMeta tests", () => {
    test("WithMeta: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`menuitem-RTL-WithMeta.png`);
    });
  });
});
