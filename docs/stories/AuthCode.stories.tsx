import { AuthCode as AuthCodeComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";
import { DOCS_HIERARCHY } from "./constants";

const defaultValues = {
  className: "",
  length: 6,
  allowedCharacters: "alphanumeric",
  autoFocus: false,
  isPassword: false,
  disabled: false,
  placeholder: "",
  isValid: true,
  ariaLabel: "Character `${i + 1}`",
};

const title = `${DOCS_HIERARCHY.FORMS_SELECTION_CONTROLS}/AuthCode`;

const meta: Meta<typeof AuthCodeComponent> = {
  title,
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      type: "function",
      description: "Callback function triggered upon a value change.",
      table: {
        type: {
          summary: "(value: string) => void",
        },
      },
    },
    className: {
      description: "Additional CSS class for the AuthCode.",
      type: "string",
    },
    length: {
      description: "Number of digits for entering single values.",
      type: "number",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "6",
        },
      },
    },
    allowedCharacters: {
      description: "Specifies the type of input characters allowed.",
      options: ["alphanumeric", "numeric", "alpha"],
      control: { type: "select" },
      table: {
        type: {
          summary: "alphanumeric | numeric | alpha",
        },
        defaultValue: {
          summary: "alphanumeric",
        },
      },
    },
    autoFocus: {
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
      description:
        "When set to true, inputs automatically receive the keyboard focus.",
    },
    isPassword: {
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
      description:
        "When set to true, inputs will show entered values as obfuscated symbols.",
    },
    disabled: {
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
      description: "When set to true, the AuthCode component is disabled.",
    },
    placeholder: {
      type: "string",

      description: "Default placeholder for input elements.",
    },
    isValid: {
      type: "boolean",
      table: {
        defaultValue: { summary: "true" },
      },
      description: "When set to false, the AuthCode will show a error state.",
    },
    ariaLabel: {
      type: "string",
      table: {
        defaultValue: { summary: "Character `${i + 1}`" },
      },
      description:
        "Specifies the common of the aria phrase for input elements.",
    },
  },
  render: ({
    className,
    length,
    allowedCharacters,
    autoFocus,
    isPassword,
    disabled,
    placeholder,
    isValid,
    ariaLabel,
    ...arg
  }) => {
    const rootProps = getDefaultValues(
      {
        className,
        length,
        allowedCharacters,
        autoFocus,
        isPassword,
        disabled,
        placeholder,
        isValid,
        ariaLabel,
      },
      defaultValues,
    );
    return <AuthCodeComponent {...rootProps} onChange={() => {}} />;
  },
};

export default meta;

type Story = StoryObj<typeof AuthCodeComponent>;

export const AuthCode: Story = {
  args: {
    className: "",
    length: 6,
    allowedCharacters: "alphanumeric",
    autoFocus: false,
    isPassword: false,
    disabled: false,
    placeholder: "",
    isValid: true,
    ariaLabel: "Character `${i + 1}`",
  },
};
