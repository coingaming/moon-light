import type { Meta, StoryObj } from "@storybook/react";
import { Table as TableComponent } from "@heathmont/moon-table-v8-tw";
import { COLORS } from "./constants";

type TableType = typeof TableComponent;

const meta: Meta<TableType> = {
  title: "Moon DS/Table",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return <TableComponent {...args} />;
  },
  argTypes: {
    bodyBackgroundColor: {
      control: "select",
      options: COLORS,
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "gohan",
        },
      },
      description:
        "The background color of the table body (the color of the gap between the rows of the table).",
    },
    columns: {
      control: "object",
      table: {
        type: {
          summary: "ColumnDef<TData, any>[]",
        },
      },
      description:
        "Defines the column structure of the table, including headers and configurations.",
    },
    data: {
      control: "object",
      table: {
        type: {
          summary: "TData[]",
        },
      },
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
      description:
        "Specifies a fixed width for the table as a string value (e.g., '100px').",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "w-full" },
      },
    },
    rowGap: {
      description:
        "Defines the gap between rows in the table, provided as a CSS value.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "2px" },
      },
    },
    rowSize: {
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
      description: "Determines the size of each row in the table.",
      table: {
        type: {
          summary: "xs | sm | md | lg | xl | 2xl",
        },
        defaultValue: {
          summary: "md",
        },
      },
    },
    layout: {
      options: ["auto", "fixed"],
      control: { type: "select" },
      description: "Specifies the table layout algorithm (auto or fixed).",
      table: {
        type: {
          summary: "auto | fixed",
        },
        defaultValue: {
          summary: "auto",
        },
      },
    },
    isResizable: {
      control: "boolean",
      description: "Enables or disables column resizing functionality.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    isSelectable: {
      control: "boolean",
      description: "Allows rows to be selectable by the user.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    isSticky: {
      control: "boolean",
      description: "Enables sticky headers or columns for the table.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "true",
        },
      },
    },
    withFooter: {
      control: "boolean",
      description: "Includes a footer section in the table.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    withMinimap: {
      control: "boolean",
      description: "Displays a minimap for quick navigation within the table.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    withCellBorder: {
      description: "Adds borders around table cells.",
      table: {
        type: {
          summary: "boolean | 'sticky' ",
        },
        defaultValue: {
          summary: "false",
        },
      },
      control: {
        type: "select",
      },
      options: [true, false, "sticky"],
    },
    headerBackgroundColor: {
      control: "select",
      options: COLORS,
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "gohan",
        },
      },
      description: "Sets the background color for the table header.",
    },
    defaultRowBackgroundColor: {
      control: "select",
      options: COLORS,
      description: "Defines the default background color for rows.",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "goku",
        },
      },
    },
    defaultColumn: {
      table: {
        type: {
          summary: "Partial<ColumnDef<TData, any>>",
        },
      },
      description:
        "A set of parameters for columns that do not have their own properties set.",
    },
    evenRowBackgroundColor: {
      control: "select",
      options: COLORS,
      description: "Defines the background color for even-numbered rows.",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "goku",
        },
      },
    },
    rowSelectColor: {
      control: "select",
      options: COLORS,
      description: "Specifies the background color for selected rows.",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "heles",
        },
      },
    },
    rowActiveColor: {
      control: "select",
      options: COLORS,
      description: "Specifies the background color for active rows.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    rowHoverColor: {
      control: "select",
      options: COLORS,
      description: "Specifies the background color for rows when hovered over.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    getSubRows: {
      table: {
        type: {
          summary: "(originalRow: TData, index: number) => TData[] | undefined",
        },
      },
      description: "This is used to access the sub rows for any given row.",
    },
    onExpandedChange: {
      description:
        "This function is called when the expanded table state changes.",
      table: {
        type: {
          summary: "OnChangeFn<ExpandedState>",
        },
      },
    },
    onRowSelectionChange: {
      description:
        "This function will be called when state.rowSelection changes.",
      table: {
        type: {
          summary: "OnChangeFn<RowSelectionState>",
        },
      },
    },
    preventSelectionByRowClick: {
      description:
        "If the value is true, prevents toggling the selection state of a row by clicking on it.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
    },
    state: {
      description: "Preset state of the table.",
      table: {
        type: {
          summary: "Partial<TableState>",
        },
      },
    },
    textClip: {
      description: "Sets the type of clipping of long data inside a table cell",
      table: {
        type: {
          summary: "clip | break",
        },
      },
      control: { type: "select" },
      options: ["clip", "break"],
    },
    onColumnVisibilityChange: {
      description: "This function handles state.columnVisibility changes",
      table: {
        type: {
          summary: "OnChangeFn<VisibilityState>",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<TableType>;

export const Table: Story = {
  args: {
    columns: [
      { id: "name", header: "Name", accessorKey: "name" },
      { id: "age", header: "Age", accessorKey: "age" },
      { id: "status", header: "Status", accessorKey: "status" },
    ], // checked
    data: [
      { id: 1, name: "John Doe", age: 28, status: "Active", subRows: [] },
      {
        id: 2,
        name: "Jane Smith test test test test test test test test test test test ",
        age: 34,
        status: "Inactive",
        subRows: [],
      },
      {
        id: 3,
        name: "Sam Green",
        age: 45,
        status: "Active",
        subRows: [{ id: 4, name: "Sam Green 2", age: 45, status: "Active" }],
      },
    ], // checked
    bodyBackgroundColor: "gohan", // checked
    defaultColumn: undefined,
    defaultRowBackgroundColor: "goku", // checked
    evenRowBackgroundColor: "goku", // checked
    fixedWidth: "w-full", // checked
    getSubRows: undefined, // checked
    headerBackgroundColor: "gohan", // checked
    height: 400, //checked
    isResizable: false, // checked
    isSelectable: false, // checked
    isSticky: true, // checked
    layout: "auto", // checked
    onColumnVisibilityChange: undefined, // skipped, assumed to work fine
    onExpandedChange: undefined, // skipped, assumed to work fine
    onRowSelectionChange: undefined, // skipped, assumed to work fine
    preventSelectionByRowClick: false, // skipped, assumed to work fine
    rowActiveColor: undefined, // checked
    rowGap: "2px", // checked
    rowHoverColor: undefined, // checked
    rowSelectColor: "heles", // checked
    rowSize: "md", // checked
    state: {}, // checked
    textClip: undefined, // checked
    width: 600, // checked
    withCellBorder: false, // checked
    withFooter: false, // checked
    withMinimap: false, // checked
  },
};
