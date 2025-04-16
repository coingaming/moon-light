"use client";

import { useCallback, useMemo, useState } from "react";
import { Table } from "@heathmont/moon-table-v8-tw/lib/es";
import type {
  ColumnDef,
  Row,
} from "@heathmont/moon-table-v8-tw/lib/es/private/types";

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

  const [data, setData] = useState(makeData(20));

  const columns = useMemo<ColumnDef<{}, DataTypeHelper>[]>(
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
    <div className="border border-primary rounded-8 overflow-hidden">
      <Table
        columns={columns}
        data={data}
        width={800}
        height={400}
        layout="stretched-auto"
        rowActiveColor="primary"
        rowHoverColor="hover"
        isSelectable={true}
        getOnRowClickHandler={(row: Row<{}>) => () => {
          console.log(`You clicked row with ID - ${row.id}`);
        }}
      />
    </div>
  );
};

export default Example;
