"use client";

import Accordion from "@heathmont/moon-core-tw/lib/es/accordion/Accordion";
import {
  ChatChat,
  ChatComment,
  ChatCommentAdd,
  ChatDoubleBubble,
  ControlsChevronDownSmall,
} from "@heathmont/moon-icons-tw";

export const HeaderContent = () => (
  <Accordion>
    <Accordion.Item value="item-3" className="border border-primary rounded-8">
      <Accordion.Header>
        <Accordion.Button className="moon-open:[&_span_svg]:rotate-180">
          <span className="grow">Test accordion</span>
          <div className="flex text-heading-200 icon-secondary items-center">
            <ChatChat />
            <ChatComment />
            <ChatCommentAdd />
            <ChatDoubleBubble />
          </div>
          <span className="flex justify-center w-space-24">
            <ControlsChevronDownSmall className="icon-secondary text-heading-200 transition duration-200 moon-open:icon-primary" />
          </span>
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

export default HeaderContent;
