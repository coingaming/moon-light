"use client";

import Accordion from "@heathmont/moon-core-tw/lib/es/accordion/Accordion";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";

export const Sizes = () => (
  <>
    <Accordion itemSize="xl">
      <Accordion.Item
        value="item-1"
        className="border border-primary rounded-8"
      >
        <Accordion.Header className="moon-open:[&_svg]:rotate-180">
          <Accordion.Button>
            <span>X Large (xl)</span>
            <ControlsChevronDownSmall className="icon-secondary text-heading-200 transition duration-200 moon-open:icon-primary" />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.Content>
          {/* cSpell:disable */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          {/* cSpell:enable */}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
    <Accordion itemSize="lg">
      <Accordion.Item
        value="item-1"
        className="border border-primary rounded-8"
      >
        <Accordion.Header className="moon-open:[&_svg]:rotate-180">
          <Accordion.Button>
            <span>Large (lg)</span>
            <ControlsChevronDownSmall className="icon-secondary text-heading-200 transition duration-200 moon-open:icon-primary" />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.Content>
          {/* cSpell:disable */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          {/* cSpell:enable */}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item
        value="item-2"
        className="border border-primary rounded-8"
      >
        <Accordion.Header className="moon-open:[&_svg]:rotate-180">
          <Accordion.Button>
            <span>Medium is default (md)</span>
            <ControlsChevronDownSmall className="icon-secondary text-heading-200 transition duration-200 moon-open:icon-primary" />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.Content>
          {/* cSpell:disable */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          {/* cSpell:enable */}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
    <Accordion itemSize="sm">
      <Accordion.Item
        value="item-3"
        className="border border-primary rounded-8"
      >
        <Accordion.Header className="moon-open:[&_svg]:rotate-180">
          <Accordion.Button>
            <span>Small (sm)</span>
            <ControlsChevronDownSmall className="icon-secondary text-heading-200 transition duration-200 moon-open:icon-primary" />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.Content>
          {/* cSpell:disable */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          {/* cSpell:enable */}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </>
);

export default Sizes;
