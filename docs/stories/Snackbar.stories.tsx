import { Button, Snackbar as SnackbarComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";
import getDefaultValues from "./utils/getDefaultValues";
import { useState } from "react";
import { useCallback } from "react";

const defaultValues: Record<string, string | boolean> = {
  itemSize: "md",
  singleOpen: false,
  defaultValue: "",
  className: "",
};

const meta: Meta<typeof SnackbarComponent> = {
  title: "Moon DS/Accordion",
  tags: ["autodocs"],
  argTypes: {
    autoClose: {
      description: "Duration the snackbar takes in ms",
      control: "boolean",
      type: "boolean",
    },
    isOpen: {
      type: "boolean",
      control: "boolean",
      description: "Define whether the component is open or not",
    },
    position: {
      description: "",
    },
    children: {
      description: "Set elements to be rendered as children",
      control: "object",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
  render: ({}) => {
    const [snackbar, setSnackbar] = useState("");

    const openSnackbarHandler = useCallback(
      (type: string) => {
        if (snackbar) {
          setSnackbar("");
          setTimeout(() => {
            setSnackbar(type);
          }, 400);
        } else {
          setSnackbar(type);
        }
      },
      [snackbar],
    );

    return (
      <div>
        <Button
          variant="outline"
          onClick={() => openSnackbarHandler("default")}
        >
          Default
        </Button>
        <SnackbarComponent
          isOpen={snackbar === "default"}
          onOpenChange={setSnackbar}
        >
          <SnackbarComponent.Message>
            Snackbar message
          </SnackbarComponent.Message>
        </SnackbarComponent>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof SnackbarComponent>;

export const Accordion: Story = {
  args: {},
};
