import { test, expect } from "@playwright/test";
import {
  setupTest,
  setDarkTheme,
  setRtl,
  setLightTheme,
  getMoonColor,
} from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "carousel";

setupTest(COMPONENT_NAME);

test.describe("Carousel in Light Theme", () => {
  test.beforeEach(async ({ page, isMobile, browserName }) => {
    if (isMobile && browserName === "webkit") test.skip(); // Skip mobile tests on webkit mobile
    await setLightTheme(page);
  });
  /* Default tests */
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`carousel-Default.png`);
    });
  });
  test.describe("Default tests [desktop]", () => {
    test.beforeEach(async ({ isMobile }) => {
      if (isMobile) test.skip();
    });
    test("Default: should callback onSlideChange works", async ({ page }) => {
      await page.getByTestId("right-arrow").click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-8`)).toBeInViewport();
    });
    test("Default: should be disabled by default go back more than 0", async ({
      page,
    }) => {
      const leftArrow = page.getByTestId("left-arrow");
      await leftArrow.click({ force: true });
      await leftArrow.click({ force: true });
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-0`)).toBeInViewport();
      await page.waitForTimeout(500);
      const cursor = await leftArrow.evaluate((node) => {
        return getComputedStyle(node).cursor;
      });
      expect(cursor).toBe("not-allowed");
    });
    test("Default: should be disabled by default go back more than 24", async ({
      page,
    }) => {
      const rightArrow = page.getByTestId("right-arrow");
      for await (const _ of Array(10)) {
        await rightArrow.click({ force: true });
        await page.waitForTimeout(500);
      }
      await page.waitForTimeout(500);
      const cursor = await rightArrow.evaluate((node) => {
        return getComputedStyle(node).cursor;
      });

      await expect(page.getByTestId(`carousel-24`)).toBeInViewport();
      expect(cursor).toBe("not-allowed");
    });
  });
  /* AutoSlide tests */
  test.describe("AutoSlide tests", () => {
    test("AutoSlide: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`carousel-AutoSlide.png`);
    });
  });
  test.describe("AutoSlide tests [desktop]", () => {
    test.beforeEach(async ({ isMobile }) => {
      if (isMobile) test.skip();
    });
    test("AutoSlide: should callback onSlideChange works", async ({ page }) => {
      await expect(page.getByTestId(`carousel-0`)).toBeInViewport();
      await page.waitForTimeout(5000);
      await expect(page.getByTestId(`carousel-7`)).toBeInViewport();
    });

    test("AutoSlide: Swipping over the carousel should be enabled", async ({
      page,
    }) => {
      const autoSlideCarousel = page.getByTestId("autoSlide-carousel");
      await autoSlideCarousel.hover(); // Show carousel on screen

      await expect(
        autoSlideCarousel.getByTestId(`carousel-0`),
      ).toBeInViewport();
      await page.waitForTimeout(3000);
      await expect(
        autoSlideCarousel.getByTestId(`carousel-2`),
      ).toBeInViewport();

      await page.mouse.wheel(500, 0); // Scroll to the right
      await expect(
        autoSlideCarousel.getByTestId(`carousel-5`),
      ).toBeInViewport();
      await page.waitForTimeout(500);
      await page.mouse.wheel(-500, 0); // Scroll back to the left
      await page.waitForTimeout(500);
      await expect(
        autoSlideCarousel.getByTestId(`carousel-2`),
      ).toBeInViewport();
    });
  });
  /* CustomizedArrows tests */
  test.describe("CustomizedArrows tests", () => {
    test("CustomizedArrows: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`carousel-CustomizedArrows.png`);
    });
  });
  test.describe("CustomizedArrows tests [desktop]", () => {
    test.beforeEach(async ({ isMobile }) => {
      if (isMobile) test.skip();
    });
    test("CustomizedArrows: should callback onSlideChange works", async ({
      page,
    }) => {
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-4`)).toBeInViewport();
      await page.getByTestId("scroll-right").click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-9`)).toBeInViewport();
      await page.getByTestId("scroll-left").click();
      await expect(page.getByTestId(`carousel-4`)).toBeInViewport();
    });
  });
  /* Indicators tests */
  test.describe("Indicators tests", () => {
    test("Indicators: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`carousel-Indicators.png`);
    });
  });
  test.describe("Indicators tests [desktop]", () => {
    test.beforeEach(async ({ isMobile }) => {
      if (isMobile) test.skip();
    });
    test("Indicators: should callback onSlideChange works", async ({
      page,
    }) => {
      await page.getByTestId("scroll-right").click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-2`)).toBeInViewport();
      await page.getByTestId("scroll-left").click();
      await expect(page.getByTestId(`carousel-1`)).toBeInViewport();
    });
    test("Indicators: should have 5 indicators", async ({ page }) => {
      const indicators = await page.locator(".w-2").count();
      expect(indicators).toBe(5);
    });
    test("Indicators: should have 5 indicators, and second should be `piccolo` color", async ({
      page,
    }) => {
      await page.waitForTimeout(500);
      const indicators = await page.locator(".w-2").all();
      expect(indicators.length).toBe(5);

      const firstIndicator = await indicators[1].evaluate((node) => {
        return getComputedStyle(node).backgroundColor;
      });
      await expect(firstIndicator).toBe(await getMoonColor(page, "piccolo"));
    });
    test("Indicators: should have 5 indicators, and first should be `beerus` color", async ({
      page,
    }) => {
      await page.waitForTimeout(500);
      const indicators = await page.locator(".w-2").all();
      await expect(indicators.length).toBe(5);

      const firstIndicator = await indicators[0].evaluate((node) => {
        return getComputedStyle(node).backgroundColor;
      });
      await expect(firstIndicator).toBe(await getMoonColor(page, "beerus"));
    });
  });
  /* SelectIndex tests */
  test.describe("SelectIndex tests", () => {
    test("SelectIndex: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`carousel-SelectIndex.png`);
    });
  });
  test.describe("SelectIndex tests [desktop]", () => {
    test.beforeEach(async ({ isMobile }) => {
      if (isMobile) test.skip();
    });
    test("SelectIndex: should callback onSlideChange works", async ({
      page,
    }) => {
      await page.getByTestId(`carousel-button-1`).click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-1`)).toBeInViewport();
      await page.getByTestId(`carousel-button-0`).click();
      await expect(page.getByTestId(`carousel-0`)).toBeInViewport();
    });
    test("SelectedIndex: Swipping over the carousel should be disabled when isSwipeDragDisabled is present", async ({
      page,
    }) => {
      const selectedIndexCarousel = page.getByTestId("selectedIndex-carousel");
      const secondElementInCarousel = page.getByTestId("carousel-button-1");

      await secondElementInCarousel.first().click(); // Place the carousel on the second element for better test purposes
      await page.waitForTimeout(500);
      await selectedIndexCarousel.hover();
      await page.waitForTimeout(500);
      await page.mouse.wheel(100, 0); // Scroll to the right
      await expect(
        selectedIndexCarousel.getByTestId(`carousel-2`),
      ).not.toBeInViewport();
      await page.waitForTimeout(500);
      await page.mouse.wheel(-100, 0); // Scroll to the left
      await page.waitForTimeout(500);
      await expect(
        selectedIndexCarousel.getByTestId(`carousel-0`),
      ).not.toBeInViewport();
      await expect(
        selectedIndexCarousel.getByTestId(`carousel-1`),
      ).toBeInViewport();
    });
  });
  /* Spaces tests */
  test.describe("Spaces tests", () => {
    test("Spaces: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`carousel-Spaces.png`);
    });
  });
  test.describe("Spaces tests [desktop]", () => {
    test.beforeEach(async ({ isMobile }) => {
      if (isMobile) test.skip();
    });

    test("Spaces: should callback onSlideChange works", async ({ page }) => {
      await expect(page.getByTestId(`carousel-0`)).toBeInViewport();
      await page.getByTestId(`scroll-right`).click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-4`)).toBeInViewport();
    });
  });
  /* VisibleIndices tests */
  test.describe("VisibleIndices tests", () => {
    test("VisibleIndices: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`carousel-VisibleIndices.png`);
    });
  });
  test.describe("VisibleIndices tests [desktop]", () => {
    test.beforeEach(async ({ isMobile }) => {
      if (isMobile) test.skip();
    });
    test("VisibleIndices: should change when next is clicked", async ({
      page,
    }) => {
      await page.getByTestId(`scroll-right`).click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-4`)).toBeInViewport();
    });
    test("VisibleIndices: should NOT change when prev is clicked, and should be disabled", async ({
      page,
    }) => {
      await expect(page.getByTestId(`carousel-0`)).toBeInViewport();
      await page.getByTestId(`scroll-left`).click({ force: true }); // Force to bypass disabled accessibility check
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-0`)).toBeInViewport();
      const cursor = await page.getByTestId(`scroll-left`).evaluate((node) => {
        return getComputedStyle(node).cursor;
      });
      expect(cursor).toBe("not-allowed");
    });
    test("VisibleIndices: should have 4 visible indices", async ({ page }) => {
      const text = await page.getByTestId(`visible-indices-0`).textContent();
      expect(text).toBe("Visible indices:0-3");
    });
    test("VisibleIndices: next button should update visible indices", async ({
      page,
    }) => {
      const text = await page.getByTestId(`visible-indices-0`).textContent();
      expect(text).toBe("Visible indices:0-3");
      await page.getByTestId(`scroll-right`).click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-4`)).toBeInViewport();
      const text2 = await page.getByTestId(`visible-indices-4`).textContent();
      expect(text2).toBe("Visible indices:5-7");
    });
  });
});

