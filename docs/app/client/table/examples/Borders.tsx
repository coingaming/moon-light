"use client";

import { useMemo, useCallback } from "react";
import { Table } from "@heathmont/moon-table-v8-tw/lib/es";
import type { ColumnDef } from "@heathmont/moon-table-v8-tw/lib/es/private/types";

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

  return (
    <div className="w-full max-w-screen-lg border border-beerus rounded-lg overflow-hidden">
      <Table
        columns={columns}
        data={data}
        layout="stretched-auto"
        isResizable
        withCellBorder
      />
    </div>
  );
};

export default Example;
