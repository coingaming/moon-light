import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "radio";

setupTest(COMPONENT_NAME);

test.describe("Radio in Light Theme", () => {
  test.describe("Default tests", () => {
    test.describe("Mouse tests", () => {
      test("Default: should render and be unchecked", async ({ page }) => {
        await expect(page.getByLabel("option1")).not.toBeChecked();
        await expect(page.getByLabel("option2")).not.toBeChecked();
      });

      test("Default: should check first and match screenshot", async ({
        page,
      }) => {
        await page.getByLabel("option1").check();
        await expect(page.getByLabel("option1")).toBeChecked();
        await expect(page.getByLabel("option2")).not.toBeChecked();
        await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
      });

      test("Default: should check second", async ({ page }) => {
        await page.getByLabel("option1").check();
        await expect(page.getByLabel("option1")).toBeChecked();
        await expect(page.getByLabel("option2")).not.toBeChecked();
        await page.getByLabel("option2").check();
        await expect(page.getByLabel("option2")).toBeChecked();
        await expect(page.getByLabel("option1")).not.toBeChecked();
      });
    });

    test.describe("Keyboard tests", () => {
      test("Default: `space` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").press("Space");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
        }
      });

      test("Default: `arrowDown` press should check second", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").press("Space");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(page.getByLabel("option2")).toBeChecked();
          await expect(page.getByLabel("option1")).not.toBeChecked();
        }
      });

      test("Default: `arrowUp` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").press("Space");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(page.getByLabel("option2")).toBeChecked();
          await expect(page.getByLabel("option1")).not.toBeChecked();
          await page.keyboard.press("ArrowUp");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
        }
      });

      test("Default: `arrowDown` press twice should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").press("Space");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(page.getByLabel("option2")).toBeChecked();
          await expect(page.getByLabel("option1")).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
        }
      });
    });
  });

  test.describe("Uncontrolled tests", () => {
    test.describe("Mouse tests", () => {
      test("Uncontrolled: should render and second should be checked", async ({
        page,
      }) => {
        await expect(page.getByLabel("option1")).not.toBeChecked();
        await expect(page.getByLabel("option2")).toBeChecked();
      });

      test("Uncontrolled: should check first", async ({ page }) => {
        await page.getByLabel("option1").check();
        await expect(page.getByLabel("option1")).toBeChecked();
        await expect(page.getByLabel("option2")).not.toBeChecked();
      });

      test("Uncontrolled: should check second", async ({ page }) => {
        await page.getByLabel("option1").check();
        await expect(page.getByLabel("option1")).toBeChecked();
        await expect(page.getByLabel("option2")).not.toBeChecked();
        await page.getByLabel("option2").check();
        await expect(page.getByLabel("option2")).toBeChecked();
        await expect(page.getByLabel("option1")).not.toBeChecked();
      });
    });

    test.describe("Keyboard tests", () => {
      test("Uncontrolled: `space` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").press("Space");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
        }
      });

      test("Uncontrolled: `arrowDown` press should check second", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").press("Space");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(page.getByLabel("option2")).toBeChecked();
          await expect(page.getByLabel("option1")).not.toBeChecked();
        }
      });

      test("Uncontrolled: `arrowUp` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").press("Space");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(page.getByLabel("option2")).toBeChecked();
          await expect(page.getByLabel("option1")).not.toBeChecked();
          await page.keyboard.press("ArrowUp");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
        }
      });

      test("Uncontrolled: `arrowDown` press twice should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").press("Space");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(page.getByLabel("option2")).toBeChecked();
          await expect(page.getByLabel("option1")).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
        }
      });
    });
  });

  test.describe("Disabled tests", () => {
    test.describe("Mouse tests", () => {
      test("Disabled: should render and match screenshot", async ({ page }) => {
        const oneDisabled1 = await page.getByLabel("option1").nth(0);
        const oneDisabled2 = await page.getByLabel("option2").nth(0);
        const oneDisabled3 = await page.getByLabel("option3").nth(0);
        await expect(oneDisabled1).not.toBeChecked();
        await expect(oneDisabled2).not.toBeChecked();
        await expect(oneDisabled3).not.toBeChecked();
        await expect(oneDisabled3).toBeDisabled();
        const allDisabled1 = await page.getByLabel("option1").nth(1);
        const allDisabled2 = await page.getByLabel("option2").nth(1);
        const allDisabled3 = await page.getByLabel("option3").nth(1);
        await expect(allDisabled1).not.toBeChecked();
        await expect(allDisabled2).not.toBeChecked();
        await expect(allDisabled3).not.toBeChecked();
        await expect(allDisabled1).toBeDisabled();
        await expect(allDisabled2).toBeDisabled();
        await expect(allDisabled3).toBeDisabled();
        await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Disabled.png`);
      });

      test("Disabled: should check first (one disabled option)", async ({
        page,
      }) => {
        const option1 = await page.getByLabel("option1").nth(0);
        const option2 = await page.getByLabel("option2").nth(0);
        const option3 = await page.getByLabel("option3").nth(0);
        await option1.check();
        await expect(option1).toBeChecked();
        await expect(option2).not.toBeChecked();
        await expect(option3).not.toBeChecked();
        await expect(option3).toBeDisabled();
      });

      test("Disabled: should check second (one disabled option)", async ({
        page,
      }) => {
        const option1 = await page.getByLabel("option1").nth(0);
        const option2 = await page.getByLabel("option2").nth(0);
        const option3 = await page.getByLabel("option3").nth(0);
        await option1.check();
        await expect(option1).toBeChecked();
        await expect(option2).not.toBeChecked();
        await expect(option3).not.toBeChecked();
        await expect(option3).toBeDisabled();
        await option2.check();
        await expect(option1).not.toBeChecked();
        await expect(option2).toBeChecked();
        await expect(option3).not.toBeChecked();
        await expect(option3).toBeDisabled();
      });
    });

    test.describe("Keyboard tests", () => {
      test("Disabled: `space` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          const option1 = await page.getByLabel("option1").nth(0);
          const option2 = await page.getByLabel("option2").nth(0);
          await option1.press("Space");
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });

      test("Disabled: `arrowDown` press should check second", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          const option1 = await page.getByLabel("option1").nth(0);
          const option2 = await page.getByLabel("option2").nth(0);
          await option1.press("Space");
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
        }
      });

      test("Disabled: another `arrowDown` press should check first, as last is disabled", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          const option1 = await page.getByLabel("option1").nth(0);
          const option2 = await page.getByLabel("option2").nth(0);
          await option1.press("Space");
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });

      test("Disabled: `arrowUp` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          const option1 = await page.getByLabel("option1").nth(0);
          const option2 = await page.getByLabel("option2").nth(0);
          await option1.press("Space");
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
          await page.keyboard.press("ArrowUp");
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });
    });
  });

  test.describe("AsFormItem tests", () => {
    test.describe("Mouse tests", () => {
      test("AsFormItem: should render and be unchecked", async ({ page }) => {
        await expect(page.getByLabel("option1")).not.toBeChecked();
        await expect(page.getByLabel("option2")).not.toBeChecked();
      });

      test("AsFormItem: should check first", async ({ page }) => {
        await page.getByLabel("option1").check();
        await expect(page.getByLabel("option1")).toBeChecked();
        await expect(page.getByLabel("option2")).not.toBeChecked();
        const value = await page.locator("input").getAttribute("value");
        await expect(value).toBe("option1");
        const hiddenInput = await page.locator(`input[value="option1"]`);
        await expect(hiddenInput).toBeHidden();
      });

      test("AsFormItem: should check second", async ({ page }) => {
        await page.getByLabel("option1").check();
        await expect(page.getByLabel("option1")).toBeChecked();
        await expect(page.getByLabel("option2")).not.toBeChecked();
        await page.getByLabel("option2").check();
        await expect(page.getByLabel("option2")).toBeChecked();
        await expect(page.getByLabel("option1")).not.toBeChecked();
        const value = await page.locator("input").getAttribute("value");
        await expect(value).toBe("option2");
        const hiddenInput = await page.locator(`input[value="option2"]`);
        await expect(hiddenInput).toBeHidden();
      });
    });

    test.describe("Keyboard tests", () => {
      test("AsFormItem: `space` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").press("Space");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
        }
      });

      test("AsFormItem: `arrowDown` press should check second", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").press("Space");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(page.getByLabel("option2")).toBeChecked();
          await expect(page.getByLabel("option1")).not.toBeChecked();
        }
      });

      test("AsFormItem: `arrowUp` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").press("Space");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(page.getByLabel("option2")).toBeChecked();
          await expect(page.getByLabel("option1")).not.toBeChecked();
          await page.keyboard.press("ArrowUp");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
        }
      });

      test("AsFormItem: `ArrowDown` press twice should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").press("Space");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(page.getByLabel("option2")).toBeChecked();
          await expect(page.getByLabel("option1")).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(page.getByLabel("option1")).toBeChecked();
          await expect(page.getByLabel("option2")).not.toBeChecked();
        }
      });
    });
  });

  test.describe("Customization tests", () => {
    test.describe("Mouse tests", () => {
      test("Customization: should render, be unchecked and match screenshot", async ({
        page,
      }) => {
        const customOption1 = await page.getByLabel("option1").nth(0);
        const customOption2 = await page.getByLabel("option2").nth(0);
        const customIndicator1 = await page.getByLabel("option1").nth(1);
        const customIndicator2 = await page.getByLabel("option2").nth(1);
        const horizontal1 = await page.getByLabel("option1").nth(2);
        const horizontal2 = await page.getByLabel("option2").nth(2);
        const topLabel1 = await page.getByLabel("option1").nth(3);
        const topLabel2 = await page.getByLabel("option2").nth(3);
        await expect(customOption1).not.toBeChecked();
        await expect(customOption2).not.toBeChecked();
        await expect(customIndicator1).not.toBeChecked();
        await expect(customIndicator2).not.toBeChecked();
        await expect(horizontal1).not.toBeChecked();
        await expect(horizontal2).not.toBeChecked();
        await expect(topLabel1).not.toBeChecked();
        await expect(topLabel2).not.toBeChecked();
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-Customization.png`,
        );
      });

      test("Customization: customized option - option hover should match style", async ({
        page,
      }) => {
        await page.getByLabel("option1").nth(0).hover();
        const option1 = await page.getByLabel("option1").nth(0);
        const option2 = await page.getByLabel("option2").nth(0);
        await expect(option1).toHaveClass(/hover:bg-gohan/);
        await expect(option1).toHaveClass(/w-48/);
        await expect(option1).not.toBeChecked();
        await expect(option2).not.toBeChecked();
      });

      test("Customization: customized option - should check first", async ({
        page,
      }) => {
        await page.getByLabel("option1").nth(0).check();
        const option1 = await page.getByLabel("option1").nth(0);
        const option2 = await page.getByLabel("option2").nth(0);
        await expect(option1).toBeChecked();
        await expect(option2).not.toBeChecked();
      });

      test("Customization: customized option - should check second", async ({
        page,
      }) => {
        await page.getByLabel("option1").nth(0).check();
        const option1 = await page.getByLabel("option1").nth(0);
        const option2 = await page.getByLabel("option2").nth(0);
        await expect(option1).toBeChecked();
        await expect(option2).not.toBeChecked();
        await page.getByLabel("option2").nth(0).check();
        await expect(option1).not.toBeChecked();
        await expect(option2).toBeChecked();
      });

      test("Customization: customized indicator - should check first", async ({
        page,
      }) => {
        await page.getByLabel("option1").nth(1).check();
        const option1 = await page.getByLabel("option1").nth(1);
        const option2 = await page.getByLabel("option2").nth(1);
        await expect(option1).toBeChecked();
        await expect(option2).not.toBeChecked();
      });

      test("Customization: customized indicator - should check second and match style", async ({
        page,
      }) => {
        await page.getByLabel("option1").nth(1).check();
        const option1 = await page.getByLabel("option1").nth(1);
        const option2 = await page.getByLabel("option2").nth(1);
        await expect(option1).toBeChecked();
        await expect(option2).not.toBeChecked();
        await page.getByLabel("option2").nth(1).check();
        await expect(option1).not.toBeChecked();
        await expect(option2).toBeChecked();
        const indicator = page.locator('div[role="radio"] > div').nth(3);
        await expect(indicator).toHaveClass(/moon-checked:border-nappa/);
        await expect(indicator).toHaveClass(/after:bg-nappa/);
      });

      test("Customization: horizontal option - should check first", async ({
        page,
      }) => {
        await page.getByLabel("option1").nth(2).check();
        const option1 = await page.getByLabel("option1").nth(2);
        const option2 = await page.getByLabel("option2").nth(2);
        await expect(option1).toBeChecked();
        await expect(option2).not.toBeChecked();
      });

      test("Customization: horizontal option - should check second", async ({
        page,
      }) => {
        await page.getByLabel("option1").nth(2).check();
        const option1 = await page.getByLabel("option1").nth(2);
        const option2 = await page.getByLabel("option2").nth(2);
        await expect(option1).toBeChecked();
        await expect(option2).not.toBeChecked();
        await page.getByLabel("option2").nth(2).check();
        await expect(option1).not.toBeChecked();
        await expect(option2).toBeChecked();
      });

      test("Customization: top label option - should check first", async ({
        page,
      }) => {
        await page.getByLabel("option1").nth(3).check();
        const option1 = await page.getByLabel("option1").nth(3);
        const option2 = await page.getByLabel("option2").nth(3);
        await expect(option1).toBeChecked();
        await expect(option2).not.toBeChecked();
      });

      test("Customization: top label option - should check second", async ({
        page,
      }) => {
        await page.getByLabel("option1").nth(3).check();
        const option1 = await page.getByLabel("option1").nth(3);
        const option2 = await page.getByLabel("option2").nth(3);
        await expect(option1).toBeChecked();
        await expect(option2).not.toBeChecked();
        await page.getByLabel("option2").nth(3).check();
        await expect(option1).not.toBeChecked();
        await expect(option2).toBeChecked();
      });
    });

    test.describe("Keyboard tests", () => {
      test("Customization: customized option - `space` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(0).press("Space");
          const option1 = await page.getByLabel("option1").nth(0);
          const option2 = await page.getByLabel("option2").nth(0);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });

      test("Customization: customized option - `arrowDown` press should check second", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(0).press("Space");
          const option1 = await page.getByLabel("option1").nth(0);
          const option2 = await page.getByLabel("option2").nth(0);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
        }
      });

      test("Customization: customized option - `arrowUp` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(0).press("Space");
          const option1 = await page.getByLabel("option1").nth(0);
          const option2 = await page.getByLabel("option2").nth(0);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
          await page.keyboard.press("ArrowUp");
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });

      test("Customization: customized option - `arrowDown` press twice should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(0).press("Space");
          const option1 = await page.getByLabel("option1").nth(0);
          const option2 = await page.getByLabel("option2").nth(0);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });

      test("Customization: customized indicator - `space` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(1).press("Space");
          const option1 = await page.getByLabel("option1").nth(1);
          const option2 = await page.getByLabel("option2").nth(1);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });

      test("Customization: customized indicator - `arrowDown` press should check second", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(1).press("Space");
          const option1 = await page.getByLabel("option1").nth(1);
          const option2 = await page.getByLabel("option2").nth(1);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
        }
      });

      test("Customization: customized indicator - `arrowUp` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(1).press("Space");
          const option1 = await page.getByLabel("option1").nth(1);
          const option2 = await page.getByLabel("option2").nth(1);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
          await page.keyboard.press("ArrowUp");
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });

      test("Customization: customized indicator - `arrowDown` press twice should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(1).press("Space");
          const option1 = await page.getByLabel("option1").nth(1);
          const option2 = await page.getByLabel("option2").nth(1);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });

      test("Customization: horizontal - `space` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(2).press("Space");
          const option1 = await page.getByLabel("option1").nth(2);
          const option2 = await page.getByLabel("option2").nth(2);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });

      test("Customization: horizontal - `arrowDown` press should check second", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(2).press("Space");
          const option1 = await page.getByLabel("option1").nth(2);
          const option2 = await page.getByLabel("option2").nth(2);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
        }
      });

      test("Customization: horizontal - `arrowUp` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(2).press("Space");
          const option1 = await page.getByLabel("option1").nth(2);
          const option2 = await page.getByLabel("option2").nth(2);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
          await page.keyboard.press("ArrowUp");
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });

      test("Customization: horizontal - `arrowDown` press twice should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(2).press("Space");
          const option1 = await page.getByLabel("option1").nth(2);
          const option2 = await page.getByLabel("option2").nth(2);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });

      test("Customization: top label - `space` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(3).press("Space");
          const option1 = await page.getByLabel("option1").nth(3);
          const option2 = await page.getByLabel("option2").nth(3);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });

      test("Customization: top label - `arrowDown` press should check second", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(3).press("Space");
          const option1 = await page.getByLabel("option1").nth(3);
          const option2 = await page.getByLabel("option2").nth(3);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
        }
      });

      test("Customization: top label - `arrowUp` press should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(3).press("Space");
          const option1 = await page.getByLabel("option1").nth(3);
          const option2 = await page.getByLabel("option2").nth(3);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
          await page.keyboard.press("ArrowUp");
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });

      test("Customization: top label - `arrowDown` press twice should check first", async ({
        page,
        isMobile,
      }) => {
        if (!isMobile) {
          await page.getByLabel("option1").nth(3).press("Space");
          const option1 = await page.getByLabel("option1").nth(3);
          const option2 = await page.getByLabel("option2").nth(3);
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).not.toBeChecked();
          await expect(option2).toBeChecked();
          await page.keyboard.press("ArrowDown");
          await expect(option1).toBeChecked();
          await expect(option2).not.toBeChecked();
        }
      });
    });
  });
});

test.describe("Radio in Dark Theme", () => {
  test.describe("Default tests", () => {
    test("Default: should check first and match screenshot", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await page.getByLabel("option1").check();
      await expect(page.getByLabel("option1")).toBeChecked();
      await expect(page.getByLabel("option2")).not.toBeChecked();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Default.png`);
    });
  });

  test.describe("Disabled tests", () => {
    test("Disabled: should render and match screenshot", async ({ page }) => {
      await setDarkTheme(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Disabled.png`,
      );
    });
  });

  test.describe("Customization tests", () => {
    test("Customization: should render and match screenshot", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Customization.png`,
      );
    });
  });
});

test.describe("RTL tests", () => {
  test.describe("Default tests", () => {
    test("Default: should match screenshot", async ({ page }) => {
      await setRtl(page);
      await page.getByLabel("option1").check();
      await expect(page.getByLabel("option1")).toBeChecked();
      await expect(page.getByLabel("option2")).not.toBeChecked();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Default.png`);
    });
  });

  test.describe("Customization tests", () => {
    test("Customization: should match screenshot", async ({ page }) => {
      await setRtl(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Customization.png`,
      );
    });
  });
});
