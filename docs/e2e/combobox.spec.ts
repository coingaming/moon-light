import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "combobox";

setupTest(COMPONENT_NAME);

test.describe("Combobox in Light Theme", () => {
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
    });

    test("Default: should be able to clear and match screenshot", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-empty.png`,
      );
    });

    test("Default: should be editable, show relevant results and match screenshot", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-edited.png`,
      );
    });

    test("Default: should show no results and match screenshot", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-no-results.png`,
      );
    });

    test("Default: when cleared, should have default value", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await page.keyboard.press("Enter");
      await expect(await input.inputValue()).toBe("Tanya Fox");
    });

    test("Default: click on arrow should open dropdown", async ({ page }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("Default: double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").nth(0).click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("Default: click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("Default: combobox option hover should have background `bg-heles`", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        await page.getByLabel("Open").nth(0).click();
        await page.waitForTimeout(100);
        const options = page.locator('ul[role="listbox"]');
        await expect(options).toBeAttached();
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
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("Wade Cooper");
    });

    test("Default: nullable - should be able to clear", async ({ page }) => {
      const input = await page.locator("input").nth(1);
      await input.focus();
      await input.fill("");
      await expect(await input.inputValue()).toBe("");
    });

    test("Default: nullable - should be editable, show relevant results and match screenshot", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(1);
      await input.focus();
      await input.fill("");
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-nullable-edited.png`,
      );
    });

    test("Default: nullable - should show no results and match screenshot", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(1);
      await input.focus();
      await input.fill("");
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("Default: nullable - when cleared, should show placeholder", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(1);
      await input.focus();
      await input.fill("");
      await page.keyboard.press("Enter");
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-nullable-placeholder.png`,
      );
    });

    test("Default: nullable - click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("Default: nullable - double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").nth(0).click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("Default: nullable - click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("Default: nullable - combobox option hover should have background `bg-heles`", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        await page.getByLabel("Open").nth(1).click();
        await page.waitForTimeout(100);
        const options = page.locator('ul[role="listbox"]');
        await expect(options).toBeAttached();
        const option = await page.getByRole("button", {
          name: "Wade Cooper",
        });
        await option.hover({ force: true });
        await page.waitForTimeout(250);
        await expect(option).toHaveClass(/hover:bg-heles/);
      }
    });

    test("Default: nullable - should select option and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(1);
      await expect(await input.inputValue()).toBe("Wade Cooper");
    });
  });

  test.describe("Select tests", () => {
    test("Select: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Select.png`);
    });

    test("Select: small - should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Select-results.png`,
      );
    });

    test("Select: small - should show no results", async ({ page }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("Select: small - click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("Select: small - double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").nth(0).click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("Select: small - click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("Select: small - should select option and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("Wade Cooper");
    });

    test("Select: small - should show selected option and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("Wade Cooper");
      await page.getByLabel("Open").nth(0).click();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Select-selected.png`,
      );
    });

    test("Select: medium - should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(1);
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
    });

    test("Select: medium - should show no results", async ({ page }) => {
      const input = await page.locator("input").nth(1);
      await input.focus();
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("Select: medium - click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("Select: medium - double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("Select: medium - click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("Select: medium - should select option and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(1);
      await expect(await input.inputValue()).toBe("Wade Cooper");
    });

    test("Select: large - should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(2);
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
    });

    test("Select: large - should show no results", async ({ page }) => {
      const input = await page.locator("input").nth(2);
      await input.focus();
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("Select: large - click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(2).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("Select: large - double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(2).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("Select: large - click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(2).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("Select: large - should select option and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(2).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(2);
      await expect(await input.inputValue()).toBe("Wade Cooper");
    });
  });

  test.describe("SelectStates tests", () => {
    test("SelectStates: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-SelectStates.png`);
    });

    test("SelectStates: disabled - should be disabled", async ({ page }) => {
      const input = await page.locator("input").nth(1);
      await expect(input).toBeDisabled();
    });

    test("SelectStates: error - should be able to clear", async ({ page }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await expect(await input.inputValue()).toBe("");
    });

    test("SelectStates: error - should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
    });

    test("SelectStates: error - should show no results", async ({ page }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("SelectStates: error - click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("SelectStates: error - double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("SelectStates: error - click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("SelectStates: error - should select option and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(1);
      await expect(await input.inputValue()).toBe("Wade Cooper");
    });
  });

  test.describe("SelectInsetInput tests", () => {
    test("SelectInsetInput: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-SelectInsetInput.png`,
      );
    });

    test("SelectInsetInput: should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input");
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-SelectInsetInput-results.png`,
      );
    });

    test("SelectInsetInput: should show no results", async ({ page }) => {
      const input = await page.locator("input");
      await input.focus();
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("SelectInsetInput: click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("SelectInsetInput: double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("SelectInsetInput: click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("SelectInsetInput: should select option and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await option.click();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("Wade Cooper");
    });

    test("SelectInsetInput: should show selected option and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("Wade Cooper");
      await page.getByLabel("Open").click();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-SelectInsetInput-selected.png`,
      );
    });
  });

  test.describe("SelectInsetInputStates tests", () => {
    test("SelectInsetInputStates: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-SelectInsetInputStates.png`,
      );
    });

    test("SelectInsetInputStates: disabled - should be disabled", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(1);
      await expect(input).toBeDisabled();
    });

    test("SelectInsetInputStates: error - should be able to clear", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await expect(await input.inputValue()).toBe("");
    });

    test("SelectInsetInputStates: error - should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
    });

    test("SelectInsetInputStates: error - should show no results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("SelectInsetInputStates: error - click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("SelectInsetInputStates: error - double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("SelectInsetInputStates: error - click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("SelectInsetInputStates: error - should select option and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(1);
      await expect(await input.inputValue()).toBe("Wade Cooper");
    });
  });

  test.describe("MultiSelect tests", () => {
    test("MultiSelect: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-MultiSelect.png`);
    });

    test("MultiSelect: small - should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-MultiSelect-results.png`,
      );
    });

    test("MultiSelect: small - should show no results", async ({ page }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("MultiSelect: small - click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("MultiSelect: small - double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").nth(0).click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("MultiSelect: small - click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("MultiSelect: small - should select multiple options, not close dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-MultiSelect-small-selected.png`,
      );
    });

    test("MultiSelect: small - should remove the tag, clear selection and close dropdown after pressing `x`", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.getByRole("img").first().click();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(openedOptions).not.toBeAttached();
    });

    test("MultiSelect: small - should be able to select multiple options with keyboard", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        const input = await page.locator("input").nth(0);
        await input.focus();
        await input.fill("t");
        await expect(await input.inputValue()).toBe("t");
        const options = page.locator('ul[role="listbox"]');
        await expect(options).toBeAttached();
        await page.getByTestId("test-0").press("Enter");
        await page.getByTestId("test-1").press("Enter");
        const firstElement = await page.waitForSelector(
          `span[aria-selected="true"] [data-testid="test-0"]`,
        );
        await expect(await firstElement.textContent()).toBe("Tom Cook");
        const secondElement = await page.waitForSelector(
          `span[aria-selected="true"] [data-testid="test-1"]`,
        );
        await expect(await secondElement.textContent()).toBe("Tanya Fox");
      }
    });

    test("MultiSelect: medium - should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
    });

    test("MultiSelect: medium - should show no results", async ({ page }) => {
      const input = await page.locator("input").nth(1);
      await input.focus();
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("MultiSelect: medium - click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("MultiSelect: medium - double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").nth(0).click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("MultiSelect: medium - click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("MultiSelect: medium - should select multiple options, not close dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-MultiSelect-medium-selected.png`,
      );
    });

    test("MultiSelect: medium - should remove the tag, clear selection and close dropdown after pressing `x`", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.getByRole("img").nth(1).click();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(openedOptions).not.toBeAttached();
    });

    test("MultiSelect: medium - should be able to select multiple options with keyboard", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        const input = await page.locator("input").nth(0);
        await input.focus();
        await input.fill("t");
        await expect(await input.inputValue()).toBe("t");
        const options = page.locator('ul[role="listbox"]');
        await expect(options).toBeAttached();
        await page.getByTestId("test-0").press("Enter");
        await page.getByTestId("test-1").press("Enter");
        const firstElement = await page.waitForSelector(
          `span[aria-selected="true"] [data-testid="test-0"]`,
        );
        await expect(await firstElement.textContent()).toBe("Tom Cook");
        const secondElement = await page.waitForSelector(
          `span[aria-selected="true"] [data-testid="test-1"]`,
        );
        await expect(await secondElement.textContent()).toBe("Tanya Fox");
      }
    });

    test("MultiSelect: large - should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(2);
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
    });

    test("MultiSelect: large - should show no results", async ({ page }) => {
      const input = await page.locator("input").nth(2);
      await input.focus();
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("MultiSelect: large - click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(2).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("MultiSelect: large - double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(2).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").nth(0).click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("MultiSelect: large - click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(2).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("MultiSelect: large - should select multiple options, not close dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(2).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-MultiSelect-large-selected.png`,
      );
    });

    test("MultiSelect: large - should remove the tag, clear selection and close dropdown after pressing `x`", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(2).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.getByRole("img").nth(2).click();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(openedOptions).not.toBeAttached();
    });

    test("MultiSelect: large - should be able to select multiple options with keyboard", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        const input = await page.locator("input").nth(2);
        await input.focus();
        await input.fill("t");
        await expect(await input.inputValue()).toBe("t");
        const options = page.locator('ul[role="listbox"]');
        await expect(options).toBeAttached();
        await page.getByTestId("test-0").press("Enter");
        await page.getByTestId("test-1").press("Enter");
        const firstElement = await page.waitForSelector(
          `span[aria-selected="true"] [data-testid="test-0"]`,
        );
        await expect(await firstElement.textContent()).toBe("Tom Cook");
        const secondElement = await page.waitForSelector(
          `span[aria-selected="true"] [data-testid="test-1"]`,
        );
        await expect(await secondElement.textContent()).toBe("Tanya Fox");
      }
    });
  });

  test.describe("MultiSelectWithAll tests", () => {
    test("MultiSelectWithAll: should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input");
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-MultiSelectWithAll-results.png`,
      );
    });

    test("MultiSelectWithAll: should show no results", async ({ page }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("MultiSelectWithAll: click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("MultiSelectWithAll: double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").nth(0).click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("MultiSelectWithAll: click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("MultiSelectWithAll: should select all options, not close dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Select all" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Select all Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Arlene Mccoy Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Tom Cook Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Tanya Fox Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Hellen Schmidt Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-MultiSelectWithAll-selected.png`,
      );
    });

    test("MultiSelectWithAll: should remove the tag, clear selection and close dropdown after pressing `x`", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.getByRole("img").first().click();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(openedOptions).not.toBeAttached();
    });
  });

  test.describe("MultiSelectInsetInput tests", () => {
    test("MultiSelectInsetInput: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-MultiSelectInsetInput.png`,
      );
    });

    test("MultiSelectInsetInput: should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input");
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-MultiSelectInsetInput-results.png`,
      );
    });

    test("MultiSelectInsetInput: should show no results", async ({ page }) => {
      const input = await page.locator("input");
      await input.focus();
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("MultiSelectInsetInput: click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("MultiSelectInsetInput: double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("MultiSelectInsetInput: click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("MultiSelectInsetInput: should select multiple options, not close dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");

      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-MultiSelectInsetInput-selected.png`,
      );
    });

    test("MultiSelectInsetInput: should select multiple options, close dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.mouse.click(10, 10);
      const closedOptions = page.locator('ul[role="listbox"]');
      await expect(closedOptions).not.toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-MultiSelectInsetInput-selected-closed.png`,
      );
    });

    test("MultiSelectInsetInput: should remove the tag, clear selection and close dropdown after pressing `x`", async ({
      page,
    }) => {
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.getByRole("img").first().click();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(openedOptions).not.toBeAttached();
    });
  });

  test.describe("VisualMultiSelect tests", () => {
    test("VisualMultiSelect: w/o forceUpdate - should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
    });

    test("VisualMultiSelect: w/o forceUpdate - should show no results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("VisualMultiSelect: w/o forceUpdate - click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("VisualMultiSelect: w/o forceUpdate - double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").nth(0).click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("VisualMultiSelect: w/o forceUpdate - click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("VisualMultiSelect: w/o forceUpdate - should select multiple options, not close dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-VisualMultiSelect-selected.png`,
      );
    });

    test("VisualMultiSelect: w/o forceUpdate - should select multiple options, close dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.mouse.click(10, 10);
      const closedOptions = page.locator('ul[role="listbox"]');
      await expect(closedOptions).not.toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-VisualMultiSelect-selected-closed.png`,
      );
    });

    test("VisualMultiSelect: w/o forceUpdate - should remove one selection, close dropdown after pressing `x` and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.getByRole("img").nth(1).click();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(openedOptions).not.toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-VisualMultiSelect-removed-closed.png`,
      );
    });

    test("VisualMultiSelect: with forceUpdate - should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(1);
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
    });

    test("VisualMultiSelect: with forceUpdate - should show no results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(1);
      await input.focus();
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("VisualMultiSelect: with forceUpdate - click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("VisualMultiSelect: with forceUpdate - double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").nth(0).click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("VisualMultiSelect: with forceUpdate - click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("VisualMultiSelect: with forceUpdate - should select multiple options, not close dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-VisualMultiSelect-forceUpdate-selected.png`,
      );
    });

    test("VisualMultiSelect: with forceUpdate - should select multiple options, close dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.mouse.click(10, 10);
      const closedOptions = page.locator('ul[role="listbox"]');
      await expect(closedOptions).not.toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-VisualMultiSelect-forceUpdate-elected-closed.png`,
      );
    });

    test("VisualMultiSelect: with forceUpdate - should remove one selection and not close dropdown after pressing", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.getByRole("img").nth(1).click();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(openedOptions).toBeAttached();
    });
  });

  test.describe("AlignmentControlsOptions tests", () => {
    test("AlignmentControlsOptions: should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("p");
      await expect(await input.inputValue()).toBe("p");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option1 = await page.getByRole("button", { name: "The Spy" });
      await expect(option1).toBeAttached();
      const option2 = await page.getByRole("button", {
        name: "The Pit and the Pendulum",
      });
      await expect(option2).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-AlignmentControlsOptions-results.png`,
      );
    });

    test("AlignmentControlsOptions: should show no results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("AlignmentControlsOptions: click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("AlignmentControlsOptions: double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").nth(0).click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("AlignmentControlsOptions: click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("AlignmentControlsOptions: should select multiple options, not close dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "The Spy Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "The Pit and the Pendulum Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "The Spy Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "The Pit and the Pendulum Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");

      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-AlignmentControlsOptions-selected.png`,
      );
    });

    test("AlignmentControlsOptions: should select multiple options, close dropdown and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "The Spy Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "The Pit and the Pendulum Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "The Spy Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "The Pit and the Pendulum Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.mouse.click(10, 10);
      const closedOptions = page.locator('ul[role="listbox"]');
      await expect(closedOptions).not.toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-AlignmentControlsOptions-selected-closed.png`,
      );
    });

    test("AlignmentControlsOptions: should remove the tag, clear selection and close dropdown after pressing `x`", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "The Spy Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "The Pit and the Pendulum Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "The Spy Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "The Pit and the Pendulum Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.getByRole("img").first().click();
      await expect(
        page
          .getByRole("button", { name: "The Spy Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "The Pit and the Pendulum Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(openedOptions).not.toBeAttached();
    });

    test("AlignmentControlsOptions: select - should be editable and show relevant results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(1);
      await input.focus();
      await input.fill("p");
      await expect(await input.inputValue()).toBe("p");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option1 = await page.getByRole("button", { name: "The Spy" });
      await expect(option1).toBeAttached();
      const option2 = await page.getByRole("button", {
        name: "The Pit and the Pendulum",
      });
      await expect(option2).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-AlignmentControlsOptions-select-results.png`,
      );
    });

    test("AlignmentControlsOptions: select - should show no results", async ({
      page,
    }) => {
      const input = await page.locator("input").nth(1);
      await input.focus();
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const noResults = await page.getByText("Nothing found.");
      await expect(noResults).toBeAttached();
    });

    test("AlignmentControlsOptions: select - click on arrow should open dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
    });

    test("AlignmentControlsOptions: select - double click on arrow should open and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.getByLabel("Close").nth(0).click();
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("AlignmentControlsOptions: select - click outside dropdown should close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page.mouse.click(10, 10);
      const openOptions = page.locator('ul[role="listbox"]');
      await expect(openOptions).not.toBeAttached();
    });

    test("AlignmentControlsOptions: select - should select option and close dropdown", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "The Spy",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(1);
      await expect(await input.inputValue()).toBe("The Spy");
    });

    test("AlignmentControlsOptions: select - should show selected option and match screenshot", async ({
      page,
    }) => {
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "The Spy",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(1);
      await expect(await input.inputValue()).toBe("The Spy");
      await page.getByLabel("Open").nth(1).click();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-AlignmentControlsOptions-select-selected.png`,
      );
    });
  });
});

