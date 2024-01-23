import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "drawer";

setupTest(COMPONENT_NAME);

test.describe(`${COMPONENT_NAME} in Light Theme`, () => {
  test.describe("Default tests", () => {
    test("Default: should open default drawer and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Show default Drawer" }).click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
    });

    test("Default: click outside panel should close default drawer", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Show default Drawer" }).click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await page.mouse.click(10, 10);
      const openDrawer = page.locator('div[role="dialog"]');
      await expect(openDrawer).not.toBeVisible();
    });

    test("Default: click on panel should not close default drawer", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Show default Drawer" }).click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await page.getByText("Default Drawer", { exact: true }).click();
      const openDrawer = page.locator('div[role="dialog"]');
      await expect(openDrawer).toBeVisible();
    });
  });

  test.describe("Positions tests", () => {
    test("Positions: should open start drawer and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer at start of screen" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Start.png`);
    });

    test("Positions: click outside panel should close start drawer", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer at start of screen" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();

      const viewportSize = await page.viewportSize();
      if (viewportSize && viewportSize.width) {
        const x = viewportSize.width - 10;
        await page.mouse.click(x, 10);
      } else {
        console.error("Viewport size is not defined.");
      }
      const openDrawer = page.locator('div[role="dialog"]');
      await expect(openDrawer).not.toBeVisible();
    });

    test("Positions: click on panel should not close start drawer", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer at start of screen" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await page
        .getByText("Screen start aligned Drawer", { exact: true })
        .click();
      const openDrawer = page.locator('div[role="dialog"]');
      await expect(openDrawer).toBeVisible();
    });

    test("Positions: should open top drawer and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer at top of screen" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Top.png`);
    });

    test("Positions: click outside panel should close top drawer", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer at top of screen" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();

      const viewportSize = await page.viewportSize();
      if (viewportSize && viewportSize.height) {
        const y = viewportSize.height - 10;
        await page.mouse.click(10, y);
      } else {
        console.error("Viewport size is not defined.");
      }
      const openDrawer = page.locator('div[role="dialog"]');
      await expect(openDrawer).not.toBeVisible();
    });

    test("Positions: click on panel should not close top drawer", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer at top of screen" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await page
        .getByText("Screen top aligned Drawer", { exact: true })
        .click();
      const openDrawer = page.locator('div[role="dialog"]');
      await expect(openDrawer).toBeVisible();
    });

    test("Positions: should open bottom drawer and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer at bottom of screen" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Bottom.png`);
    });

    test("Positions: click outside panel should close bottom drawer", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer at bottom of screen" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await page.mouse.click(10, 10);
      const openDrawer = page.locator('div[role="dialog"]');
      await expect(openDrawer).not.toBeVisible();
    });

    test("Positions: click on panel should not close bottom drawer", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer at bottom of screen" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await page
        .getByText("Screen bottom aligned Drawer", { exact: true })
        .click();
      const openDrawer = page.locator('div[role="dialog"]');
      await expect(openDrawer).toBeVisible();
    });
  });

  test.describe("WithBackdrop tests", () => {
    test("WithBackdrop: should open drawer and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer with Backdrop" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithBackdrop.png`);
    });

    test("WithBackdrop: click outside panel should close drawer", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer with Backdrop" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await page.mouse.click(10, 10);
      const openDrawer = page.locator('div[role="dialog"]');
      await expect(openDrawer).not.toBeVisible();
    });

    test("WithBackdrop: click on panel should not close drawer", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer with Backdrop" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await page.getByText("Drawer with Backdrop", { exact: true }).click();
      const openDrawer = page.locator('div[role="dialog"]');
      await expect(openDrawer).toBeVisible();
    });
  });

  test.describe("WithClose tests", () => {
    test("WithClose: should open drawer and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer with Close button" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithClose.png`);
    });

    test("WithClose: click outside panel should close drawer", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer with Close button" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await page.mouse.click(10, 10);
      const openDrawer = page.locator('div[role="dialog"]');
      await expect(openDrawer).not.toBeVisible();
    });

    test("WithClose: click on panel should not close drawer", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer with Close button" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await page.getByText("Header", { exact: true }).click();
      const openDrawer = page.locator('div[role="dialog"]');
      await expect(openDrawer).toBeVisible();
    });

    test("WithClose: click on close button should close drawer", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Show Drawer with Close button" })
        .click();
      await page.waitForTimeout(100);
      const drawer = page.locator('div[role="dialog"]');
      await expect(drawer).toBeVisible();
      await page.getByLabel("Close").click();
      const openDrawer = page.locator('div[role="dialog"]');
      await expect(openDrawer).not.toBeVisible();
    });
  });
});

test.describe(`${COMPONENT_NAME} in Dark Theme`, () => {
  test.beforeEach(async ({ page }) => {
    await setDarkTheme(page);
  });

  test("Default: should open default drawer and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Show default Drawer" }).click();
    await page.waitForTimeout(100);
    const drawer = page.locator('div[role="dialog"]');
    await expect(drawer).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Default.png`);
  });

  test("Positions: should open start drawer and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Show Drawer at start of screen" })
      .click();
    await page.waitForTimeout(100);
    const drawer = page.locator('div[role="dialog"]');
    await expect(drawer).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Start.png`);
  });

  test("Positions: should open top drawer and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Show Drawer at top of screen" })
      .click();
    await page.waitForTimeout(100);
    const drawer = page.locator('div[role="dialog"]');
    await expect(drawer).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Top.png`);
  });

  test("Positions: should open bottom drawer and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Show Drawer at bottom of screen" })
      .click();
    await page.waitForTimeout(100);
    const drawer = page.locator('div[role="dialog"]');
    await expect(drawer).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Bottom.png`);
  });

  test("WithBackdrop: should open drawer and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Show Drawer with Backdrop" })
      .click();
    await page.waitForTimeout(100);
    const drawer = page.locator('div[role="dialog"]');
    await expect(drawer).toBeVisible();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-WithBackdrop.png`,
    );
  });

  test("WithClose: should open drawer and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Show Drawer with Close button" })
      .click();
    await page.waitForTimeout(100);
    const drawer = page.locator('div[role="dialog"]');
    await expect(drawer).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-WithClose.png`);
  });
});

test.describe(`${COMPONENT_NAME} in RTL`, () => {
  test.beforeEach(async ({ page }) => {
    await setRtl(page);
  });
  test("Default: component support for RTL - should open default drawer and match screenshot", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Show default Drawer" }).click();
    await page.waitForTimeout(100);
    const drawer = page.locator('div[role="dialog"]');
    await expect(drawer).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Default.png`);
  });

  test("Positions: component support for RTL - should open start drawer and match screenshot", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Show Drawer at start of screen" })
      .click();
    await page.waitForTimeout(100);
    const drawer = page.locator('div[role="dialog"]');
    await expect(drawer).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Start.png`);
  });

  test("Positions: component support for RTL - should open top drawer and match screenshot", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Show Drawer at top of screen" })
      .click();
    await page.waitForTimeout(100);
    const drawer = page.locator('div[role="dialog"]');
    await expect(drawer).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Top.png`);
  });

  test("Positions: component support for RTL - should open bottom drawer and match screenshot", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Show Drawer at bottom of screen" })
      .click();
    await page.waitForTimeout(100);
    const drawer = page.locator('div[role="dialog"]');
    await expect(drawer).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-Bottom.png`);
  });

  test("WithBackdrop: component support for RTL - should open drawer and match screenshot", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Show Drawer with Backdrop" })
      .click();
    await page.waitForTimeout(100);
    const drawer = page.locator('div[role="dialog"]');
    await expect(drawer).toBeVisible();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-rtl-WithBackdrop.png`,
    );
  });

  test("WithClose: component support for RTL - should open drawer and match screenshot", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Show Drawer with Close button" })
      .click();
    await page.waitForTimeout(100);
    const drawer = page.locator('div[role="dialog"]');
    await expect(drawer).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-rtl-WithClose.png`);
  });
});
