import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page
    .getByLabel("Sidebar")
    .getByRole("link", { name: "dropdown" })
    .click();
  await page.goto("http://localhost:3000/client/dropdown?raw=Default");
  await page.locator("html").click();
  await page.locator("body").press("Tab");
  await page.getByRole("button", { name: "Choose a name..." }).press("Enter");
  await page.getByLabel("Choose a name...").press("ArrowDown");
});
