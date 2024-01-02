import { test, expect } from "@playwright/test";
import {
  PLAYWRIGHT_DEFAULT_TIMEOUT,
  PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
} from "@/constants";

test.beforeEach(async ({ page }, testInfo) => {
  const example = testInfo.title?.split(":")?.[0] ?? "Default";
  await page.goto(`/client/checkbox/${example}`);
  await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);
});

test.afterEach(async ({ page }) => {
  // Cleanup from route
  await page.close();
});

test.describe("Default Tests", () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`checkbox-Default.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Default: should be checked and match screenshot", async ({ page }) => {
    await page.getByLabel("Checkbox").check({ force: true });
    expect(page.getByLabel("Checkbox")).toBeChecked();
    await expect(page).toHaveScreenshot(`checkbox-Default-checked.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Default: should be unchecked", async ({ page }) => {
    await page.getByLabel("Checkbox").check({ force: true });
    await expect(page.getByLabel("Checkbox")).toBeChecked();
    await page.getByLabel("Checkbox").uncheck({ force: true });
    await expect(page.getByLabel("Checkbox")).not.toBeChecked();
  });

  test("Default: RTL support - should render and match screenshot", async ({
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
    await expect(page).toHaveScreenshot(`checkbox-RTL-Default.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});

test.describe("WithLabel Tests", () => {
  test("WithLabel: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`checkbox-WithLabel.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("WithLabel: should be checked and match screenshot", async ({
    page,
  }) => {
    await page.getByLabel("With label").check({ force: true });
    expect(page.getByLabel("With label")).toBeChecked();
    await expect(page).toHaveScreenshot(`checkbox-WithLabel-checked.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("WithLabel: should be unchecked", async ({ page }) => {
    await page.getByLabel("With label").check({ force: true });
    await expect(page.getByLabel("With label")).toBeChecked();
    await page.getByLabel("With label").uncheck({ force: true });
    await expect(page.getByLabel("With label")).not.toBeChecked();
  });

  test("WithLabel: RTL support - should render and match screenshot", async ({
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
    await expect(page).toHaveScreenshot(`checkbox-RTL-WithLabel.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});

test.describe("Checked Tests", () => {
  test("Checked: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`checkbox-Checked.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Checked: should be unchecked and match screenshot", async ({
    page,
  }) => {
    await page.getByLabel("Checked").uncheck({ force: true });
    expect(page.getByLabel("Checked")).not.toBeChecked();
    await expect(page).toHaveScreenshot(`checkbox-Checked-unchecked.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Checked: should be checked", async ({ page }) => {
    await page.getByLabel("Checked").uncheck({ force: true });
    await expect(page.getByLabel("Checked")).not.toBeChecked();
    await page.getByLabel("Checked").check({ force: true });
    await expect(page.getByLabel("Checked")).toBeChecked();
  });

  test("Checked: RTL support - should render and match screenshot", async ({
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
    await expect(page).toHaveScreenshot(`checkbox-RTL-Checked.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});

test.describe("Disabled Tests", () => {
  test("Disabled: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`checkbox-Disabled.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Disabled: default should be disabled", async ({ page }) => {
    const defaultDisabled = await page.getByLabel("Disabled", { exact: true });
    await expect(defaultDisabled).toBeDisabled();
  });

  test("Disabled: checked should be disabled", async ({ page }) => {
    const defaultDisabled = await page.getByLabel("Disabled checked");
    await expect(defaultDisabled).toBeDisabled();
  });

  test("Disabled: RTL support - should render and match screenshot", async ({
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
    await expect(page).toHaveScreenshot(`checkbox-RTL-Disabled.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});

test.describe("ReadOnly Tests", () => {
  test("ReadOnly: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`checkbox-ReadOnly.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("ReadOnly: default should be readonly", async ({ page }) => {
    const defaultReadOnly = await page.getByLabel("ReadOnly", { exact: true });
    const isReadOnly = await defaultReadOnly.getAttribute("readonly");
    await expect(isReadOnly).toBeDefined();

    await page.getByLabel("ReadOnly", { exact: true }).click({ force: true });
    await expect(
      page.getByLabel("ReadOnly", { exact: true }),
    ).not.toBeChecked();
  });

  test("ReadOnly: checked should be readonly", async ({ page }) => {
    const checkedReadOnly = await page.getByLabel("ReadOnly Checked");
    const isReadOnly = await checkedReadOnly.getAttribute("readonly");
    await expect(isReadOnly).toBeDefined();

    await page.getByLabel("ReadOnly Checked").click({ force: true });
    await expect(page.getByLabel("ReadOnly Checked")).toBeChecked();
  });

  test("ReadOnly: RTL support - should render and match screenshot", async ({
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
    await expect(page).toHaveScreenshot(`checkbox-RTL-ReadOnly.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});

test.describe("PartiallySelected Tests", () => {
  test("PartiallySelected: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`checkbox-PartiallySelected.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("PartiallySelected: should check all and match screenshot", async ({
    page,
  }) => {
    const parent = await page.getByLabel("Parent");
    const firstChild = await page.getByLabel("Child 1");
    const secondChild = await page.getByLabel("Child 2");
    await parent.check({ force: true });
    expect(parent).toBeChecked();
    expect(firstChild).toBeChecked();
    expect(secondChild).toBeChecked();
    await expect(page).toHaveScreenshot(`checkbox-PartiallySelected-all.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("PartiallySelected: should uncheck all", async ({ page }) => {
    const parent = await page.getByLabel("Parent");
    const firstChild = await page.getByLabel("Child 1");
    const secondChild = await page.getByLabel("Child 2");
    await parent.check({ force: true });
    await expect(parent).toBeChecked();
    await expect(firstChild).toBeChecked();
    await expect(secondChild).toBeChecked();

    await parent.uncheck({ force: true });
    await expect(page.getByLabel("Parent")).not.toBeChecked();
    await expect(page.getByLabel("Child 1")).not.toBeChecked();
    await expect(page.getByLabel("Child 2")).not.toBeChecked();
  });

  test("PartiallySelected: should uncheck parent with unchecking 1st child", async ({
    page,
  }) => {
    const parent = await page.getByLabel("Parent");
    const firstChild = await page.getByLabel("Child 1");
    const secondChild = await page.getByLabel("Child 2");
    await parent.check({ force: true });
    await expect(parent).toBeChecked();
    await expect(firstChild).toBeChecked();
    await expect(secondChild).toBeChecked();

    await firstChild.uncheck({ force: true });
    await expect(page.getByLabel("Parent")).not.toBeChecked();
    await expect(page.getByLabel("Child 1")).not.toBeChecked();
    await expect(page.getByLabel("Child 2")).toBeChecked();
  });

  test("PartiallySelected: should uncheck parent with unchecking 2nd child", async ({
    page,
  }) => {
    const parent = await page.getByLabel("Parent");
    const firstChild = await page.getByLabel("Child 1");
    const secondChild = await page.getByLabel("Child 2");
    await parent.check({ force: true });
    await expect(parent).toBeChecked();
    await expect(firstChild).toBeChecked();
    await expect(secondChild).toBeChecked();

    await secondChild.uncheck({ force: true });
    await expect(page.getByLabel("Parent")).not.toBeChecked();
    await expect(page.getByLabel("Child 1")).toBeChecked();
    await expect(page.getByLabel("Child 2")).not.toBeChecked();
  });

  test("PartiallySelected: should check 1st child and match screenshot", async ({
    page,
  }) => {
    const parent = await page.getByLabel("Parent");
    const firstChild = await page.getByLabel("Child 1");
    const secondChild = await page.getByLabel("Child 2");
    await firstChild.check({ force: true });

    await expect(firstChild).toBeChecked();
    await expect(secondChild).not.toBeChecked();

    const ariaCheckedValue = await parent.getAttribute("aria-checked");
    await expect(ariaCheckedValue).toBe("mixed");

    await expect(page).toHaveScreenshot(
      `checkbox-PartiallySelected-first.png`,
      {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
      },
    );
  });

  test("PartiallySelected: should uncheck 1st child", async ({ page }) => {
    const parent = await page.getByLabel("Parent");
    const firstChild = await page.getByLabel("Child 1");
    const secondChild = await page.getByLabel("Child 2");
    await firstChild.check({ force: true });

    await expect(firstChild).toBeChecked();
    await expect(secondChild).not.toBeChecked();

    const ariaCheckedValue = await parent.getAttribute("aria-checked");
    await expect(ariaCheckedValue).toBe("mixed");

    await page.getByLabel("Child 1").uncheck({ force: true });
    await expect(page.getByLabel("Child 1")).not.toBeChecked();
    await expect(page.getByLabel("Child 2")).not.toBeChecked();
    await expect(page.getByLabel("Parent")).not.toBeChecked();
  });

  test("PartiallySelected: should check 2nd child and match screenshot", async ({
    page,
  }) => {
    const parent = await page.getByLabel("Parent");
    const firstChild = await page.getByLabel("Child 1");
    const secondChild = await page.getByLabel("Child 2");
    await secondChild.check({ force: true });

    await expect(firstChild).not.toBeChecked();
    await expect(secondChild).toBeChecked();

    const ariaCheckedValue = await parent.getAttribute("aria-checked");
    await expect(ariaCheckedValue).toBe("mixed");

    await expect(page).toHaveScreenshot(
      `checkbox-PartiallySelected-second.png`,
      {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
      },
    );
  });

  test("PartiallySelected: should uncheck 2nd child", async ({ page }) => {
    const parent = await page.getByLabel("Parent");
    const firstChild = await page.getByLabel("Child 1");
    const secondChild = await page.getByLabel("Child 2");
    await secondChild.check({ force: true });

    await expect(firstChild).not.toBeChecked();
    await expect(secondChild).toBeChecked();

    const ariaCheckedValue = await parent.getAttribute("aria-checked");
    await expect(ariaCheckedValue).toBe("mixed");

    await page.getByLabel("Child 2").uncheck({ force: true });
    await expect(page.getByLabel("Child 1")).not.toBeChecked();
    await expect(page.getByLabel("Child 2")).not.toBeChecked();
    await expect(page.getByLabel("Parent")).not.toBeChecked();
  });

  test("PartiallySelected: should check parent", async ({ page }) => {
    await page.getByLabel("Child 1").check({ force: true });
    await expect(page.getByLabel("Child 1")).toBeChecked();
    await page.getByLabel("Child 2").check({ force: true });
    await expect(page.getByLabel("Child 2")).toBeChecked();
    const parent = await page.getByLabel("Parent");
    await expect(parent).toBeChecked();
  });

  test("PartiallySelected: should uncheck parent", async ({ page }) => {
    await page.getByLabel("Child 1").check({ force: true });
    await expect(page.getByLabel("Child 1")).toBeChecked();
    await page.getByLabel("Child 2").check({ force: true });
    await expect(page.getByLabel("Child 2")).toBeChecked();
    await page.getByLabel("Child 1").uncheck({ force: true });
    await expect(page.getByLabel("Child 1")).not.toBeChecked();
    await expect(page.getByLabel("Child 2")).toBeChecked();
    const parent = await page.getByLabel("Parent");
    await expect(parent).not.toBeChecked();
  });

  test("PartiallySelected: should uncheck parent: 2", async ({ page }) => {
    await page.getByLabel("Child 1").check({ force: true });
    await expect(page.getByLabel("Child 1")).toBeChecked();
    await page.getByLabel("Child 2").check({ force: true });
    await expect(page.getByLabel("Child 2")).toBeChecked();
    await page.getByLabel("Child 2").uncheck({ force: true });
    await expect(page.getByLabel("Child 2")).not.toBeChecked();
    await expect(page.getByLabel("Child 1")).toBeChecked();
    const parent = await page.getByLabel("Parent");
    await expect(parent).not.toBeChecked();
  });

  test("PartiallySelected: RTL support - should render and match screenshot", async ({
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
    await expect(page).toHaveScreenshot(`checkbox-RTL-PartiallySelected.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});

test.describe("Customization Tests", () => {
  test("Customization: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`checkbox-Customization.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Customization: should check 1st and match screenshot", async ({
    page,
  }) => {
    const checkbox = await page.getByLabel("Checkbox").first();
    await checkbox.check({ force: true });
    expect(checkbox).toBeChecked();
    await expect(page).toHaveScreenshot(`checkbox-Customization-1.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Customization: should uncheck 1st", async ({ page }) => {
    const checkbox = await page.getByLabel("Checkbox").first();
    await checkbox.check({ force: true });
    await expect(checkbox).toBeChecked();
    const checkedCheckbox = await page.getByLabel("Checkbox").first();
    await checkedCheckbox.uncheck({ force: true });
    await expect(checkedCheckbox).not.toBeChecked();
  });

  test("Customization: should check 2nd and match screenshot", async ({
    page,
  }) => {
    const checkbox = await page.getByLabel("Checkbox").nth(1);
    await checkbox.check({ force: true });
    expect(checkbox).toBeChecked();
    await expect(page).toHaveScreenshot(`checkbox-Customization-2.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Customization: should uncheck 2nd", async ({ page }) => {
    const checkbox = await page.getByLabel("Checkbox").nth(1);
    await checkbox.check({ force: true });
    await expect(checkbox).toBeChecked();
    const checkedCheckbox = await page.getByLabel("Checkbox").nth(1);
    await checkedCheckbox.uncheck({ force: true });
    await expect(checkedCheckbox).not.toBeChecked();
  });

  test("Customization: should check 3rd and match screenshot", async ({
    page,
  }) => {
    const checkbox = await page.getByLabel("Checkbox").nth(2);
    await checkbox.check({ force: true });
    expect(checkbox).toBeChecked();
    await expect(page).toHaveScreenshot(`checkbox-Customization-3.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Customization: should uncheck 3rd", async ({ page }) => {
    const checkbox = await page.getByLabel("Checkbox").nth(2);
    await checkbox.check({ force: true });
    await expect(checkbox).toBeChecked();
    const checkedCheckbox = await page.getByLabel("Checkbox").nth(2);
    await checkedCheckbox.uncheck({ force: true });
    await expect(checkedCheckbox).not.toBeChecked();
  });

  test("Customization: should check 4th and match screenshot", async ({
    page,
  }) => {
    const checkbox = await page.getByLabel("Checkbox").nth(3);
    await checkbox.check({ force: true });
    await expect(checkbox).toBeChecked();
    await expect(page).toHaveScreenshot(`checkbox-Customization-4.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Customization: should uncheck 4th", async ({ page }) => {
    const checkbox = await page.getByLabel("Checkbox").nth(3);
    await checkbox.check({ force: true });
    await expect(checkbox).toBeChecked();
    const checkedCheckbox = await page.getByLabel("Checkbox").nth(3);
    await checkedCheckbox.uncheck({ force: true });
    await expect(checkedCheckbox).not.toBeChecked();
  });

  test("Customization: RTL support - should render and match screenshot", async ({
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
    await expect(page).toHaveScreenshot(`checkbox-RTL-Customization.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });
});