test.describe("Combobox in Dark Theme", () => {
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Default.png`);
    });

    test("Default: should be able to clear and match screenshot in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Default-empty.png`,
      );
    });

    test("Default: should be editable, show relevant results and match screenshot in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Default-edited.png`,
      );
    });

    test("Default: should show no results and match screenshot in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Default-no-results.png`,
      );
    });

    test("Default: nullable - when cleared, should show placeholder in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      const input = await page.locator("input").nth(1);
      await input.focus();
      await input.fill("");
      await page.keyboard.press("Enter");
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Default-nullable-placeholder.png`,
      );
    });
  });

  test.describe("Select tests", () => {
    test("Select: should render and match screenshot in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Select.png`);
    });

    test("Select: small - should be editable and show relevant results in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Select-results.png`,
      );
    });

    test("Select: small - should show selected option and match screenshot in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("Wade Cooper");
      await page.getByLabel("Open").nth(0).click();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Select-selected.png`,
      );
    });
  });

  test.describe("SelectStates tests", () => {
    test("SelectStates: should render and match screenshot in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-SelectStates.png`,
      );
    });
  });

  test.describe("SelectInsetInput tests", () => {
    test("SelectInsetInput: should render and match screenshot in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-SelectInsetInput.png`,
      );
    });

    test("SelectInsetInput: should be editable and show relevant results in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      const input = await page.locator("input");
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-SelectInsetInput-results.png`,
      );
    });

    test("SelectInsetInput: should show selected option and match screenshot in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("Wade Cooper");
      await page.getByLabel("Open").click();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-SelectInsetInput-selected.png`,
      );
    });
  });

  test.describe("SelectInsetInputStates tests", () => {
    test("SelectInsetInputStates: should render and match screenshot in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-SelectInsetInputStates.png`,
      );
    });
  });

  test.describe("MultiSelect tests", () => {
    test("MultiSelect: small - should be editable and show relevant results in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-MultiSelect-results.png`,
      );
    });

    test("MultiSelect: small - should select multiple options, not close dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-MultiSelect-small-selected.png`,
      );
    });

    test("MultiSelect: medium - should select multiple options, not close dropdown and match screenshot on Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-MultiSelect-medium-selected.png`,
      );
    });

    test("MultiSelect: large - should select multiple options, not close dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await page.getByLabel("Open").nth(2).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-MultiSelect-large-selected.png`,
      );
    });
  });

  test.describe("VisualMultiSelect tests", () => {
    test("VisualMultiSelect: w/o forceUpdate - should select multiple options, not close dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-VisualMultiSelect-selected.png`,
      );
    });

    test("VisualMultiSelect: w/o forceUpdate - should select multiple options, close dropdown and match screenshot in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.mouse.click(10, 10);
      const closedOptions = page.locator('ul[role="listbox"]');
      await expect(closedOptions).not.toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-VisualMultiSelect-selected-closed.png`,
      );
    });

    test("VisualMultiSelect: w/o forceUpdate - should remove one selection, close dropdown after pressing `x` and match screenshot in Dark Theme", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.getByRole("img").nth(1).click();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(openedOptions).not.toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-VisualMultiSelect-removed-closed.png`,
      );
    });
  });
});

