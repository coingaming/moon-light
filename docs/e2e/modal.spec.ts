import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "modal";

setupTest(COMPONENT_NAME);

test.describe(`${COMPONENT_NAME} in Light Theme`, () => {
  test.describe("Default tests", () => {
    test("Default: should open and match screenshot", async ({ page }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
    });

    test("Default: click outside modal should close it", async ({ page }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.mouse.click(0, 0);
      await expect(modal).not.toBeAttached();
    });

    test("Default: click inside modal should not close it", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByText("Your payment has been").click();
      await expect(modal).toBeAttached();
    });

    test("Default: click on button should close modal", async ({ page }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByRole("button", { name: "Got it, thanks!" }).click();
      await expect(modal).not.toBeAttached();
    });

    test("Default: enter press should open modal", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        await page.getByRole("button", { name: "Open modal" }).press("Enter");
        const modal = await page.getByRole("dialog");
        await expect(modal).toBeAttached();
      }
    });

    test("Default: enter press on button should close modal", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        await page.getByRole("button", { name: "Open modal" }).press("Enter");
        const modal = await page.getByRole("dialog");
        await expect(modal).toBeAttached();
        await page
          .getByRole("button", { name: "Got it, thanks!" })
          .press("Enter");
        await expect(modal).not.toBeAttached();
      }
    });
  });

  test.describe("WithBigContent tests", () => {
    test("WithBigContent: should open and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-WithBigContent.png`,
      );
    });

    test("WithBigContent: click outside modal should close it", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.mouse.click(0, 0);
      await expect(modal).not.toBeAttached();
    });

    test("WithBigContent: click inside modal should not close it", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByText("Lorem ipsum dolor").click();
      await expect(modal).toBeAttached();
    });

    test("WithBigContent: click on button should close modal", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByRole("button", { name: "Got it, thanks!" }).click();
      await expect(modal).not.toBeAttached();
    });

    test("WithBigContent: enter press should open modal", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        await page.getByRole("button", { name: "Open modal" }).press("Enter");
        const modal = await page.getByRole("dialog");
        await expect(modal).toBeAttached();
      }
    });

    test("WithBigContent: enter press on button should close modal", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        await page.getByRole("button", { name: "Open modal" }).press("Enter");
        const modal = await page.getByRole("dialog");
        await expect(modal).toBeAttached();
        await page
          .getByRole("button", { name: "Got it, thanks!" })
          .press("Enter");
        await expect(modal).not.toBeAttached();
      }
    });
  });

  test.describe("WithStyledContent tests", () => {
    test("WithStyledContent: should render and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-WithStyledContent.png`,
      );
    });

    test("WithStyledContent: click outside modal should close it", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.mouse.click(0, 0);
      await expect(modal).not.toBeAttached();
    });

    test("WithStyledContent: click inside modal should not close it", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page
        .getByText("Your payment has been successfully submitted.")
        .click();
      await expect(modal).toBeAttached();
    });

    test("WithStyledContent: click on button should close modal", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByRole("button", { name: "Got it, thanks!" }).click();
      await expect(modal).not.toBeAttached();
    });

    test("WithStyledContent: click on close button should close modal", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByLabel("IconButton").click();
      await expect(modal).not.toBeAttached();
    });

    test("WithStyledContent: enter press should open modal", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        await page.getByRole("button", { name: "Open modal" }).press("Enter");
        const modal = await page.getByRole("dialog");
        await expect(modal).toBeAttached();
      }
    });

    test("WithStyledContent: enter press on button should close modal", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        await page.getByRole("button", { name: "Open modal" }).press("Enter");
        const modal = await page.getByRole("dialog");
        await expect(modal).toBeAttached();
        await page
          .getByRole("button", { name: "Got it, thanks!" })
          .press("Enter");
        await expect(modal).not.toBeAttached();
      }
    });

    test("WithStyledContent: enter press on close button should close modal", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        await page.getByRole("button", { name: "Open modal" }).press("Enter");
        const modal = await page.getByRole("dialog");
        await expect(modal).toBeAttached();
        await page.getByLabel("IconButton").press("Enter");
        await expect(modal).not.toBeAttached();
      }
    });
  });

  test.describe("WithSelect tests", () => {
    test("WithSelect: should open and match screenshot", async ({ page }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithSelect.png`);
    });

    test("WithSelect: should open select and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByLabel("Choose size...").click();
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-WithSelect-open.png`,
      );
    });

    test("WithSelect: hover on option should match style", async ({ page }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByLabel("Choose size...").click();
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeAttached();
      const option = await page.getByRole("button", { name: "Small" });
      await option.hover();
      await expect(option).toHaveClass(/hover:bg-heles/);
    });

    test("WithSelect: should select and match screenshot", async ({ page }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByLabel("Choose size...").click();
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeAttached();
      await page.getByRole("button", { name: "Small" }).click();
      await expect(dropdown).not.toBeAttached();
      const selected = await page.getByLabel("Small");
      await expect(selected).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-WithSelect-selected.png`,
      );
    });

    test("WithSelect: selected option should match style", async ({ page }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByLabel("Choose size...").click();
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeAttached();
      await page.getByRole("button", { name: "Small" }).click();
      await page.getByLabel("Small").click();
      const selected = await page.getByRole("button", {
        name: "Small",
        exact: true,
      });
      await expect(selected).toHaveClass(/bg-heles/);
    });

    test("WithSelect: one click outside modal should close dropdown", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByLabel("Choose size...").click();
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeAttached();
      await page.mouse.click(0, 0);
      await expect(dropdown).not.toBeAttached();
      await expect(modal).toBeAttached();
    });

    test("WithSelect: double click outside modal should close dropdown and modal", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByLabel("Choose size...").click();
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeAttached();
      await page.mouse.click(0, 0);
      await expect(dropdown).not.toBeAttached();
      await expect(modal).toBeAttached();
      await page.mouse.click(0, 0);
      await expect(modal).not.toBeAttached();
    });

    test("WithSelect: should open 2nd select", async ({ page }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByLabel("Choose color...").click();
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeAttached();
    });

    test("WithSelect: should select 2nd", async ({ page }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByLabel("Choose color...").click();
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeAttached();
      await page.getByRole("button", { name: "Red" }).click();
      await expect(dropdown).not.toBeAttached();
      const selected = await page.getByLabel("Red");
      await expect(selected).toBeVisible();
    });

    test("WithSelect: should open 3rd select", async ({ page }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByLabel("Choose material...").click();
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeAttached();
    });

    test("WithSelect: should select 3rd", async ({ page }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByLabel("Choose material...").click();
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeAttached();
      await page.getByRole("button", { name: "Leather" }).click();
      await expect(dropdown).not.toBeAttached();
      const selected = await page.getByLabel("Leather");
      await expect(selected).toBeVisible();
    });

    test("WithSelect: click outside modal should close it", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.mouse.click(0, 0);
      await expect(modal).not.toBeAttached();
    });

    test("WithSelect: click inside modal should not close it", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByRole("heading", { name: "Modal title" }).click();
      await expect(modal).toBeAttached();
    });

    test("WithSelect: click on `cancel` button should close modal", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByRole("button", { name: "Cancel" }).click();
      await expect(modal).not.toBeAttached();
    });

    test("WithSelect: click on `create` button should close modal", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByRole("button", { name: "Create" }).click();
      await expect(modal).not.toBeAttached();
    });

    test("WithSelect: click on close button should close modal", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Open modal" }).click();
      const modal = await page.getByRole("dialog");
      await expect(modal).toBeAttached();
      await page.getByLabel("IconButton").click();
      await expect(modal).not.toBeAttached();
    });

    test("WithSelect: enter press should open modal", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        await page.getByRole("button", { name: "Open modal" }).press("Enter");
        const modal = await page.getByRole("dialog");
        await expect(modal).toBeAttached();
      }
    });

    test("WithSelect: enter press on `cancel` button should close modal", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        await page.getByRole("button", { name: "Open modal" }).press("Enter");
        const modal = await page.getByRole("dialog");
        await expect(modal).toBeAttached();
        await page.getByRole("button", { name: "Cancel" }).press("Enter");
        await expect(modal).not.toBeAttached();
      }
    });

    test("WithSelect: enter press on `create` button should close modal", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        await page.getByRole("button", { name: "Open modal" }).press("Enter");
        const modal = await page.getByRole("dialog");
        await expect(modal).toBeAttached();
        await page.getByRole("button", { name: "Create" }).press("Enter");
        await expect(modal).not.toBeAttached();
      }
    });

    test("WithStyledContent: enter press on close button should close modal", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        await page.getByRole("button", { name: "Open modal" }).press("Enter");
        const modal = await page.getByRole("dialog");
        await expect(modal).toBeAttached();
        await page.getByLabel("IconButton").press("Enter");
        await expect(modal).not.toBeAttached();
      }
    });
  });
});

test.describe(`${COMPONENT_NAME} in Dark Theme`, () => {
  test.beforeEach(async ({ page }) => {
    await setDarkTheme(page);
  });
  test("Default: should open and match screenshot", async ({ page }) => {
    await page.getByRole("button", { name: "Open modal" }).click();
    const modal = await page.getByRole("dialog");
    await expect(modal).toBeAttached();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Default.png`);
  });

  test("WithBigContent: should open and match screenshot", async ({ page }) => {
    await page.getByRole("button", { name: "Open modal" }).click();
    const modal = await page.getByRole("dialog");
    await expect(modal).toBeAttached();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-WithBigContent.png`,
    );
  });

  test("WithStyledContent: should open and match screenshot", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Open modal" }).click();
    const modal = await page.getByRole("dialog");
    await expect(modal).toBeAttached();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-WithStyledContent.png`,
    );
  });

  test("WithSelect: should open and match screenshot", async ({ page }) => {
    await page.getByRole("button", { name: "Open modal" }).click();
    const modal = await page.getByRole("dialog");
    await expect(modal).toBeAttached();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-WithSelect.png`,
    );
  });

  test("WithSelect: should open select and match screenshot", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Open modal" }).click();
    const modal = await page.getByRole("dialog");
    await expect(modal).toBeAttached();
    await page.getByLabel("Choose size...").click();
    const dropdown = page.locator('ul[role="listbox"]');
    await page.mouse.move(0, 0);
    await expect(dropdown).toBeAttached();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-WithSelect-open.png`,
    );
  });

  test("WithSelect: should select and match screenshot", async ({ page }) => {
    await page.getByRole("button", { name: "Open modal" }).click();
    const modal = await page.getByRole("dialog");
    await expect(modal).toBeAttached();
    await page.getByLabel("Choose size...").click();
    const dropdown = page.locator('ul[role="listbox"]');
    await page.mouse.move(0, 0);
    await expect(dropdown).toBeAttached();
    await page.getByRole("button", { name: "Small" }).click();
    await expect(dropdown).not.toBeAttached();
    const selected = await page.getByLabel("Small");
    await expect(selected).toBeVisible();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-WithSelect-selected.png`,
    );
  });
});

test.describe(`${COMPONENT_NAME} in RTL`, () => {
  test.beforeEach(async ({ page }) => {
    await setRtl(page);
  });
  test("Default: should open and match screenshot", async ({ page }) => {
    await page.getByRole("button", { name: "Open modal" }).click();
    const modal = await page.getByRole("dialog");
    await expect(modal).toBeAttached();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Default.png`);
  });

  test("WithBigContent: should open and match screenshot", async ({ page }) => {
    await page.getByRole("button", { name: "Open modal" }).click();
    const modal = await page.getByRole("dialog");
    await expect(modal).toBeAttached();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-rtl-WithBigContent.png`,
    );
  });

  test("WithStyledContent: should open and match screenshot", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Open modal" }).click();
    const modal = await page.getByRole("dialog");
    await expect(modal).toBeAttached();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-rtl-WithStyledContent.png`,
    );
  });

  test("WithSelect: should open and match screenshot", async ({ page }) => {
    await page.getByRole("button", { name: "Open modal" }).click();
    const modal = await page.getByRole("dialog");
    await expect(modal).toBeAttached();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-WithSelect.png`);
  });

  test("WithSelect: should open select and match screenshot", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Open modal" }).click();
    const modal = await page.getByRole("dialog");
    await expect(modal).toBeAttached();
    await page.getByLabel("Choose size...").click();
    const dropdown = page.locator('ul[role="listbox"]');
    await page.mouse.move(0, 0);
    await expect(dropdown).toBeAttached();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-rtl-WithSelect-open.png`,
    );
  });

  test("WithSelect: should select and match screenshot", async ({ page }) => {
    await page.getByRole("button", { name: "Open modal" }).click();
    const modal = await page.getByRole("dialog");
    await expect(modal).toBeAttached();
    await page.getByLabel("Choose size...").click();
    const dropdown = page.locator('ul[role="listbox"]');
    await page.mouse.move(0, 0);
    await expect(dropdown).toBeAttached();
    await page.getByRole("button", { name: "Small" }).click();
    await expect(dropdown).not.toBeAttached();
    const selected = await page.getByLabel("Small");
    await expect(selected).toBeVisible();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-rtl-WithSelect-selected.png`,
    );
  });
});
