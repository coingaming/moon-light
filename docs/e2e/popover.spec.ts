import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "alert";

setupTest(COMPONENT_NAME);

test.describe("Popover in Light Theme", () => {});

test.describe("Popover in Dark Theme", () => {});

test.describe("Popover in RTL", () => {});
