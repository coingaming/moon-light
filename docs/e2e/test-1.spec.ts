import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("about:blank");
  await page.goto("chrome-error://chromewebdata/");
  await page.goto("http://localhost:3000/");
  await page.goto("http://localhost:3000/client/bottomsheet");
});
