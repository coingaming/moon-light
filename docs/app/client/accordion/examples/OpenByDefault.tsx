"use client";

import Accordion from "@heathmont/moon-core-tw/lib/es/accordion/Accordion";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";

export const OpenByDefault = () => (
  <Accordion defaultValue="item-1">
    <Accordion.Item
      value="item-1"
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        {/* cSpell:enable */}
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

export default OpenByDefault;
