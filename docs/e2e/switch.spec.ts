import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";
import { set } from "react-hook-form";

const COMPONENT_NAME = "switch";

setupTest(COMPONENT_NAME);

test.describe("Switch in Light Theme", () => {
  test.describe("Default tests", () => {
    test.describe("Mouse tests", () => {
      test("Default: should render and match screenshot", async ({ page }) => {
        const element = await page.getByLabel("Default Switch");
        await expect(element).toHaveAttribute("aria-checked", "true");
        await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
      });

      test("Default: should switch and match screenshot", async ({ page }) => {
        await page.getByLabel("Default Switch").click();
        const element = await page.getByLabel("Default Switch");
        await expect(element).toHaveAttribute("aria-checked", "false");
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-Default-switched.png`,
        );
      });

      test("Default: double click should set initial state", async ({
        page,
      }) => {
        await page.getByLabel("Default Switch").dblclick();
        const element = await page.getByLabel("Default Switch");
        await expect(element).toHaveAttribute("aria-checked", "true");
      });
    });

    test.describe("Keyboard tests", () => {
      test("Default: should switch", async ({ page, isMobile }) => {
        if (!isMobile) {
          await page.getByLabel("Default Switch").press("Space");
          const element = await page.getByLabel("Default Switch");
          await expect(element).toHaveAttribute("aria-checked", "false");
        }
      });

      test("Default: double press should set initial state", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Default Switch").press("Space");
          await page.getByLabel("Default Switch").press("Space");
          const element = await page.getByLabel("Default Switch");
          await expect(element).toHaveAttribute("aria-checked", "true");
        }
      });
    });
  });

  test.describe("Sizes tests", () => {
    test.describe("Mouse tests", () => {
      test("Sizes: should render and match screenshot", async ({ page }) => {
        const xxs = await page.getByLabel("Switch with 2xs size");
        await expect(xxs).toHaveAttribute("aria-checked", "true");
        const xs = await page.getByLabel("Switch with xs size");
        await expect(xs).toHaveAttribute("aria-checked", "true");
        const sm = await page.getByLabel("Switch with sm size");
        await expect(sm).toHaveAttribute("aria-checked", "true");
        await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Sizes.png`);
      });

      test("Sizes: click on 2xs should switch and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Switch with 2xs size").click();
        const xxs = await page.getByLabel("Switch with 2xs size");
        await expect(xxs).toHaveAttribute("aria-checked", "false");
        const xs = await page.getByLabel("Switch with xs size");
        await expect(xs).toHaveAttribute("aria-checked", "false");
        const sm = await page.getByLabel("Switch with sm size");
        await expect(sm).toHaveAttribute("aria-checked", "false");
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-Sizes-switched.png`,
        );
      });

      test("Sizes: click on xs should switch", async ({ page }) => {
        await page.getByLabel("Switch with xs size").click();
        const xxs = await page.getByLabel("Switch with 2xs size");
        await expect(xxs).toHaveAttribute("aria-checked", "false");
        const xs = await page.getByLabel("Switch with xs size");
        await expect(xs).toHaveAttribute("aria-checked", "false");
        const sm = await page.getByLabel("Switch with sm size");
        await expect(sm).toHaveAttribute("aria-checked", "false");
      });

      test("Sizes: click on sm should switch", async ({ page }) => {
        await page.getByLabel("Switch with sm size").click();
        const xxs = await page.getByLabel("Switch with 2xs size");
        await expect(xxs).toHaveAttribute("aria-checked", "false");
        const xs = await page.getByLabel("Switch with xs size");
        await expect(xs).toHaveAttribute("aria-checked", "false");
        const sm = await page.getByLabel("Switch with sm size");
        await expect(sm).toHaveAttribute("aria-checked", "false");
      });

      test("Sizes: double click on 2xs should set initial state", async ({
        page,
      }) => {
        await page.getByLabel("Switch with 2xs size").dblclick();
        const xxs = await page.getByLabel("Switch with 2xs size");
        await expect(xxs).toHaveAttribute("aria-checked", "true");
        const xs = await page.getByLabel("Switch with xs size");
        await expect(xs).toHaveAttribute("aria-checked", "true");
        const sm = await page.getByLabel("Switch with sm size");
        await expect(sm).toHaveAttribute("aria-checked", "true");
      });

      test("Sizes: double click on xs should set initial state", async ({
        page,
      }) => {
        await page.getByLabel("Switch with xs size").dblclick();
        const xxs = await page.getByLabel("Switch with 2xs size");
        await expect(xxs).toHaveAttribute("aria-checked", "true");
        const xs = await page.getByLabel("Switch with xs size");
        await expect(xs).toHaveAttribute("aria-checked", "true");
        const sm = await page.getByLabel("Switch with sm size");
        await expect(sm).toHaveAttribute("aria-checked", "true");
      });

      test("Sizes: double click on sm should set initial state", async ({
        page,
      }) => {
        await page.getByLabel("Switch with sm size").dblclick();
        const xxs = await page.getByLabel("Switch with 2xs size");
        await expect(xxs).toHaveAttribute("aria-checked", "true");
        const xs = await page.getByLabel("Switch with xs size");
        await expect(xs).toHaveAttribute("aria-checked", "true");
        const sm = await page.getByLabel("Switch with sm size");
        await expect(sm).toHaveAttribute("aria-checked", "true");
      });
    });

    test.describe("Keyboard tests", () => {
      test("Sizes: press on 2xs should switch", async ({ page, isMobile }) => {
        if (!isMobile) {
          await page.getByLabel("Switch with 2xs size").press("Space");
          const xxs = await page.getByLabel("Switch with 2xs size");
          await expect(xxs).toHaveAttribute("aria-checked", "false");
          const xs = await page.getByLabel("Switch with xs size");
          await expect(xs).toHaveAttribute("aria-checked", "false");
          const sm = await page.getByLabel("Switch with sm size");
          await expect(sm).toHaveAttribute("aria-checked", "false");
        }
      });

      test("Sizes: press on xs should switch", async ({ page, isMobile }) => {
        if (!isMobile) {
          await page.getByLabel("Switch with xs size").press("Space");
          const xxs = await page.getByLabel("Switch with 2xs size");
          await expect(xxs).toHaveAttribute("aria-checked", "false");
          const xs = await page.getByLabel("Switch with xs size");
          await expect(xs).toHaveAttribute("aria-checked", "false");
          const sm = await page.getByLabel("Switch with sm size");
          await expect(sm).toHaveAttribute("aria-checked", "false");
        }
      });

      test("Sizes: press on sm should switch", async ({ page, isMobile }) => {
        if (!isMobile) {
          await page.getByLabel("Switch with sm size").press("Space");
          const xxs = await page.getByLabel("Switch with 2xs size");
          await expect(xxs).toHaveAttribute("aria-checked", "false");
          const xs = await page.getByLabel("Switch with xs size");
          await expect(xs).toHaveAttribute("aria-checked", "false");
          const sm = await page.getByLabel("Switch with sm size");
          await expect(sm).toHaveAttribute("aria-checked", "false");
        }
      });

      test("Sizes: double press on 2xs should set initial state", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Switch with sm size").press("Space");
          await page.getByLabel("Switch with sm size").press("Space");
          const xxs = await page.getByLabel("Switch with 2xs size");
          await expect(xxs).toHaveAttribute("aria-checked", "true");
          const xs = await page.getByLabel("Switch with xs size");
          await expect(xs).toHaveAttribute("aria-checked", "true");
          const sm = await page.getByLabel("Switch with sm size");
          await expect(sm).toHaveAttribute("aria-checked", "true");
        }
      });

      test("Sizes: double press on xs should set initial state", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Switch with sm size").press("Space");
          await page.getByLabel("Switch with sm size").press("Space");
          const xxs = await page.getByLabel("Switch with 2xs size");
          await expect(xxs).toHaveAttribute("aria-checked", "true");
          const xs = await page.getByLabel("Switch with xs size");
          await expect(xs).toHaveAttribute("aria-checked", "true");
          const sm = await page.getByLabel("Switch with sm size");
          await expect(sm).toHaveAttribute("aria-checked", "true");
        }
      });

      test("Sizes: double press on sm should set initial state", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Switch with sm size").press("Space");
          await page.getByLabel("Switch with sm size").press("Space");
          const xxs = await page.getByLabel("Switch with 2xs size");
          await expect(xxs).toHaveAttribute("aria-checked", "true");
          const xs = await page.getByLabel("Switch with xs size");
          await expect(xs).toHaveAttribute("aria-checked", "true");
          const sm = await page.getByLabel("Switch with sm size");
          await expect(sm).toHaveAttribute("aria-checked", "true");
        }
      });
    });
  });

  test.describe("Disabled tests", () => {
    test("Disabled: should render, be disabled and match screenshot", async ({
      page,
    }) => {
      const checked = await page.getByLabel("Disabled Switch").nth(0);
      await expect(checked).toBeDisabled();
      await expect(checked).toHaveAttribute("aria-checked", "true");
      const unchecked = await page.getByLabel("Disabled Switch").nth(1);
      await expect(unchecked).toBeDisabled();
      await expect(unchecked).toHaveAttribute("aria-checked", "false");
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Disabled.png`);
    });
  });

  test.describe("WithIcons tests", () => {
    test.describe("Mouse tests", () => {
      test("WithIcons: should render and match screenshot", async ({
        page,
      }) => {
        const xxs = await page.getByLabel("Switch with icons").nth(0);
        await expect(xxs).toHaveAttribute("aria-checked", "true");
        const xs = await page.getByLabel("Switch with icons").nth(1);
        await expect(xs).toHaveAttribute("aria-checked", "true");
        const sm = await page.getByLabel("Switch with icons").nth(2);
        await expect(sm).toHaveAttribute("aria-checked", "true");
        await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithIcons.png`);
      });

      test("WithIcons: click on 2xs should switch and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Switch with icons").nth(0).click();
        const xxs = await page.getByLabel("Switch with icons").nth(0);
        await expect(xxs).toHaveAttribute("aria-checked", "false");
        const xs = await page.getByLabel("Switch with icons").nth(1);
        await expect(xs).toHaveAttribute("aria-checked", "false");
        const sm = await page.getByLabel("Switch with icons").nth(2);
        await expect(sm).toHaveAttribute("aria-checked", "false");
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-WithIcons-switched.png`,
        );
      });

      test("WithIcons: click on xs should switch", async ({ page }) => {
        await page.getByLabel("Switch with icons").nth(1).click();
        const xxs = await page.getByLabel("Switch with icons").nth(0);
        await expect(xxs).toHaveAttribute("aria-checked", "false");
        const xs = await page.getByLabel("Switch with icons").nth(1);
        await expect(xs).toHaveAttribute("aria-checked", "false");
        const sm = await page.getByLabel("Switch with icons").nth(2);
        await expect(sm).toHaveAttribute("aria-checked", "false");
      });

      test("WithIcons: click on sm should switch", async ({ page }) => {
        await page.getByLabel("Switch with icons").nth(2).click();
        const xxs = await page.getByLabel("Switch with icons").nth(0);
        await expect(xxs).toHaveAttribute("aria-checked", "false");
        const xs = await page.getByLabel("Switch with icons").nth(1);
        await expect(xs).toHaveAttribute("aria-checked", "false");
        const sm = await page.getByLabel("Switch with icons").nth(2);
        await expect(sm).toHaveAttribute("aria-checked", "false");
      });

      test("WithIcons: double click on 2xs should set initial state", async ({
        page,
      }) => {
        await page.getByLabel("Switch with icons").nth(0).dblclick();
        const xxs = await page.getByLabel("Switch with icons").nth(0);
        await expect(xxs).toHaveAttribute("aria-checked", "true");
        const xs = await page.getByLabel("Switch with icons").nth(1);
        await expect(xs).toHaveAttribute("aria-checked", "true");
        const sm = await page.getByLabel("Switch with icons").nth(2);
        await expect(sm).toHaveAttribute("aria-checked", "true");
      });

      test("WithIcons: double click on xs should set initial state", async ({
        page,
      }) => {
        await page.getByLabel("Switch with icons").nth(1).dblclick();
        const xxs = await page.getByLabel("Switch with icons").nth(0);
        await expect(xxs).toHaveAttribute("aria-checked", "true");
        const xs = await page.getByLabel("Switch with icons").nth(1);
        await expect(xs).toHaveAttribute("aria-checked", "true");
        const sm = await page.getByLabel("Switch with icons").nth(2);
        await expect(sm).toHaveAttribute("aria-checked", "true");
      });

      test("WithIcons: double click on sm should set initial state", async ({
        page,
      }) => {
        await page.getByLabel("Switch with icons").nth(2).dblclick();
        const xxs = await page.getByLabel("Switch with icons").nth(0);
        await expect(xxs).toHaveAttribute("aria-checked", "true");
        const xs = await page.getByLabel("Switch with icons").nth(1);
        await expect(xs).toHaveAttribute("aria-checked", "true");
        const sm = await page.getByLabel("Switch with icons").nth(2);
        await expect(sm).toHaveAttribute("aria-checked", "true");
      });
    });

    test.describe("Keyboard tests", () => {
      test("WithIcons: press on 2xs should switch and match screenshot", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Switch with icons").nth(0).press("Space");
          const xxs = await page.getByLabel("Switch with icons").nth(0);
          await expect(xxs).toHaveAttribute("aria-checked", "false");
          const xs = await page.getByLabel("Switch with icons").nth(1);
          await expect(xs).toHaveAttribute("aria-checked", "false");
          const sm = await page.getByLabel("Switch with icons").nth(2);
          await expect(sm).toHaveAttribute("aria-checked", "false");
        }
      });

      test("WithIcons: press on xs should switch", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Switch with icons").nth(1).press("Space");
          const xxs = await page.getByLabel("Switch with icons").nth(0);
          await expect(xxs).toHaveAttribute("aria-checked", "false");
          const xs = await page.getByLabel("Switch with icons").nth(1);
          await expect(xs).toHaveAttribute("aria-checked", "false");
          const sm = await page.getByLabel("Switch with icons").nth(2);
          await expect(sm).toHaveAttribute("aria-checked", "false");
        }
      });

      test("WithIcons: press on sm should switch", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Switch with icons").nth(2).press("Space");
          const xxs = await page.getByLabel("Switch with icons").nth(0);
          await expect(xxs).toHaveAttribute("aria-checked", "false");
          const xs = await page.getByLabel("Switch with icons").nth(1);
          await expect(xs).toHaveAttribute("aria-checked", "false");
          const sm = await page.getByLabel("Switch with icons").nth(2);
          await expect(sm).toHaveAttribute("aria-checked", "false");
        }
      });

      test("WithIcons: double press on 2xs should set initial state", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Switch with icons").nth(2).press("Space");
          await page.getByLabel("Switch with icons").nth(2).press("Space");
          const xxs = await page.getByLabel("Switch with icons").nth(0);
          await expect(xxs).toHaveAttribute("aria-checked", "true");
          const xs = await page.getByLabel("Switch with icons").nth(1);
          await expect(xs).toHaveAttribute("aria-checked", "true");
          const sm = await page.getByLabel("Switch with icons").nth(2);
          await expect(sm).toHaveAttribute("aria-checked", "true");
        }
      });

      test("WithIcons: double press on xs should set initial state", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Switch with icons").nth(2).press("Space");
          await page.getByLabel("Switch with icons").nth(2).press("Space");
          const xxs = await page.getByLabel("Switch with icons").nth(0);
          await expect(xxs).toHaveAttribute("aria-checked", "true");
          const xs = await page.getByLabel("Switch with icons").nth(1);
          await expect(xs).toHaveAttribute("aria-checked", "true");
          const sm = await page.getByLabel("Switch with icons").nth(2);
          await expect(sm).toHaveAttribute("aria-checked", "true");
        }
      });

      test("WithIcons: double press on sm should set initial state", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Switch with icons").nth(2).press("Space");
          await page.getByLabel("Switch with icons").nth(2).press("Space");
          const xxs = await page.getByLabel("Switch with icons").nth(0);
          await expect(xxs).toHaveAttribute("aria-checked", "true");
          const xs = await page.getByLabel("Switch with icons").nth(1);
          await expect(xs).toHaveAttribute("aria-checked", "true");
          const sm = await page.getByLabel("Switch with icons").nth(2);
          await expect(sm).toHaveAttribute("aria-checked", "true");
        }
      });
    });
  });

  test.describe("Customization tests", () => {
    test.describe("Mouse tests", () => {
      test("Customization: should render and match screenshot", async ({
        page,
      }) => {
        const first = await page.getByLabel("Switch with custom styles").nth(0);
        await expect(first).toHaveAttribute("aria-checked", "true");
        const second = await page
          .getByLabel("Switch with custom styles")
          .nth(1);
        await expect(second).toHaveAttribute("aria-checked", "true");
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-Customization.png`,
        );
      });

      test("Customization: should switch and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Switch with custom styles").nth(0).click();
        const first = await page.getByLabel("Switch with custom styles").nth(0);
        await expect(first).toHaveAttribute("aria-checked", "false");
        const second = await page
          .getByLabel("Switch with custom styles")
          .nth(1);
        await expect(second).toHaveAttribute("aria-checked", "false");
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-Customization-switched.png`,
        );
      });

      test("Customization: click on second switch should switch", async ({
        page,
      }) => {
        await page.getByLabel("Switch with custom styles").nth(1).click();
        const first = await page.getByLabel("Switch with custom styles").nth(0);
        await expect(first).toHaveAttribute("aria-checked", "false");
        const second = await page
          .getByLabel("Switch with custom styles")
          .nth(1);
        await expect(second).toHaveAttribute("aria-checked", "false");
      });

      test("Customization: double click should set initial state", async ({
        page,
      }) => {
        await page.getByLabel("Switch with custom styles").nth(0).dblclick();
        const first = await page.getByLabel("Switch with custom styles").nth(0);
        await expect(first).toHaveAttribute("aria-checked", "true");
        const second = await page
          .getByLabel("Switch with custom styles")
          .nth(1);
        await expect(second).toHaveAttribute("aria-checked", "true");
      });

      test("Customization: double click on second switch should set initial state", async ({
        page,
      }) => {
        await page.getByLabel("Switch with custom styles").nth(1).dblclick();
        const first = await page.getByLabel("Switch with custom styles").nth(0);
        await expect(first).toHaveAttribute("aria-checked", "true");
        const second = await page
          .getByLabel("Switch with custom styles")
          .nth(1);
        await expect(second).toHaveAttribute("aria-checked", "true");
      });
    });

    test.describe("Keyboard tests", () => {
      test("Customization: should switch", async ({ page, isMobile }) => {
        if (!isMobile) {
          await page
            .getByLabel("Switch with custom styles")
            .nth(0)
            .press("Space");
          const first = await page
            .getByLabel("Switch with custom styles")
            .nth(0);
          await expect(first).toHaveAttribute("aria-checked", "false");
          const second = await page
            .getByLabel("Switch with custom styles")
            .nth(1);
          await expect(second).toHaveAttribute("aria-checked", "false");
        }
      });

      test("Customization: click on second switch should switch", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByLabel("Switch with custom styles")
            .nth(1)
            .press("Space");
          const first = await page
            .getByLabel("Switch with custom styles")
            .nth(0);
          await expect(first).toHaveAttribute("aria-checked", "false");
          const second = await page
            .getByLabel("Switch with custom styles")
            .nth(1);
          await expect(second).toHaveAttribute("aria-checked", "false");
        }
      });

      test("Customization: double press should set initial state", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByLabel("Switch with custom styles")
            .nth(0)
            .press("Space");
          await page
            .getByLabel("Switch with custom styles")
            .nth(0)
            .press("Space");
          const first = await page
            .getByLabel("Switch with custom styles")
            .nth(0);
          await expect(first).toHaveAttribute("aria-checked", "true");
          const second = await page
            .getByLabel("Switch with custom styles")
            .nth(1);
          await expect(second).toHaveAttribute("aria-checked", "true");
        }
      });

      test("Customization: double press on second switch should set initial state", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByLabel("Switch with custom styles")
            .nth(0)
            .press("Space");
          await page
            .getByLabel("Switch with custom styles")
            .nth(0)
            .press("Space");
          const first = await page
            .getByLabel("Switch with custom styles")
            .nth(0);
          await expect(first).toHaveAttribute("aria-checked", "true");
          const second = await page
            .getByLabel("Switch with custom styles")
            .nth(1);
          await expect(second).toHaveAttribute("aria-checked", "true");
        }
      });
    });
  });

  test.describe("WithHTMLForms tests", () => {
    test.describe("Mouse tests", () => {
      test("WithHTMLForms: should render and be checked", async ({ page }) => {
        const element = await page.getByLabel("Notification");
        await expect(element).toHaveAttribute("aria-checked", "true");
      });

      test("WithHTMLForms: should switch", async ({ page }) => {
        await page.getByLabel("Notification").click();
        const element = await page.getByLabel("Notification");
        await expect(element).toHaveAttribute("aria-checked", "false");
      });

      test("WithHTMLForms: double click should set initial state", async ({
        page,
      }) => {
        await page.getByLabel("Notification").dblclick();
        const element = await page.getByLabel("Notification");
        await expect(element).toHaveAttribute("aria-checked", "true");
      });
    });

    test.describe("Keyboard tests", () => {
      test("WithHTMLForms: should switch", async ({ page, isMobile }) => {
        if (!isMobile) {
          await page.getByLabel("Notification").press("Space");
          const element = await page.getByLabel("Notification");
          await expect(element).toHaveAttribute("aria-checked", "false");
        }
      });

      test("WithHTMLForms: double press should set initial state", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Notification").press("Space");
          await page.getByLabel("Notification").press("Space");
          const element = await page.getByLabel("Notification");
          await expect(element).toHaveAttribute("aria-checked", "true");
        }
      });
    });
  });

  test.describe("UsingTooltip tests", () => {
    test.describe("Mouse tests", () => {
      test("UsingTooltip: should render and match screenshot on hover", async ({
        page,
      }) => {
        const element = await page.getByLabel("Switch with Tooltip");
        await expect(element).toHaveAttribute("aria-checked", "true");
        await element.hover();
        await page.waitForTimeout(100);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-UsingTooltip-hover.png`,
        );
      });

      test("UsingTooltip: should switch and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Switch with Tooltip").click();
        const element = await page.getByLabel("Switch with Tooltip");
        await expect(element).toHaveAttribute("aria-checked", "false");
        await element.hover();
        await page.waitForTimeout(100);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-UsingTooltip-switched-hover.png`,
        );
      });

      test("UsingTooltip: double click should set initial state", async ({
        page,
      }) => {
        await page.getByLabel("Switch with Tooltip").dblclick();
        const element = await page.getByLabel("Switch with Tooltip");
        await expect(element).toHaveAttribute("aria-checked", "true");
      });
    });

    test.describe("Keyboard tests", () => {
      test("UsingTooltip: should render and match screenshot on hover", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          const element = await page.getByLabel("Switch with Tooltip");
          await expect(element).toHaveAttribute("aria-checked", "true");
          await element.focus();
          await page.waitForTimeout(100);
          await expect(page).toHaveScreenshot(
            `${COMPONENT_NAME}-UsingTooltip-focus.png`,
          );
        }
      });

      test("UsingTooltip: should switch and match screenshot", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Switch with Tooltip").press("Space");
          const element = await page.getByLabel("Switch with Tooltip");
          await expect(element).toHaveAttribute("aria-checked", "false");
          await element.hover();
          await page.waitForTimeout(100);
          await expect(page).toHaveScreenshot(
            `${COMPONENT_NAME}-UsingTooltip-switched-focus.png`,
          );
        }
      });

      test("UsingTooltip: double press should set initial state", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Switch with Tooltip").press("Space");
          await page.getByLabel("Switch with Tooltip").press("Space");
          const element = await page.getByLabel("Switch with Tooltip");
          await expect(element).toHaveAttribute("aria-checked", "true");
        }
      });
    });
  });
});

