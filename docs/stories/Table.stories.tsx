import type { Meta, StoryObj } from "@storybook/react";
import { Table as TableComponent } from "@heathmont/moon-table-v8-tw";
import { COLORS } from "./constants";

type TableType = typeof TableComponent;

const meta: Meta<TableType> = {
  title: "Moon DS/Table",
  tags: ["autodocs"],
  component: TableComponent,
  render: (args) => {
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
      table: { type: { summary: "string" } },
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
      },
    },
    isResizable: {
      control: "boolean",
      description: "Enables or disables column resizing functionality.",
      table: {
        type: {
          summary: "boolean",
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
      },
    },
    isSticky: {
      control: "boolean",
      description: "Enables sticky headers or columns for the table.",
      table: {
        type: {
          summary: "boolean",
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
      },
    },
    withMinimap: {
      control: "boolean",
      description: "Displays a minimap for quick navigation within the table.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    withCellBorder: {
      control: "boolean",
      description: "Adds borders around table cells.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    headerBackgroundColor: {
      control: "select",
      options: COLORS,
      table: {
        type: {
          summary: "string",
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
      },
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
    getSubRows: undefined,
    preventSelectionByRowClick: false,
    layout: "auto",
  },
};
