import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "snackbar";

setupTest(COMPONENT_NAME);

test.describe("Snackbar in Light Theme", () => {
  test.describe("Default tests", () => {
    test("Default: should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Default" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
    });

    test("Default: enter press should open snackbar", async ({ page }) => {
      await page.getByRole("button", { name: "Default" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Default: snackbar should close after 5000ms", async ({ page }) => {
      await page.getByRole("button", { name: "Default" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });
  });

  test.describe("Positions tests", () => {
    test("Positions: top-left - should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Top left" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Positions-top-left.png`,
      );
    });

    test("Positions: top-left - enter press should open snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Top left" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Positions: top-left - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Top left" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Positions: top-center - should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Top center" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Positions-top-center.png`,
      );
    });

    test("Positions: top-center - enter press should open snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Top center" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Positions: top-center - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Top center" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Positions: top-right - should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Top right" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Positions-top-right.png`,
      );
    });

    test("Positions: top-right - enter press should open snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Top right" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Positions: top-right - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Top right" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Positions: bottom-left - should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Bottom left" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Positions-bottom-left.png`,
      );
    });

    test("Positions: bottom-left - enter press should open snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Bottom left" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Positions: bottom-left - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Bottom left" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Positions: bottom-center - should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Bottom center" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Positions-bottom-center.png`,
      );
    });

    test("Positions: bottom-center - enter press should open snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Bottom center" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Positions: bottom-center - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Bottom center" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Positions: bottom-right - should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Bottom right" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Positions-bottom-right.png`,
      );
    });

    test("Positions: bottom-right - enter press should open snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Bottom right" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Positions: bottom-right - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Bottom right" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });
  });

  test.describe("Options tests", () => {
    test("Options: multiline - should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Multi Line", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Options-multiline.png`,
      );
    });

    test("Options: multiline - enter press should open snackbar", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Multi Line", exact: true })
        .press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Options: multiline - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Multi Line", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Options: header - should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "With Header" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Options-header.png`,
      );
    });

    test("Options: header - enter press should open snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "With Header" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Options: header - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "With Header" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Options: close - should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "With Close", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Options-close.png`,
      );
    });

    test("Options: close - close button should close snackbar", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "With Close", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.getByLabel("Close").click();
      const openedSnackbar = await page.locator('li[data-state="open"]');
      await expect(openedSnackbar).not.toBeVisible();
    });

    test("Options: close - enter press should open snackbar", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "With Close", exact: true })
        .press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Options: close - enter press on close should close snackbar", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "With Close", exact: true })
        .press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.getByLabel("Close").press("Enter");
      const openedSnackbar = await page.locator('li[data-state="open"]');
      await expect(openedSnackbar).not.toBeVisible();
    });

    test("Options: close - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "With Close", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Options: icon - should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "With Icon", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Options-icon.png`);
    });

    test("Options: icon - enter press should open snackbar", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "With Icon", exact: true })
        .press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Options: icon - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "With Icon", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Options: multiline with icon - should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Multi Line with Icon" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Options-multiline-icon.png`,
      );
    });

    test("Options: multiline with icon - enter press should open snackbar", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Multi Line with Icon" })
        .press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Options: multiline with icon - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Multi Line with Icon" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Options: close and icon- should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "With Close and Icon" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Options-close-icon.png`,
      );
    });

    test("Options: close and icon- close button should close snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "With Close and Icon" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.getByLabel("Close").click();
      const openedSnackbar = await page.locator('li[data-state="open"]');
      await expect(openedSnackbar).not.toBeVisible();
    });

    test("Options: close and icon - enter press should open snackbar", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "With Close and Icon" })
        .press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Options: close and icon - enter press on close should close snackbar", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "With Close and Icon" })
        .press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.getByLabel("Close").press("Enter");
      const openedSnackbar = await page.locator('li[data-state="open"]');
      await expect(openedSnackbar).not.toBeVisible();
    });

    test("Options: close and icon - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "With Close and Icon" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });
  });

  test.describe("SemanticTypes tests", () => {
    test("SemanticTypes: success - should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Success" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-SemanticTypes-success.png`,
      );
    });

    test("SemanticTypes: success - enter press should open snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Success" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("SemanticTypes: success - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Success" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("SemanticTypes: warning - should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Warning" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-SemanticTypes-warning.png`,
      );
    });

    test("SemanticTypes: warning - enter press should open snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Warning" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("SemanticTypes: warning - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Warning" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("SemanticTypes: error - should open snackbar and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Error" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-SemanticTypes-error.png`,
      );
    });

    test("SemanticTypes: error - enter press should open snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Error" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("SemanticTypes: error - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Error" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });
  });

  test.describe("AutoClose tests", () => {
    test("AutoClose: 1 sec - should open snackbar", async ({ page }) => {
      await page.getByRole("button", { name: "Close after 1 sec" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("AutoClose: 1 sec - enter press should open snackbar", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Close after 1 sec" })
        .press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("AutoClose: 1 sec - snackbar should close after 1000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Close after 1 sec" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(1000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("AutoClose: 3 sec - should open snackbar", async ({ page }) => {
      await page.getByRole("button", { name: "Close after 3 sec" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("AutoClose: 3 sec - enter press should open snackbar", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Close after 3 sec" })
        .press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("AutoClose: 3 sec - snackbar should close after 3000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Close after 3 sec" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(3000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });
  });

  test.describe("Customization tests", () => {
    test("Customization: border radius - should open snackbar and match styles", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Border radius" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"] > div');
      await expect(snackbar).toBeVisible();
      await expect((await snackbar.getAttribute("class"))?.split(" ")).toEqual(
        expect.arrayContaining(["rounded-none"]),
      );
    });

    test("Customization: border radius - enter press should open snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Border radius" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Customization: border radius - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Border radius" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Customization: background - should open snackbar and match styles", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Background" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"] > div');
      await expect(snackbar).toBeVisible();
      await expect((await snackbar.getAttribute("class"))?.split(" ")).toEqual(
        expect.arrayContaining(["bg-roshi"]),
      );
    });

    test("Customization: background - enter press should open snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Background" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Customization: background - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Background" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Customization: width - should open snackbar and match styles", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Width" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"] > div');
      await expect(snackbar).toBeVisible();
      await expect((await snackbar.getAttribute("class"))?.split(" ")).toEqual(
        expect.arrayContaining(["w-72"]),
      );
    });

    test("Customization: width - enter press should open snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Width" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Customization: width - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Width" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Customization: light - should open snackbar and match styles", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Always light", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"] > div');
      await expect(snackbar).toBeVisible();
      await expect((await snackbar.getAttribute("class"))?.split(" ")).toEqual(
        expect.arrayContaining(["theme-moon-light"]),
      );
    });

    test("Customization: light - enter press should open snackbar", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Always light", exact: true })
        .press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Customization: light - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Always light", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Customization: dark - should open snackbar and match styles", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Always dark", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"] > div');
      await expect(snackbar).toBeVisible();
      await expect((await snackbar.getAttribute("class"))?.split(" ")).toEqual(
        expect.arrayContaining(["theme-moon-dark"]),
      );
    });

    test("Customization: dark - enter press should open snackbar", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Always dark", exact: true })
        .press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Customization: dark - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Always dark", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });

    test("Customization: fonts - should open snackbar and match styles", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Fonts" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"] > div');
      await expect(snackbar).toBeVisible();
      const title = await page.getByText("Custom fonts.", { exact: true });
      await expect((await title.getAttribute("class"))?.split(" ")).toEqual(
        expect.arrayContaining(["text-moon-24", "text-chichi"]),
      );
      const subtitle = await page.getByText("Even more custom fonts.", {
        exact: true,
      });
      await expect((await subtitle.getAttribute("class"))?.split(" ")).toEqual(
        expect.arrayContaining(["text-moon-12", "font-medium"]),
      );
    });

    test("Customization: fonts - enter press should open snackbar", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Fonts" }).press("Enter");
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
    });

    test("Customization: fonts - snackbar should close after 5000ms", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Fonts" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.waitForTimeout(5000);
      const openSnackbar = await page.locator('li[data-state="open"]');
      await expect(openSnackbar).not.toBeVisible();
    });
  });

  test.describe("SnackbarQueue tests", () => {
    test("SnackbarQueue: should open 3 snackbars in a queue", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Queue Snackbar" }).click();
      await page.getByRole("button", { name: "Queue Snackbar" }).dblclick();
      await page.waitForTimeout(100);
      const first = await page.locator("p").getByText("Number 1 Snackbar");
      await expect(first).toBeVisible();
      await page.waitForTimeout(5000);
      await expect(first).not.toBeVisible();
      const second = await page.locator("p").getByText("Number 2 Snackbar");
      await expect(second).toBeVisible();
      await page.waitForTimeout(5000);
      await expect(second).not.toBeVisible();
      const third = await page.locator("p").getByText("Number 3 Snackbar");
      await expect(third).toBeVisible();
      await page.waitForTimeout(5000);
      await expect(third).not.toBeVisible();
    });

    test("SnackbarQueue: enter press should open 3 snackbars in a queue", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Queue Snackbar" }).press("Enter");
      await page.getByRole("button", { name: "Queue Snackbar" }).press("Enter");
      await page.getByRole("button", { name: "Queue Snackbar" }).press("Enter");
      await page.waitForTimeout(100);
      const first = await page.locator("p").getByText("Number 1 Snackbar");
      await expect(first).toBeVisible();
      await page.waitForTimeout(5000);
      await expect(first).not.toBeVisible();
      const second = await page.locator("p").getByText("Number 2 Snackbar");
      await expect(second).toBeVisible();
      await page.waitForTimeout(5000);
      await expect(second).not.toBeVisible();
      const third = await page.locator("p").getByText("Number 3 Snackbar");
      await expect(third).toBeVisible();
      await page.waitForTimeout(5000);
      await expect(third).not.toBeVisible();
    });

    test("SnackbarQueue: click on close should open next snackbar in a queue", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Queue Snackbar" }).click();
      await page.getByRole("button", { name: "Queue Snackbar" }).dblclick();
      await page.waitForTimeout(100);
      const first = await page.locator("p").getByText("Number 1 Snackbar");
      await expect(first).toBeVisible();
      await page.getByLabel("Close").click();
      await expect(first).not.toBeVisible();
      const second = await page.locator("p").getByText("Number 2 Snackbar");
      await expect(second).toBeVisible();
      await page.getByLabel("Close").click();
      await expect(second).not.toBeVisible();
      const third = await page.locator("p").getByText("Number 3 Snackbar");
      await expect(third).toBeVisible();
      await page.getByLabel("Close").click();
      await expect(third).not.toBeVisible();
    });
  });
});

test.describe("Snackbar in Dark Theme", () => {
  test.describe("Default tests", () => {
    test("Default: should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "Default" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Default.png`);
    });
  });

  test.describe("Positions tests", () => {
    test("Positions: top-left - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "Top left" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Positions-top-left.png`,
      );
    });

    test("Positions: top-center - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "Top center" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Positions-top-center.png`,
      );
    });

    test("Positions: top-right - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "Top right" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Positions-top-right.png`,
      );
    });

    test("Positions: bottom-left - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "Bottom left" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Positions-bottom-left.png`,
      );
    });

    test("Positions: bottom-center - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "Bottom center" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Positions-bottom-center.png`,
      );
    });

    test("Positions: bottom-right - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "Bottom right" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Positions-bottom-right.png`,
      );
    });
  });

  test.describe("Options tests", () => {
    test("Options: multiline - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page
        .getByRole("button", { name: "Multi Line", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Options-multiline.png`,
      );
    });

    test("Options: header - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "With Header" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Options-header.png`,
      );
    });

    test("Options: close - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page
        .getByRole("button", { name: "With Close", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Options-close.png`,
      );
    });

    test("Options: icon - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page
        .getByRole("button", { name: "With Icon", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Options-icon.png`,
      );
    });

    test("Options: multiline with icon - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "Multi Line with Icon" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Options-multiline-icon.png`,
      );
    });

    test("Options: close and icon- should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "With Close and Icon" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Options-close.png`,
      );
    });
  });

  test.describe("SemanticTypes tests", () => {
    test("SemanticTypes: success - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "Success" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-SemanticTypes-success.png`,
      );
    });

    test("SemanticTypes: warning - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "Warning" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-SemanticTypes-warning.png`,
      );
    });

    test("SemanticTypes: error - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "Error" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-SemanticTypes-error.png`,
      );
    });
  });
});

