import { Button, Snackbar as SnackbarComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";
import { useState } from "react";
import { useCallback } from "react";
import { snackbarPositions } from "./constants";

type Placement = (typeof snackbarPositions)[number];

const defaultValues = {
  position: "top-left" as Placement,
  autoClose: 0,
  className: "",
};

const meta: Meta<typeof SnackbarComponent> = {
  title: "Messaging & feedback/Snackbar",
  tags: ["autodocs"],
  argTypes: {
    autoClose: {
      description: "Duration the snackbar takes in ms",
      control: "number",
      type: "number",
    },
    isOpen: {
      type: "boolean",
      control: "boolean",
      description: "Define whether the component is open or not",
    },
    position: {
      description: "Place where the component would appears",
      control: {
        type: "select",
      },
      options: snackbarPositions,
      table: {
        type: {
          summary: snackbarPositions.join(" | "),
        },
      },
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
    className: {
      description: "Add extra css class for custom styling",
      type: "string",
      control: "text",
    },
    onOpenChange: {
      description:
        "Event handler called when the open state of the dialog changes",
      type: "function",
      control: "object",
    },
  },
  render: ({ position, autoClose, className }) => {
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

    const rootProps = getDefaultValues(
      { position, autoClose, className },
      defaultValues,
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
          {...rootProps}
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

export const Snackbar: Story = {
  args: {
    ...defaultValues,
    isOpen: false,
  },
};
