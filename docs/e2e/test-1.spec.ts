import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page
    .getByLabel("Sidebar")
    .getByRole("link", { name: "drawer" })
    .click();
  await page.goto("http://localhost:3000/client/drawer?raw=WithClose");
  await page
    .getByRole("button", { name: "Show Drawer with Close button" })
    .click();
  await page.getByLabel("Close").click();
});
