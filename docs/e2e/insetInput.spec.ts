import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";
import { set } from "react-hook-form";

const COMPONENT_NAME = "insetInput";

setupTest(COMPONENT_NAME);

test.describe("InsetInput in Light Theme", () => {
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
    });

    test("Default: focus should change label placement and match screenshot", async ({
      page,
    }) => {
      const input = await page.locator("input");
      await input.focus();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Default-focus.png`,
      );
    });

    test("Default: Input should be editable", async ({ page }) => {
      const input = await page.locator("input");
      await input.focus();
      await input.pressSequentially("Test");
      await expect(await input.inputValue()).toBe("Test");
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-text.png`);
    });

    test("Default: hover should match style", async ({ page, isMobile }) => {
      if (!isMobile) {
        const input = await page.locator("input");
        await input.hover();
        await expect(input).toHaveClass(/hover:shadow-input-hov/);
        await expect(page).toHaveScreenshot(
          `${COMPONENT_NAME}-Default-hover.png`,
        );
      }
    });
  });

  test.describe("DifferentStates tests", () => {
    test("DifferentStates: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-States.png`);
    });

    test("DifferentStates: disabled - input should not be editable", async ({
      page,
    }) => {
      const input = await page.locator(`input`).nth(0);
      expect(await input.getAttribute("disabled")).toBe("");
      await input.focus();
      await input.pressSequentially("Test");
      await expect(await input.inputValue()).toBe("");
    });

    test("DifferentStates: error - input should be editable", async ({
      page,
    }) => {
      const input = await page.locator(`input`).nth(1);
      await input.focus();
      await input.pressSequentially("Test");
      await expect(await input.inputValue()).toBe("Test");
    });

    test("DifferentStates: read-only - input should not be editable", async ({
      page,
    }) => {
      const input = await page.locator(`input`).nth(2);
      expect(await input.getAttribute("readonly")).toBe("");
      await input.focus();
      await input.pressSequentially("Test");
      await expect(await input.inputValue()).toBe("Read only text");
    });
  });

  test.describe("Customization tests", () => {
    test("Customization: input should be editable and match style", async ({
      page,
    }) => {
      const input = await page.locator("input");
      await input.focus();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Customization.png`,
      );
    });
  });

  test.describe("TextInputTypes tests", () => {
    test("TextInputTypes: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TextInputTypes.png`,
      );
    });

    test("TextInputTypes: number - input should be editable", async ({
      page,
    }) => {
      const input = await page.locator(`input[type="number"]`);
      await input.focus();
      await input.pressSequentially("Test");
      await expect(await input.inputValue()).toBe("");
      await input.fill("123");
      await expect(await input.inputValue()).toBe("123");
    });

    test("TextInputTypes: date - input should be editable", async ({
      page,
    }) => {
      const input = await page.locator(`input[type="date"]`);
      await input.focus();
      await input.pressSequentially("Test");
      await expect(await input.inputValue()).toBe("");
      await input.pressSequentially("31122024");
      await input.fill("2024-12-31");
      await expect(await input.inputValue()).toBe("2024-12-31");
    });

    test("TextInputTypes: time - input should be editable", async ({
      page,
    }) => {
      const input = await page.locator(`input[type="time"]`);
      await input.focus();
      await input.pressSequentially("Test");
      await expect(await input.inputValue()).toBe("");
      await input.fill("00:00");
      await expect(await input.inputValue()).toBe("00:00");
    });

    test("TextInputTypes: datetime-local - input should be editable", async ({
      page,
    }) => {
      const input = await page.locator(`input[type="datetime-local"]`);
      await input.focus();
      await input.pressSequentially("Test");
      await expect(await input.inputValue()).toBe("");
      await input.fill("2024-12-31T00:00");
      await expect(await input.inputValue()).toBe("2024-12-31T00:00");
      await input.fill("");
      await expect(await input.inputValue()).toBe("");
    });

    test("TextInputTypes: email - should be invalid and match screenshot", async ({
      page,
    }) => {
      const input = await page.locator(`input[type="email"]`);
      await input.focus();
      await input.fill("Test");
      await expect(await input.inputValue()).toBe("Test");
      await expect(input).toHaveClass(/invalid/);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TextInputTypes-invalid-email.png`,
      );
    });

    test("TextInputTypes: email - should be valid", async ({ page }) => {
      const input = await page.locator(`input[type="email"]`);
      await input.focus();
      await input.fill("john@domain.com");
      await expect(await input.inputValue()).toBe("john@domain.com");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TextInputTypes-valid-email.png`,
      );
    });

    test("TextInputTypes: password - should match screenshot", async ({
      page,
    }) => {
      const input = await page.locator(`input[type="email"]`);
      await input.focus();
      await input.fill("Test");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TextInputTypes-password.png`,
      );
    });

    test("TextInputTypes: search - should match screenshot", async ({
      page,
    }) => {
      const input = await page.locator(`input[type="search"]`);
      await input.focus();
      await input.fill("Test");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TextInputTypes-search.png`,
      );
    });

    test("TextInputTypes: search - should clear search", async ({
      page,
      isMobile,
    }) => {
      if (!isMobile) {
        const input = await page.locator(`input[type="search"]`);
        await input.focus();
        await input.fill("Test");
        await page.locator(`input[type="search"]`).press("Escape");
        await expect(await input.inputValue()).toBe("");
      }
    });

    test("TextInputTypes: tel - should match screenshot", async ({ page }) => {
      const input = await page.locator(`input[type="tel"]`);
      await input.focus();
      await input.fill("12345");
      await expect(await input.inputValue()).toBe("12345");
    });

    test("TextInputTypes: url - should be invalid and match screenshot", async ({
      page,
    }) => {
      const input = await page.locator(`input[type="url"]`);
      await input.focus();
      await input.fill("Test");
      await expect(await input.inputValue()).toBe("Test");
      await expect(input).toHaveClass(/invalid/);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TextInputTypes-invalid-url.png`,
      );
    });

    test("TextInputTypes: url - should be valid", async ({ page }) => {
      const input = await page.locator(`input[type="url"]`);
      await input.focus();
      await input.fill("https://domain.com");
      await expect(await input.inputValue()).toBe("https://domain.com");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-TextInputTypes-valid-url.png`,
      );
    });
  });
});

