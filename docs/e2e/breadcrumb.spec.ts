import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "breadcrumb";

setupTest(COMPONENT_NAME);

test.describe(`${COMPONENT_NAME} in Light Theme`, () => {
  test.describe("Collapsed Tests", () => {
    test("Collapsed: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Collapsed.png`);
    });

    test("Collapsed: should open collapsed crumbs and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Show more breadcrumbs").click();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);

      const collapsed = await page.getByText("Page 1Page 2Page");
      await expect(collapsed).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Collapsed-open.png`,
      );
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
          `${COMPONENT_NAME}-Collapsed-Home-hover.png`,
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
        await page.waitForTimeout(500);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-Collapsed-Page4-hover.png`,
        );
      }
    });
  });

  test.describe("FourItems Tests", () => {
    test("FourItems: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-FourItems.png`);
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
          `${COMPONENT_NAME}-FourItems-Home-hover.png`,
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
          `${COMPONENT_NAME}-FourItems-Page1-hover.png`,
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
          `${COMPONENT_NAME}-FourItems-Page2-hover.png`,
        );
      }
    });
  });

  test.describe("TwoItems tests", () => {
    test("TwoItems: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-TwoItems.png`);
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
          `${COMPONENT_NAME}-TwoItems-Home-hover.png`,
        );
      }
    });
  });

  test.describe("OneItem Tests", () => {
    test("OneItem: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-OneItem.png`);
    });
  });

  test.describe("CustomDivider Tests", () => {
    test("CustomDivider: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-CustomDivider.png`,
      );
    });

    test("CustomDivider: should open collapsed crumbs and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Show more breadcrumbs").click();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);

      const collapsed = await page.getByText("Page 1Page 2Page");
      await expect(collapsed).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-CustomDivider-open.png`,
      );
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
          `${COMPONENT_NAME}-CustomDivider-Home-hover.png`,
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
          `${COMPONENT_NAME}-CustomDivider-Page4-hover.png`,
        );
      }
    });
  });
});

test.describe(`${COMPONENT_NAME} in Dark Theme`, () => {
  test.beforeEach(async ({ page }) => {
    await setDarkTheme(page);
  });
  test("Collapsed: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Collapsed.png`);
  });

  test("Collapsed: should open collapsed crumbs and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await page.locator("li > button").click();
    await page.mouse.move(0, 0);
    await page.waitForTimeout(250);
    const collapsed = await page.locator("li > ol");
    await expect(collapsed).toBeVisible();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-Collapsed-open.png`,
    );
  });

  test("FourItems: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-FourItems.png`);
  });

  test("TwoItems: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-TwoItems.png`);
  });

  test("OneItem: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-OneItem.png`);
  });

  test("CustomDivider: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-CustomDivider.png`,
    );
  });

  test("CustomDivider: should open collapsed crumbs and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await page.locator("li > button").click();
    await page.mouse.move(0, 0);
    await page.waitForTimeout(250);
    const collapsed = await page.locator("li > ol");
    await expect(collapsed).toBeVisible();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-CustomDivider-open.png`,
    );
  });
});

test.describe(`${COMPONENT_NAME} in RTL`, () => {
  test.beforeEach(async ({ page }) => {
    await setRtl(page);
  });
  test("Collapsed: component support for RTL - should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Collapsed.png`);
  });

  test("Collapsed: component support for RTL - should open collapsed crumbs and match screenshot", async ({
    page,
  }) => {
    await page.locator("li > button").click();
    await page.mouse.move(0, 0);
    await page.waitForTimeout(250);
    const collapsed = await page.locator("li > ol");
    await expect(collapsed).toBeVisible();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-rtl-Collapsed-open.png`,
    );
  });

  test("FourItems:  component support for RTL - should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-FourItems.png`);
  });

  test("TwoItems:  component support for RTL - should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-TwoItems.png`);
  });

  test("OneItem:  component support for RTL - should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-OneItem.png`);
  });

  test("CustomDivider: component support for RTL - should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-rtl-CustomDivider.png`,
    );
  });

  test("CustomDivider: component support for RTL - should open collapsed crumbs and match screenshot", async ({
    page,
  }) => {
    await page.locator("li > button").click();
    await page.mouse.move(0, 0);
    await page.waitForTimeout(250);

    const collapsed = await page.locator("li > ol");
    await expect(collapsed).toBeVisible();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-rtl-CustomDivider-open.png`,
    );
  });
});
