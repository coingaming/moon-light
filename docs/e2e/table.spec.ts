import { test, expect } from "@playwright/test";
import { PLAYWRIGHT_DEFAULT_TIMEOUT } from "@/constants";

const COMPONENT_NAME = "tagsInput";

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
    await expect(page).toHaveScreenshot(`table-Default.png`);
  });
});

test.describe("WithCellBorders tests", () => {
  test("WithCellBorders: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`table-WithCellBorders.png`);
  });
});

test.describe("DifferentRowGaps tests", () => {
  test("DifferentRowGaps: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`table-DifferentRowGaps.png`);
  });
});

test.describe("DifferentRowSizes tests", () => {
  test("DifferentRowSizes: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`table-DifferentRowSizes.png`);
  });
});

test.describe("ClickableRows tests", () => {
  test("ClickableRows: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`table-ClickableRows.png`);
  });
});

test.describe("SelectableRows tests", () => {
  test("SelectableRows: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`table-SelectableRows.png`);
  });
});

test.describe("SelectableCheckboxes tests", () => {
  test("SelectableCheckboxes: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`table-SelectableCheckboxes.png`);
  });
});

test.describe("CustomColors tests", () => {
  test("CustomColors: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`table-CustomColors.png`);
  });
});

test.describe("ExpandedRows tests", () => {
  test("ExpandedRows: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`table-ExpandedRows.png`);
  });
});

test.describe("WithSorting tests", () => {
  test("WithSorting: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`table-WithSorting.png`);
  });
});

test.describe("ExpandedRowsWithDeepNesting tests", () => {
  test("ExpandedRowsWithDeepNesting: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `table-ExpandedRowsWithDeepNesting.png`,
    );
  });
});

test.describe("ExpandedRowsWithStateKeeping tests", () => {
  test("ExpandedRowsWithStateKeeping: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `table-ExpandedRowsWithStateKeeping.png`,
    );
  });
});

test.describe("ExpandedSelectableRowsWithCheckboxes tests", () => {
  test("ExpandedSelectableRowsWithCheckboxes: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `table-ExpandedSelectableRowsWithCheckboxes.png`,
    );
  });
});

test.describe("ExpandedRowsWithCustomContent tests", () => {
  test("ExpandedRowsWithCustomContent: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `table-ExpandedRowsWithCustomContent.png`,
    );
  });
});

test.describe("WithMinimap tests", () => {
  test("WithMinimap: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`table-WithMinimap.png`);
  });
});

test.describe("Calendar tests", () => {
  test("Calendar: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`table-Calendar.png`);
  });
});

test.describe("Editable tests", () => {
  test("Editable: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`table-Editable.png`);
  });
});

test.describe("ZebraStyleRows tests", () => {
  test("ZebraStyleRows: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`table-ZebraStyleRows.png`);
  });
});

test.describe("LongDataTableClip tests", () => {
  test("LongDataTableClip: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`table-LongDataTableClip.png`);
  });
});

test.describe("Tooltips tests", () => {
  test("Tooltips: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`table-Tooltips.png`);
  });
});

test.describe("LongDataTableCustomWidths tests", () => {
  test("LongDataTableCustomWidths: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`table-LongDataTableCustomWidths.png`);
  });
});

test.describe("ExtraLongDataViewing tests", () => {
  test("ExtraLongDataViewing: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`table-ExtraLongDataViewing.png`);
  });
});
