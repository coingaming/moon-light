# How to write tests e2e in shared format

#### File name:

The file name should be: `[component-name-lowercase].spec.ts` inside the e2e directory.

#### E2E setup:

```
import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "alert"; // Replace this!

setupTest(COMPONENT_NAME);
```

What to test, checklist:

- [ ] Component in Light Theme
- [ ] Component in Dark Theme
- [ ] Component in RTL
- [ ] Interactivity (click,hover) in case the component is
- [ ] All the examples should be grouped under `test.describe` with title `[COMPONENT_NAME] tests`. For example if i have the example `WithOnClick`, the describe group should be call `WithOnClick tests`.
- [ ] All the examples mandatory should have the name: `[EXAMPLE_NAME]: should ...`.

#### Notes

- Same operation can be grouped under the describe, using `test.beforeEach`.
  example:
  `Popover` component should be clicked before be tested. I can specify once.
- Nested `test.describe` is accepted.
- RTL should be tested only in light theme.

#### Order (Popover for example)

```
import { test, expect } from "@playwright/test";
import { setupTest, setDarkTheme, setRtl } from "@/utils/playwrightHelpers";

const COMPONENT_NAME = "alert";

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
```

#### troubleshooting

###### All tests fails.

Check if dev server is working on the door `:3000`

###### Hover/click not working correctly

Playwright check the Accessibility APIs of the DOM, on the mouse event. This means that in case the component is not correctly syntaxed in HTML, he will not click.

The fix is `await component.click({ force: true })`

##### The state is not changing.

When using the APIs, keep in mind what you are evaluate. Locator return always the element, instead getAttribute for example return the current state.

This means that code like this will not works.

```
...
const isOpen = await page.locator('button').getAttribute('open');
expect(isOpen).toBe(false);
await page.locator('button').click();
expect(isOpen).toBe(true);
```

Because the evaluation is on the isOpen set on the begin.

##### Animations

Playwright act on a real browser (headless), but animations is preserved. So before check the snapshot for example, you should wait the animation to end using `await page.waitForTimeout(number in ms)`
