import type { Meta, StoryObj } from "@storybook/react";
import { InsetFileInput as InsetFileInputComponent } from "@heathmont/moon-core-tw";
import getDefaultValues, { DefaultValue } from "./utils/getDefaultValues";
import { useState } from "react";

type InsetFileInputComponentType = typeof InsetFileInputComponent;

const defaultValues: DefaultValue = {
  error: false,
  disabled: false,
  readOnly: false,
  label: "",
  className: "",
  maxFileSize: 100 * 1014 * 1024,
  accept: "",
  onFileUpload: undefined,
  onFileRemove: undefined,
  initFile: undefined,
  errorMessages: undefined,
};

const meta: Meta<InsetFileInputComponentType> = {
  title: "Moon DS/InsetFileInput",
  tags: ["autodocs"],
  argTypes: {
    id: {
      description: "Id to call native browser's file input behavior",
      type: "string",
    },
    label: {
      control: "text",
      description: "Custom label for the InsetFileInput.",
      table: { type: { summary: "ReactNode | undefined" } },
    },
    error: {
      description: "Sets error state for InsetFileInput",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "Set disabled/non-disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    readOnly: {
      description: "Sets readonly state for InsetFileInput",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    className: {
      description: "Additional CSS class for the InsetFileInput.",
      type: "string",
    },
    accept: {
      description:
        "Accepted formats. It follows same 'accept' attribute as a regular file input. See Developer Mozilla docs input file #accept attribute for more information. e.g. image/*,video/*,.pdf",
      table: {
        type: { summary: "string" },
      },
    },
    maxFileSize: {
      description: "Max file size in Bytes",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: "100 MB" },
      },
    },
    onFileUpload: {
      description:
        "On File upload callback. It expects only one argument of type File.",
      table: {
        type: {
          summary: "(file: File) => void",
        },
      },
    },
    onFileRemove: {
      description: "On File remove callback",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    initFile: {
      description: "Initial file to display on the input.",
      table: {
        type: {
          summary: "File",
        },
      },
    },
    errorMessages: {
      description:
        "Error messages to be displayed. 'maxFileSize' and 'type' only supported currently.",
      table: {
        type: {
          summary: "{ maxFileSize?: string; type?: string;}",
        },
      },
    },
  },
  render: ({ id, label, className, accept, maxFileSize, ...args }) => {
    const rootProps = getDefaultValues(
      {
        label: label as string,
        className,
        accept,
        maxFileSize,
      },
      defaultValues,
    );

    const [, setFile] = useState<File>();
    const fileHandler = (file: File | undefined) => {
      setFile(file);
    };

    const removeFileHandler = () => {
      setFile(undefined);
    };

    return (
      <div className="w-72">
        <InsetFileInputComponent
          id={id}
          onFileUpload={fileHandler}
          onFileRemove={removeFileHandler}
          {...rootProps}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<InsetFileInputComponentType>;

export const InsetFileInput: Story = {
  args: { id: "file-input-id", ...defaultValues },
};
