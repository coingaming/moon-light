"use client";

import { useCallback, useMemo, useState } from "react";
import { Table } from "@heathmont/moon-table-v8-tw/lib/es";
import type { ColumnDef } from "@heathmont/moon-table-v8-tw/lib/es/private/types";
import { Checkbox } from "@heathmont/moon-core-tw";

type DefaultHelper = {
  firstName: string;
  lastName: string;
  age: string;
  visits: string;
  progress: string;
  status: number;
  activity: number;
};

const Example = () => {
  const makeData = useCallback((length: number) => {
    return Array.from("_".repeat(length)).map((_, index) => {
      return {
        firstName: "Test",
        lastName: "Test",
        age: <span>{Math.floor(index * 30)}</span>,
        visits: <span>{Math.floor(index * 100)}</span>,
        progress: <span>{Math.floor(index * 100)}</span>,
        status: Math.floor(index * 100),
        activity: Math.floor(index * 100),
      };
    });
  }, []);

  const columns = useMemo<ColumnDef<{}, DefaultHelper>[]>(
    () => [
      {
        id: "firstName",
        header: () => "First Name",
        accessorKey: "firstName",
      },
      {
        id: "lastName",
        header: () => "Last Name",
        accessorKey: "lastName",
      },
      {
        id: "age",
        header: () => "Age",
        accessorKey: "age",
        cell: (props) => props.getValue(),
      },
      {
        id: "visits",
        header: () => "Visits",
        accessorKey: "visits",
        cell: (props) => props.getValue(),
      },
      {
        id: "progress",
        header: () => "Progress",
        accessorKey: "progress",
        cell: (props) => props.getValue(),
      },
      {
        id: "activity",
        header: () => "Activity",
        accessorKey: "activity",
      },
      {
        id: "status",
        header: () => "Status",
        accessorKey: "status",
      },
    ],
    [],
  );
  const data = useMemo(() => makeData(5), [makeData]);

  const [columnVisibility, setColumnsVisibility] = useState<
    Record<string, boolean>
  >({});

  const hideColumn = (columnId: string) => {
    setColumnsVisibility((prevState) => ({
      ...prevState,
      [columnId]:
        prevState[columnId] === undefined ? false : !prevState[columnId],
    }));
  };

  const isColumnVisible = (columnId: string) => {
    console.log("in here oe columndId", {
      columnId,
      columnVisible: columnVisibility[columnId],
    });

    if (columnVisibility[columnId] === undefined) {
      return true;
    }

    return columnVisibility[columnId];
  };

  const ColumnsVisibilityControls = () => {
    return (
      <ul className="w-full grid grid-cols-7 gap-2">
        {columns.map((column) => (
          <li key={column.id}>
            <Checkbox
              label={column?.id}
              id={`checkbox-${column.id}`}
              checked={isColumnVisible(column.id as string)}
              onChange={() => {
                hideColumn(column.id as string);
              }}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-full max-w-screen-lg border border-beerus rounded-lg overflow-hidden">
      <ColumnsVisibilityControls />
      <Table
        columns={columns}
        data={data}
        state={{ columnVisibility }}
        onColumnVisibilityChange={setColumnsVisibility}
      />
    </div>
  );
};

export default Example;
