import { test, expect } from "@playwright/test";
import { PLAYWRIGHT_DEFAULT_TIMEOUT } from "@/constants";

const COMPONENT_NAME = "tabs";

test.beforeEach(async ({ page }, testInfo) => {
  const example = testInfo.title?.split(":")?.[0] ?? "Default";
  await page.goto(`/client/${COMPONENT_NAME}/${example}`);
  await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);
});
test.afterEach(async ({ page }) => {
  // Cleanup from route
  await page.close();
});

test.describe("Default tests", () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`tabs-Default.png`);
  });

  test("Default: should render, click second tab and match screenshot", async ({
    page,
  }) => {
    const tabBtn = await page.getByText("Tab 2");
    await tabBtn.click();
    await page.waitForTimeout(200); // Wait anim
    await expect(page).toHaveScreenshot(`tabs-Default-Tab2.png`);
  });

  test("Default: Click on the second tab should change content", async ({
    page,
  }) => {
    const tabBtn = await page.getByText("Tab 2");
    const content = await page.locator("div[role=tabpanel]");

    expect(
      (await content.innerText()).startsWith("Lorem Ipsum is simply dummy text")
    ).toBe(true);
    await tabBtn.click();
    expect(
      (await content.innerText()).startsWith("Lorem Ipsum is simply dummy text")
    ).toBe(false);
    expect(
      (await content.innerText()).startsWith(
        "It has survived not only five centuries"
      )
    ).toBe(true);
  });

  test("Default: Hover the second tab, should cause hover on the tab", async ({
    page,
  }) => {
    const tabBtn = await page.getByText("Tab 2");
    await tabBtn.hover();
    await page.waitForTimeout(200); // Wait anim
    await expect(page).toHaveScreenshot(`tabs-Default-Tab2-Hover.png`);
  });
});

test.describe("SelectedIndex tests", () => {
  test("SelectedIndex: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`tabs-SelectedIndex.png`);
  });

  test("SelectedIndex: Click on the second tab should change content", async ({
    page,
  }) => {
    const tabBtn = await page.getByText("Tab 2")?.first();
    const content = await page.locator("div[role=tabpanel]");

    expect(
      (await content.innerText()).startsWith("Lorem Ipsum is simply dummy text")
    ).toBe(true);
    await tabBtn.click();
    expect(
      (await content.innerText()).startsWith("Lorem Ipsum is simply dummy text")
    ).toBe(true);
    expect(
      (await content.innerText()).startsWith(
        "It has survived not only five centuries"
      )
    ).toBe(false);
  });
});

test.describe("SegmentControlView tests", () => {
  test("SegmentControlView: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`tabs-SegmentControlView.png`);
  });

  test("SegmentControlView: should render and both variants should clickable and change state if clicked", async ({
    page,
  }) => {
    const tabsBtn = await page.getByText("Tab 2");
    if ((await tabsBtn.count()) !== 2) {
      // trigger error
      await expect(true).toBe(false);
      return;
    }
    await (await tabsBtn.first()).click();
    await (await tabsBtn.last()).click();
    await expect(page).toHaveScreenshot(`tabs-SegmentControlView-Tab2.png`);
  });
});

test.describe("TabsOnlyView tests", () => {
  test("TabsOnlyView: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`tabs-TabsOnlyView.png`);
  });
});

test.describe("Sizes tests", () => {
  test("Sizes: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`tabs-Sizes.png`);
  });
});

test.describe("WithHandler tests", () => {
  test("WithHandler: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`tabs-WithHandler.png`);
  });
});

test.describe("WithCustomStyle tests", () => {
  test("WithCustomStyle: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`tabs-WithCustomStyle.png`);
  });
});

test.describe("Pill tests", () => {
  test("Pill: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`tabs-Pill.png`);
  });

  test("Pill: should render, click second tab and match screenshot", async ({
    page,
  }) => {
    const tabBtn = await page.getByText("Tab 2");
    await tabBtn.click();
    await page.waitForTimeout(200); // Wait anim
    await expect(page).toHaveScreenshot(`tabs-Pill-Tab2.png`);
  });
});

test.describe("SelectedIndexSegment tests", () => {
  test("SelectedIndexSegment: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`tabs-SelectedIndexSegment.png`);
  });
});
