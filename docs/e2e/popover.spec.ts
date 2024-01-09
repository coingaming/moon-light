import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "popover";

setupTest(COMPONENT_NAME);

test.describe("Popover in Light Theme", () => {
  test.beforeEach(async ({ page }) => {
    const btn = page.getByTestId("popover-trigger");
    await btn.click();
  });
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
    });

    test("Default: should render and go hover 1st item, check the hover", async ({
      page,
    }) => {
      const firstItemPosition = await page
        .getByText("Tournaments", { exact: true })
        .boundingBox();
      const el = await page.waitForSelector('button[data-testid="first-item"]');
      const before = await page.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background-color");
      }, el);

      await page.mouse.move(
        firstItemPosition?.x || 0,
        firstItemPosition?.y || 0,
        {
          steps: 10,
        },
      );
      await page.waitForTimeout(200); // !IMPORTANT
      const after = await page.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background-color");
      }, el);
      expect(before).not.toBe(after);
      expect(after).toBe("rgba(0, 0, 0, 0.04)");
    });

    test("Default: should render and go hover 2st item, check the hover", async ({
      page,
    }) => {
      const secondItemPosition = await page
        .getByText("Promotions", { exact: true })
        .boundingBox();
      const el = await page.waitForSelector(
        'button[data-testid="second-item"]',
      );
      const before = await page.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background-color");
      }, el);

      await page.mouse.move(
        secondItemPosition?.x || 0,
        secondItemPosition?.y || 0,
        {
          steps: 10,
        },
      );
      await page.waitForTimeout(200); // !IMPORTANT
      const after = await page.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background-color");
      }, el);
      expect(before).not.toBe(after);
      expect(after).toBe("rgba(0, 0, 0, 0.04)");
    });

    test("Default: should render and go hover 3st item, check the hover", async ({
      page,
    }) => {
      const thirdItemPosition = await page
        .getByText("Providers", { exact: true })
        .boundingBox();
      const el = await page.waitForSelector('button[data-testid="third-item"]');
      const before = await page.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background-color");
      }, el);

      await page.mouse.move(
        thirdItemPosition?.x || 0,
        thirdItemPosition?.y || 0,
        {
          steps: 10,
        },
      );
      await page.waitForTimeout(200); // !IMPORTANT
      const after = await page.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background-color");
      }, el);
      expect(before).not.toBe(after);
      expect(after).toBe("rgba(0, 0, 0, 0.04)");
    });

    test("Default: should render and click the first element, should not close the popover", async ({
      page,
    }) => {
      await page.getByTestId("first-item").click();
      const el = await page.waitForSelector("[data-headlessui-state]");
      const state = await el.getAttribute("data-headlessui-state");
      expect(state).toBe("open");
    });

    test("Default: should render and click outside, should close the popover", async ({
      page,
    }) => {
      await page.getByTestId("first-item").click();
      const el = await page.waitForSelector("[data-headlessui-state]");
      expect(await el.getAttribute("data-headlessui-state")).toBe("open");
      await page.mouse.click(400, 400);
      await page.waitForTimeout(100);
      expect(await el.getAttribute("data-headlessui-state")).not.toBe("open");
    });

    test("Default: should render and click on the trigger should close the popover", async ({
      page,
    }) => {
      const el = await page.waitForSelector("[data-headlessui-state]");
      expect(await el.getAttribute("data-headlessui-state")).toBe("open");
      const btn = page.getByTestId("popover-trigger");
      await btn.click();
      expect(await el.getAttribute("data-headlessui-state")).not.toBe("open");
    });
  });
});

