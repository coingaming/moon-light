import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "accordion";

setupTest(COMPONENT_NAME);

test.describe(`${COMPONENT_NAME} in Light Theme`, () => {
  test.describe("Defaults tests", () => {
    test("Default: should be visible in a short term", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
    });

    test("Default: should open default accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Default" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Default" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");

      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default-Open.png`);
    });

    test("Default: should close default accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Default" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Default" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");

      await page.getByRole("button", { name: "Default" }).click();
      await page.waitForTimeout(100);

      const closedState = await page
        .getByRole("button", { name: "Default" })
        .getAttribute("data-state");

      await expect(closedState).toEqual("closed");
    });

    test("Default: should open test accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Test accordion" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");
    });

    test("Default: should close test accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Test accordion" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");

      await page.getByRole("button", { name: "Test accordion" }).click();
      await page.waitForTimeout(100);

      const closedState = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(closedState).toEqual("closed");
    });
  });

  test.describe("OpenByDefault tests", () => {
    test("OpenByDefault: should be visible in a short term", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-OpenByDefault.png`,
      );
    });

    test("OpenByDefault: should close accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Test accordion" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(state).toEqual("closed");
    });

    test("OpenByDefault: should open accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Test accordion" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(state).toEqual("closed");

      await page.getByRole("button", { name: "Test accordion" }).click();
      await page.waitForTimeout(100);

      const closedState = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(closedState).toEqual("open");
    });
  });

  test.describe("SingleOpen tests", () => {
    test("SingleOpen: should be visible in a short term", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-SingleOpen.png`);
    });

    test("SingleOpen: should open first accordion", async ({ page }) => {
      const allButtons = await page.locator("h3 > button").all();
      await allButtons[0].click();
      await page.waitForTimeout(100);

      const state = await allButtons[0].getAttribute("data-state");

      await expect(state).toEqual("open");
    });

    test("SingleOpen: should open second accordion and close first", async ({
      page,
    }) => {
      const buttons = await page.locator("h3 > button").all();
      await buttons[0].click();
      await page.waitForTimeout(100);

      const state = await buttons[0].getAttribute("data-state");

      await expect(state).toEqual("open");

      await buttons[1].click();
      await page.waitForTimeout(100);

      const stateOfFirst = await buttons[0].getAttribute("data-state");
      const stateOfSecond = await buttons[1].getAttribute("data-state");

      await expect(stateOfFirst).toEqual("closed");
      await expect(stateOfSecond).toEqual("open");
    });

    test("SingleOpen: should open first accordion and close second", async ({
      page,
    }) => {
      const allButtons = await page.locator("h3 > button").all();
      await allButtons[1].click();
      await page.waitForTimeout(100);

      const stateOfFirst = await allButtons[0].getAttribute("data-state");
      const stateOfSecond = await allButtons[1].getAttribute("data-state");

      await expect(stateOfFirst).toEqual("closed");
      await expect(stateOfSecond).toEqual("open");

      await allButtons[0].click();
      await page.waitForTimeout(100);

      const secondStateOfFirst = await allButtons[0].getAttribute("data-state");
      const secondStateOfSecond =
        await allButtons[1].getAttribute("data-state");

      await expect(secondStateOfFirst).toEqual("open");
      await expect(secondStateOfSecond).toEqual("closed");
    });
  });

  test.describe("Disabled tests", () => {
    test("Disabled: should be visible in a short term", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Disabled.png`);
    });

    test("Disabled: should be disabled", async ({ page }) => {
      const button = await page.locator("h3 > button");
      await expect(button).toBeDisabled();
    });
  });

  test.describe("HeaderContent tests", () => {
    test("HeaderContent: should be visible in a short term", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-HeaderContent.png`,
      );
    });

    test("HeaderContent: should open accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Test accordion" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");
    });

    test("HeaderContent: should close accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Test accordion" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");

      await page.getByRole("button", { name: "Test accordion" }).click();
      await page.waitForTimeout(100);

      const closedState = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(closedState).toEqual("closed");
    });
  });

  test.describe("Sizes tests", () => {
    test("Sizes: should be visible in a short term", async ({ page }) => {
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Sizes.png`);
    });

    test("Sizes: should open XL accordion", async ({ page }) => {
      await page.getByRole("button", { name: "X Large (xl)" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "X Large (xl)" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");
    });

    test("Sizes: should close XL accordion", async ({ page }) => {
      await page.getByRole("button", { name: "X Large (xl)" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "X Large (xl)" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");

      await page.getByRole("button", { name: "X Large (xl)" }).click();
      await page.waitForTimeout(100);

      const closedState = await page
        .getByRole("button", { name: "X Large (xl)" })
        .getAttribute("data-state");

      await expect(closedState).toEqual("closed");
    });

    test("Sizes: should open LG accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Large (lg)" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Large (lg)" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");
    });

    test("Sizes: should close LG accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Large (lg)" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Large (lg)" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");

      await page.getByRole("button", { name: "Large (lg)" }).click();
      await page.waitForTimeout(100);

      const closedState = await page
        .getByRole("button", { name: "Large (lg)" })
        .getAttribute("data-state");

      await expect(closedState).toEqual("closed");
    });

    test("Sizes: should open MD accordion", async ({ page }) => {
      await page
        .getByRole("button", { name: "Medium is default (md)" })
        .click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Medium is default (md)" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");
    });

    test("Sizes: should close MD accordion", async ({ page }) => {
      await page
        .getByRole("button", { name: "Medium is default (md)" })
        .click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Medium is default (md)" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");

      await page
        .getByRole("button", { name: "Medium is default (md)" })
        .click();
      await page.waitForTimeout(100);

      const closedState = await page
        .getByRole("button", { name: "Medium is default (md)" })
        .getAttribute("data-state");

      await expect(closedState).toEqual("closed");
    });

    test("Sizes: should open SM accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Small (sm)" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Small (sm)" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");
    });

    test("Sizes: should close SM accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Small (sm)" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Small (sm)" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");

      await page.getByRole("button", { name: "Small (sm)" }).click();
      await page.waitForTimeout(100);

      const closedState = await page
        .getByRole("button", { name: "Small (sm)" })
        .getAttribute("data-state");

      await expect(closedState).toEqual("closed");
    });
  });

  test.describe("Customization tests", () => {
    test("Customization: should be visible in a short term", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Customization.png`,
      );
    });

    test("Customization: should open accordion", async ({ page }) => {
      await page
        .getByRole("button", { name: "Test accordion with background" })
        .click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Test accordion with background" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");

      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Customization-Open.png`,
      );
    });

    test("Customization: should close accordion", async ({ page }) => {
      await page
        .getByRole("button", { name: "Test accordion with background" })
        .click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Test accordion with background" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");

      await page
        .getByRole("button", { name: "Test accordion with background" })
        .click();
      await page.waitForTimeout(100);

      const closedState = await page
        .getByRole("button", { name: "Test accordion with background" })
        .getAttribute("data-state");

      await expect(closedState).toEqual("closed");
    });
  });

  test.describe("ControlOutside tests", () => {
    test("ControlOutside: should be visible in a short term", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-ControlOutside.png`,
      );
    });

    test("ControlOutside: should close default accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Default" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Default" })
        .getAttribute("data-state");

      await expect(state).toEqual("closed");
    });

    test("ControlOutside: should open default accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Default" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Default" })
        .getAttribute("data-state");

      await expect(state).toEqual("closed");

      await page.getByRole("button", { name: "Default" }).click();
      await page.waitForTimeout(100);

      const closedState = await page
        .getByRole("button", { name: "Default" })
        .getAttribute("data-state");

      await expect(closedState).toEqual("open");
    });

    test("ControlOutside: should open test accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Test accordion" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");
    });

    test("ControlOutside: should close test accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Test accordion" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(state).toEqual("open");

      await page.getByRole("button", { name: "Test accordion" }).click();
      await page.waitForTimeout(100);

      const closedState = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(closedState).toEqual("closed");
    });

    test("ControlOutside: should close 2nd accordion", async ({ page }) => {
      await page.getByRole("button", { name: "Toggle All" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(state).toEqual("closed");
    });

    test("ControlOutside: should open both accordions", async ({ page }) => {
      await page.getByRole("button", { name: "Toggle All" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(state).toEqual("closed");

      await page.getByRole("button", { name: "Toggle All" }).click();
      await page.waitForTimeout(100);

      const stateOfFirst = await page
        .getByRole("button", { name: "Default" })
        .getAttribute("data-state");

      const stateOfSecond = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(stateOfFirst).toEqual("open");
      await expect(stateOfSecond).toEqual("open");
    });

    test("ControlOutside: should close both accordions", async ({ page }) => {
      await page.getByRole("button", { name: "Toggle All" }).click();
      await page.waitForTimeout(100);

      const state = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(state).toEqual("closed");

      await page.getByRole("button", { name: "Toggle All" }).click();
      await page.waitForTimeout(100);

      const stateOfFirst = await page
        .getByRole("button", { name: "Default" })
        .getAttribute("data-state");

      const stateOfSecond = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(stateOfFirst).toEqual("open");
      await expect(stateOfSecond).toEqual("open");

      await page.getByRole("button", { name: "Toggle All" }).click();
      await page.waitForTimeout(100);

      const closedStateOfFirst = await page
        .getByRole("button", { name: "Default" })
        .getAttribute("data-state");

      const closedStateOfSecond = await page
        .getByRole("button", { name: "Test accordion" })
        .getAttribute("data-state");

      await expect(closedStateOfFirst).toEqual("closed");
      await expect(closedStateOfSecond).toEqual("closed");
    });
  });
});

test.describe(`${COMPONENT_NAME} in Dark Theme`, () => {
  test.beforeEach(async ({ page }) => {
    await setDarkTheme(page);
  });
  test("Default: should be visible in a short term and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Default.png`);
  });

  test("Default: should open default accordion and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Default" }).click();
    await page.waitForTimeout(100);
    const state = await page
      .getByRole("button", { name: "Default" })
      .getAttribute("data-state");
    await expect(state).toEqual("open");
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-Default-Open.png`,
    );
  });

  test("OpenByDefault: should be visible in a short term and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-OpenByDefault.png`,
    );
  });

  test("Disabled: should be visible in a short term and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Disabled.png`);
  });

  test("HeaderContent: should be visible in a short term and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-HeaderContent.png`,
    );
  });

  test("Customization: should open accordion and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Test accordion with background" })
      .click();
    await page.waitForTimeout(100);
    const state = await page
      .getByRole("button", { name: "Test accordion with background" })
      .getAttribute("data-state");
    await expect(state).toEqual("open");
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-Customization-Open.png`,
    );
  });

  test("ControlOutside: should be visible in a short term and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-ControlOutside.png`,
    );
  });
});

