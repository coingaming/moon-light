"use client";

import { useCallback, useMemo } from "react";
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

  const data = useMemo(() => makeData(2), [makeData]);
  const defaultColumn = {
    size: 120,
  };

  return (
    <div className="flex flex-col gap-y-2 overflow-hidden">
      <div className="w-full border border-beerus rounded-lg overflow-hidden bg-gohan">
        <Table
          columns={columns}
          data={data}
          defaultColumn={defaultColumn}
          width={800}
          isResizable
        />
      </div>
      <div className="w-full border border-beerus rounded-lg overflow-hidden bg-gohan">
        <Table
          columns={columns}
          data={data}
          defaultColumn={defaultColumn}
          width={800}
          layout="stretched-auto"
          isResizable
        />
      </div>
      <div className="w-full border border-beerus rounded-lg overflow-hidden bg-gohan">
        <Table
          columns={columns}
          data={data}
          defaultColumn={defaultColumn}
          width={800}
          layout="fixed"
          fixedWidth="w-max"
          isResizable
        />
      </div>
    </div>
  );
};

export default Example;
