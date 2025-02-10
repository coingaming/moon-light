import { Drawer as DrawerComponent, Button } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";
import { useState } from "react";

const defaultValues: Record<string, string | boolean> = {
  className: "",
  open: false,
  position: "end",
};

const panelPositions = ["start", "end", "top", "bottom"] as const;
type PositionsType = (typeof panelPositions)[number];

type PanelProps = {
  position: PositionsType;
};

type DrawerComponentProps = React.ComponentProps<typeof DrawerComponent> &
  PanelProps;

const meta: Meta<DrawerComponentProps> = {
  title: "Moon DS/Drawer",
  tags: ["autodocs"],
  argTypes: {
    open: {
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
      description: "Whether the Drawer is open or not",
    },
    setOpen: {
      description: "Sets open state of the Drawer",
      control: "object",
      table: {
        type: {
          summary: "(value: boolean) => void",
        },
      },
    },
    className: {
      description: "Additional CSS class for the Drawer.",
      type: "string",
    },
    position: {
      description: "Position of the Drawer Panel.",
      control: { type: "select" },
      options: panelPositions,
      table: {
        type: { summary: panelPositions.join(" | ") },
        defaultValue: { summary: "end" },
      },
    },
  },
  render: ({ open, className, position }) => {
    const [isOpen, setIsOpen] = useState(open);
    const rootProps = getDefaultValues(
      {
        className,
      },
      defaultValues,
    );

    const drawerProps = {
      ...rootProps,
      open: isOpen,
    };

    const closeDrawer = () => {
      setIsOpen(false);
    };
    const openDrawer = () => {
      setIsOpen(true);
    };

    const panelProps = getDefaultValues(
      {
        position,
      },
      defaultValues,
    );

    return (
      <>
        <Button variant="outline" onClick={openDrawer}>
          Show default Drawer
        </Button>
        <DrawerComponent {...drawerProps} setOpen={setIsOpen}>
          <DrawerComponent.Panel {...panelProps}>
            Default Drawer
          </DrawerComponent.Panel>
          <DrawerComponent.Backdrop />
        </DrawerComponent>
      </>
    );
  },
};

export default meta;

type Story = StoryObj<DrawerComponentProps>;

export const Drawer: Story = {
  args: defaultValues,
};
