"use client";

import React from "react";
import Table from "@heathmont/moon-table-v8-tw/lib/es/components/Table";
import { ColumnDef } from "@tanstack/react-table";

type DefaultHelper = {
  firstName: string;
  lastName: string;
  age: string;
  visits: string;
  progress: string;
  status: number;
  activity: number;
};

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
    };
  });
};

const Example = () => {
  const columns = React.useMemo<ColumnDef<{}, DefaultHelper>[]>(
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
  const data = React.useMemo(() => makeData(2), []);

  return (
    <>
      <div className="w-full max-w-screen-lg border border-beerus rounded-lg overflow-hidden">
        <Table columns={columns} data={data} rowGap="0" />
      </div>
      <div className="w-full max-w-screen-lg border border-beerus rounded-lg overflow-hidden">
        <Table columns={columns} data={data} />
      </div>
      <div className="w-full max-w-screen-lg border border-beerus rounded-lg overflow-hidden">
        <Table columns={columns} data={data} rowGap="4px" />
      </div>
      <div className="w-full max-w-screen-lg border border-beerus rounded-lg overflow-hidden">
        <Table columns={columns} data={data} rowGap="8px" />
      </div>
      <div className="w-full max-w-screen-lg border border-beerus rounded-lg overflow-hidden">
        <Table columns={columns} data={data} rowGap="12px" />
      </div>
    </>
  );
};

export default Example;
