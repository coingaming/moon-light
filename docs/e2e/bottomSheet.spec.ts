import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme } from "@/utils/playwrightHelpers";
import {
  PlayWrightEndTouch,
  PlayWrightMoveTouch,
  PlayWrightStartTouch,
  createTouchEvent,
} from "@/utils/playwrightDrag";

const COMPONENT_NAME = "bottomSheet";

setupTest(COMPONENT_NAME);

test.describe(`${COMPONENT_NAME} in Light Theme`, () => {
  test.describe("Defaults tests", () => {
    test("Default: should open default bottomsheet and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Default BottomSheet" }).click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Default.png`);
    });

    test("Default: click outside panel should close default bottomsheet", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Default BottomSheet" }).click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.mouse.click(10, 10);
      await expect(bottomsheet).not.toBeVisible();
    });

    test("Default: click on panel should not close default bottomsheet", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Default BottomSheet" }).click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.getByText("BottomSheet content").click();
      await expect(bottomsheet).toBeVisible();
    });

    test("Default: enter press should open default bottomsheet", async ({
      page,
    }) => {
      const button = page.getByRole("button", { name: "Default BottomSheet" });
      await button.focus();
      await button.press("Enter");
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
    });
  });

  test.describe("Sizes tests", () => {
    test("Sizes: should open small bottomsheet and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Default small BottomSheet" })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Small.png`);
    });

    test("Sizes: click outside panel should close small bottomsheet", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Default small BottomSheet" })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.mouse.click(10, 10);
      await expect(bottomsheet).not.toBeVisible();
    });

    test("Sizes: click on optional close button should close small bottomsheet", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Default small BottomSheet" })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.getByRole("button", { name: "Optional close" }).click();
      await expect(bottomsheet).not.toBeVisible();
    });

    test("Sizes: click on panel should not close small bottomsheet", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Default small BottomSheet" })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.getByText("BottomSheet content").click();
      await expect(bottomsheet).toBeVisible();
    });

    test("Sizes: enter press should open small bottomsheet", async ({
      page,
    }) => {
      const button = page.getByRole("button", {
        name: "Default small BottomSheet",
      });
      await button.focus();
      await button.press("Enter");
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
    });

    test("Sizes: should open medium bottomsheet and match screenshot", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Medium BottomSheet" }).click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Medium.png`);
    });

    test("Sizes: click outside panel should close medium bottomsheet", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Medium BottomSheet" }).click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.mouse.click(10, 10);
      await expect(bottomsheet).not.toBeVisible();
    });

    test("Sizes: click on optional close button should close medium bottomsheet", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Medium BottomSheet" }).click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.getByRole("button", { name: "Optional close" }).click();
      await expect(bottomsheet).not.toBeVisible();
    });

    test("Sizes: click on panel should not close medium bottomsheet", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Medium BottomSheet" }).click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.getByText("BottomSheet content").click();
      await expect(bottomsheet).toBeVisible();
    });

    test("Sizes: enter press should open medium bottomsheet", async ({
      page,
    }) => {
      const button = page.getByRole("button", {
        name: "Medium BottomSheet",
      });
      await button.focus();
      await button.press("Enter");
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
    });

    test("Sizes: should open fullscreen bottomsheet and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Fullscreen BottomSheet" })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-Fullscreen.png`);
    });

    test("Sizes: click on optional close button should close fullscreen bottomsheet", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Fullscreen BottomSheet" })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.getByRole("button", { name: "Optional close" }).click();
      await expect(bottomsheet).not.toBeVisible();
    });

    test("Sizes: click on panel should not close fullscreen bottomsheet", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "Fullscreen BottomSheet" })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.getByText("BottomSheet content").click();
      await expect(bottomsheet).toBeVisible();
    });

    test("Sizes: enter press should open fullscreen bottomsheet", async ({
      page,
    }) => {
      const button = page.getByRole("button", {
        name: "Fullscreen BottomSheet",
      });
      await button.focus();
      await button.press("Enter");
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
    });
  });

  test.describe("WithDraghandle tests", () => {
    test("WithDraghandle: should open bottomsheet with draghandle and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "BottomSheet with Draghandle" })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-WithDraghandle.png`,
      );
    });

    test("WithDraghandle: click outside panel should close bottomsheet with draghandle", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "BottomSheet with Draghandle" })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.mouse.click(10, 10);
      await expect(bottomsheet).not.toBeVisible();
    });

    test("WithDraghandle: click on panel should not close bottomsheet with draghandle", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "BottomSheet with Draghandle" })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.getByText("BottomSheet content").click();
      await expect(bottomsheet).toBeVisible();
    });

    test("WithDraghandle: enter press should open bottomsheet with draghandle", async ({
      page,
    }) => {
      const button = page.getByRole("button", {
        name: "BottomSheet with Draghandle",
      });
      await button.focus();
      await button.press("Enter");
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
    });

    test("WithDraghandle: should not close default bottomsheet if drag less than half", async ({
      page,
      isMobile,
      browserName,
    }) => {
      if (!isMobile || browserName === "webkit") {
        return;
      }
      await page.locator("button.text-moon-14").click();
      await page.waitForTimeout(300);

      const state = await page
        .getByRole("dialog")
        .getAttribute("data-headlessui-state");
      await expect(state).toEqual("open");

      await page.evaluate(createTouchEvent);
      await page.evaluate(PlayWrightStartTouch);
      await page.evaluate(PlayWrightMoveTouch);
      await page.evaluate(PlayWrightEndTouch);

      await page.evaluate(async () => {
        const s = ".after\\:bg-beerus";
        const size = document
          .querySelector("div[role=dialog] .bg-goku")
          ?.getBoundingClientRect()?.height;
        //@ts-ignore
        window.PlayWrightStartTouch(s, { x: 0, y: 0 });
        //@ts-ignore
        window.PlayWrightMoveTouch(s, size / 2 - 30, 10);
        await new Promise((res) =>
          setTimeout(() => {
            //@ts-ignore
            window.PlayWrightEndTouch(s);
            res(0);
          }, 300),
        );
      });
      await page.waitForTimeout(300);
      const endState = await page
        .getByRole("dialog")
        .getAttribute("data-headlessui-state");
      await expect(endState).toEqual("open");
    });

    test("WithDraghandle: should close default bottomsheet if drag more than half", async ({
      page,
      isMobile,
      browserName,
    }) => {
      if (!isMobile || browserName === "webkit") {
        return;
      }
      await page.locator("button.text-moon-14").click();
      await page.waitForTimeout(300);

      const state = await page
        .getByRole("dialog")
        .getAttribute("data-headlessui-state");
      await expect(state).toEqual("open");

      await page.evaluate(createTouchEvent);
      await page.evaluate(PlayWrightStartTouch);
      await page.evaluate(PlayWrightMoveTouch);
      await page.evaluate(PlayWrightEndTouch);

      await page.evaluate(async () => {
        const s = ".after\\:bg-beerus";
        const size = document
          .querySelector("div[role=dialog] .bg-goku")
          ?.getBoundingClientRect()?.height;
        //@ts-ignore
        window.PlayWrightStartTouch(s, { x: 0, y: 0 });
        //@ts-ignore
        window.PlayWrightMoveTouch(s, size / 2 + 30, 10);
        await new Promise((res) =>
          setTimeout(() => {
            //@ts-ignore
            window.PlayWrightEndTouch(s);
            res(0);
          }, 300),
        );
      });
      await page.waitForTimeout(500);
      await expect(
        page.locator("div[role=dialog] .bg-goku"),
      ).not.toBeAttached();
    });
  });

  test.describe("WithTitle tests", () => {
    test("WithTitle: should open bottomsheet with title and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "BottomSheet with Title", exact: true })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-WithTitle.png`);
    });

    test("WithTitle: click outside panel should close bottomsheet with title", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "BottomSheet with Title", exact: true })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.mouse.click(10, 10);
      await expect(bottomsheet).not.toBeVisible();
    });

    test("WithTitle: click on panel should not close bottomsheet with title", async ({
      page,
    }) => {
      await page
        .getByRole("button", { name: "BottomSheet with Title", exact: true })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.getByText("BottomSheet content").click();
      await expect(bottomsheet).toBeVisible();
    });

    test("WithTitle: enter press should open bottomsheet with title", async ({
      page,
    }) => {
      const button = page.getByRole("button", {
        name: "BottomSheet with Title",
        exact: true,
      });
      await button.focus();
      await button.press("Enter");
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
    });

    test("WithTitle: should open bottomsheet with title and draghandle and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", {
          name: "BottomSheet with Title and Draghandle",
          exact: true,
        })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-WithTitleAndDraghandle.png`,
      );
    });

    test("WithTitle: click outside panel should close bottomsheet with title and draghandle", async ({
      page,
    }) => {
      await page
        .getByRole("button", {
          name: "BottomSheet with Title and Draghandle",
          exact: true,
        })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.mouse.click(10, 10);
      await expect(bottomsheet).not.toBeVisible();
    });

    test("WithTitle: click on panel should not close bottomsheet with title and draghandle", async ({
      page,
    }) => {
      await page
        .getByRole("button", {
          name: "BottomSheet with Title and Draghandle",
          exact: true,
        })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.getByText("BottomSheet content").click();
      await expect(bottomsheet).toBeVisible();
    });

    test("WithTitle: enter press should open bottomsheet with title and draghandle", async ({
      page,
    }) => {
      const button = page.getByRole("button", {
        name: "BottomSheet with Title and Draghandle",
        exact: true,
      });
      await button.focus();
      await button.press("Enter");
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
    });

    test("WithTitle: should not close bottomsheet with title and draghandle if drag less than half", async ({
      page,
      isMobile,
      browserName,
    }) => {
      if (!isMobile || browserName === "webkit") {
        return;
      }
      await page
        .getByRole("button", { name: "BottomSheet with Title and Draghandle" })
        .click();
      await page.waitForTimeout(300);

      const state = await page
        .getByRole("dialog")
        .getAttribute("data-headlessui-state");
      await expect(state).toEqual("open");

      await page.evaluate(createTouchEvent);
      await page.evaluate(PlayWrightStartTouch);
      await page.evaluate(PlayWrightMoveTouch);
      await page.evaluate(PlayWrightEndTouch);

      await page.evaluate(async () => {
        const s = ".after\\:bg-beerus";
        const size = document
          .querySelector("div[role=dialog] .bg-goku")
          ?.getBoundingClientRect()?.height;
        //@ts-ignore
        window.PlayWrightStartTouch(s, { x: 0, y: 0 });
        //@ts-ignore
        window.PlayWrightMoveTouch(s, size / 2 - 30, 10);
        await new Promise((res) =>
          setTimeout(() => {
            //@ts-ignore
            window.PlayWrightEndTouch(s);
            res(0);
          }, 300),
        );
      });
      await page.waitForTimeout(300);
      const endState = await page
        .getByRole("dialog")
        .getAttribute("data-headlessui-state");
      await expect(endState).toEqual("open");
    });

    test("WithTitle: should close bottomsheet with title and draghandle if drag more than half", async ({
      page,
      isMobile,
      browserName,
    }) => {
      if (!isMobile || browserName === "webkit") {
        return;
      }
      await page
        .getByRole("button", { name: "BottomSheet with Title and Draghandle" })
        .click();
      await page.waitForTimeout(300);

      const state = await page
        .getByRole("dialog")
        .getAttribute("data-headlessui-state");
      await expect(state).toEqual("open");

      await page.evaluate(createTouchEvent);
      await page.evaluate(PlayWrightStartTouch);
      await page.evaluate(PlayWrightMoveTouch);
      await page.evaluate(PlayWrightEndTouch);

      await page.evaluate(async () => {
        const s = ".after\\:bg-beerus";
        const size = document
          .querySelector("div[role=dialog] .bg-goku")
          ?.getBoundingClientRect()?.height;
        //@ts-ignore
        window.PlayWrightStartTouch(s, { x: 0, y: 0 });
        //@ts-ignore
        window.PlayWrightMoveTouch(s, size / 2 + 30, 10);
        await new Promise((res) =>
          setTimeout(() => {
            //@ts-ignore
            window.PlayWrightEndTouch(s);
            res(0);
          }, 300),
        );
      });
      await page.waitForTimeout(500);
      await expect(
        page.locator("div[role=dialog] .bg-goku"),
      ).not.toBeAttached();
    });
  });

  test.describe("Customization tests", () => {
    test("Customization: should open customized bottomsheet and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", {
          name: "Customized BottomSheet",
          exact: true,
        })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await expect(page).toHaveScreenshot(
        `${COMPONENT_NAME}-Customization.png`,
      );
    });

    test("Customization: click outside panel should close customized bottomsheet", async ({
      page,
    }) => {
      await page
        .getByRole("button", {
          name: "Customized BottomSheet",
          exact: true,
        })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.mouse.click(10, 10);
      await expect(bottomsheet).not.toBeVisible();
    });

    test("Customization: click on panel should not close customized bottomsheet", async ({
      page,
    }) => {
      await page
        .getByRole("button", {
          name: "Customized BottomSheet",
          exact: true,
        })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.getByText("BottomSheet content").click();
      await expect(bottomsheet).toBeVisible();
    });

    test("Customization: enter press should open customized bottomsheet", async ({
      page,
    }) => {
      const button = page.getByRole("button", {
        name: "Customized BottomSheet",
        exact: true,
      });
      await button.focus();
      await button.press("Enter");
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
    });

    test("Customization: should not close bottomsheet if drag less than half", async ({
      page,
      isMobile,
      browserName,
    }) => {
      if (!isMobile || browserName === "webkit") {
        return;
      }
      await page
        .getByRole("button", { name: "Customized BottomSheet" })
        .click();
      await page.waitForTimeout(300);

      const state = await page
        .getByRole("dialog")
        .getAttribute("data-headlessui-state");
      await expect(state).toEqual("open");

      await page.evaluate(createTouchEvent);
      await page.evaluate(PlayWrightStartTouch);
      await page.evaluate(PlayWrightMoveTouch);
      await page.evaluate(PlayWrightEndTouch);

      await page.evaluate(async () => {
        const s = ".after\\:bg-piccolo";
        console.log("handle:", s);

        const size = document
          .querySelector("div[role=dialog] .bg-raditz")
          ?.getBoundingClientRect()?.height;
        //@ts-ignore
        window.PlayWrightStartTouch(s, { x: 0, y: 0 });
        //@ts-ignore
        window.PlayWrightMoveTouch(s, size / 2 - 30, 10);
        await new Promise((res) =>
          setTimeout(() => {
            //@ts-ignore
            window.PlayWrightEndTouch(s);
            res(0);
          }, 300),
        );
      });
      await page.waitForTimeout(300);
      const endState = await page
        .getByRole("dialog")
        .getAttribute("data-headlessui-state");
      await expect(endState).toEqual("open");
    });

    test("Customization: should close bottomsheet if drag more than half", async ({
      page,
      isMobile,
      browserName,
    }) => {
      if (!isMobile || browserName === "webkit") {
        return;
      }
      await page
        .getByRole("button", { name: "Customized BottomSheet" })
        .click();
      await page.waitForTimeout(300);

      const state = await page
        .getByRole("dialog")
        .getAttribute("data-headlessui-state");
      await expect(state).toEqual("open");

      await page.evaluate(createTouchEvent);
      await page.evaluate(PlayWrightStartTouch);
      await page.evaluate(PlayWrightMoveTouch);
      await page.evaluate(PlayWrightEndTouch);

      await page.evaluate(async () => {
        const s = ".after\\:bg-piccolo";
        const size = document
          .querySelector("div[role=dialog] .bg-raditz")
          ?.getBoundingClientRect()?.height;
        //@ts-ignore
        window.PlayWrightStartTouch(s, { x: 0, y: 0 });
        //@ts-ignore
        window.PlayWrightMoveTouch(s, size / 2 + 30, 10);
        await new Promise((res) =>
          setTimeout(() => {
            //@ts-ignore
            window.PlayWrightEndTouch(s);
            res(0);
          }, 300),
        );
      });
      await page.waitForTimeout(500);
      await expect(
        page.locator("div[role=dialog] .bg-goku"),
      ).not.toBeAttached();
    });
  });

  test.describe("RootPortal tests", () => {
    test("RootPortal: should open bottomsheet and match screenshot", async ({
      page,
    }) => {
      await page
        .getByRole("button", {
          name: "BottomSheet",
          exact: true,
        })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-RootPortal.png`);
    });

    test("RootPortal: click outside panel should close bottomsheet", async ({
      page,
    }) => {
      await page
        .getByRole("button", {
          name: "BottomSheet",
          exact: true,
        })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.mouse.click(10, 10);
      await expect(bottomsheet).not.toBeVisible();
    });

    test("RootPortal: click on panel should not close bottomsheet", async ({
      page,
    }) => {
      await page
        .getByRole("button", {
          name: "BottomSheet",
          exact: true,
        })
        .click();
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
      await page.getByText("BottomSheet content").click();
      await expect(bottomsheet).toBeVisible();
    });

    test("RootPortal: enter press should open bottomsheet", async ({
      page,
    }) => {
      const button = page.getByRole("button", {
        name: "BottomSheet",
        exact: true,
      });
      await button.focus();
      await button.press("Enter");
      await page.waitForTimeout(100);
      const bottomsheet = page.locator('div[role="dialog"]');
      await expect(bottomsheet).toBeVisible();
    });

    test("RootPortal: should not close bottomsheet if drag less than half", async ({
      page,
      isMobile,
      browserName,
    }) => {
      if (!isMobile || browserName === "webkit") {
        return;
      }
      await page.locator("button.text-moon-14").click();
      await page.waitForTimeout(300);

      const state = page.locator('div[role="dialog"]');
      await expect(state).toBeVisible();

      await page.evaluate(createTouchEvent);
      await page.evaluate(PlayWrightStartTouch);
      await page.evaluate(PlayWrightMoveTouch);
      await page.evaluate(PlayWrightEndTouch);

      await page.evaluate(async () => {
        const s = ".after\\:bg-beerus";
        const size = document
          .querySelector("div[role=dialog] .bg-goku")
          ?.getBoundingClientRect()?.height;
        //@ts-ignore
        window.PlayWrightStartTouch(s, { x: 0, y: 0 });
        //@ts-ignore
        window.PlayWrightMoveTouch(s, size / 2 - 30, 10);
        await new Promise((res) =>
          setTimeout(() => {
            //@ts-ignore
            window.PlayWrightEndTouch(s);
            res(0);
          }, 300),
        );
      });
      await page.waitForTimeout(300);
      const endState = page.locator('div[role="dialog"]');
      await expect(endState).toBeVisible();
    });

    test("RootPortal: should close bottomsheet if drag more than half", async ({
      page,
      isMobile,
      browserName,
    }) => {
      if (!isMobile || browserName === "webkit") {
        return;
      }
      await page.locator("button.text-moon-14").click();
      await page.waitForTimeout(300);

      const state = page.locator('div[role="dialog"]');
      await expect(state).toBeVisible();

      await page.evaluate(createTouchEvent);
      await page.evaluate(PlayWrightStartTouch);
      await page.evaluate(PlayWrightMoveTouch);
      await page.evaluate(PlayWrightEndTouch);

      await page.evaluate(async () => {
        const s = ".after\\:bg-beerus";
        const size = document
          .querySelector("div[role=dialog] .bg-goku")
          ?.getBoundingClientRect()?.height;
        //@ts-ignore
        window.PlayWrightStartTouch(s, { x: 0, y: 0 });
        //@ts-ignore
        window.PlayWrightMoveTouch(s, size / 2 + 30, 10);
        await new Promise((res) =>
          setTimeout(() => {
            //@ts-ignore
            window.PlayWrightEndTouch(s);
            res(0);
          }, 300),
        );
      });
      await page.waitForTimeout(500);
      await expect(
        page.locator("div[role=dialog] .bg-goku"),
      ).not.toBeAttached();
    });
  });
});

