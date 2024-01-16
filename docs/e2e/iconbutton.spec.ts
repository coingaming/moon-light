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
    test("Default: should render and have animation on click", async ({
      page,
    }) => {
      const btn = await page.getByTestId("button");
      const btnPos = await btn.boundingBox();
      await page.mouse.move((btnPos?.x || 0) + 5, (btnPos?.y || 0) + 5, {
        steps: 10,
      });
      const scale1 = await btn.evaluate((el) => {
        return {
          w: el.getBoundingClientRect().width,
          h: el.getBoundingClientRect().height,
        };
      });
      await page.mouse.down();
      await page.waitForTimeout(100);
      const scale2 = await btn.evaluate((el) => {
        return {
          w: el.getBoundingClientRect().width,
          h: el.getBoundingClientRect().height,
        };
      });
      await page.mouse.up();
      expect(scale2.w).toBeLessThan(scale1.w);
      expect(scale2.h).toBeLessThan(scale1.h);
    });
    test("Default: should render and have onClick callback working", async ({
      page,
    }) => {
      const btn = await page.getByTestId("button");
      let clicked = false;
      await page.on("dialog", async (dialog) => {
        clicked = true;
        await dialog.accept();
      });
      await btn.click();
      expect(clicked).toBeTruthy();
    });
  });
  test.describe("Animations tests", () => {
    test("Animations: should render and match the screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Animations.png`);
    });
    test("Animations: [progress] should render and have animation on click", async ({
      page,
    }) => {
      const btn = await page.getByTestId("button-progress");
      const btnPos = await btn.boundingBox();
      await page.mouse.move((btnPos?.x || 0) + 5, (btnPos?.y || 0) + 5, {
        steps: 10,
      });
      const scale1 = await btn.evaluate((el) => {
        return {
          w: el.getBoundingClientRect().width,
          h: el.getBoundingClientRect().height,
        };
      });
      await page.mouse.down();
      await page.waitForTimeout(100);
      const scale2 = await btn.evaluate((el) => {
        return {
          w: el.getBoundingClientRect().width,
          h: el.getBoundingClientRect().height,
        };
      });
      await page.mouse.up();
      expect(scale2.w).toBeLessThan(scale1.w);
      expect(scale2.h).toBeLessThan(scale1.h);
    });
    test("Animations: [progress] should render and have onClick callback working", async ({
      page,
    }) => {
      const btn = await page.getByTestId("button-progress");
      let clicked = false;
      await page.on("dialog", async (dialog) => {
        clicked = true;
        await dialog.accept();
      });
      await btn.click();
      expect(clicked).toBeTruthy();
    });
    test("Animations: [success] should render and have animation on click", async ({
      page,
    }) => {
      const btn = await page.getByTestId("button-success");
      const btnPos = await btn.boundingBox();
      await page.mouse.move((btnPos?.x || 0) + 5, (btnPos?.y || 0) + 5, {
        steps: 10,
      });
      const scale1 = await btn.evaluate((el) => {
        return {
          w: el.getBoundingClientRect().width,
          h: el.getBoundingClientRect().height,
        };
      });
      await page.mouse.down();
      await page.waitForTimeout(100);
      const scale2 = await btn.evaluate((el) => {
        return {
          w: el.getBoundingClientRect().width,
          h: el.getBoundingClientRect().height,
        };
      });
      await page.mouse.up();
      expect(scale2.w).toBeLessThan(scale1.w);
      expect(scale2.h).toBeLessThan(scale1.h);
    });
    test("Animations: [success] should render and have onClick callback working", async ({
      page,
    }) => {
      const btn = await page.getByTestId("button-success");
      let clicked = false;
      await page.on("dialog", async (dialog) => {
        clicked = true;
        await dialog.accept();
      });
      await btn.click();
      expect(clicked).toBeTruthy();
    });
    test("Animations: [error] should render and have animation on click", async ({
      page,
    }) => {
      const btn = await page.getByTestId("button-error");
      const btnPos = await btn.boundingBox();
      await page.mouse.move((btnPos?.x || 0) + 1, (btnPos?.y || 0) + 5, {
        steps: 10,
      });
      const scale1 = await btn.evaluate((el) => {
        return {
          w: el.getBoundingClientRect().width,
          h: el.getBoundingClientRect().height,
        };
      });
      await page.mouse.down();
      await page.waitForTimeout(100);
      const scale2 = await btn.evaluate((el) => {
        return {
          w: el.getBoundingClientRect().width,
          h: el.getBoundingClientRect().height,
        };
      });
      await page.mouse.up();
      expect(scale2.w).toBeLessThan(scale1.w);
      expect(scale2.h).toBeLessThan(scale1.h);
    });
    test("Animations: [error] should render and have onClick callback working", async ({
      page,
    }) => {
      const btn = await page.getByTestId("button-error");
      let clicked = false;
      await page.on("dialog", async (dialog) => {
        clicked = true;
        await dialog.accept();
      });
      await btn.click();
      expect(clicked).toBeTruthy();
    });
    test("Animations: [pulse] should render and have animation on click", async ({
      page,
    }) => {
      const btn = await page.getByTestId("button-pulse");
      const btnPos = await btn.boundingBox();
      await page.mouse.move((btnPos?.x || 0) + 5, (btnPos?.y || 0) + 5, {
        steps: 10,
      });
      const scale1 = await btn.evaluate((el) => {
        return {
          w: el.getBoundingClientRect().width,
          h: el.getBoundingClientRect().height,
        };
      });
      await page.mouse.down();
      await page.waitForTimeout(100);
      const scale2 = await btn.evaluate((el) => {
        return {
          w: el.getBoundingClientRect().width,
          h: el.getBoundingClientRect().height,
        };
      });
      await page.mouse.up();
      expect(scale2.w).toBeLessThan(scale1.w);
      expect(scale2.h).toBeLessThan(scale1.h);
    });
    test("Animations: [pulse] should render and have onClick callback working", async ({
      page,
    }) => {
      const btn = await page.getByTestId("button-pulse");
      let clicked = false;
      await page.on("dialog", async (dialog) => {
        clicked = true;
        await dialog.accept();
      });
      await btn.click({ force: true });
      expect(clicked).toBeTruthy();
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
    test("ButtonAsALinkHTML: should render and have animation on click", async ({
      page,
    }) => {
      const btn = await page.getByTestId("button");
      const btnPos = await btn.boundingBox();
      await page.mouse.move((btnPos?.x || 0) + 5, (btnPos?.y || 0) + 5, {
        steps: 10,
      });
      const scale1 = await btn.evaluate((el) => {
        return {
          w: el.getBoundingClientRect().width,
          h: el.getBoundingClientRect().height,
        };
      });
      await page.mouse.down();
      await page.waitForTimeout(100);
      const scale2 = await btn.evaluate((el) => {
        return {
          w: el.getBoundingClientRect().width,
          h: el.getBoundingClientRect().height,
        };
      });
      await page.mouse.up();
      expect(scale2.w).toBeLessThan(scale1.w);
      expect(scale2.h).toBeLessThan(scale1.h);
    });
    test("ButtonAsALinkHTML: should render and have onClick callback working", async ({
      page,
    }) => {
      const btn = await page.getByTestId("button");
      await btn.click();
      await page.waitForTimeout(100);
      expect(page.url()).toContain("#click");
    });
    test("ButtonAsALinkHTML: should render and have a tag", async ({
      page,
    }) => {
      const btn = await page.getByTestId("button");
      const tagName = await btn.evaluate((el) => el.tagName);
      expect(tagName).toEqual("A");
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