test.describe("Popover in Dark Theme", () => {
  // Apply dark theme
  test.beforeEach(async ({ page }) => {
    await setDarkTheme(page);
    const btn = page.getByTestId("popover-trigger");
    await btn.click();
  });

  test.describe("Default tests", () => {
    test("Default: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-Dark.png`);
    });

    test("Default: should render and go hover 1st item, check the hover", async ({
      page,
    }) => {
      const firstItemPosition = await page
        .getByText("Tournaments", { exact: true })
        .boundingBox();
      const el = await page.waitForSelector('button[data-testid="first-item"]');
      const before = await page.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background-color");
      }, el);

      await page.mouse.move(
        firstItemPosition?.x || 0,
        firstItemPosition?.y || 0,
        {
          steps: 10,
        },
      );
      await page.waitForTimeout(200); // !IMPORTANT
      const after = await page.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background-color");
      }, el);
      expect(before).not.toBe(after);
      expect(after).toBe("rgba(255, 255, 255, 0.04)");
    });

    test("Default: should render and go hover 2st item, check the hover", async ({
      page,
    }) => {
      const secondItemPosition = await page
        .getByText("Promotions", { exact: true })
        .boundingBox();
      const el = await page.waitForSelector(
        'button[data-testid="second-item"]',
      );
      const before = await page.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background-color");
      }, el);

      await page.mouse.move(
        secondItemPosition?.x || 0,
        secondItemPosition?.y || 0,
        {
          steps: 10,
        },
      );
      await page.waitForTimeout(200); // !IMPORTANT
      const after = await page.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background-color");
      }, el);
      expect(before).not.toBe(after);
      expect(after).toBe("rgba(255, 255, 255, 0.04)");
    });

    test("Default: should render and go hover 3st item, check the hover", async ({
      page,
    }) => {
      const thirdItemPosition = await page
        .getByText("Providers", { exact: true })
        .boundingBox();
      const el = await page.waitForSelector('button[data-testid="third-item"]');
      const before = await page.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background-color");
      }, el);

      await page.mouse.move(
        thirdItemPosition?.x || 0,
        thirdItemPosition?.y || 0,
        {
          steps: 10,
        },
      );
      await page.waitForTimeout(200); // !IMPORTANT
      const after = await page.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue("background-color");
      }, el);
      expect(before).not.toBe(after);
      expect(after).toBe("rgba(255, 255, 255, 0.04)");
    });

    test("Default: should render and click the first element, should not close the popover", async ({
      page,
    }) => {
      await page.getByTestId("first-item").click();
      const el = await page.waitForSelector("[data-headlessui-state]");
      const state = await el.getAttribute("data-headlessui-state");
      expect(state).toBe("open");
    });

    test("Default: should render and click outside, should close the popover", async ({
      page,
    }) => {
      await page.getByTestId("first-item").click();
      const el = await page.waitForSelector("[data-headlessui-state]");
      expect(await el.getAttribute("data-headlessui-state")).toBe("open");
      await page.mouse.click(400, 400);
      await page.waitForTimeout(100);
      expect(await el.getAttribute("data-headlessui-state")).not.toBe("open");
    });

    test("Default: should render and click on the trigger should close the popover", async ({
      page,
    }) => {
      const el = await page.waitForSelector("[data-headlessui-state]");
      expect(await el.getAttribute("data-headlessui-state")).toBe("open");
      const btn = page.getByTestId("popover-trigger");
      await btn.click();
      expect(await el.getAttribute("data-headlessui-state")).not.toBe("open");
    });
  });

  test.describe("Position tests", () => {
    test("Position: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Position-Dark.png`,
      );
    });
  });

  test.describe("TriggerElements tests", () => {
    test("TriggerElements: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements-Dark.png`,
      );
    });
  });

  test.describe("WithCloseButton tests", () => {
    test("WithCloseButton: should render and match screenshot in dark theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-WithCloseButton-Dark.png`,
      );
    });
  });
});

test.describe("Popover in RTL", () => {
  // Apply RTL
  test.beforeEach(async ({ page }) => {
    await setRtl(page);
    const btn = page.getByTestId("popover-trigger");
    await btn.click();
  });

  test.describe("Default tests", () => {
    test("Default: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-RTL.png`);
    });
  });
});
