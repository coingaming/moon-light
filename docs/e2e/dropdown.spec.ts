import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "dropdown";

setupTest(COMPONENT_NAME);

test.describe("Dropdown in Light Theme", () => {
  test.describe("Default tests", () => {
    test.describe("Mouse tests", () => {
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

      test("Default: dropdown option hover should have background `bg-heles`", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByRole("button", { name: "Choose a name..." }).click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("Default: should select option and close dropdown", async ({
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
        const selected = await page.getByRole("button", {
          name: "Wade Cooper",
        });
        await expect(selected).toBeVisible();
      });

      test("Default: selected option should be active and match screenshot", async ({
        page,
      }) => {
        await page.getByRole("button", { name: "Choose a name..." }).click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByRole("button", { name: "Wade Cooper" }).click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        const selectedOption = await page.getByRole("button", {
          name: "Wade Cooper",
        });
        await selectedOption.click();
        const selectedDropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(selectedDropdown).toBeVisible();
        const option = await page
          .getByLabel("Wade Cooper")
          .getByRole("button", { name: "Wade Cooper" });
        await expect(option).toHaveClass(/bg-heles/);
      });
    });

    test.describe("Keyboards tests", () => {
      test("Default: enter press should open default dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Choose a name..." })
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("Default: double enter press should close default dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Choose a name..." })
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("Default: arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByRole("button", { name: "Choose a name..." }).focus();
          await page.keyboard.press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.getByLabel("Choose a name...").press("ArrowDown");
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("Default: enter press should select option and close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByRole("button", { name: "Choose a name..." }).focus();
          await page.keyboard.press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.getByLabel("Choose a name...").press("ArrowDown");
          await page
            .getByRole("button", { name: "Wade Cooper" })
            .press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
          const selectedOption = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await expect(selectedOption).toBeVisible();
        }
      });
    });
  });

  test.describe("TriggerElements tests", () => {
    test.describe("Mouse tests", () => {
      test("TriggerElements: first dropdown - should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Dropdown trigger").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-TriggerElements-open-1.png`,
        );
      });

      test("TriggerElements: first dropdown - click outside should close dropdown", async ({
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

      test("TriggerElements: first dropdown - should select option and close dropdown", async ({
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
      });

      test("TriggerElements: first dropdown - selected option should be active", async ({
        page,
      }) => {
        await page.getByLabel("Dropdown trigger").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByRole("button", { name: "Wade Cooper" }).click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        await page.getByLabel("Dropdown trigger").click();
        await page.waitForTimeout(100);
        const selectedDropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(selectedDropdown).toBeVisible();
        const activeOption = await page.getByRole("button", {
          name: "Wade Cooper",
        });
        await expect(activeOption).toHaveClass(/bg-heles/);
      });

      test("TriggerElements: second dropdown - should open dropdown and match screenshot", async ({
        page,
      }) => {
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(0);
        await trigger.click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-TriggerElements-open-2.png`,
        );
      });

      test("TriggerElements: second dropdown - click outside should close dropdown", async ({
        page,
      }) => {
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(0);
        await trigger.click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("TriggerElements: second dropdown - should select option and close dropdown", async ({
        page,
      }) => {
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(0);
        await trigger.click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        const option = await page.getByRole("button", { name: "Wade Cooper" });
        await option.click({ force: true });
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("TriggerElements: second dropdown -  selected option should be active", async ({
        page,
      }) => {
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(0);
        await trigger.click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByRole("button", { name: "Wade Cooper" }).click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        const triggerSecond = await page
          .getByRole("button", { name: "Select name" })
          .nth(0);
        await triggerSecond.click();
        await page.waitForTimeout(100);
        const selectedDropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(selectedDropdown).toBeVisible();
        const activeOption = await page.getByRole("button", {
          name: "Wade Cooper",
        });
        await expect(activeOption).toHaveClass(/bg-heles/);
      });
    });

    test.describe("Keyboards tests", () => {
      test("TriggerElements: first dropdown - enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Dropdown trigger").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("TriggerElements: first dropdown - double enter press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Dropdown trigger").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("TriggerElements: first dropdown - arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Dropdown trigger").focus();
          await page.keyboard.press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.getByLabel("Dropdown trigger").press("ArrowDown");
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("TriggerElements: first dropdown - enter press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Dropdown trigger").focus();
          await page.keyboard.press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.getByLabel("Dropdown trigger").press("ArrowDown");
          await page
            .getByRole("button", { name: "Wade Cooper" })
            .press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("TriggerElements: second dropdown - enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          const trigger = await page
            .getByRole("button", { name: "Select name" })
            .nth(0);
          await trigger.press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("TriggerElements: second dropdown - double enter press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          const trigger = await page
            .getByRole("button", { name: "Select name" })
            .nth(0);
          await trigger.press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("TriggerElements: second dropdown -  arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          const trigger = await page
            .getByRole("button", { name: "Select name" })
            .nth(0);
          await trigger.focus();
          await page.keyboard.press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.getByLabel("Dropdown trigger").press("ArrowDown");
          const option = await page
            .getByRole("button", { name: "Wade Cooper" })
            .nth(1);
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("TriggerElements: second dropdown - enter press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          const trigger = await page
            .getByRole("button", { name: "Select name" })
            .nth(0);
          await trigger.press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("ArrowDown");
          await page.keyboard.press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });
    });
  });

  test.describe("OptionsVariants tests", () => {
    test.describe("Mouse tests", () => {
      test("OptionsVariants: first dropdown - should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByText("Sort by").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-OptionsVariants-open.png`,
        );
      });

      test("OptionsVariants: first dropdown - click outside should close dropdown", async ({
        page,
      }) => {
        await page.getByText("Sort by").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("OptionsVariants: first dropdown - dropdown option hover should have background `bg-heles", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByText("Sort by").click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Option 1",
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("OptionsVariants: first dropdown - should select option and close dropdown", async ({
        page,
      }) => {
        await page.getByText("Sort by").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        const option = await page.getByRole("button", {
          name: "Option 1",
        });
        await option.click({ force: true });
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("OptionsVariants: first dropdown - selected option should be active and match screenshot", async ({
        page,
      }) => {
        await page.getByText("Sort by").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByRole("button", { name: "Option 1" }).click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        await page.getByText("Sort by").click();
        const selectedDropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(selectedDropdown).toBeVisible();
        const option = await page.getByRole("button", { name: "Option 1" });
        await expect(option).toHaveClass(/bg-heles/);
      });

      test("OptionsVariants: second dropdown - should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByText("Select language").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-OptionsVariants-open-2.png`,
        );
      });

      test("OptionsVariants: second dropdown - click outside should close dropdown", async ({
        page,
      }) => {
        await page.getByText("Select language").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("OptionsVariants: second dropdown - dropdown option hover should have background `bg-heles", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByText("Select language").click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Spanish",
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("OptionsVariants: second dropdown - should select option and close dropdown", async ({
        page,
      }) => {
        await page.getByText("Select language").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByTestId("test-1").click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        await page.getByText("Select language").click();
        const selectedDropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(selectedDropdown).toBeVisible();
        const element = await page.waitForSelector(`[aria-selected="true"]`);
        await expect(await element.textContent()).toBe("Spanish");
        const option = await page.getByTestId("test-1");
        await expect(option).toHaveClass(/bg-heles/);
      });

      test("OptionsVariants: third dropdown - should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByText("Select countries").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-OptionsVariants-open-3.png`,
        );
      });

      test("OptionsVariants: third dropdown - click outside should close dropdown", async ({
        page,
      }) => {
        await page.getByText("Select countries").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("OptionsVariants: third dropdown - dropdown option hover should have background `bg-heles", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByText("Select countries").click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Canada",
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("OptionsVariants: third dropdown - should allow to select multiple options and not close dropdown", async ({
        page,
      }) => {
        await page.getByText("Select countries").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page
          .getByRole("button", { name: "Australia Checkbox" })
          .getByLabel("Checkbox")
          .uncheck();
        await expect(
          page
            .getByRole("button", { name: "Australia Checkbox" })
            .getByLabel("Checkbox"),
        ).not.toBeChecked();
        await page
          .getByRole("button", { name: "Canada Checkbox" })
          .getByLabel("Checkbox")
          .check();
        await expect(
          page
            .getByRole("button", { name: "Canada Checkbox" })
            .getByLabel("Checkbox"),
        ).toBeChecked();
        await page
          .getByRole("button", { name: "China Checkbox" })
          .getByLabel("Checkbox")
          .check();
        await expect(
          page
            .getByRole("button", { name: "China Checkbox" })
            .getByLabel("Checkbox"),
        ).toBeChecked();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).toBeVisible();
      });
    });

    test.describe("Keyboards tests", () => {
      test("OptionsVariants: first dropdown - enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Sort by" })
            .nth(0)
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await page.waitForTimeout(100);
          await expect(dropdown).toBeVisible();
        }
      });

      test("OptionsVariants: first dropdown - double enter press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Sort by" })
            .nth(0)
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("OptionsVariants: first dropdown - arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Sort by" })
            .nth(0)
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.getByText("Sort by").press("ArrowDown");
          const option = await page.getByRole("button", { name: "Option 1" });
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("OptionsVariants: first dropdown - enter press should select option and close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Sort by" })
            .nth(0)
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.getByText("Sort by").press("ArrowDown");
          await page.getByRole("button", { name: "Option 1" }).press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("OptionsVariants: second dropdown - enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Select language" })
            .nth(0)
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("OptionsVariants: second dropdown - double enter press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Select language" })
            .nth(0)
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("OptionsVariants: second dropdown - arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Select language" })
            .nth(0)
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.getByText("Select language").press("ArrowDown");
          const option = await page.getByRole("button", {
            name: "Mandarin Chinese",
          });
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("OptionsVariants: second dropdown - enter press should select option and close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Select language" })
            .nth(0)
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.getByText("Select language").press("ArrowDown");
          await page
            .getByRole("button", { name: "Mandarin Chinese" })
            .press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("OptionsVariants: third dropdown - enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Select countries" })
            .nth(0)
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("OptionsVariants: third dropdown - escape press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Select countries" })
            .nth(0)
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Escape");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("OptionsVariants: third dropdown - arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Select countries" })
            .nth(0)
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.getByText("Select countries").press("ArrowDown");
          const option = await page.getByRole("button", {
            name: "Australia",
          });
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("OptionsVariants: third dropdown - enter press should unselect first option, select second option and not close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Select countries" })
            .nth(0)
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.getByText("Select countries").press("ArrowDown");
          await page.getByRole("button", { name: "Australia" }).press("Enter");
          await page
            .getByRole("button", { name: "Australia" })
            .press("ArrowDown");
          await page.getByRole("button", { name: "Canada" }).press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).toBeVisible();
          await expect(page).toHaveScreenshot(
            `${COMPONENT_NAME}-OptionsVariants-keyboard-3.png`,
          );
        }
      });
    });
  });

  test.describe("Select tests", () => {
    test.describe("Mouse tests", () => {
      test("Select: should render and match screenshot", async ({ page }) => {
        await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Select.png`);
      });

      test("Select: small - should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Small").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-Select-small-open.png`,
        );
      });

      test("Select: small - should have thicker border on hover", async ({
        page,
      }) => {
        const option = await page.getByLabel("Small");
        await option.hover({ force: true });
        await page.waitForTimeout(250);
        await expect(option).toHaveClass(/hover:shadow-input-hov/);
      });

      test("Select: small - click outside should close default dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Small").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("Select: small - dropdown option hover should have background `bg-heles`", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Small").click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("Select: small - should select option and close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Small").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByTestId("test-0").click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        await page.getByLabel("Small").click();
        await page.waitForTimeout(100);
        const element = await page.waitForSelector(`[aria-selected="true"]`);
        await expect(await element.textContent()).toBe("Wade Cooper");
      });

      test("Select: medium - should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Medium").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-Select-medium-open.png`,
        );
      });

      test("Select: medium - should have thicker border on hover", async ({
        page,
      }) => {
        const option = await page.getByLabel("Medium");
        await option.hover({ force: true });
        await page.waitForTimeout(250);
        await expect(option).toHaveClass(/hover:shadow-input-hov/);
      });

      test("Select: medium - click outside should close default dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Medium").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("Select: medium - dropdown option hover should have background `bg-heles`", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Medium").click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("Select: medium - should select option and close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Medium").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByTestId("test-0").click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        await page.getByLabel("Medium").click();
        await page.waitForTimeout(100);
        const element = await page.waitForSelector(`[aria-selected="true"]`);
        await expect(await element.textContent()).toBe("Wade Cooper");
      });

      test("Select: large - should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Large").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-Select-large-open.png`,
        );
      });

      test("Select: large - should have thicker border on hover", async ({
        page,
      }) => {
        const option = await page.getByLabel("Large");
        await option.hover({ force: true });
        await page.waitForTimeout(250);
        await expect(option).toHaveClass(/hover:shadow-input-hov/);
      });

      test("Select: large - click outside should close default dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Large").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("Select: large - dropdown option hover should have background `bg-heles`", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Large").click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("Select: large - should select option and close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Large").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByTestId("test-0").click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        await page.getByLabel("Large").click();
        await page.waitForTimeout(100);
        const element = await page.waitForSelector(`[aria-selected="true"]`);
        await expect(await element.textContent()).toBe("Wade Cooper");
      });
    });

    test.describe("Keyboards tests", () => {
      test("Select: small dropdown - enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Small").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("Select: small dropdown - double enter press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Small").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("Select: small dropdown - arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Small").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page
            .getByRole("button", { name: "Small Choose an option" })
            .press("ArrowDown");
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("Select: small dropdown - enter press should select option and close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Small").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page
            .getByRole("button", { name: "Small Choose an option" })
            .press("ArrowDown");
          await page.getByTestId("test-0").press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
          await page.getByLabel("Wade Cooper").press("Enter");
          await page.waitForTimeout(100);
          const element = await page.waitForSelector(`[aria-selected="true"]`);
          await expect(await element.textContent()).toBe("Wade Cooper");
        }
      });

      test("Select: medium dropdown - enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Medium").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("Select: medium dropdown - double enter press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Medium").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("Select: medium dropdown - arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Medium").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page
            .getByRole("button", { name: "Medium Choose an option" })
            .press("ArrowDown");
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("Select: medium dropdown - enter press should select option and close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Medium").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = await page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page
            .getByRole("button", { name: "Medium Choose an option" })
            .press("ArrowDown");
          await page
            .getByRole("listbox", { name: "Medium" })
            .getByTestId("test-0")
            .press("Enter");
          const openedDropdown = await page
            .locator('ul[role="listbox"]')
            .nth(1);
          await expect(openedDropdown).not.toBeVisible();
          await page.getByLabel("Medium").press("Enter");
          await page.waitForTimeout(100);
          const element = await page.waitForSelector(`[aria-selected="true"]`);
          await expect(await element.textContent()).toBe("Wade Cooper");
        }
      });

      test("Select: large dropdown - enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Large").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("Select: large dropdown - double enter press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Large").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("Select: large dropdown - arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Large").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page
            .getByRole("button", { name: "Large Choose an option" })
            .press("ArrowDown");
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("Select: large dropdown - enter press should select option and close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Large").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = await page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page
            .getByRole("button", { name: "Large Choose an option" })
            .press("ArrowDown");
          await page
            .getByRole("listbox", { name: "Large" })
            .getByTestId("test-0")
            .press("Enter");
          const openedDropdown = await page
            .locator('ul[role="listbox"]')
            .nth(1);
          await expect(openedDropdown).not.toBeVisible();
          await page.getByLabel("Large").press("Enter");
          await page.waitForTimeout(100);
          const element = await page.waitForSelector(`[aria-selected="true"]`);
          await expect(await element.textContent()).toBe("Wade Cooper");
        }
      });
    });
  });

  test.describe("SelectStates tests", () => {
    test.describe("Mouse tests", () => {
      test("SelectStates: should render and match screenshot", async ({
        page,
      }) => {
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-SelectStates.png`,
        );
      });

      test("SelectStates: error - should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Error").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-SelectStates-error-open.png`,
        );
      });

      test("SelectStates: error - click outside should close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Error").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("SelectStates: error - dropdown option hover should have background `bg-heles`", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Error").click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
            exact: true,
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("SelectStates: error - should select option and close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Error").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByTestId("test-0").click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        await page.getByLabel("Error").click();
        await page.waitForTimeout(100);
        const element = await page.waitForSelector(`[aria-selected="true"]`);
        await expect(await element.textContent()).toBe("Wade Cooper");
      });

      test("SelectStates: disabled - should be disabled", async ({ page }) => {
        const button = await page.getByLabel("Disabled");
        await expect(button).toBeDisabled();
      });
    });

    test.describe("Keyboards tests", () => {
      test("SelectStates: error dropdown - enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Error").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("SelectStates: error dropdown - double enter press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Error").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });
    });
  });

  test.describe("HiddenInput tests", () => {
    test.describe("Mouse tests", () => {
      test("HiddenInput: should render and match screenshot", async ({
        page,
      }) => {
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-HiddenInput.png`,
        );
      });

      test("HiddenInput: should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByRole("button", { name: "With hidden input" }).click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-HiddenInput-open.png`,
        );
      });

      test("HiddenInput: click outside should close default dropdown", async ({
        page,
      }) => {
        await page.getByRole("button", { name: "With hidden input" }).click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("HiddenInput: dropdown option hover should have background `bg-heles`", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByRole("button", { name: "With hidden input" }).click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("HiddenInput: should select option and close dropdown", async ({
        page,
      }) => {
        await page.getByRole("button", { name: "With hidden input" }).click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByTestId("test-0").click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        await page.getByRole("button", { name: "With hidden input" }).click();
        await page.waitForTimeout(100);
        const element = await page.waitForSelector(`[aria-selected="true"]`);
        await expect(await element.textContent()).toBe("Wade Cooper");
        const value = await page.locator("input").getAttribute("value");
        await expect(value).toBe("Wade Cooper");
        const hiddenInput = await page.locator(`input[value="Wade Cooper"]`);
        await expect(hiddenInput).toBeHidden();
      });
    });

    test.describe("Keyboard tests", () => {
      test("HiddenInput: enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "With hidden input" })
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("HiddenInput: double enter press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "With hidden input" })
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("HiddenInput: arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "With hidden input" })
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page
            .getByRole("button", { name: "With hidden input" })
            .press("ArrowDown");
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("HiddenInput: enter press should select option and close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "With hidden input" })
            .press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page
            .getByRole("button", { name: "With hidden input" })
            .press("ArrowDown");
          await page.getByTestId("test-0").press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
          await page.getByLabel("Wade Cooper").press("Enter");
          await page.waitForTimeout(100);
          const element = await page.waitForSelector(`[aria-selected="true"]`);
          await expect(await element.textContent()).toBe("Wade Cooper");
          const value = await page.locator("input").getAttribute("value");
          await expect(value).toBe("Wade Cooper");
          const hiddenInput = await page.locator(`input[value="Wade Cooper"]`);
          await expect(hiddenInput).toBeHidden();
        }
      });
    });
  });

  test.describe("InsetSelect tests", () => {
    test.describe("Mouse tests", () => {
      test("InsetSelect: should render and match screenshot", async ({
        page,
      }) => {
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-InsetSelect.png`,
        );
      });

      test("InsetSelect: should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Select label").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-InsetSelect-open.png`,
        );
      });

      test("InsetSelect: should have thicker border on hover", async ({
        page,
      }) => {
        const option = await page.getByLabel("Select label");
        await option.hover({ force: true });
        await page.waitForTimeout(250);
        await expect(option).toHaveClass(/hover:shadow-input-hov/);
      });

      test("InsetSelect: click outside should close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Select label").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("InsetSelect: dropdown option hover should have background `bg-heles`", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Select label").click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("InsetSelect: should select option and close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Select label").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByTestId("test-0").click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        await page.getByLabel("Select label").click();
        await page.waitForTimeout(100);
        const element = await page.waitForSelector(`[aria-selected="true"]`);
        await expect(await element.textContent()).toBe("Wade Cooper");
      });
    });

    test.describe("Keyboards tests", () => {
      test("InsetSelect: enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Select label").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("InsetSelect: double enter press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Select label").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("InsetSelect: arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Select label").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page
            .getByRole("button", { name: "Select label Choose an option" })
            .press("ArrowDown");
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("InsetSelect: enter press should select option and close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Select label").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page
            .getByRole("button", { name: "Select label Choose an option" })
            .press("ArrowDown");
          await page.getByTestId("test-0").press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
          await page.getByLabel("Wade Cooper").press("Enter");
          await page.waitForTimeout(100);
          const element = await page.waitForSelector(`[aria-selected="true"]`);
          await expect(await element.textContent()).toBe("Wade Cooper");
        }
      });
    });
  });

  test.describe("InsetSelectStates tests", () => {
    test.describe("Mouse tests", () => {
      test("InsetSelectStates: should render and match screenshot", async ({
        page,
      }) => {
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-InsetSelectStates.png`,
        );
      });

      test("InsetSelectStates: error - should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Error").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-InsetSelectStates-error-open.png`,
        );
      });

      test("InsetSelectStates: error - click outside should close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Error").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("InsetSelectStates: error - dropdown option hover should have background `bg-heles`", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Error").click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
            exact: true,
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("InsetSelectStates: error - should select option and close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Error").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByTestId("test-0").click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        await page.getByLabel("Error").click();
        await page.waitForTimeout(100);
        const element = await page.waitForSelector(`[aria-selected="true"]`);
        await expect(await element.textContent()).toBe("Wade Cooper");
      });

      test("InsetSelectStates: disabled - should be disabled", async ({
        page,
      }) => {
        const button = await page.getByLabel("Disabled");
        await expect(button).toBeDisabled();
      });
    });

    test.describe("Keyboards tests", () => {
      test("InsetSelectStates: error dropdown - enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Error").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("InsetSelectStates: error dropdown - double enter press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Error").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });
    });
  });

  test.describe("MultiSelect tests", () => {
    test.describe("Mouse tests", () => {
      test("MultiSelect: should render and match screenshot", async ({
        page,
      }) => {
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-MultiSelect.png`,
        );
      });

      test("MultiSelect: small - should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Small").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-MultiSelect-small-open.png`,
        );
      });

      test("MultiSelect: small - should have thicker border on hover", async ({
        page,
      }) => {
        const option = await page.getByLabel("Small");
        await option.hover({ force: true });
        await page.waitForTimeout(250);
        await expect(option).toHaveClass(/hover:shadow-input-hov/);
      });

      test("MultiSelect: small - click outside should close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Small").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("MultiSelect: small - dropdown option hover should have background `bg-heles`", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Small").click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("MultiSelect: small - should select multiple options and not close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Small").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox")
          .check();
        await expect(
          page
            .getByRole("button", { name: "Wade Cooper Checkbox" })
            .getByLabel("Checkbox"),
        ).toBeChecked();
        await page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox")
          .check();
        await expect(
          page
            .getByRole("button", { name: "Devon Webb Checkbox" })
            .getByLabel("Checkbox"),
        ).toBeChecked();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).toBeVisible();
        await page.mouse.move(0, 0);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-MultiSelect-small-selected.png`,
        );
      });

      test("MultiSelect: medium - should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Medium").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-MultiSelect-medium-open.png`,
        );
      });

      test("MultiSelect: medium - should have thicker border on hover", async ({
        page,
      }) => {
        const option = await page.getByLabel("Medium");
        await option.hover({ force: true });
        await page.waitForTimeout(250);
        await expect(option).toHaveClass(/hover:shadow-input-hov/);
      });

      test("MultiSelect: medium - click outside should close default dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Medium").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("MultiSelect: medium - dropdown option hover should have background `bg-heles`", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Medium").click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("MultiSelect: medium - should select multiple options and not close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Medium").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox")
          .check();
        await expect(
          page
            .getByRole("button", { name: "Wade Cooper Checkbox" })
            .getByLabel("Checkbox"),
        ).toBeChecked();
        await page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox")
          .check();
        await expect(
          page
            .getByRole("button", { name: "Devon Webb Checkbox" })
            .getByLabel("Checkbox"),
        ).toBeChecked();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).toBeVisible();
        await page.mouse.move(0, 0);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-MultiSelect-medium-selected.png`,
        );
      });

      test("MultiSelect: large - should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Large").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-MultiSelect-large-open.png`,
        );
      });

      test("MultiSelect: large - should have thicker border on hover", async ({
        page,
      }) => {
        const option = await page.getByLabel("Large");
        await option.hover({ force: true });
        await page.waitForTimeout(250);
        await expect(option).toHaveClass(/hover:shadow-input-hov/);
      });

      test("MultiSelect: large - click outside should close default dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Large").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("MultiSelect: large - dropdown option hover should have background `bg-heles`", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Large").click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("MultiSelect: large - should select multiple options and not close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("large").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox")
          .check();
        await expect(
          page
            .getByRole("button", { name: "Wade Cooper Checkbox" })
            .getByLabel("Checkbox"),
        ).toBeChecked();
        await page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox")
          .check();
        await expect(
          page
            .getByRole("button", { name: "Devon Webb Checkbox" })
            .getByLabel("Checkbox"),
        ).toBeChecked();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).toBeVisible();
        await page.mouse.move(0, 0);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-MultiSelect-large-selected.png`,
        );
      });
    });

    test.describe("Keyboards tests", () => {
      test("MultiSelect: small dropdown - enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Small").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("MultiSelect: small dropdown - escape should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Small").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Escape");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("MultiSelect: small dropdown - arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Small").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("ArrowDown");
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("MultiSelect: small dropdown - enter press should select options and not close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Small").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("ArrowDown");
          await page.getByTestId("test-0").press("Enter");
          await page.getByTestId("test-2").press("Enter");
          const firstElement = await page.waitForSelector(
            `span[aria-selected="true"] [data-testid="test-0"]`,
          );
          await expect(await firstElement.textContent()).toBe("Wade Cooper");
          const secondElement = await page.waitForSelector(
            `span[aria-selected="true"] [data-testid="test-2"]`,
          );
          await expect(await secondElement.textContent()).toBe("Devon Webb");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).toBeVisible();
        }
      });

      test("MultiSelect: medium dropdown - enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Medium").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("MultiSelect: medium dropdown - escape should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Medium").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Escape");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("MultiSelect: medium dropdown - arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Medium").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("ArrowDown");
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("MultiSelect: medium dropdown - enter press should select options and not close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Medium").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("ArrowDown");
          await page.getByTestId("test-0").press("Enter");
          await page.getByTestId("test-2").press("Enter");
          const firstElement = await page.waitForSelector(
            `span[aria-selected="true"] [data-testid="test-0"]`,
          );
          await expect(await firstElement.textContent()).toBe("Wade Cooper");
          const secondElement = await page.waitForSelector(
            `span[aria-selected="true"] [data-testid="test-2"]`,
          );
          await expect(await secondElement.textContent()).toBe("Devon Webb");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).toBeVisible();
        }
      });

      test("MultiSelect: large dropdown - enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Large").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("MultiSelect: large dropdown - escape should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Large").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Escape");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("MultiSelect: large dropdown - arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Large").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("ArrowDown");
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("MultiSelect: large dropdown - enter press should select options and not close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Large").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("ArrowDown");
          await page.getByTestId("test-0").press("Enter");
          await page.getByTestId("test-2").press("Enter");
          const firstElement = await page.waitForSelector(
            `span[aria-selected="true"] [data-testid="test-0"]`,
          );
          await expect(await firstElement.textContent()).toBe("Wade Cooper");
          const secondElement = await page.waitForSelector(
            `span[aria-selected="true"] [data-testid="test-2"]`,
          );
          await expect(await secondElement.textContent()).toBe("Devon Webb");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).toBeVisible();
        }
      });
    });
  });

  test.describe("InsetMultiSelect tests", () => {
    test.describe("Mouse tests", () => {
      test("InsetMultiSelect: should render and match screenshot", async ({
        page,
      }) => {
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-InsetMultiSelect.png`,
        );
      });

      test("InsetMultiSelect: should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Select label").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-InsetMultiSelect-open.png`,
        );
      });

      test("InsetMultiSelect: should have thicker border on hover", async ({
        page,
      }) => {
        const option = await page.getByLabel("Select label");
        await option.hover({ force: true });
        await page.waitForTimeout(250);
        await expect(option).toHaveClass(/hover:shadow-input-hov/);
      });

      test("InsetMultiSelect: click outside should close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Select label").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("InsetMultiSelect: dropdown option hover should have background `bg-heles`", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Select label").click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("InsetMultiSelect: should select multiple options and not close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Select label").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox")
          .check();
        await expect(
          page
            .getByRole("button", { name: "Wade Cooper Checkbox" })
            .getByLabel("Checkbox"),
        ).toBeChecked();
        await page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox")
          .check();
        await expect(
          page
            .getByRole("button", { name: "Devon Webb Checkbox" })
            .getByLabel("Checkbox"),
        ).toBeChecked();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).toBeVisible();
        await page.mouse.move(0, 0);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-InsetMultiSelect-selected.png`,
        );
      });
    });

    test.describe("Keyboards tests", () => {
      test("InsetMultiSelect: enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Select label").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("InsetMultiSelect: escape press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Select label").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Escape");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });

      test("InsetMultiSelect:  arrow down press should make option active", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Select label").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("ArrowDown");
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
          });
          await expect(option).toHaveClass(/bg-heles/);
        }
      });

      test("InsetMultiSelect: enter press should select options and not close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Select label").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("ArrowDown");
          await page.getByTestId("test-0").press("Enter");
          await page.getByTestId("test-2").press("Enter");
          const firstElement = await page.waitForSelector(
            `span[aria-selected="true"] [data-testid="test-0"]`,
          );
          await expect(await firstElement.textContent()).toBe("Wade Cooper");
          const secondElement = await page.waitForSelector(
            `span[aria-selected="true"] [data-testid="test-2"]`,
          );
          await expect(await secondElement.textContent()).toBe("Devon Webb");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).toBeVisible();
        }
      });
    });
  });

  test.describe("CustomMenuWidth tests", () => {
    test.describe("Mouse tests", () => {
      test("CustomMenuWidth: should render and match screenshot", async ({
        page,
      }) => {
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-CustomMenuWidth.png`,
        );
      });

      test("CustomMenuWidth: should open dropdown and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("Custom options width").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-CustomMenuWidth-open.png`,
        );
      });

      test("CustomMenuWidth: click outside should close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Custom options width").click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("CustomMenuWidth: dropdown option hover should have background `bg-heles`", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Custom options width").click();
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          const option = await page.getByRole("button", {
            name: "Wade Cooper",
            exact: true,
          });
          await option.hover({ force: true });
          await page.waitForTimeout(250);
          await expect(option).toHaveClass(/hover:bg-heles/);
        }
      });

      test("CustomMenuWidth: should select option and close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Custom options width").click();
        await page.waitForTimeout(100);
        const dropdown = await page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByTestId("test-1").click({ force: true });
        const openedDropdown = await page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        await page.getByLabel("Custom options width").click();
        await page.waitForTimeout(100);
        const element = await page.waitForSelector(`[aria-selected="true"]`);
        await expect(await element.textContent()).toBe("Arlene Mccoy");
      });
    });

    test.describe("Keyboards tests", () => {
      test("CustomMenuWidth: enter press should open dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Custom options width").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
        }
      });

      test("CustomMenuWidth: double enter press should close dropdown", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Custom options width").press("Enter");
          await page.waitForTimeout(100);
          const dropdown = page.locator('ul[role="listbox"]');
          await expect(dropdown).toBeVisible();
          await page.keyboard.press("Enter");
          const openedDropdown = page.locator('ul[role="listbox"]');
          await expect(openedDropdown).not.toBeVisible();
        }
      });
    });
  });
});

