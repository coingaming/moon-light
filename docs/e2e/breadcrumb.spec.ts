import { test, expect } from "@playwright/test";
import {
  PLAYWRIGHT_DEFAULT_TIMEOUT,
  PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
} from "@/constants";

test.beforeEach(async ({ page }, testInfo) => {
  const example = testInfo.title?.split(":")?.[0] ?? "Collapsed";
  await page.goto(`/client/breadcrumb/${example}`);
  await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);
});

test.afterEach(async ({ page }) => {
  // Cleanup from route
  await page.close();
});

test.describe("Collapsed Tests", () => {
  test("Collapsed: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`breadcrumb-Collapsed.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Collapsed: should open collapsed crumbs and match screenshot", async ({
    page,
  }) => {
    await page.getByLabel("Show more breadcrumbs").click();
    await page.mouse.move(0, 0);
    await page.waitForTimeout(250);

    const collapsed = await page.getByText("Page 1Page 2Page");
    await expect(collapsed).toBeVisible();
    await expect(page).toHaveScreenshot(`breadcrumb-Collapsed-open.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Collapsed: click outside should close collapsed crumbs", async ({
    page,
  }) => {
    await page.locator("li > button").click();
    await page.waitForTimeout(250);

    const collapsed = await page.getByText("Page 1Page 2Page");
    await expect(collapsed).toBeVisible();
    await page.mouse.click(10, 10);
    const collapsedAfter = await page.getByText("Page 1Page 2Page");
    await expect(collapsedAfter).not.toBeVisible();
  });

  test("Collapsed: first crumb hover should match screenshot", async ({
    page,
    isMobile,
  }) => {
    if (!isMobile) {
      const breadcrumbItem = await page.locator("span").getByText("Home");
      await breadcrumbItem.isVisible();
      await breadcrumbItem.hover();
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `breadcrumb-Collapsed-Home-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    }
  });

  test("Collapsed: 2nd last crumb hover should match screenshot", async ({
    page,
    isMobile,
  }) => {
    if (!isMobile) {
      const breadcrumbItem = await page
        .locator("span")
        .filter({ hasText: "Page 4" });
      await breadcrumbItem.isVisible();
      await breadcrumbItem.hover({ force: true });
      // const position = await breadcrumbItem.boundingBox();
      // await breadcrumbItem.hover({
      //   position: {
      //     x: (position?.x ?? 0) + 5 || 0,
      //     y: (position?.y ?? 0) + 2 || 0,
      //   },
      // });
      await page.waitForTimeout(500);
      await expect(page).toHaveScreenshot(
        `breadcrumb-Collapsed-Page4-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    }
  });
});

test.describe("FourItems Tests", () => {
  test("FourItems: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`breadcrumb-FourItems.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("FourItems: first crumb hover should match screenshot", async ({
    page,
    isMobile,
  }) => {
    if (!isMobile) {
      const breadcrumbItem = await page.locator("span").getByText("Home");
      await breadcrumbItem.hover();
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `breadcrumb-FourItems-Home-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    }
  });

  test("FourItems: 2nd crumb hover should match screenshot", async ({
    page,
    isMobile,
  }) => {
    if (!isMobile) {
      const breadcrumbItem = await page.locator("span").getByText("Page 1");
      await breadcrumbItem.hover();
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `breadcrumb-FourItems-Page1-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    }
  });

  test("FourItems: 3rd crumb hover should match screenshot", async ({
    page,
    isMobile,
  }) => {
    if (!isMobile) {
      const breadcrumbItem = await page.locator("span").getByText("Page 2");
      await breadcrumbItem.hover();
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `breadcrumb-FourItems-Page2-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    }
  });
});

test.describe("TwoItems tests", () => {
  test("TwoItems: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`breadcrumb-TwoItems.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("TwoItems: first crumb hover should match screenshot", async ({
    page,
    isMobile,
  }) => {
    if (!isMobile) {
      const breadcrumbItem = await page.locator("span").getByText("Home");
      await breadcrumbItem.hover();
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `breadcrumb-TwoItems-Home-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    }
  });
});

test.describe("OneItem Tests", () => {
  test("OneItem: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`breadcrumb-OneItem.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});

test.describe("CustomDivider Tests", () => {
  test("CustomDivider: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`breadcrumb-CustomDivider.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("CustomDivider: should open collapsed crumbs and match screenshot", async ({
    page,
  }) => {
    await page.getByLabel("Show more breadcrumbs").click();
    await page.mouse.move(0, 0);
    await page.waitForTimeout(250);

    const collapsed = await page.getByText("Page 1Page 2Page");
    await expect(collapsed).toBeVisible();
    await expect(page).toHaveScreenshot(`breadcrumb-CustomDivider-open.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("CustomDivider: click outside should close collapsed crumbs", async ({
    page,
  }) => {
    await page.locator("li > button").click();
    await page.waitForTimeout(250);

    const collapsed = await page.getByText("Page 1Page 2Page");
    await expect(collapsed).toBeVisible();
    await page.mouse.click(10, 10);
    const collapsedAfter = await page.getByText("Page 1Page 2Page");
    await expect(collapsedAfter).not.toBeVisible();
  });

  test("CustomDivider: first crumb hover should match screenshot", async ({
    page,
    isMobile,
  }) => {
    if (!isMobile) {
      const breadcrumbItem = await page.getByLabel("Home", { exact: true });
      await breadcrumbItem.hover();
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `breadcrumb-CustomDivider-Home-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    }
  });

  test("CustomDivider: 2nd last crumb hover should match screenshot", async ({
    page,
    isMobile,
  }) => {
    if (!isMobile) {
      const breadcrumbItem = await page.locator("span").getByText("Page 4");
      await breadcrumbItem.hover();
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `breadcrumb-CustomDivider-Page4-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    }
  });
});

test.describe("RTL Tests", () => {
  test("Collapsed: component support for RTL - should render and match screenshot", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const htmlElement = document?.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        throw new Error("RTLProvider error: html element was not found");
      }
    });
    await page.waitForSelector("html[dir=rtl]");
    await expect(page).toHaveScreenshot(`breadcrumb-rtl-Collapsed.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Collapsed: component support for RTL - should open collapsed crumbs and match screenshot", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const htmlElement = document?.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        throw new Error("RTLProvider error: html element was not found");
      }
    });
    await page.waitForSelector("html[dir=rtl]");
    await page.locator("li > button").click();
    await page.mouse.move(0, 0);
    await page.waitForTimeout(250);

    const collapsed = await page.locator("li > ol");
    await expect(collapsed).toBeVisible();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot(`breadcrumb-rtl-Collapsed-open.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("FourItems:  component support for RTL - should render and match screenshot", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const htmlElement = document?.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        throw new Error("RTLProvider error: html element was not found");
      }
    });
    await page.waitForSelector("html[dir=rtl]");
    await expect(page).toHaveScreenshot(`breadcrumb-rtl-FourItems.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("TwoItems:  component support for RTL - should render and match screenshot", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const htmlElement = document?.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        throw new Error("RTLProvider error: html element was not found");
      }
    });
    await page.waitForSelector("html[dir=rtl]");
    await expect(page).toHaveScreenshot(`breadcrumb-rtl-TwoItems.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("OneItem:  component support for RTL - should render and match screenshot", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const htmlElement = document?.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        throw new Error("RTLProvider error: html element was not found");
      }
    });
    await page.waitForSelector("html[dir=rtl]");
    await expect(page).toHaveScreenshot(`breadcrumb-rtl-OneItem.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("CustomDivider: component support for RTL - should render and match screenshot", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const htmlElement = document?.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        throw new Error("RTLProvider error: html element was not found");
      }
    });
    await page.waitForSelector("html[dir=rtl]");
    await expect(page).toHaveScreenshot(`breadcrumb-rtl-CustomDivider.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("CustomDivider: component support for RTL - should open collapsed crumbs and match screenshot", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const htmlElement = document?.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        throw new Error("RTLProvider error: html element was not found");
      }
    });
    await page.waitForSelector("html[dir=rtl]");
    await page.locator("li > button").click();
    await page.mouse.move(0, 0);
    await page.waitForTimeout(250);

    const collapsed = await page.locator("li > ol");
    await expect(collapsed).toBeVisible();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot(
      `breadcrumb-rtl-CustomDivider-open.png`,
      {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
      },
    );
  });
});
