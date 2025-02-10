import {
  Button,
  Form as FormComponent,
  Hint,
  Input,
  Label,
  NativeSelect,
  Textarea,
} from "@heathmont/moon-core-tw";
import { GenericInfo } from "@heathmont/moon-icons-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";
import { options as basicOptions } from "./mockData/basicOptions";

const options = ["sm", "md", "lg"] as const;
type OptionsType = (typeof options)[number];

const defaultValues = {
  className: "",
  size: "md" as OptionsType,
  disabled: false,
};

type FormItemProps = {
  disabled?: boolean;
  error?: boolean;
  formItemClassName?: string;
  formItemSize?: OptionsType;
};

type FormComponentProps = React.ComponentProps<typeof FormComponent> &
  FormItemProps;

const meta: Meta<FormComponentProps> = {
  component: FormComponent,
  title: "Moon DS/Form",
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Additional CSS class for the Form.",
      type: "string",
    },
    size: {
      description: "Size of Form",
      options,
      control: { type: "select" },
      table: {
        type: { summary: options.join(" | ") },
        defaultValue: { summary: "md" },
      },
    },
    disabled: {
      description:
        "Set disabled/non-disabled state. Applies only for Form.Item component",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    error: {
      description: "Set valid/non-valid. Applies only for Form.Item component",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    formItemClassName: {
      description: "Additional CSS class for the Form.Item.",
      type: "string",
    },
    formItemSize: {
      description: "Size of Form.Item.",
      options,
      control: { type: "select" },
      table: {
        type: { summary: options.join(" | ") },
        defaultValue: { summary: "md" },
      },
    },
  },
  render: ({
    className,
    size,
    disabled,
    error,
    formItemClassName,
    formItemSize,
  }) => {
    const rootProps = getDefaultValues({ className, size }, defaultValues);
    const formItemProps = getDefaultValues(
      { disabled, error, formItemClassName, formItemSize },
      {
        disabled: false,
        error: false,
        formItemClassName: "",
        formItemSize: "md",
      },
    );

    return (
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <FormComponent
          method="get"
          id="login"
          onSubmit={() => console.log("Submit")}
          {...rootProps}
        >
          <FormComponent.Item {...formItemProps}>
            <Label htmlFor="name">Username</Label>
            <Input placeholder="Your username..." id="name" />
            {error && (
              <Hint error>
                <GenericInfo />
                Informative message holder
              </Hint>
            )}
          </FormComponent.Item>
          <FormComponent.Item disabled={disabled}>
            <Label htmlFor="email">Email</Label>
            <Input placeholder="Your Email..." id="email" type="email" />
          </FormComponent.Item>
          <FormComponent.Item disabled={disabled} className="flex gap-2">
            <fieldset className="w-full">
              <Label htmlFor="month">Month</Label>
              <NativeSelect id="month">
                {basicOptions.map((opt, key) => (
                  <option value={opt.name} key={key}>
                    {opt.name}
                  </option>
                ))}
              </NativeSelect>
            </fieldset>
            <fieldset className="w-full">
              <Label htmlFor="year">Year</Label>
              <NativeSelect id="year">
                {basicOptions.map((opt, key) => (
                  <option value={opt.name} key={key}>
                    {opt.name}
                  </option>
                ))}
              </NativeSelect>
            </fieldset>
          </FormComponent.Item>
          <FormComponent.Item disabled={disabled}>
            <Label htmlFor="info">Additional information</Label>
            <Textarea id="info" />
          </FormComponent.Item>
          <Button type="submit" form="login" value="Submit">
            Create account
          </Button>
        </FormComponent>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<FormComponentProps>;

export const Form: Story = {
  args: {
    ...defaultValues,
    disabled: false,
    error: false,
    formItemClassName: "",
    formItemSize: "md",
  },
};
