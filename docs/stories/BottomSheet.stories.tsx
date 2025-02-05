import {
  BottomSheet as BottomSheetComponent,
  Button,
} from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";
import { useState } from "react";

const defaultValues: Record<string, string | boolean> = {
  rootId: "",
  className: "",
};

const meta: Meta<typeof BottomSheetComponent> = {
  title: "Moon DS/BottomSheet",
  tags: ["autodocs"],
  argTypes: {
    open: {
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
      description: "Whether the BottomSheet is open or not",
    },
    className: {
      description: "Additional CSS class for the BottomSheet.",
      type: "string",
    },
    rootId: {
      description: "Root element id with inert attribute",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    onClose: {
      description:
        "Callback function triggered upon the closing of the BottomSheet",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
  },
  render: ({ open, className, rootId, ...args }) => {
    const [isOpen, setIsOpen] = useState(true);
    const rootProps = getDefaultValues(
      {
        rootId,
        className,
      },
      defaultValues,
    );

    const bottomSheetProps = {
      ...rootProps,
    };

    const closeBottomSheet = () => {
      setIsOpen(false);
    };
    const openBottomSheet = () => {
      setIsOpen(true);
      console.log("in here oe button click");
    };

    return (
      <>
        <Button variant="outline" onClick={openBottomSheet}>
          Default BottomSheet {isOpen ? " true" : "false"}
        </Button>

        <BottomSheetComponent open={isOpen} onClose={closeBottomSheet}>
          <BottomSheetComponent.Panel>
            <div className="flex grow items-center justify-center bg-white text-green-500">
              BottomSheet content
            </div>
          </BottomSheetComponent.Panel>
          <BottomSheetComponent.Backdrop />
        </BottomSheetComponent>
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof BottomSheetComponent>;

export const BottomSheet: Story = {
  args: {
    open: false,
    className: "",
    rootId: "__next",
  },
};
