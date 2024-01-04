import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "popover";

setupTest(COMPONENT_NAME);

test.describe("Popover in Light Theme", () => {
  test.describe("Default tests", () => {
    // ...
  });
});

test.describe("Popover in Dark Theme", () => {
  test.describe("Default tests", () => {
    // ...
  });
});

test.describe("Popover in RTL", () => {
  test.describe("Default tests", () => {
    // ...
  });
});
