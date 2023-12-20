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

test("Collapsed: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`breadcrumb-Collapsed.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Collapsed: should open collapsed crumbs and match screenshot", async ({
  page,
}) => {
  await page.locator("li > button").click();
  await page.waitForTimeout(100);

  const collapsed = await page.locator("li > ol");
  await expect(collapsed).toBeVisible();
  await expect(page).toHaveScreenshot(`breadcrumb-Collapsed-open.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("Collapsed: click outside should close collapsed crumbs", async ({
  page,
}) => {
  await page.locator("li > button").click();
  await page.waitForTimeout(100);

  const collapsed = await page.locator("li > ol");
  await expect(collapsed).toBeVisible();
  await page.mouse.click(10, 10);
  await expect(collapsed).not.toBeVisible();
});

test("Collapsed: first crumb hover should match screenshot", async ({
  page,
  isMobile,
}) => {
  if (!isMobile) {
    await page.getByText("Home").hover();
    await page.waitForTimeout(100);
    await expect(page).toHaveScreenshot(`breadcrumb-Collapsed-Home-hover.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  }
});

test("Collapsed: 2nd last crumb hover should match screenshot", async ({
  page,
  isMobile,
}) => {
  if (!isMobile) {
    await page.getByText("Page 4").hover();
    await page.waitForTimeout(100);
    await expect(page).toHaveScreenshot(
      `breadcrumb-Collapsed-Page4-hover.png`,
      {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
      },
    );
  }
});

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
    await page.getByText("Home").hover();
    await page.waitForTimeout(100);
    await expect(page).toHaveScreenshot(`breadcrumb-FourItems-Home-hover.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  }
});

test("FourItems: 2nd crumb hover should match screenshot", async ({
  page,
  isMobile,
}) => {
  if (!isMobile) {
    await page.getByText("Page 1").hover();
    await page.waitForTimeout(100);
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
    await page.getByText("Page 2").hover();
    await page.waitForTimeout(100);
    await expect(page).toHaveScreenshot(
      `breadcrumb-FourItems-Page2-hover.png`,
      {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
      },
    );
  }
});

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
    await page.getByText("Home").hover();
    await page.waitForTimeout(100);
    await expect(page).toHaveScreenshot(`breadcrumb-TwoItems-Home-hover.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  }
});

test("OneItem: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`breadcrumb-OneItem.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("CustomDivider: should render and match screenshot", async ({ page }) => {
  await expect(page).toHaveScreenshot(`breadcrumb-CustomDivider.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("CustomDivider: should open collapsed crumbs and match screenshot", async ({
  page,
}) => {
  await page.locator("li > button").click();
  await page.waitForTimeout(100);

  const collapsed = await page.locator("li > ol");
  await expect(collapsed).toBeVisible();
  await expect(page).toHaveScreenshot(`breadcrumb-CustomDivider-open.png`, {
    maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
  });
});

test("CustomDivider: click outside should close collapsed crumbs", async ({
  page,
}) => {
  await page.locator("li > button").click();
  await page.waitForTimeout(100);

  const collapsed = await page.locator("li > ol");
  await expect(collapsed).toBeVisible();
  await page.mouse.click(10, 10);
  await expect(collapsed).not.toBeVisible();
});

test("CustomDivider: first crumb hover should match screenshot", async ({
  page,
  isMobile,
}) => {
  if (!isMobile) {
    await page.locator('a[aria-label="Home"]').hover();
    await page.waitForTimeout(100);
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
    await page.getByText("Page 4").hover();
    await page.waitForTimeout(100);
    await expect(page).toHaveScreenshot(
      `breadcrumb-CustomDivider-Page4-hover.png`,
      {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
      },
    );
  }
});
