import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";
import { set } from "react-hook-form";

const COMPONENT_NAME = "dropdown";

setupTest(COMPONENT_NAME);

test.describe("Dropdown in Light Theme", () => {
  test.describe("Default tests", () => {
    test.describe("General tests", () => {
      test("Default: should render and match screenshot", async ({ page }) => {
        await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
      });

      test("Default: hover on dropdown trigger should match screenshot", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page
            .getByRole("button", { name: "Choose a name..." })
            .hover({ force: true });
          await page.waitForTimeout(300);
          await expect(page).toHaveScreenshot(
            `${COMPONENT_NAME}-Default-hover.png`,
          );
        }
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
          await expect(page).toHaveScreenshot(
            `${COMPONENT_NAME}-Default-option-hover.png`,
          );
        }
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
        );
      });

      test("Default: hover on selected option as trigger should match screenshot", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
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
          );
        }
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
        );
      });
      test("Default: hover on other option should match screenshot", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
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
          );
        }
      });
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
    test.describe("General tests", () => {
      test("TriggerElements: should render and match screenshot", async ({
        page,
      }) => {
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-TriggerElements.png`,
        );
      });

      test("TriggerElements: first dropdown - hover on trigger should match screenshot", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("Dropdown trigger").hover({ force: true });
          await page.waitForTimeout(300);
          await expect(page).toHaveScreenshot(
            `${COMPONENT_NAME}-TriggerElements-hover-1.png`,
          );
        }
      });

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
        const activeOption = await page.getByRole("button", {
          name: "Wade Cooper",
        });
        await expect(
          (await activeOption.getAttribute("class"))?.split(" "),
        ).toEqual(expect.arrayContaining(["bg-heles"]));
      });

      test("TriggerElements: first dropdown - hover on other option should match screenshot", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
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
          );
        }
      });

      test("TriggerElements: second dropdown - hover on trigger should match screenshot", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          const trigger = await page
            .getByRole("button", { name: "Select name" })
            .nth(0);
          await trigger.hover({ force: true });
          await page.waitForTimeout(300);
          await expect(page).toHaveScreenshot(
            `${COMPONENT_NAME}-TriggerElements-hover-2.png`,
          );
        }
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
        await expect(
          (await activeOption.getAttribute("class"))?.split(" "),
        ).toEqual(expect.arrayContaining(["bg-heles"]));
      });

      test("TriggerElements: third dropdown - should open dropdown and match screenshot", async ({
        page,
      }) => {
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(2);
        await trigger.click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(dropdown).toBeVisible();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-TriggerElements-open-3.png`,
        );
      });

      test("TriggerElements: third dropdown - click outside should close dropdown", async ({
        page,
      }) => {
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(2);
        await trigger.click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.mouse.click(10, 10);
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("TriggerElements: third dropdown - should select option and close dropdown", async ({
        page,
      }) => {
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(2);
        await trigger.click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        const option = await page.getByRole("button", { name: "Wade Cooper" });
        await option.click({ force: true });
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("TriggerElements: third dropdown -  selected option should be active", async ({
        page,
      }) => {
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(2);
        await trigger.click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByRole("button", { name: "Wade Cooper" }).click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        const triggerSecond = await page
          .getByRole("button", { name: "Select name" })
          .nth(2);
        await triggerSecond.click();
        await page.waitForTimeout(100);
        const selectedDropdown = page.locator('ul[role="listbox"]');
        await page.mouse.move(0, 0);
        await expect(selectedDropdown).toBeVisible();
        const activeOption = await page.getByRole("button", {
          name: "Wade Cooper",
        });
        await expect(
          (await activeOption.getAttribute("class"))?.split(" "),
        ).toEqual(expect.arrayContaining(["bg-heles"]));
      });
    });

    test.describe("Keyboards tests", () => {
      test("TriggerElements: first dropdown - enter press should open dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Dropdown trigger").press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
      });

      test("TriggerElements: first dropdown - double enter press should close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Dropdown trigger").press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.keyboard.press("Enter");
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("TriggerElements: first dropdown - arrow down press should make option active", async ({
        page,
      }) => {
        await page.getByLabel("Dropdown trigger").focus();
        await page.keyboard.press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByLabel("Dropdown trigger").press("ArrowDown");
        const option = await page.getByRole("button", { name: "Wade Cooper" });
        await expect((await option.getAttribute("class"))?.split(" ")).toEqual(
          expect.arrayContaining(["bg-heles"]),
        );
      });

      test("TriggerElements: first dropdown - enter press should close dropdown", async ({
        page,
      }) => {
        await page.getByLabel("Dropdown trigger").focus();
        await page.keyboard.press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByLabel("Dropdown trigger").press("ArrowDown");
        await page.getByRole("button", { name: "Wade Cooper" }).press("Enter");
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("TriggerElements: second dropdown - enter press should open dropdown", async ({
        page,
      }) => {
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(0);
        await trigger.press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
      });

      test("TriggerElements: second dropdown - double enter press should close dropdown", async ({
        page,
      }) => {
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
      });

      test("TriggerElements: second dropdown -  arrow down press should make option active", async ({
        page,
      }) => {
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
        await expect((await option.getAttribute("class"))?.split(" ")).toEqual(
          expect.arrayContaining(["bg-heles"]),
        );
      });

      test("TriggerElements: second dropdown - enter press should close dropdown", async ({
        page,
      }) => {
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
      });

      test("TriggerElements: third dropdown - enter press should open dropdown", async ({
        page,
      }) => {
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(2);
        await trigger.press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
      });

      test("TriggerElements: third dropdown - double enter press should close dropdown", async ({
        page,
      }) => {
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(2);
        await trigger.press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.keyboard.press("Enter");
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });

      test("TriggerElements: third dropdown -  arrow down press should make option active", async ({
        page,
      }) => {
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(2);
        await trigger.focus();
        await page.keyboard.press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.getByLabel("Dropdown trigger").press("ArrowDown");
        const option = await page
          .getByRole("button", { name: "Wade Cooper" })
          .nth(1);
        await expect((await option.getAttribute("class"))?.split(" ")).toEqual(
          expect.arrayContaining(["bg-heles"]),
        );
      });

      test("TriggerElements: third dropdown - enter press should close dropdown", async ({
        page,
      }) => {
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(2);
        await trigger.press("Enter");
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        await page.keyboard.press("ArrowDown");
        await page.keyboard.press("Enter");
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
      });
    });
  });
});

