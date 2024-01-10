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

  test.describe("Position tests", () => {
    test("Position: should render and match screenshot in Light theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Position-Light.png`,
      );
    });

    test("Position: should render and match screenshot in light theme positioning, left", async ({
      page,
    }) => {
      await page.getByTestId("popover-left-trigger").click();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Position-Light-Left.png`,
      );
    });

    test("Position: should render and match screenshot in light theme positioning, right", async ({
      page,
    }) => {
      await page.getByTestId("popover-right-trigger").click();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Position-Light-Right.png`,
      );
    });
  });

  test.describe("TriggerElements tests", () => {
    test("TriggerElements: should render and match screenshot in Light theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements-Light.png`,
      );
    });

    test("TriggerElements: should render and open the arrow trigger", async ({
      page,
    }) => {
      await page.mouse.click(0, 0); // remove the current open state
      await page.getByTestId(`popover-trigger-arrow`).click();
      const el = await page.waitForSelector(`[data-headlessui-state="open"]`);
      expect(el).toBeTruthy();
    });

    test("TriggerElements: should render and open the text trigger", async ({
      page,
    }) => {
      await page.mouse.click(0, 0); // remove the current open state
      await page.getByTestId(`popover-trigger-text`).click();
      const el = await page.waitForSelector(`[data-headlessui-state="open"]`);
      expect(el).toBeTruthy();
    });

    test("TriggerElements: should render and open the text trigger span", async ({
      page,
    }) => {
      await page.mouse.click(0, 0); // remove the current open state
      const pos = await page
        .getByTestId(`popover-trigger-text-inner`)
        .boundingBox();
      await page.mouse.click(pos?.x || 0, pos?.y || 0);
      const el = await page.waitForSelector(`[data-headlessui-state="open"]`);
      expect(el).toBeTruthy();
    });
  });

  test.describe("WithCloseButton tests", () => {
    test("WithCloseButton: should render and match screenshot in Light theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-WithCloseButton-Light.png`,
      );
    });

    test("WithCloseButton: should render and click the button should close the popover", async ({
      page,
    }) => {
      await page.getByTestId(`popover-close-btn`).click();
      const elements = await page
        .locator(`[data-headlessui-state="open"]`)
        .all();
      expect(elements.length).toBe(0);
    });
    test("WithCloseButton: should render and click outside should close the popover", async ({
      page,
    }) => {
      await page.mouse.click(0, 0);
      const elements = await page
        .locator(`[data-headlessui-state="open"]`)
        .all();
      expect(elements.length).toBe(0);
    });
  });

  test.describe("TooltipViewExample tests", () => {
    test("TooltipViewExample: should render and match screenshot in Light theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TooltipViewExample-Light.png`,
      );
    });
    test("TooltipViewExample: should render and be visible", async ({
      page,
    }) => {
      const el = await page.waitForSelector(`[data-headlessui-state="open"]`);
      expect(el).toBeDefined();
    });

    test("TooltipViewExample: should render and click outside should close the popover", async ({
      page,
    }) => {
      await page.mouse.click(0, 0);
      const elements = await page
        .locator(`[data-headlessui-state="open"]`)
        .all();
      expect(elements.length).toBe(0);
    });
  });

  test.describe("TooltipViewExampleWithAlwaysOpenState tests", () => {
    test("TooltipViewExampleWithAlwaysOpenState: should render and match screenshot in Light theme", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TooltipViewExampleWithAlwaysOpenState-Light.png`,
      );
    });

    test("TooltipViewExampleWithAlwaysOpenState: should render and be open", async ({
      page,
    }) => {
      const elements = await page.locator(".z-\\[999999\\]").all();
      expect(elements.length).toBe(1);
    });

    test("TooltipViewExampleWithAlwaysOpenState: should render and click outside should still be open the popover", async ({
      page,
    }) => {
      await page.mouse.click(0, 0);
      const elements = await page.locator(".z-\\[999999\\]").all();
      expect(elements.length).toBe(1);
    });
  });

  test.describe("DisableFlipOnComponent tests", () => {
    test("Default: should render and flip when the viewport is over", async ({
      page,
      viewport,
    }) => {
      await page.evaluate((viewport) => {
        if (document.querySelector("body") && viewport) {
          // @ts-ignore
          document.querySelector("body").style.paddingTop = `${
            viewport.height - 40
          }px`;
        }
      }, viewport);
      const popover = await page.locator(".z-\\[999999\\]");
      await page.getByTestId("popover-trigger").click(); // Close
      await page.getByTestId("popover-trigger").click(); // ReOpen
      expect(await popover.getAttribute("data-popper-placement")).toBe("top");
    });
    test("DisableFlipOnComponent: should render and not flip when the viewport is over", async ({
      page,
      viewport,
    }) => {
      await page.evaluate((viewport) => {
        if (document.querySelector("body") && viewport) {
          // @ts-ignore
          document.querySelector("body").style.paddingTop = `${
            viewport.height - 40
          }px`;
        }
      }, viewport);
      const popover = await page.locator(".z-\\[999999\\]");
      await page.getByTestId("popover-trigger").click(); // Close
      await page.getByTestId("popover-trigger").click(); // ReOpen
      expect(await popover.getAttribute("data-popper-placement")).not.toBe(
        "top",
      );
    });
    test("DisableFlipOnComponent: should render and match the screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-DisableFlipOnComponent-Light.png`,
      );
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