test.describe("InsetInput in Dark Theme", () => {
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await setDarkTheme(page);
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Default.png`);
    });

    test("Default: Input should be editable", async ({ page }) => {
      await setDarkTheme(page);
      const input = await page.locator("input");
      await input.focus();
      await input.pressSequentially("Test");
      await expect(await input.inputValue()).toBe("Test");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-Default-text.png`,
      );
    });
  });

  test.describe("DifferentStates tests", () => {
    test("DifferentStates: should render and match screenshot", async ({
      page,
    }) => {
      await setDarkTheme(page);
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-States.png`);
    });
  });

  test.describe("TextInputTypes tests", () => {
    test("TextInputTypes: password - should match screenshot", async ({
      page,
    }) => {
      await setDarkTheme(page);
      const input = await page.locator(`input[type="email"]`);
      await input.focus();
      await input.fill("Test");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-TextInputTypes-password.png`,
      );
    });

    test("TextInputTypes: search - should match screenshot", async ({
      page,
    }) => {
      await setDarkTheme(page);
      const input = await page.locator(`input[type="search"]`);
      await input.focus();
      await input.fill("Test");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-dark-TextInputTypes-search.png`,
      );
    });
  });
});

test.describe("RTL tests", () => {
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await setRtl(page);
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Default.png`);
    });

    test("Default: Input should be editable", async ({ page }) => {
      await setRtl(page);
      const input = await page.locator("input");
      await input.focus();
      await input.pressSequentially("Test");
      await expect(await input.inputValue()).toBe("Test");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-Default-text.png`,
      );
    });
  });

  test.describe("TextInputTypes tests", () => {
    test("TextInputTypes: should render and match screenshot", async ({
      page,
    }) => {
      await setRtl(page);
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-TextInputTypes.png`,
      );
    });

    test("TextInputTypes: search - should match screenshot", async ({
      page,
    }) => {
      await setRtl(page);
      const input = await page.locator(`input[type="search"]`);
      await input.focus();
      await input.fill("Test");
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-rtl-TextInputTypes-search.png`,
      );
    });
  });
});
