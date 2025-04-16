"use client";

import { useCallback, useMemo } from "react";
import { Table } from "@heathmont/moon-table-v8-tw/lib/es";
import type { ColumnDef } from "@heathmont/moon-table-v8-tw/lib/es/private/types";

type DataTypeHelper = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: number;
  activity: number;
  age1: number;
  visits1: number;
  progress1: number;
  status1: number;
  activity1: number;
  age2: number;
  visits2: number;
  progress2: number;
  status2: number;
  activity2: number;
  age3: number;
  visits3: number;
  progress3: number;
  status3: number;
  activity3: number;
  age4: number;
  visits4: number;
  progress4: number;
  status4: number;
  activity4: number;
  age5: number;
  visits5: number;
  progress5: number;
  status5: number;
  activity5: number;
};

const Example = () => {
  const columns = useMemo<ColumnDef<{}, DataTypeHelper>[]>(
    () => [
      {
        id: "name",
        header: () => "Name",
        sticky: "left",
        columns: [
          {
            header: () => "First Name",
            accessorKey: "firstName",
            size: 60,
          },
          {
            header: () => "Last Name",
            accessorKey: "lastName",
            size: 60,
          },
        ],
      },
      {
        id: "info",
        header: () => "Info",
        columns: [
          {
            header: () => "Age",
            cell: (props) => props.getValue(),
            accessorKey: "age",
            size: 50,
          },
          {
            header: () => "Visits",
            cell: (props) => props.getValue(),
            accessorKey: "visits",
          },
          {
            header: () => "Activity",
            accessorKey: "activity",
          },
        ],
      },
      {
        id: "info1",
        header: () => "Info1",
        columns: [
          {
            header: () => "Age1",
            cell: (props) => props.getValue(),
            accessorKey: "age1",
            size: 50,
          },
          {
            header: () => "Visits1",
            cell: (props) => props.getValue(),
            accessorKey: "visits1",
          },
          {
            header: () => "Activity1",
            accessorKey: "activity1",
          },
        ],
      },
      {
        id: "info2",
        header: () => "Info2",
        columns: [
          {
            header: () => "Age2",
            cell: (props) => props.getValue(),
            accessorKey: "age2",
            size: 50,
          },
          {
            header: () => "Visits2",
            cell: (props) => props.getValue(),
            accessorKey: "visits2",
          },
          {
            header: () => "Activity2",
            accessorKey: "activity2",
          },
        ],
      },
      {
        id: "info3",
        header: () => "Info3",
        columns: [
          {
            header: () => "Age3",
            cell: (props) => props.getValue(),
            accessorKey: "age3",
            size: 50,
          },
          {
            header: () => "Visits3",
            cell: (props) => props.getValue(),
            accessorKey: "visits3",
          },
          {
            header: () => "Activity3",
            accessorKey: "activity3",
          },
        ],
      },
      {
        id: "info4",
        header: () => "Info4",
        columns: [
          {
            header: () => "Age4",
            cell: (props) => props.getValue(),
            accessorKey: "age4",
            size: 50,
          },
          {
            header: () => "Visits4",
            cell: (props) => props.getValue(),
            accessorKey: "visits4",
          },
          {
            header: () => "Activity4",
            accessorKey: "activity4",
          },
        ],
      },
      {
        id: "info5",
        header: () => "Info5",
        columns: [
          {
            header: () => "Age5",
            cell: (props) => props.getValue(),
            accessorKey: "age5",
            size: 50,
          },
          {
            header: () => "Visits5",
            cell: (props) => props.getValue(),
            accessorKey: "visits5",
          },
          {
            header: () => "Activity5",
            accessorKey: "activity5",
          },
        ],
      },
      {
        id: "progress",
        header: () => "Progress",
        sticky: "right",
        columns: [
          {
            header: () => "Profile Progress",
            cell: (props) => props.getValue(),
            accessorKey: "progress",
          },
        ],
      },
    ],
    [],
  );

  const makeData = useCallback((length: number) => {
    return Array.from("_".repeat(length)).map((_, index) => {
      return {
        firstName: "Test",
        lastName: "Test",
        age: <span>{Math.floor(index * 30)}</span>,
        visits: <span>{Math.floor(index * 100)}</span>,
        activity: Math.floor(index * 100),
        progress: <span>{Math.floor(index * 100)}</span>,
        status: Math.floor(index * 100),
        age1: <span>{Math.floor(index * 30)}</span>,
        visits1: <span>{Math.floor(index * 100)}</span>,
        activity1: Math.floor(index * 100),
        age2: <span>{Math.floor(index * 30)}</span>,
        visits2: <span>{Math.floor(index * 100)}</span>,
        activity2: Math.floor(index * 100),
        age3: <span>{Math.floor(index * 30)}</span>,
        visits3: <span>{Math.floor(index * 100)}</span>,
        activity3: Math.floor(index * 100),
        age4: <span>{Math.floor(index * 30)}</span>,
        visits4: <span>{Math.floor(index * 100)}</span>,
        activity4: Math.floor(index * 100),
        age5: <span>{Math.floor(index * 30)}</span>,
        visits5: <span>{Math.floor(index * 100)}</span>,
        activity5: Math.floor(index * 100),
      };
    });
  }, []);

  const data = useMemo(() => makeData(40), [makeData]);

  return (
    <div className="border border-primary rounded-8 overflow-hidden">
      <Table
        columns={columns}
        data={data}
        width={800}
        height={400}
        withMinimap
      />
    </div>
  );
};

export default Example;