test.describe("Dropdown in Dark Theme", () => {
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Default.png`);
    });

    test("Default: hover on dropdown trigger should match screenshot in Dark Theme", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        setDarkTheme(page);
        await page
          .getByRole("button", { name: "Choose a name..." })
          .hover({ force: true });
        await page.waitForTimeout(250);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-dark-Default-hover.png`,
        );
      }
    });

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

    test("Default: dropdown option hover should match screenshot in Dark Theme", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        setDarkTheme(page);
        await page.getByRole("button", { name: "Choose a name..." }).click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        const option = await page.getByRole("button", { name: "Wade Cooper" });
        await option.hover({ force: true });
        await page.waitForTimeout(250);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-dark-Default-option-hover.png`,
        );
      }
    });

    test("Default: should select option, close dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await page.getByRole("button", { name: "Choose a name..." }).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await expect(dropdown).toBeVisible();
      const option = await page.getByRole("button", { name: "Wade Cooper" });
      await option.click({ force: true });
      const openedDropdown = page.locator('ul[role="listbox"]');
      await expect(openedDropdown).not.toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Default-option-selected.png`,
      );
    });

    test("Default: selected option should be active and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
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
        `${COMPONENT_NAME}-dark-Default-selected-dropdown.png`,
      );
    });
    test("Default: hover on other option should match screenshot in Dark Theme", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        setDarkTheme(page);
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
          `${COMPONENT_NAME}-dark-Default-selected-dropdown-other-hover.png`,
        );
      }
    });
  });

  test.describe("TriggerElements tests", () => {
    test("TriggerElements: should render and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-TriggerElements.png`,
      );
    });

    test("TriggerElements: first dropdown - hover on trigger should match screenshot in Dark Theme", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        setDarkTheme(page);
        await page.getByLabel("Dropdown trigger").hover({ force: true });
        await page.waitForTimeout(300);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-dark-TriggerElements-hover-1.png`,
        );
      }
    });

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

    test("TriggerElements: first dropdown - hover on other option should match screenshot in Dark Theme", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        setDarkTheme(page);
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
          `${COMPONENT_NAME}-dark-TriggerElements-selected-dropdown-other-hover-1.png`,
        );
      }
    });

    test("TriggerElements: second dropdown - hover on trigger should match screenshot in Dark Theme", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        setDarkTheme(page);
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(0);
        await trigger.hover({ force: true });
        await page.waitForTimeout(300);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-dark-TriggerElements-hover-2.png`,
        );
      }
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

    test("TriggerElements: second dropdown - hover on other option should match screenshot in Dark Theme", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        setDarkTheme(page);
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(0);
        await trigger.click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        const option = await page
          .getByRole("button", { name: "Wade Cooper" })
          .click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        await page.getByRole("button", { name: "Select name" }).nth(0).click();
        const selectedDropdown = page.locator('ul[role="listbox"]');
        await expect(selectedDropdown).toBeVisible();
        const otherOption = await page.getByRole("button", {
          name: "Arlene Mccoy",
        });
        await otherOption.hover({ force: true });
        await page.waitForTimeout(250);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-dark-TriggerElements-selected-dropdown-other-hover-2.png`,
        );
      }
    });

    test("TriggerElements: third dropdown - hover on trigger should match screenshot in Dark Theme", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        setDarkTheme(page);
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(2);
        await trigger.hover({ force: true });
        await page.waitForTimeout(300);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-dark-TriggerElements-hover-3.png`,
        );
      }
    });

    test("TriggerElements: third dropdown - should open dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      setDarkTheme(page);
      const trigger = await page
        .getByRole("button", { name: "Select name" })
        .nth(2);
      await trigger.click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-TriggerElements-open-3.png`,
      );
    });

    test("TriggerElements: third dropdown - hover on other option should match screenshot in Dark Theme", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        setDarkTheme(page);
        const trigger = await page
          .getByRole("button", { name: "Select name" })
          .nth(2);
        await trigger.click();
        await page.waitForTimeout(100);
        const dropdown = page.locator('ul[role="listbox"]');
        await expect(dropdown).toBeVisible();
        const option = await page
          .getByRole("button", { name: "Wade Cooper" })
          .click();
        const openedDropdown = page.locator('ul[role="listbox"]');
        await expect(openedDropdown).not.toBeVisible();
        await page.getByRole("button", { name: "Select name" }).nth(2).click();
        const selectedDropdown = page.locator('ul[role="listbox"]');
        await expect(selectedDropdown).toBeVisible();
        const otherOption = await page.getByRole("button", {
          name: "Arlene Mccoy",
        });
        await otherOption.hover({ force: true });
        await page.waitForTimeout(250);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-dark-TriggerElements-selected-dropdown-other-hover-3.png`,
        );
      }
    });
  });
});

test.describe("RTL tests", () => {
  test.describe("Default tests", () => {
    test("Default: component support for RTL - should render and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Default.png`);
    });

    test("Default: component support for RTL - should open default dropdown and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await page.waitForSelector("html[dir=rtl]");
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
    test("TriggerElements: component support for RTL - should render and match screenshot", async ({
      page,
    }) => {
      setRtl(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-TriggerElements.png`,
      );
    });

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

    test("TriggerElements: third dropdown - should open dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      setRtl(page);
      await page.getByRole("button", { name: "Select name" }).nth(2).click();
      await page.waitForTimeout(100);
      const dropdown = page.locator('ul[role="listbox"]');
      await page.mouse.move(0, 0);
      await expect(dropdown).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-TriggerElements-open-3.png`,
      );
    });
  });
});