test.describe("RTL tests", () => {
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Default.png`);
    });

    test("Default: should be able to clear and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Default-empty.png`,
      );
    });

    test("Default: should be editable, show relevant results and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Default-edited.png`,
      );
    });

    test("Default: should show no results and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("");
      await input.fill("test");
      await expect(await input.inputValue()).toBe("test");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Default-no-results.png`,
      );
    });

    test("Default: nullable - when cleared, should show placeholder in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      const input = await page.locator("input").nth(1);
      await input.focus();
      await input.fill("");
      await page.keyboard.press("Enter");
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Default-nullable-placeholder.png`,
      );
    });
  });

  test.describe("Select tests", () => {
    test("Select: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Select.png`);
    });

    test("Select: small - should be editable and show relevant results in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Select-results.png`,
      );
    });

    test("Select: small - should show selected option and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("Wade Cooper");
      await page.getByLabel("Open").nth(0).click();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Select-selected.png`,
      );
    });
  });

  test.describe("SelectInsetInput tests", () => {
    test("SelectInsetInput: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-SelectInsetInput.png`,
      );
    });

    test("SelectInsetInput: should be editable and show relevant results in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      const input = await page.locator("input");
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-SelectInsetInput-results.png`,
      );
    });

    test("SelectInsetInput: should show selected option and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "Wade Cooper",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("Wade Cooper");
      await page.getByLabel("Open").click();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-SelectInsetInput-selected.png`,
      );
    });
  });

  test.describe("SelectInsetInputStates tests", () => {
    test("SelectInsetInputStates: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-SelectInsetInputStates.png`,
      );
    });
  });

  test.describe("MultiSelect tests", () => {
    test("MultiSelect: small - should be editable and show relevant results in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("t");
      await expect(await input.inputValue()).toBe("t");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const tanya = await page.getByRole("button", { name: "Tanya Fox" });
      await expect(tanya).toBeAttached();
      const tom = await page.getByRole("button", { name: "Tom Cook" });
      await expect(tom).toBeAttached();
      const hellen = await page.getByRole("button", { name: "Hellen Schmidt" });
      await expect(hellen).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-MultiSelect-results.png`,
      );
    });

    test("MultiSelect: small - should select multiple options, not close dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-MultiSelect-small-selected.png`,
      );
    });

    test("MultiSelect: medium - should select multiple options, not close dropdown and match screenshot on RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-MultiSelect-medium-selected.png`,
      );
    });

    test("MultiSelect: large - should select multiple options, not close dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await page.getByLabel("Open").nth(2).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-MultiSelect-large-selected.png`,
      );
    });
  });

  test.describe("MultiSelectInsetInput tests", () => {
    test("MultiSelectInsetInput: should render and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-MultiSelectInsetInput.png`,
      );
    });

    test("MultiSelectInsetInput: should select multiple options, not close dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");

      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-MultiSelectInsetInput-selected.png`,
      );
    });

    test("MultiSelectInsetInput: should select multiple options, close dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await page.getByLabel("Open").click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.mouse.click(10, 10);
      const closedOptions = page.locator('ul[role="listbox"]');
      await expect(closedOptions).not.toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-MultiSelectInsetInput-selected-closed.png`,
      );
    });
  });

  test.describe("VisualMultiSelect tests", () => {
    test("VisualMultiSelect: w/o forceUpdate - should select multiple options, not close dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-VisualMultiSelect-selected.png`,
      );
    });

    test("VisualMultiSelect: w/o forceUpdate - should select multiple options, close dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.mouse.click(10, 10);
      const closedOptions = page.locator('ul[role="listbox"]');
      await expect(closedOptions).not.toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-VisualMultiSelect-selected-closed.png`,
      );
    });

    test("VisualMultiSelect: w/o forceUpdate - should remove one selection, close dropdown after pressing `x` and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "Wade Cooper Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "Devon Webb Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      await page.getByRole("img").nth(1).click();
      await expect(
        page
          .getByRole("button", { name: "Devon Webb Checkbox" })
          .getByLabel("Checkbox"),
      ).not.toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "Wade Cooper Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(openedOptions).not.toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-VisualMultiSelect-removed-closed.png`,
      );
    });
  });

  test.describe("AlignmentControlsOptions tests", () => {
    test("AlignmentControlsOptions: should be editable and show relevant results in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      const input = await page.locator("input").nth(0);
      await input.focus();
      await input.fill("p");
      await expect(await input.inputValue()).toBe("p");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option1 = await page.getByRole("button", { name: "The Spy" });
      await expect(option1).toBeAttached();
      const option2 = await page.getByRole("button", {
        name: "The Pit and the Pendulum",
      });
      await expect(option2).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-AlignmentControlsOptions-results.png`,
      );
    });

    test("AlignmentControlsOptions: should select multiple options, not close dropdown and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await page.getByLabel("Open").nth(0).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      await page
        .getByRole("button", { name: "The Spy Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await page
        .getByRole("button", { name: "The Pit and the Pendulum Checkbox" })
        .getByLabel("Checkbox")
        .check();
      await expect(
        page
          .getByRole("button", { name: "The Spy Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      await expect(
        page
          .getByRole("button", { name: "The Pit and the Pendulum Checkbox" })
          .getByLabel("Checkbox"),
      ).toBeChecked();
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).toBeAttached();
      const input = await page.locator("input").nth(0);
      await expect(await input.inputValue()).toBe("");

      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-AlignmentControlsOptions-selected.png`,
      );
    });

    test("AlignmentControlsOptions: select - should be editable and show relevant results in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      const input = await page.locator("input").nth(1);
      await input.focus();
      await input.fill("p");
      await expect(await input.inputValue()).toBe("p");
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option1 = await page.getByRole("button", { name: "The Spy" });
      await expect(option1).toBeAttached();
      const option2 = await page.getByRole("button", {
        name: "The Pit and the Pendulum",
      });
      await expect(option2).toBeAttached();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-AlignmentControlsOptions-select-results.png`,
      );
    });

    test("AlignmentControlsOptions: select - should show selected option and match screenshot in RTL", async ({
      page,
    }) => {
      await setRtl(page);
      await page.getByLabel("Open").nth(1).click();
      await page.waitForTimeout(100);
      const options = page.locator('ul[role="listbox"]');
      await expect(options).toBeAttached();
      const option = await page.getByRole("button", {
        name: "The Spy",
      });
      await option.click({ force: true });
      const openedOptions = page.locator('ul[role="listbox"]');
      await expect(openedOptions).not.toBeAttached();
      const input = await page.locator("input").nth(1);
      await expect(await input.inputValue()).toBe("The Spy");
      await page.getByLabel("Open").nth(1).click();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-AlignmentControlsOptions-select-selected.png`,
      );
    });
  });
});
