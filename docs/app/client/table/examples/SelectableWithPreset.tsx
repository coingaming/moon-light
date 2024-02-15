"use client";

import { Checkbox, Chip, Tooltip } from "@heathmont/moon-core-tw";
import { ArrowsRefreshRound } from "@heathmont/moon-icons-tw";
import Table from "@heathmont/moon-table-v8-tw/lib/es/components/Table";
import { ColumnDef, RowSelectionState } from "@tanstack/react-table";
import React from "react";

type DataTypeHelper = {
  firstName: string;
  lastName: string;
  age: string;
  visits: string;
  progress: string;
  status: number;
  activity: number;
  actions: () => void;
};

const tooltip = () => (
  <Tooltip>
    <Tooltip.Trigger className="max-h-6">
      <Chip
        variant="ghost"
        iconOnly={<ArrowsRefreshRound className="text-moon-24 max-h-6" />}
        onClick={() => {
          window.location.reload();
        }}
      />
    </Tooltip.Trigger>
    <Tooltip.Content position="top-start" className="z-1">
      Reload page
      <Tooltip.Arrow />
    </Tooltip.Content>
  </Tooltip>
);

const makeData = (length: number) => {
  return Array.from("_".repeat(length)).map((_, index) => {
    return {
      firstName: "Test",
      lastName: "Test",
      age: <span>{Math.floor(index * 30)}</span>,
      visits: <span>{Math.floor(index * 100)}</span>,
      progress: <span>{Math.floor(index * 100)}</span>,
      status: Math.floor(index * 100),
      activity: Math.floor(index * 100),
      actions: tooltip(),
    };
  });
};

const preset: RowSelectionState = {
  1: true,
  3: true,
  4: true,
  11: true,
  16: true,
};

const Example = () => {
  const [rowSelection, setRowSelection] =
    React.useState<RowSelectionState>(preset);
  const [data, setData] = React.useState(() => makeData(20));

  const columns = React.useMemo<ColumnDef<{}, DataTypeHelper>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <div className="w-8 px-1">
            <Checkbox
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler(),
              }}
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className="w-8 px-1">
            <Checkbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        header: () => "First Name",
        accessorKey: "firstName",
      },
      {
        header: () => "Last Name",
        accessorKey: "lastName",
      },
      {
        header: () => "Age",
        accessorKey: "age",
        cell: (props) => props.getValue(),
      },
      {
        header: () => "Visits",
        accessorKey: "visits",
        cell: (props) => props.getValue(),
      },
      {
        header: () => "Progress",
        accessorKey: "progress",
        cell: (props) => props.getValue(),
      },
      {
        header: () => "Activity",
        accessorKey: "activity",
      },
      {
        header: () => "Status",
        accessorKey: "status",
      },
      {
        header: () => "Actions",
        accessorKey: "actions",
        cell: (props) => props.getValue(),
      },
    ],
    [],
  );

  return (
    <div className="bg-gohan px-1 pb-1 rounded-lg">
      <Table
        columns={columns}
        data={data}
        width={800}
        height={400}
        layout="stretched-auto"
        state={{ rowSelection }}
        onRowSelectionChange={setRowSelection}
        isSelectable={true}
      />
    </div>
  );
};

export default Example;
