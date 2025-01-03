import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Table as TableComponent } from "@heathmont/moon-table-v8-tw";
import { COLORS } from "./storiesConstants";

const meta: Meta<typeof TableComponent> = {
  title: "Moon DS/Table",
  tags: ["autodocs"],
  component: TableComponent,
  argTypes: {
    columns: {
      control: "object",
      description:
        "Defines the column structure of the table, including headers and configurations.",
    },
    data: {
      control: "object",
      description:
        "The data to be displayed in the table, provided as an array of objects.",
    },
    width: {
      control: "number",
      description: "Sets the width of the table in pixels.",
    },
    height: {
      control: "number",
      description: "Sets the height of the table in pixels.",
    },
    fixedWidth: {
      control: "text",
      description:
        "Specifies a fixed width for the table as a string value (e.g., '100px').",
    },
    rowGap: {
      control: "text",
      description:
        "Defines the gap between rows in the table, provided as a CSS value.",
    },
    rowSize: {
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
      description: "Determines the size of each row in the table.",
    },
    layout: {
      options: ["auto", "fixed"],
      control: { type: "select" },
      description: "Specifies the table layout algorithm (auto or fixed).",
    },
    isResizable: {
      control: "boolean",
      description: "Enables or disables column resizing functionality.",
    },
    isSelectable: {
      control: "boolean",
      description: "Allows rows to be selectable by the user.",
    },
    isSticky: {
      control: "boolean",
      description: "Enables sticky headers or columns for the table.",
    },
    withFooter: {
      control: "boolean",
      description: "Includes a footer section in the table.",
    },
    withMinimap: {
      control: "boolean",
      description: "Displays a minimap for quick navigation within the table.",
    },
    withCellBorder: {
      control: "boolean",
      description: "Adds borders around table cells.",
    },
    headerBackgroundColor: {
      control: "select",
      options: COLORS,
      description: "Sets the background color for the table header.",
    },
    bodyBackgroundColor: {
      control: "select",
      options: COLORS,
      description: "Sets the background color for the table body.",
    },
    defaultRowBackgroundColor: {
      control: "select",
      options: COLORS,
      description: "Defines the default background color for rows.",
    },
    evenRowBackgroundColor: {
      control: "select",
      options: COLORS,
      description: "Defines the background color for even-numbered rows.",
    },
    rowSelectColor: {
      control: "select",
      options: COLORS,
      description: "Specifies the background color for selected rows.",
    },
    rowActiveColor: {
      control: "select",
      options: COLORS,
      description: "Specifies the background color for active rows.",
    },
    rowHoverColor: {
      control: "select",
      options: COLORS,
      description: "Specifies the background color for rows when hovered over.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TableComponent>;

export const Table: Story = {
  args: {
    columns: [
      { id: "name", header: "Name", accessorKey: "name" },
      { id: "age", header: "Age", accessorKey: "age" },
      { id: "status", header: "Status", accessorKey: "status" },
    ],
    data: [
      { id: 1, name: "John Doe", age: 28, status: "Active" },
      { id: 2, name: "Jane Smith", age: 34, status: "Inactive" },
      { id: 3, name: "Sam Green", age: 45, status: "Active" },
    ],
    width: 600,
    height: 400,
    fixedWidth: "w-full",
    rowGap: "2px",
    isResizable: false,
    isSelectable: true,
    isSticky: true,
    withFooter: false,
    withMinimap: false,
  },
};