test.describe(`${COMPONENT_NAME} in RTL`, () => {
  test.beforeEach(async ({ page }) => {
    await setRtl(page);
  });
  test("Default: RTL support -  should be visible in a short term", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RTL-Default.png`);
  });

  test("Default: RTL support - should open default accordion", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Default" }).click();
    await page.waitForTimeout(100);
    const state = await page
      .getByRole("button", { name: "Default" })
      .getAttribute("data-state");
    await expect(state).toEqual("open");
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-RTL-Default-Open.png`,
    );
  });

  test("OpenByDefault: RTL support - should be visible in a short term", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-RTL-OpenByDefault.png`,
    );
  });

  test("SingleOpen: RTL support - should be visible in a short term", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RTL-SingleOpen.png`);
  });

  test("Disabled: RTL support - should be visible in a short term", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RTL-Disabled.png`);
  });

  test("HeaderContent: RTL support - should be visible in a short term", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-RTL-HeaderContent.png`,
    );
  });

  test("Sizes: RTL support - should be visible in a short term", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RTL-Sizes.png`);
  });

  test("Customization: RTL support - should be visible in a short term", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-RTL-Customization.png`,
    );
  });

  test("Customization: RTLsupport - should open accordion", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Test accordion with background" })
      .click();
    await page.waitForTimeout(100);
    const state = await page
      .getByRole("button", { name: "Test accordion with background" })
      .getAttribute("data-state");
    await expect(state).toEqual("open");
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-RTL-Customization-Open.png`,
    );
  });

  test("ControlOutside: RTL support - should be visible in a short term", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-RTL-ControlOutside.png`,
    );
  });
});