test.describe(`${COMPONENT_NAME} in Dark Theme`, () => {
  test.beforeEach(async ({ page }) => {
    await setDarkTheme(page);
  });

  test("Default: should open default bottomsheet and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Default BottomSheet" }).click();
    await page.waitForTimeout(100);
    const bottomsheet = page.locator('div[role="dialog"]');
    await expect(bottomsheet).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Default.png`);
  });

  test("Sizes: should open small bottomsheet and match screenshot  in Dark Theme", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Default small BottomSheet" })
      .click();
    await page.waitForTimeout(100);
    const bottomsheet = page.locator('div[role="dialog"]');
    await expect(bottomsheet).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Small.png`);
  });

  test("Sizes: should open medium bottomsheet and match screenshot  in Dark Theme", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Medium BottomSheet" }).click();
    await page.waitForTimeout(100);
    const bottomsheet = page.locator('div[role="dialog"]');
    await expect(bottomsheet).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-Medium.png`);
  });

  test("Sizes: should open fullscreen bottomsheet and match screenshot  in Dark Theme", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Fullscreen BottomSheet" }).click();
    await page.waitForTimeout(100);
    const bottomsheet = page.locator('div[role="dialog"]');
    await expect(bottomsheet).toBeVisible();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-Fullscreen.png`,
    );
  });

  test("WithDraghandle: should open bottomsheet with draghandle and match screenshot  in Dark Theme", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "BottomSheet with Draghandle" })
      .click();
    await page.waitForTimeout(100);
    const bottomsheet = page.locator('div[role="dialog"]');
    await expect(bottomsheet).toBeVisible();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-WithDraghandle.png`,
    );
  });

  test("WithTitle: should open bottomsheet with title and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "BottomSheet with Title", exact: true })
      .click();
    await page.waitForTimeout(100);
    const bottomsheet = page.locator('div[role="dialog"]');
    await expect(bottomsheet).toBeVisible();
    await expect(page).toHaveScreenshot(`${COMPONENT_NAME}-dark-WithTitle.png`);
  });

  test("Customization: should open customized bottomsheet and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await page
      .getByRole("button", {
        name: "Customized BottomSheet",
        exact: true,
      })
      .click();
    await page.waitForTimeout(100);
    const bottomsheet = page.locator('div[role="dialog"]');
    await expect(bottomsheet).toBeVisible();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-Customization.png`,
    );
  });

  test("RootPortal: should open bottomsheet and match screenshot in Dark Theme", async ({
    page,
  }) => {
    await page
      .getByRole("button", {
        name: "BottomSheet",
        exact: true,
      })
      .click();
    await page.waitForTimeout(100);
    const bottomsheet = page.locator('div[role="dialog"]');
    await expect(bottomsheet).toBeVisible();
    await expect(page).toHaveScreenshot(
      `${COMPONENT_NAME}-dark-RootPortal.png`,
    );
  });
});
