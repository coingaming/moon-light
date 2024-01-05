import { test, expect } from "@playwright/test";
import {
  PLAYWRIGHT_DEFAULT_TIMEOUT,
  PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
} from "@/constants";

const COMPONENT_NAME = "dropdown";

test.beforeEach(async ({ page }, testInfo) => {
  const example = testInfo.title?.split(":")?.[0] ?? "Default";
  await page.goto(`/client/dropdown/${example}`);
  await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);
});

test.afterEach(async ({ page }) => {
  // Cleanup from route
  await page.close();
});

test.describe("Dropdown in Light Theme", () => {
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`, {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
      });
    });

    test("Default: hover on dropdown trigger should match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Choose a name..." })
        .hover({ force: true });
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("Default: should open default dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-open.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("Default: click outside should close default dropdown", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      await page.mouse.click(10, 10);
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
    });

    test("Default: dropdown option hover should match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page.getByRole("button", { name: "Wade Cooper" });
      await option.hover({ force: true });
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-option-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("Default: should select option, close dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page.getByRole("button", { name: "Wade Cooper" });
      await option.click({ force: true });
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-option-selected.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("Default: hover on selected option as trigger should match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page
        .getByRole("button", { name: "Wade Cooper" })
        .click();
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      const selectedOption = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await selectedOption.hover({ force: true });
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-selected-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("Default: selected option should be active and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page
        .getByRole("button", { name: "Wade Cooper" })
        .click();
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      const selectedOption = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await selectedOption.click();
      const selectedDropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(selectedDropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-selected-dropdown.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });
    test("Default: hover on other option should match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page
        .getByRole("button", { name: "Wade Cooper" })
        .click();
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      const selectedOption = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await selectedOption.click();
      const selectedDropdown = page.locator('ul[role="listbox"]');
      await expect(selectedDropdown).toBeVisible();
      const otherOption = await page.getByRole("button", {
        name: "Arlene Mccoy",
      });
      await otherOption.hover({ force: true });
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-selected-dropdown-other-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test.describe("Keyboards tests", () => {
      test("Default: enter press should open default dropdown", async ({
        page,
      }) => {
        await page
          .getByRole("button", { name: "Choose a name..." })
          .press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
      });

      test("Default: double enter press should close default dropdown", async ({
        page,
      }) => {
        await page
          .getByRole("button", { name: "Choose a name..." })
          .press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.keyboard.press("Enter");
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("Default: arrow down press should make option active", async ({
        page,
      }) => {
        await page.getByRole("button", { name: "Choose a name..." }).focus();
        await page.keyboard.press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByLabel("Choose a name...").press("ArrowDown");

        const option = await page.getByRole("button", { name: "Wade Cooper" });
        await expect((await option.getAttribute("class"))?.split(" ")).toEqual(
          expect.arrayContaining(["bg-heles"]),
        );
      });

      test("Default: enter press should select option and close dropdown", async ({
        page,
      }) => {
        await page.getByRole("button", { name: "Choose a name..." }).focus();
        await page.keyboard.press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByLabel("Choose a name...").press("ArrowDown");
        await page.getByRole("button", { name: "Wade Cooper" }).press("Enter");
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        const selectedOption = await page.getByRole("button", {
          name: "Wade Cooper",
        });
        await expect(selectedOption).toBeVisible();
      });
    });
  });

  test.describe("TriggerElements tests", () => {
    test("TriggerElements: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("TriggerElements: hover on 1st trigger should match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Dropdown trigger").hover({ force: true });
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements-hover-1.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("TriggerElements: should open 1st dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements-open-1.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("TriggerElements: click outside should close 1st dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      await page.mouse.click(10, 10);
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
    });

    test("TriggerElements: 1st dropdown option hover should match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page.getByRole("button", { name: "Wade Cooper" });
      await option.hover({ force: true });
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements-option-hover-1.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("TriggerElements: should select option, close 1st dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page.getByRole("button", { name: "Wade Cooper" });
      await option.click({ force: true });
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements-option-selected-1.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("TriggerElements: 1st dropdown selected option should be active and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page
        .getByRole("button", { name: "Wade Cooper" })
        .click();
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const selectedDropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(selectedDropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements-selected-dropdown-1.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("TriggerElements: 1st dropdown hover on other option should match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page
        .getByRole("button", { name: "Wade Cooper" })
        .click();
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      await page.getByLabel("Dropdown trigger").click();
      const selectedDropdown = page.locator('ul[role="listbox"]');
      await expect(selectedDropdown).toBeVisible();
      const otherOption = await page.getByRole("button", {
        name: "Arlene Mccoy",
      });
      await otherOption.hover({ force: true });
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements-selected-dropdown-other-hover-1.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });
  });
});

test.describe("Dropdown in Dark Theme", () => {
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      // setDarkTheme(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Default.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("Default: hover on dropdown trigger should match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Choose a name..." })
        .hover({ force: true });
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("Default: should open default dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-open.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("Default: click outside should close default dropdown", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      await page.mouse.click(10, 10);
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
    });

    test("Default: dropdown option hover should match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page.getByRole("button", { name: "Wade Cooper" });
      await option.hover({ force: true });
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-option-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("Default: should select option, close dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page.getByRole("button", { name: "Wade Cooper" });
      await option.click({ force: true });
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-option-selected.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("Default: hover on selected option as trigger should match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page
        .getByRole("button", { name: "Wade Cooper" })
        .click();
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      const selectedOption = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await selectedOption.hover({ force: true });
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-selected-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("Default: selected option should be active and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page
        .getByRole("button", { name: "Wade Cooper" })
        .click();
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      const selectedOption = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await selectedOption.click();
      const selectedDropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(selectedDropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-selected-dropdown.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });
    test("Default: hover on other option should match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page
        .getByRole("button", { name: "Wade Cooper" })
        .click();
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      const selectedOption = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await selectedOption.click();
      const selectedDropdown = page.locator('ul[role="listbox"]');
      await expect(selectedDropdown).toBeVisible();
      const otherOption = await page.getByRole("button", {
        name: "Arlene Mccoy",
      });
      await otherOption.hover({ force: true });
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-selected-dropdown-other-hover.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test.describe("Keyboards tests", () => {
      test("Default: enter press should open default dropdown", async ({
        page,
      }) => {
        await page
          .getByRole("button", { name: "Choose a name..." })
          .press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
      });

      test("Default: double enter press should close default dropdown", async ({
        page,
      }) => {
        await page
          .getByRole("button", { name: "Choose a name..." })
          .press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.keyboard.press("Enter");
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("Default: arrow down press should make option active", async ({
        page,
      }) => {
        await page.getByRole("button", { name: "Choose a name..." }).focus();
        await page.keyboard.press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByLabel("Choose a name...").press("ArrowDown");

        const option = await page.getByRole("button", { name: "Wade Cooper" });
        await expect((await option.getAttribute("class"))?.split(" ")).toEqual(
          expect.arrayContaining(["bg-heles"]),
        );
      });

      test("Default: enter press should select option and close dropdown", async ({
        page,
      }) => {
        await page.getByRole("button", { name: "Choose a name..." }).focus();
        await page.keyboard.press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByLabel("Choose a name...").press("ArrowDown");
        await page.getByRole("button", { name: "Wade Cooper" }).press("Enter");
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        const selectedOption = await page.getByRole("button", {
          name: "Wade Cooper",
        });
        await expect(selectedOption).toBeVisible();
      });
    });
  });

  test.describe("TriggerElements tests", () => {
    test("TriggerElements: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("TriggerElements: hover on 1st trigger should match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Dropdown trigger").hover({ force: true });
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements-hover-1.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("TriggerElements: should open 1st dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements-open-1.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("TriggerElements: click outside should close 1st dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      await page.mouse.click(10, 10);
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
    });

    test("TriggerElements: 1st dropdown option hover should match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page.getByRole("button", { name: "Wade Cooper" });
      await option.hover({ force: true });
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements-option-hover-1.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("TriggerElements: should select option, close 1st dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page.getByRole("button", { name: "Wade Cooper" });
      await option.click({ force: true });
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements-option-selected-1.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("TriggerElements: 1st dropdown selected option should be active and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page
        .getByRole("button", { name: "Wade Cooper" })
        .click();
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const selectedDropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(selectedDropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements-selected-dropdown-1.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });

    test("TriggerElements: 1st dropdown hover on other option should match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page
        .getByRole("button", { name: "Wade Cooper" })
        .click();
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      await page.getByLabel("Dropdown trigger").click();
      const selectedDropdown = page.locator('ul[role="listbox"]');
      await expect(selectedDropdown).toBeVisible();
      const otherOption = await page.getByRole("button", {
        name: "Arlene Mccoy",
      });
      await otherOption.hover({ force: true });
      await page.waitForTimeout(250);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TriggerElements-selected-dropdown-other-hover-1.png`,
        {
          maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
        },
      );
    });
  });
});

test.describe("RTL tests", () => {
  test("Default: component support for RTL - should render and match screenshot", async ({
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
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Default.png`, {
      maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
    });
  });

  test("Default: component support for RTL - should open default dropdown and match screenshot", async ({
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
    await page.getByRole("button", { name: "Choose a name..." }).click();
    await page.waitForTimeout(100);
    const dropdown = page.locator('ul[role="listbox"]');
    await page.mouse.move(0, 0);
    await expect(dropdown).toBeVisible();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-rtl-Default-open.png`,
      {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
      },
    );
  });

  test("TriggerElements: component support for RTL - should render and match screenshot", async ({
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
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-rtl-TriggerElements.png`,
      {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
      },
    );
  });

  test("TriggerElements: component support for RTL - should open 1st dropdown and match screenshot", async ({
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
    await page.getByLabel("Dropdown trigger").click();
    await page.waitForTimeout(100);
    const dropdown = page.locator('ul[role="listbox"]');
    await page.mouse.move(0, 0);
    await expect(dropdown).toBeVisible();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-rtl-TriggerElements-open-1.png`,
      {
        maxDiffPixelRatio: PLAYWRIGHT_MAX_DIFF_PIXEL_RATIO,
      },
    );
  });
});
