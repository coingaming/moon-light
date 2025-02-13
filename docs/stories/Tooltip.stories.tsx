import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip as TooltipComponent } from "@heathmont/moon-core-tw";

type TooltipType = {
  position:
    | "top-start"
    | "top-center"
    | "top-end"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end"
    | "right"
    | "left";
  container?: HTMLElement | null;
  trigger: string;
  tooltipContent: string;
  triggerClassName?: string;
  contentClassName?: string;
  withArrow?: boolean;
};

const meta: Meta<TooltipType> = {
  title: "Components/Tooltip",
  tags: ["autodocs"],

  argTypes: {
    position: {
      description: "Position of the tooltip",
      table: {
        type: {
          summary:
            "top-start | top-center | top-end | bottom-start | bottom-center | bottom-end | right | left",
        },
        defaultValue: { summary: "top-start" },
      },
      control: { type: "select" },
      options: [
        "top-start",
        "top-center",
        "top-end",
        "bottom-start",
        "bottom-center",
        "bottom-end",
        "right",
        "left",
      ],
    },
    container: {
      description:
        "Render tooltip content inside this container. Defaults to document.body",
      type: "string",
    },
    trigger: {
      description: "Trigger element for the tooltip",
      type: "string",
    },
    tooltipContent: {
      description: "Tooltip content",
      type: "string",
    },
    triggerClassName: {
      description: "Additional CSS class specific to the trigger.",
      type: "string",
    },
    contentClassName: {
      description: "Additional CSS class specific to the content.",
      type: "string",
    },
    withArrow: {
      description: "Add arrow to the tooltip",
      type: "boolean",
      table: {
        type: {},
        defaultValue: { summary: "true" },
      },
    },
  },

  render: ({
    position,
    trigger,
    tooltipContent,
    container,
    triggerClassName,
    contentClassName,
    withArrow,
  }) => {
    return (
      <div className="flex">
        <TooltipComponent>
          <TooltipComponent.Trigger
            data-testid="tooltip-trigger"
            className={triggerClassName}
          >
            <div className="border border-beerus">{trigger}</div>
          </TooltipComponent.Trigger>
          <TooltipComponent.Content
            position={position}
            container={container}
            className={contentClassName}
          >
            {tooltipContent}
            {withArrow && <TooltipComponent.Arrow />}
          </TooltipComponent.Content>
        </TooltipComponent>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<TooltipType>;

export const Tooltip: Story = {
  args: {
    position: "top-start",
    container: undefined,
    trigger: "Tooltip Trigger",
    tooltipContent: "This is the default tooltip content",
    triggerClassName: "",
    contentClassName: "",
    withArrow: true,
  },
};
