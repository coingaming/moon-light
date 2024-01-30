import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "table";

setupTest(COMPONENT_NAME);

test.describe(`${COMPONENT_NAME} in Light Theme`, () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
  });
  test("WithCellBorders: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithCellBorders.png`,
    );
  });
  test("RowGap: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RowGap.png`);
  });
  test("RowSize: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RowSize.png`);
  });
  test("WithClickableRows: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithClickableRows.png`,
    );
  });
  test("WithSelectableRows: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithSelectableRows.png`,
    );
  });
  test("WithSelectableRowsAndCheckboxes: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithSelectableRowsAndCheckboxes.png`,
    );
  });
  test("Customization: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Customization.png`);
  });
  test("WithExpandableRows: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithExpandableRows.png`,
    );
  });
  test("WithSorting: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithSorting.png`);
  });
});

test.describe(`${COMPONENT_NAME} functionality`, () => {
  test("Pin: should return correct aria attributes", async ({ page }) => {
    const progress = page.getByRole("progressbar");
    await expect(progress).toHaveAttribute("aria-valuenow", "75");
    await expect(progress).toHaveAttribute("aria-label", "75%");
    await expect(page.getByText("75%")).toBeVisible();
  });
});

test.describe(`${COMPONENT_NAME} in RTL`, () => {
  test("Default: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-RTL.png`);
  });
  test("WithCellBorders: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithCellBorders-RTL.png`,
    );
  });
  test("RowGap: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RowGap-RTL.png`);
  });
  test("RowSize: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RowSize-RTL.png`);
  });
  test("WithClickableRows: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithClickableRows-RTL.png`,
    );
  });
  test("WithSelectableRows: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithSelectableRows-RTL.png`,
    );
  });
  test("WithSelectableRowsAndCheckboxes: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithSelectableRowsAndCheckboxes-RTL.png`,
    );
  });
  test("Customization: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-Customization-RTL.png`,
    );
  });
  test("WithExpandableRows: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithExpandableRows-RTL.png`,
    );
  });
  test("WithSorting: should render and match screenshot in RTL", async ({
    page,
  }) => {
    setRtl(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithSorting-RTL.png`,
    );
  });
});

test.describe(`${COMPONENT_NAME} in Dark Theme`, () => {
  test("Default: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-Dark.png`);
  });
  test("WithCellBorders: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithCellBorders-Dark.png`,
    );
  });
  test("RowGap: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RowGap-Dark.png`);
  });
  test("RowSize: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RowSize-Dark.png`);
  });
  test("WithClickableRows: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithClickableRows-Dark.png`,
    );
  });
  test("WithSelectableRows: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithSelectableRows-Dark.png`,
    );
  });
  test("WithSelectableRowsAndCheckboxes: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithSelectableRowsAndCheckboxes-Dark.png`,
    );
  });
  test("Customization: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-Customization-Dark.png`,
    );
  });
  test("WithExpandableRows: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithExpandableRows-Dark.png`,
    );
  });
  test("WithSorting: should render and match screenshot in Dark Theme", async ({
    page,
  }) => {
    setDarkTheme(page);
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-WithSorting-Dark.png`,
    );
  });
});