test.describe("Carousel in Dark Theme", () => {
  test.beforeEach(async ({ page, isMobile, browserName }) => {
    if (isMobile && browserName === "webkit") test.skip(); // Skip mobile tests on webkit mobile
    await setDarkTheme(page);
  });
  /* Default tests */
  test.describe("Default tests", () => {
    test("Default: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`carousel-Dark-Default.png`);
    });
  });
  test.describe("Default tests [desktop]", () => {
    test.beforeEach(async ({ isMobile }) => {
      if (isMobile) test.skip();
    });
    test("Default: should callback onSlideChange works", async ({ page }) => {
      await page.getByTestId("right-arrow").click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-8`)).toBeInViewport();
    });
    test("Default: should be disabled by default go back more than 0", async ({
      page,
    }) => {
      const leftArrow = page.getByTestId("left-arrow");
      await leftArrow.click({ force: true });
      await leftArrow.click({ force: true });
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-0`)).toBeInViewport();
      await page.waitForTimeout(500);
      const cursor = await leftArrow.evaluate((node) => {
        return getComputedStyle(node).cursor;
      });
      expect(cursor).toBe("not-allowed");
    });
    test("Default: should be disabled by default go back more than 24", async ({
      page,
    }) => {
      const rightArrow = page.getByTestId("right-arrow");
      for await (const _ of Array(10)) {
        await rightArrow.click({ force: true });
        await page.waitForTimeout(500);
      }
      await page.waitForTimeout(500);
      const cursor = await rightArrow.evaluate((node) => {
        return getComputedStyle(node).cursor;
      });

      await expect(page.getByTestId(`carousel-24`)).toBeInViewport();
      expect(cursor).toBe("not-allowed");
    });
  });
  /* AutoSlide tests */
  test.describe("AutoSlide tests", () => {
    test("AutoSlide: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`carousel-Dark-AutoSlide.png`);
    });
  });
  test.describe("AutoSlide tests [desktop]", () => {
    test.beforeEach(async ({ isMobile }) => {
      if (isMobile) test.skip();
    });
    test("AutoSlide: should callback onSlideChange works", async ({ page }) => {
      await expect(page.getByTestId(`carousel-0`)).toBeInViewport();
      await page.waitForTimeout(5000);
      await expect(page.getByTestId(`carousel-7`)).toBeInViewport();
    });
    test("AutoSlide: Swipping over the carousel should be enabled", async ({
      page,
    }) => {
      const autoSlideCarousel = page.getByTestId("autoSlide-carousel");
      await autoSlideCarousel.hover(); // Show carousel on screen

      await expect(
        autoSlideCarousel.getByTestId(`carousel-0`),
      ).toBeInViewport();
      await page.waitForTimeout(3000);
      await expect(
        autoSlideCarousel.getByTestId(`carousel-2`),
      ).toBeInViewport();

      await page.mouse.wheel(500, 0); // Scroll to the right
      await expect(
        autoSlideCarousel.getByTestId(`carousel-5`),
      ).toBeInViewport();
      await page.waitForTimeout(500);
      await page.mouse.wheel(-500, 0); // Scroll back to the left
      await page.waitForTimeout(500);
      await expect(
        autoSlideCarousel.getByTestId(`carousel-2`),
      ).toBeInViewport();
    });
  });
  /* CustomizedArrows tests */
  test.describe("CustomizedArrows tests", () => {
    test("CustomizedArrows: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`carousel-Dark-CustomizedArrows.png`);
    });
  });
  test.describe("CustomizedArrows tests [desktop]", () => {
    test.beforeEach(async ({ isMobile }) => {
      if (isMobile) test.skip();
    });
    test("CustomizedArrows: should callback onSlideChange works", async ({
      page,
    }) => {
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-4`)).toBeInViewport();
      await page.getByTestId("scroll-right").click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-9`)).toBeInViewport();
      await page.getByTestId("scroll-left").click();
      await expect(page.getByTestId(`carousel-4`)).toBeInViewport();
    });
  });
  /* Indicators tests */
  test.describe("Indicators tests", () => {
    test("Indicators: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`carousel-Dark-Indicators.png`);
    });
  });
  test.describe("Indicators tests [desktop]", () => {
    test.beforeEach(async ({ isMobile }) => {
      if (isMobile) test.skip();
    });
    test("Indicators: should callback onSlideChange works", async ({
      page,
    }) => {
      await page.getByTestId("scroll-right").click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-2`)).toBeInViewport();
      await page.getByTestId("scroll-left").click();
      await expect(page.getByTestId(`carousel-1`)).toBeInViewport();
    });
    test("Indicators: should have 5 indicators", async ({ page }) => {
      const indicators = await page.locator(".w-2").count();
      expect(indicators).toBe(5);
    });
    test("Indicators: should have 5 indicators, and second should be `piccolo` color", async ({
      page,
    }) => {
      await page.waitForTimeout(500);
      const indicators = await page.locator(".w-2").all();
      expect(indicators.length).toBe(5);

      const firstIndicator = await indicators[1].evaluate((node) => {
        return getComputedStyle(node).backgroundColor;
      });
      expect(firstIndicator).toBe(await getMoonColor(page, "piccolo"));
    });
    test("Indicators: should have 5 indicators, and first should be `beerus` color", async ({
      page,
    }) => {
      await page.waitForTimeout(500);
      const indicators = await page.locator(".w-2").all();
      expect(indicators.length).toBe(5);

      const firstIndicator = await indicators[0].evaluate((node) => {
        return getComputedStyle(node).backgroundColor;
      });
      expect(firstIndicator).toBe(await getMoonColor(page, "beerus"));
    });
  });
  /* SelectIndex tests */
  test.describe("SelectIndex tests", () => {
    test("SelectIndex: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`carousel-Dark-SelectIndex.png`);
    });
  });
  test.describe("SelectIndex tests [desktop]", () => {
    test.beforeEach(async ({ isMobile }) => {
      if (isMobile) test.skip();
    });
    test("SelectIndex: should callback onSlideChange works", async ({
      page,
    }) => {
      await page.getByTestId(`carousel-button-1`).click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-1`)).toBeInViewport();
      await page.getByTestId(`carousel-button-0`).click();
      await expect(page.getByTestId(`carousel-0`)).toBeInViewport();
    });
    test("SelectedIndex: Swipping over the carousel should be disabled when isSwipeDragDisabled is present", async ({
      page,
    }) => {
      const selectedIndexCarousel = page.getByTestId("selectedIndex-carousel");
      const secondElementInCarousel = page.getByTestId("carousel-button-1");

      await secondElementInCarousel.first().click(); // Place the carousel on the second element for better test purposes
      await page.waitForTimeout(500);
      await selectedIndexCarousel.hover();
      await page.waitForTimeout(500);
      await page.mouse.wheel(100, 0); // Scroll to the right
      await expect(
        selectedIndexCarousel.getByTestId(`carousel-2`),
      ).not.toBeInViewport();
      await page.waitForTimeout(500);
      await page.mouse.wheel(-100, 0); // Scroll to the left
      await page.waitForTimeout(500);
      await expect(
        selectedIndexCarousel.getByTestId(`carousel-0`),
      ).not.toBeInViewport();
      await expect(
        selectedIndexCarousel.getByTestId(`carousel-1`),
      ).toBeInViewport();
    });
  });
  /* Spaces tests */
  test.describe("Spaces tests", () => {
    test("Spaces: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`carousel-Dark-Spaces.png`);
    });
  });
  test.describe("Spaces tests [desktop]", () => {
    test.beforeEach(async ({ isMobile }) => {
      if (isMobile) test.skip();
    });

    test("Spaces: should callback onSlideChange works", async ({ page }) => {
      await expect(page.getByTestId(`carousel-0`)).toBeInViewport();
      await page.getByTestId(`scroll-right`).click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-4`)).toBeInViewport();
    });
  });
  /* VisibleIndices tests */
  test.describe("VisibleIndices tests", () => {
    test("VisibleIndices: should render and match screenshot", async ({
      page,
    }) => {
      await expect(page).toHaveScreenshot(`carousel-Dark-VisibleIndices.png`);
    });
  });
  test.describe("VisibleIndices tests [desktop]", () => {
    test.beforeEach(async ({ isMobile }) => {
      if (isMobile) test.skip();
    });
    test("VisibleIndices: should change when next is clicked", async ({
      page,
    }) => {
      await page.getByTestId(`scroll-right`).click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-4`)).toBeInViewport();
    });
    test("VisibleIndices: should NOT change when prev is clicked, and should be disabled", async ({
      page,
    }) => {
      await expect(page.getByTestId(`carousel-0`)).toBeInViewport();
      await page.getByTestId(`scroll-left`).click({ force: true }); // Force to bypass disabled accessibility check
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-0`)).toBeInViewport();
      const cursor = await page.getByTestId(`scroll-left`).evaluate((node) => {
        return getComputedStyle(node).cursor;
      });
      expect(cursor).toBe("not-allowed");
    });
    test("VisibleIndices: should have 4 visible indices", async ({ page }) => {
      const text = await page.getByTestId(`visible-indices-0`).textContent();
      expect(text).toBe("Visible indices:0-3");
    });
    test("VisibleIndices: next button should update visible indices", async ({
      page,
    }) => {
      const text = await page.getByTestId(`visible-indices-0`).textContent();
      expect(text).toBe("Visible indices:0-3");
      await page.getByTestId(`scroll-right`).click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-4`)).toBeInViewport();
      const text2 = await page.getByTestId(`visible-indices-4`).textContent();
      expect(text2).toBe("Visible indices:5-7");
    });
  });
});
test.describe("Carousel in RTL", () => {
  test.beforeEach(async ({ page }) => await setRtl(page));

  /* RTL Support tests */
  test.describe("RTLSupport tests", () => {
    test("RTLSupport: should render and match screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(`carousel-RTLSupport.png`);
    });
    test("RTLSupport: should have RTL direction", async ({ page }) => {
      const direction = await page.getByTestId("carousel").getAttribute("dir");
      expect(direction).toBe("rtl");
    });
    test("RTLSupport: should callback onSlideChange works", async ({
      page,
      isMobile,
    }) => {
      if (isMobile) test.skip();
      await page.getByTestId(`carousel-button-1`).click();
      await page.waitForTimeout(500);
      await expect(page.getByTestId(`carousel-1`)).toBeInViewport();
      await page.getByTestId(`carousel-button-0`).click();
      await expect(page.getByTestId(`carousel-0`)).toBeInViewport();
    });
  });
});
