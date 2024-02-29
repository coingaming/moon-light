"use client";

import Table from "@heathmont/moon-table-v8-tw/lib/es/components/Table";
import { ColumnDef, Row } from "@tanstack/react-table";
import React, { useCallback } from "react";

type DataTypeHelper = {
  firstName: string;
  lastName: string;
  age: string;
  visits: string;
  progress: string;
  status: number;
  activity: number;
};

const Example = () => {
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
        };
      });
    },
    [],
  );

  const [data, setData] = React.useState(makeData(20));

  const columns = React.useMemo<ColumnDef<{}, DataTypeHelper>[]>(
    () => [
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
    ],
    [],
  );

  return (
    <div className="border border-beerus rounded-lg overflow-hidden">
      <Table
        columns={columns}
        data={data}
        width={800}
        height={400}
        layout="stretched-auto"
        rowActiveColor="goku"
        rowHoverColor="krillin-10"
        isSelectable={true}
        getOnRowClickHandler={(row: Row<{}>) => () => {
          console.log(`You clicked row with ID - ${row.id}`);
        }}
      />
    </div>
  );
};

export default Example;
