import { Accordion as AccordionComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";
import getDefaultValues from "./utils/getDefaultValues";

const defaultValues: Record<string, string | boolean> = {
  itemSize: "md",
  singleOpen: false,
  defaultValue: "",
  className: "",
};

const meta: Meta<typeof AccordionComponent> = {
  title: "Moon DS/Accordion",
  tags: ["autodocs"],
  argTypes: {
    itemSize: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
      description: "Size of accordion item",
      table: {
        type: {
          summary: "sm | md | lg | xl | 2xl",
        },
        defaultValue: {
          summary: "md",
        },
      },
    },
    singleOpen: {
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
      description: "Whether only one item can be opened at a time",
    },
    className: {
      description: "Additional CSS class for the checkbox.",
      type: "string",
    },
    defaultValue: {
      description: "Value of item to be expanded by default",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    value: {
      description: "Value of item to be expanded by default",
      table: {
        type: {
          summary: "string[] | undefined",
        },
      },
    },
    onValueChange: {
      description: "Value of item to be expanded by default",
      table: {
        type: {
          summary: "(value: string[]) => void | undefined",
        },
      },
    },
  },
  render: ({ itemSize, singleOpen, className, defaultValue, ...args }) => {
    const rootProps = getDefaultValues(
      {
        itemSize,
        singleOpen,
        className,
        defaultValue,
      },
      defaultValues,
    );

    return (
      <AccordionComponent {...rootProps}>
        <AccordionComponent.Item
          value="item-1"
          className="border border-beerus rounded-moon-s-sm"
        >
          <AccordionComponent.Header className="moon-open:[&_svg]:rotate-180">
            <AccordionComponent.Button>
              <span>Default</span>
              <ControlsChevronDownSmall className="text-trunks text-moon-24 transition moon-open:text-bulma" />
            </AccordionComponent.Button>
          </AccordionComponent.Header>
          <AccordionComponent.Content>
            {/* cSpell:disable */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            {/* cSpell:enable */}
          </AccordionComponent.Content>
        </AccordionComponent.Item>
        <AccordionComponent.Item
          value="item-2"
          className="border border-beerus rounded-moon-s-sm"
        >
          <AccordionComponent.Header className="moon-open:[&_svg]:rotate-180">
            <AccordionComponent.Button>
              <span>Test accordion</span>
              <ControlsChevronDownSmall className="text-trunks text-moon-24 transition moon-open:text-bulma" />
            </AccordionComponent.Button>
          </AccordionComponent.Header>
          <AccordionComponent.Content>
            {/* cSpell:disable */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            {/* cSpell:enable */}
          </AccordionComponent.Content>
        </AccordionComponent.Item>
      </AccordionComponent>
    );
  },
};

export default meta;

type Story = StoryObj<typeof AccordionComponent>;

export const Accordion: Story = {
  args: {
    singleOpen: false,
    className: "",
    defaultValue: "",
    value: undefined,
    onValueChange: undefined,
    itemSize: "md",
  },
};
