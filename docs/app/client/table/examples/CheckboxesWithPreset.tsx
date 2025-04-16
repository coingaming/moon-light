"use client";

import { useCallback, useMemo, useState } from "react";
import { Checkbox, Chip, Tooltip } from "@heathmont/moon-core-tw";
import { ArrowsRefreshRound } from "@heathmont/moon-icons-tw";
import { Table } from "@heathmont/moon-table-v8-tw/lib/es";
import type {
  ColumnDef,
  Row,
  RowSelectionState,
} from "@heathmont/moon-table-v8-tw/lib/es/private/types";

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

const preset: RowSelectionState = {
  1: true,
  3: true,
  4: true,
  11: true,
  16: true,
};

const Example = () => {
  const tooltip = useMemo(
    () => (
      <Tooltip>
        <Tooltip.Trigger className="max-h-space-24">
          <Chip
            variant="ghost"
            iconOnly={
              <ArrowsRefreshRound className="text-heading-200 max-h-space-24" />
            }
            onClick={() => {
              window.location.reload();
            }}
          />
        </Tooltip.Trigger>
        <Tooltip.Content position="top-start" className="z-[2]">
          Reload page
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
    ),
    [],
  );

  const makeData = useCallback(
    (length: number) => {
      return Array.from("_".repeat(length)).map((_, index) => {
        return {
          firstName: "Test",
          lastName: "Test",
          age: <span>{Math.floor(index * 30)}</span>,
          visits: <span>{Math.floor(index * 100)}</span>,
          progress: <span>{Math.floor(index * 100)}</span>,
          status: Math.floor(index * 100),
          activity: Math.floor(index * 100),
          actions: tooltip,
        };
      });
    },
    [tooltip],
  );

  const [rowSelection, setRowSelection] = useState<RowSelectionState>(preset);
  const [data, setData] = useState(makeData(20));

  const columns = useMemo<ColumnDef<{}, DataTypeHelper>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <div className="w-space-32 px-space-4">
            <Checkbox
              checked={table.getIsAllRowsSelected()}
              indeterminate={table.getIsSomeRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className="w-space-32 px-space-4">
            <Checkbox
              checked={row.getIsSelected()}
              disabled={!row.getCanSelect()}
              onChange={row.getToggleSelectedHandler()}
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
    <div className="border border-primary rounded-8 overflow-hidden">
      <Table
        columns={columns}
        data={data}
        width={800}
        height={400}
        layout="stretched-auto"
        state={{ rowSelection }}
        onRowSelectionChange={setRowSelection}
        preventSelectionByRowClick={true}
        isSelectable={true}
        getOnRowSelectHandler={() => (rows: Row<{}>[]) => {
          console.log(
            `IDs of selected rows - ${rows.map((row: Row<{}>) => row.id)}`,
          );
        }}
      />
    </div>
  );
};

export default Example;
