import { Breadcrumb as BreadcrumbComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";

type BreadcrumbComponentProps = typeof BreadcrumbComponent;

const defaultValues = {
  collapseAfter: 4,
  divider: "",
};

const meta: Meta<BreadcrumbComponentProps> = {
  component: BreadcrumbComponent,
  title: "Navigation/Breadcrumb",
  tags: ["autodocs"],
  argTypes: {
    breadcrumbs: {
      description: "Contents of breadcrumb",
      table: {
        type: {
          summary: "React.ReactNode[]",
        },
      },
    },
    divider: {
      description: "Custom divider element",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
    collapseAfter: {
      description:
        "Number of visible crumbs. Additional ones collapse for a streamlined view",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: "4" },
      },
    },
  },
  render: ({ breadcrumbs, divider, collapseAfter }) => {
    const rootProps = getDefaultValues(
      { divider, collapseAfter } as Partial<BreadcrumbComponentProps>,
      defaultValues,
    );
    return <BreadcrumbComponent {...rootProps} breadcrumbs={breadcrumbs} />;
  },
};

export default meta;

type Story = StoryObj<BreadcrumbComponentProps>;

export const Breadcrumb: Story = {
  args: {
    breadcrumbs: ["Home", "Page 1", "Page 2", "Current page"],
    ...defaultValues,
  },
};
