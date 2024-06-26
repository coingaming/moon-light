"use client";

import Accordion from "@heathmont/moon-core-tw/lib/es/accordion/Accordion";
import Button from "@heathmont/moon-core-tw/lib/es/button/Button";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";
import { useState } from "react";

export const ControlOutside = () => {
  const items = ["item-1", "item-2"];
  const [values, setValues] = useState(["item-1"]);
  const toggleAll = () =>
    values.length === 0 ? setValues(items) : setValues([]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <Button className="w-32" onClick={toggleAll}>
        Toggle All
      </Button>
      <Accordion value={values} onValueChange={setValues}>
        <Accordion.Item
          value="item-1"
          className="border border-beerus rounded-moon-s-sm"
        >
          <Accordion.Header className="moon-open:[&_svg]:rotate-180">
            <Accordion.Button>
              <span>Default</span>
              <ControlsChevronDownSmall className="text-trunks text-moon-24 transition duration-200 moon-open:text-bulma" />
            </Accordion.Button>
          </Accordion.Header>
          <Accordion.Content>
            {/* cSpell:disable */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            {/* cSpell:enable */}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item
          value="item-2"
          className="border border-beerus rounded-moon-s-sm"
        >
          <Accordion.Header className="moon-open:[&_svg]:rotate-180">
            <Accordion.Button>
              <span>Test accordion</span>
              <ControlsChevronDownSmall className="text-trunks text-moon-24 transition duration-200 moon-open:text-bulma" />
            </Accordion.Button>
          </Accordion.Header>
          <Accordion.Content>
            {/* cSpell:disable */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            {/* cSpell:enable */}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ControlOutside;