test.describe("Dropdown in Dark Theme", () => {
  test.describe("Default tests", () => {
    test("Default: should open default dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Default-open.png`,
      );
    });
  });

  test.describe("TriggerElements tests", () => {
    test("TriggerElements: first dropdown - should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-TriggerElements-open-1.png`,
      );
    });

    test("TriggerElements: second dropdown - should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      const trigger = await page
        .getByRole("button", { name: "Select name" })
        .nth(0);
      await trigger.click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-TriggerElements-open-2.png`,
      );
    });
  });

  test.describe("OptionsVariants tests", () => {
    test("OptionsVariants: first dropdown - should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByText("Sort by").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-OptionsVariants-open-1.png`,
      );
    });

    test("OptionsVariants: second dropdown - should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByText("Select language").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-OptionsVariants-open-2.png`,
      );
    });

    test("OptionsVariants: third dropdown - should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByText("Select countries").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-OptionsVariants-open-3.png`,
      );
    });
  });

  test.describe("Select tests", () => {
    test("Select: small dropdown - should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Small").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Select-small-open.png`,
      );
    });

    test("Select: medium dropdown - should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("medium").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Select-medium-open.png`,
      );
    });

    test("Select: large dropdown - should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Large").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Select-large-open.png`,
      );
    });
  });

  test.describe("SelectStates tests", () => {
    test("SelectStates: should render and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-SelectStates.png`,
      );
    });

    test("SelectStates: error - should open dropdown and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Error").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-SelectStates-error-open.png`,
      );
    });
  });

  test.describe("HiddenInput tests", () => {
    test("HiddenInput: should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "With hidden input" }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-HiddenInput-open.png`,
      );
    });
  });

  test.describe("InsetSelect tests", () => {
    test("InsetSelect: should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Select label").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-InsetSelect-open.png`,
      );
    });
  });

  test.describe("InsetSelectStates tests", () => {
    test("InsetSelectStates: should render and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-InsetSelectStates.png`,
      );
    });

    test("InsetSelectStates: error - should open dropdown and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Error").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-InsetSelectStates-error-open.png`,
      );
    });
  });

  test.describe("MultiSelect tests", () => {
    test("MultiSelect: small dropdown - should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Small").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-MultiSelect-small-open.png`,
      );
    });

    test("MultiSelect: small - should select option and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Small").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      await page.getByTestId("test-0").click();
      const element = await page.waitForSelector(`[aria-selected="true"]`);
      await expect(await element.textContent()).toBe("Wade Cooper");
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).toBeVisible();
      await page.mouse.move(0, 0);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-MultiSelect-small-selected.png`,
      );
    });

    test("MultiSelect: medium dropdown - should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("medium").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-MultiSelect-medium-open.png`,
      );
    });

    test("MultiSelect: medium - should select option and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Medium").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      await page.getByTestId("test-0").click();
      const element = await page.waitForSelector(`[aria-selected="true"]`);
      await expect(await element.textContent()).toBe("Wade Cooper");
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).toBeVisible();
      await page.mouse.move(0, 0);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-MultiSelect-medium-selected.png`,
      );
    });

    test("MultiSelect: large dropdown - should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Large").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-MultiSelect-large-open.png`,
      );
    });

    test("MultiSelect: large - should select option and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Large").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      await page.getByTestId("test-0").click();
      const element = await page.waitForSelector(`[aria-selected="true"]`);
      await expect(await element.textContent()).toBe("Wade Cooper");
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).toBeVisible();
      await page.mouse.move(0, 0);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-MultiSelect-large-selected.png`,
      );
    });
  });

  test.describe("InsetMultiSelect tests", () => {
    test("InsetMultiSelect: should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Select label").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-InsetMultiSelect-open.png`,
      );
    });

    test("InsetMultiSelect: should select option and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Select label").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      await page.getByTestId("test-0").click();
      const element = await page.waitForSelector(`[aria-selected="true"]`);
      await expect(await element.textContent()).toBe("Wade Cooper");
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).toBeVisible();
      await page.mouse.move(0, 0);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-InsetMultiSelect-selected.png`,
      );
    });
  });

  test.describe("CustomMenuWidth tests", () => {
    test("CustomMenuWidth: should render and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-CustomMenuWidth.png`,
      );
    });

    test("CustomMenuWidth: should open dropdown and match screenshot", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByLabel("Custom options width").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-CustomMenuWidth-open.png`,
      );
    });
  });
});

test.describe("RTL tests", () => {
  test.describe("Default tests", () => {
    test("Default: component support for RTL - should open default dropdown and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Default-open.png`,
      );
    });
  });

  test.describe("TriggerElements tests", () => {
    test("TriggerElements: first dropdown - should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByLabel("Dropdown trigger").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-TriggerElements-open-1.png`,
      );
    });

    test("TriggerElements: second dropdown - should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByRole("button", { name: "Select name" }).nth(0).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-TriggerElements-open-2.png`,
      );
    });
  });

  test.describe("OptionsVariants tests", () => {
    test("OptionsVariants: first dropdown - should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByText("Sort by").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-OptionsVariants-open-1.png`,
      );
    });

    test("OptionsVariants: second dropdown - should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByText("Select language").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-OptionsVariants-open-2.png`,
      );
    });

    test("OptionsVariants: third dropdown - should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByText("Select countries").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-OptionsVariants-open-3.png`,
      );
    });
  });

  test.describe("Select tests", () => {
    test("Select: small dropdown - should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByLabel("Small").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Select-small-open.png`,
      );
    });

    test("Select: medium dropdown - should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByLabel("Medium").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Select-medium-open.png`,
      );
    });

    test("Select: large dropdown - should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByLabel("Large").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Select-large-open.png`,
      );
    });
  });

  test.describe("SelectStates tests", () => {
    test("SelectStates: should render and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-SelectStates.png`,
      );
    });

    test("SelectStates: error dropdown - should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByLabel("Error").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-SelectStates-error-open.png`,
      );
    });
  });

  test.describe("HiddenInput tests", () => {
    test("HiddenInput: component support for RTL - should open dropdown and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByRole("button", { name: "With hidden input" }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-HiddenInput-open.png`,
      );
    });
  });

  test.describe("InsetSelect tests", () => {
    test("InsetSelect: should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByLabel("Select label").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-InsetSelect-open.png`,
      );
    });
  });

  test.describe("InsetSelectStates tests", () => {
    test("InsetSelectStates: should render and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-InsetSelectStates.png`,
      );
    });

    test("InsetSelectStates: error dropdown - should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByLabel("Error").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-InsetSelectStates-error-open.png`,
      );
    });
  });

  test.describe("MultiSelect tests", () => {
    test("MultiSelect: small dropdown - should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByLabel("Small").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-MultiSelect-small-open.png`,
      );
    });

    test("MultiSelect: medium dropdown - should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByLabel("Medium").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-MultiSelect-medium-open.png`,
      );
    });

    test("MultiSelect: large dropdown - should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByLabel("Large").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-MultiSelect-large-open.png`,
      );
    });
  });

  test.describe("InsetMultiSelect tests", () => {
    test("InsetMultiSelect: should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByLabel("Select label").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-InsetMultiSelect-open.png`,
      );
    });
  });

  test.describe("CustomMenuWidth tests", () => {
    test("CustomMenuWidth: should render and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-CustomMenuWidth.png`,
      );
    });

    test("CustomMenuWidth: should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByLabel("Custom options width").click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-CustomMenuWidth-open.png`,
      );
    });
  });
});