test.describe("Switch in Dark Theme", () => {
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      setDarkTheme(page);
      const element = await page.getByLabel("Default Switch");
      await expect(element).toHaveAttribute("aria-checked", "true");
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Default.png`);
    });

    test("Default: should switch and match screenshot", async ({ page }) => {
      setDarkTheme(page);
      await page.getByLabel("Default Switch").click();
      const element = await page.getByLabel("Default Switch");
      await expect(element).toHaveAttribute("aria-checked", "false");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Default-switched.png`,
      );
    });
  });

  test.describe("Sizes tests", () => {
    test("Sizes: should render and match screenshot", async ({ page }) => {
      setDarkTheme(page);
      const xxs = await page.getByLabel("Switch with 2xs size");
      await expect(xxs).toHaveAttribute("aria-checked", "true");
      const xs = await page.getByLabel("Switch with xs size");
      await expect(xs).toHaveAttribute("aria-checked", "true");
      const sm = await page.getByLabel("Switch with sm size");
      await expect(sm).toHaveAttribute("aria-checked", "true");
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Sizes.png`);
    });

    test("Sizes: should switch and match screenshot", async ({ page }) => {
      await page.getByLabel("Switch with 2xs size").click();
      const xxs = await page.getByLabel("Switch with 2xs size");
      await expect(xxs).toHaveAttribute("aria-checked", "false");
      const xs = await page.getByLabel("Switch with xs size");
      await expect(xs).toHaveAttribute("aria-checked", "false");
      const sm = await page.getByLabel("Switch with sm size");
      await expect(sm).toHaveAttribute("aria-checked", "false");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Sizes-switched.png`,
      );
    });
  });

  test.describe("Disabled tests", () => {
    test("Disabled: should render, be disabled and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      const checked = await page.getByLabel("Disabled Switch").nth(0);
      await expect(checked).toBeDisabled();
      await expect(checked).toHaveAttribute("aria-checked", "true");
      const unchecked = await page.getByLabel("Disabled Switch").nth(1);
      await expect(unchecked).toBeDisabled();
      await expect(unchecked).toHaveAttribute("aria-checked", "false");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Disabled.png`,
      );
    });
  });

  test.describe("WithIcons tests", () => {
    test("WithIcons: should render and match screenshot", async ({ page }) => {
      setDarkTheme(page);
      const xxs = await page.getByLabel("Switch with icons").nth(0);
      await expect(xxs).toHaveAttribute("aria-checked", "true");
      const xs = await page.getByLabel("Switch with icons").nth(1);
      await expect(xs).toHaveAttribute("aria-checked", "true");
      const sm = await page.getByLabel("Switch with icons").nth(2);
      await expect(sm).toHaveAttribute("aria-checked", "true");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-WithIcons.png`,
      );
    });

    test("WithIcons: should switch and match screenshot", async ({ page }) => {
      setDarkTheme(page);
      await page.getByLabel("Switch with icons").nth(0).click();
      const xxs = await page.getByLabel("Switch with icons").nth(0);
      await expect(xxs).toHaveAttribute("aria-checked", "false");
      const xs = await page.getByLabel("Switch with icons").nth(1);
      await expect(xs).toHaveAttribute("aria-checked", "false");
      const sm = await page.getByLabel("Switch with icons").nth(2);
      await expect(sm).toHaveAttribute("aria-checked", "false");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-WithIcons-switched.png`,
      );
    });
  });

  test.describe("Customization tests", () => {
    test("Customization: should render and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      const first = await page.getByLabel("Switch with custom styles").nth(0);
      await expect(first).toHaveAttribute("aria-checked", "true");
      const second = await page.getByLabel("Switch with custom styles").nth(1);
      await expect(second).toHaveAttribute("aria-checked", "true");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Customization.png`,
      );
    });

    test("Customization: should switch and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Switch with custom styles").nth(0).click();
      const first = await page.getByLabel("Switch with custom styles").nth(0);
      await expect(first).toHaveAttribute("aria-checked", "false");
      const second = await page.getByLabel("Switch with custom styles").nth(1);
      await expect(second).toHaveAttribute("aria-checked", "false");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Customization-switched.png`,
      );
    });
  });

  test.describe("UsingTooltip tests", () => {
    test("UsingTooltip: should render and match screenshot on hover", async ({
      page,
    }) => {
      setDarkTheme(page);
      const element = await page.getByLabel("Switch with Tooltip");
      await expect(element).toHaveAttribute("aria-checked", "true");
      await element.hover();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-UsingTooltip-hover.png`,
      );
    });

    test("UsingTooltip: should switch and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Switch with Tooltip").click();
      const element = await page.getByLabel("Switch with Tooltip");
      await expect(element).toHaveAttribute("aria-checked", "false");
      await element.hover();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-UsingTooltip-switched-hover.png`,
      );
    });
  });
});

test.describe("RTL tests", () => {
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      setRtl(page);
      const element = await page.getByLabel("Default Switch");
      await expect(element).toHaveAttribute("aria-checked", "true");
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Default.png`);
    });

    test("Default: should switch and match screenshot", async ({ page }) => {
      setRtl(page);
      await page.getByLabel("Default Switch").click();
      const element = await page.getByLabel("Default Switch");
      await expect(element).toHaveAttribute("aria-checked", "false");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Default-switched.png`,
      );
    });
  });

  test.describe("WithIcons tests", () => {
    test("WithIcons: should render and match screenshot", async ({ page }) => {
      setRtl(page);
      const xxs = await page.getByLabel("Switch with icons").nth(0);
      await expect(xxs).toHaveAttribute("aria-checked", "true");
      const xs = await page.getByLabel("Switch with icons").nth(1);
      await expect(xs).toHaveAttribute("aria-checked", "true");
      const sm = await page.getByLabel("Switch with icons").nth(2);
      await expect(sm).toHaveAttribute("aria-checked", "true");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-WithIcons.png`,
      );
    });

    test("WithIcons: should switch and match screenshot", async ({ page }) => {
      setRtl(page);
      await page.getByLabel("Switch with icons").nth(0).click();
      const xxs = await page.getByLabel("Switch with icons").nth(0);
      await expect(xxs).toHaveAttribute("aria-checked", "false");
      const xs = await page.getByLabel("Switch with icons").nth(1);
      await expect(xs).toHaveAttribute("aria-checked", "false");
      const sm = await page.getByLabel("Switch with icons").nth(2);
      await expect(sm).toHaveAttribute("aria-checked", "false");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-WithIcons-switched.png`,
      );
    });
  });

  test.describe("UsingTooltip tests", () => {
    test("UsingTooltip: should render and match screenshot on hover", async ({
      page,
    }) => {
      setRtl(page);
      const element = await page.getByLabel("Switch with Tooltip");
      await expect(element).toHaveAttribute("aria-checked", "true");
      await element.hover();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-UsingTooltip-hover.png`,
      );
    });
  });
});
