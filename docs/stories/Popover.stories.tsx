import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";
import {
  Button,
  MenuItem,
  Popover as PopoverComponent,
} from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

type PopoverComponentComponentProps = typeof PopoverComponent;

type Placement =
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "right-start"
  | "right-end"
  | "left-start"
  | "left-end"
  | "top"
  | "bottom"
  | "right"
  | "left";

interface PopoverRootProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "children"
  > {
  position?: Placement;
  autoPositionDisable?: boolean;
  className?: string;
  children?: React.ReactNode | ((data: { open?: boolean }) => React.ReactNode);
}

const defaultValues = {
  position: "bottom" as Placement,
  autoPositionDisable: false,
  className: "",
};

const meta: Meta<PopoverComponentComponentProps> = {
  component: PopoverComponent,
  title: "Moon DS/Popover",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    position: {
      description: "Set the place where the component will appear",
      defaultValue: "bottom",
      control: {
        type: "select",
      },
      options: [
        "top-start",
        "top-end",
        "bottom-start",
        "bottom-end",
        "right-start",
        "right-end",
        "left-start",
        "left-end",
        "top",
        "bottom",
        "right",
        "left",
      ],
      table: {
        type: {
          summary:
            "top-start | top-end | bottom-start | bottom-end right-start | right-end | left-start | left-end | top | bottom | right | left",
        },
      },
    },
    autoPositionDisable: {
      description: "Disable flip on component",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: false,
    },
    className: {
      type: "string",
      control: "text",
      description: "Add extra class for styling",
    },
  },
  render: ({ position, autoPositionDisable, className }: PopoverRootProps) => {
    const rootProps = getDefaultValues(
      { position, autoPositionDisable, className },
      defaultValues,
    );
    return (
      <PopoverComponent {...rootProps}>
        <div className="flex">
          <PopoverComponent.Trigger data-testid="popover-trigger">
            <Button>Toggle Popover</Button>
          </PopoverComponent.Trigger>
        </div>
        <PopoverComponent.Panel
          className="p-2 flex flex-col gap-1"
          data-testid="popover-panel"
        >
          <>
            <MenuItem data-testid="first-item">
              <span className="flex w-11 h-11 bg-gohan items-center justify-center rounded-lg">
                <OtherFrame className="text-bulma text-moon-24" />
              </span>
              <MenuItem.MultiTitle
                title="Tournaments"
                text={<span>Best tournaments with streamers</span>}
              />
            </MenuItem>
          </>
        </PopoverComponent.Panel>
      </PopoverComponent>
    );
  },
};

export default meta;

type Story = StoryObj<PopoverComponentComponentProps>;

export const Popover: Story = {
  args: defaultValues,
};
