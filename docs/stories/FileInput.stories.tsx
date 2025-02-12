import type { Meta, StoryObj } from "@storybook/react";
import { FileInput as FileInputComponent } from "@heathmont/moon-core-tw";
import getDefaultValues, { DefaultValue } from "./utils/getDefaultValues";
import { dir } from "./constants";

type FileInputComponentType = typeof FileInputComponent;

const inputSizes = ["sm", "md", "lg"] as const;
type InputSize = (typeof inputSizes)[number];

const defaultValues: DefaultValue = {
  placeholder: "",
  size: "md" as InputSize,
  error: false,
  disabled: false,
  readOnly: false,
  className: "",
  maxFileSize: 100 * 1014 * 1024,
  accept: "",
  onFileUpload: undefined,
  onFileRemove: undefined,
  initFile: undefined,
  errorMessages: undefined,
  // dir: undefined, // TBD
};

const meta: Meta<FileInputComponentType> = {
  title: "Moon DS/FileInput",
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Size of the FileInput",
      table: {
        type: { summary: inputSizes.join(" | ") },
        defaultValue: { summary: "md" },
      },
      control: { type: "select" },
      options: inputSizes,
    },
    id: {
      description: "Id to call native browser's file input behavior",
      type: "string",
    },
    placeholder: {
      description: "Custom placeholder for the FileInput.",
      type: "string",
    },
    error: {
      description: "Sets error state for FileInput",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description: "Set disabled/non-disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      description: "Sets readonly state for FileInput",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: {
      description: "Additional CSS class for the FileInput.",
      type: "string",
    },
    // TBD
    // dir: {
    //   description: "RTL/LTR direction of component",
    //   control: { type: "select" },
    //   options: dir,
    //   table: {
    //     type: {
    //       summary: [...dir, "undefined"].join(" | "),
    //     },
    //   },
    // },
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
  render: ({
    id,
    size,
    placeholder,
    className,
    accept,
    maxFileSize,
    ...args
  }) => {
    const rootProps = getDefaultValues(
      { size, placeholder, className, accept, maxFileSize },
      defaultValues,
    );
    return (
      <div className="w-72">
        <FileInputComponent {...rootProps} {...args} id="file-input" />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<FileInputComponentType>;

export const FileInput: Story = {
  args: { id: "file-input-id", ...defaultValues },
};
