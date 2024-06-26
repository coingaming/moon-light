import Accordion from "@heathmont/moon-base-tw/lib/accordion/Accordion";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";

export const ContentOutsideSizes = () => (
  <>
    <Accordion size="sm">
      <Accordion.Summary>
        Size SM
        <ControlsChevronDownSmall />
      </Accordion.Summary>
      <Accordion.ContentOutside>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Accordion.ContentOutside>
    </Accordion>
    <Accordion>
      <Accordion.Summary>
        Default size MD
        <ControlsChevronDownSmall />
      </Accordion.Summary>
      <Accordion.ContentOutside>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Accordion.ContentOutside>
    </Accordion>
    <Accordion size="lg">
      <Accordion.Summary>
        Size LG
        <ControlsChevronDownSmall />
      </Accordion.Summary>
      <Accordion.ContentOutside>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Accordion.ContentOutside>
    </Accordion>
    <Accordion size="xl">
      <Accordion.Summary>
        Size XL
        <ControlsChevronDownSmall />
      </Accordion.Summary>
      <Accordion.ContentOutside>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Accordion.ContentOutside>
    </Accordion>
  </>
);