test.describe("Snackbar in RTL", () => {
  test.describe("Default tests", () => {
    test("Default: should open snackbar and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByRole("button", { name: "Default" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Default.png`);
    });
  });

  test.describe("Positions tests", () => {
    test("Positions: top-left - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByRole("button", { name: "Top left" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Positions-top-left.png`,
      );
    });

    test("Positions: top-center - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByRole("button", { name: "Top center" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Positions-top-center.png`,
      );
    });

    test("Positions: top-right - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByRole("button", { name: "Top right" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Positions-top-right.png`,
      );
    });

    test("Positions: bottom-left - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByRole("button", { name: "Bottom left" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Positions-bottom-left.png`,
      );
    });

    test("Positions: bottom-center - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByRole("button", { name: "Bottom center" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Positions-bottom-center.png`,
      );
    });

    test("Positions: bottom-right - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByRole("button", { name: "Bottom right" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Positions-bottom-right.png`,
      );
    });
  });

  test.describe("Options tests", () => {
    test("Options: multiline - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page
        .getByRole("button", { name: "Multi Line", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Options-multiline.png`,
      );
    });

    test("Options: header - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByRole("button", { name: "With Header" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Options-header.png`,
      );
    });

    test("Options: close - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page
        .getByRole("button", { name: "With Close", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Options-close.png`,
      );
    });

    test("Options: icon - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page
        .getByRole("button", { name: "With Icon", exact: true })
        .click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Options-icon.png`,
      );
    });

    test("Options: multiline with icon - should open snackbar and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByRole("button", { name: "Multi Line with Icon" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Options-multiline-icon.png`,
      );
    });

    test("Options: close and icon- should open snackbar and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByRole("button", { name: "With Close and Icon" }).click();
      await page.waitForTimeout(100);
      const snackbar = await page.locator('li[data-state="open"]');
      await expect(snackbar).toBeVisible();
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Options-close-icon.png`,
      );
    });
  });
});
