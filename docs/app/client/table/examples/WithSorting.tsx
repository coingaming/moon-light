"use client";

import { Table } from "@heathmont/moon-table-v8-tw/lib/es";
import { ColumnDef, Header, SortingState } from "@tanstack/react-table";
import React from "react";

type DataTypeHelper = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: number;
  activity: number;
};

const makeData = () => [
  {
    firstName: "Magdalena",
    lastName: "Smith",
    age: 36,
    visits: 50,
    progress: 20,
    status: 19,
    activity: 54,
  },
  {
    firstName: "Lisa",
    lastName: "Brown",
    age: 96,
    visits: 8,
    progress: 2,
    status: 97,
    activity: 23,
  },
  {
    firstName: "Tanya",
    lastName: "Fox",
    age: 63,
    visits: 82,
    progress: 59,
    status: 52,
    activity: 46,
  },
  {
    firstName: "Bart",
    lastName: "Woods",
    age: 64,
    visits: 35,
    progress: 78,
    status: 65,
    activity: 5,
  },
  {
    firstName: "Elroy",
    lastName: "Rogers",
    age: 12,
    visits: 4,
    progress: 44,
    status: 98,
    activity: 15,
  },
  {
    firstName: "Jacklyn",
    lastName: "Perkins",
    age: 74,
    visits: 5,
    progress: 1,
    status: 86,
    activity: 2,
  },
  {
    firstName: "Jeremie",
    lastName: "Watts",
    age: 89,
    visits: 98,
    progress: 54,
    status: 24,
    activity: 43,
  },
  {
    firstName: "John",
    lastName: "Dobbins",
    age: 52,
    visits: 25,
    progress: 25,
    status: 97,
    activity: 35,
  },
  {
    firstName: "Megan",
    lastName: "Lewis",
    age: 55,
    visits: 54,
    progress: 24,
    status: 56,
    activity: 33,
  },
  {
    firstName: "Clara",
    lastName: "Harrison",
    age: 53,
    visits: 63,
    progress: 24,
    status: 48,
    activity: 3,
  },
  {
    firstName: "Burt",
    lastName: "Henson",
    age: 4,
    visits: 653,
    progress: 36,
    status: 44,
    activity: 43,
  },
  {
    firstName: "Emma",
    lastName: "Herbert",
    age: 49,
    visits: 45,
    progress: 454,
    status: 35,
    activity: 4,
  },
];

const headerCell = (header: Header<{}, DataTypeHelper>, cellLabel: string) => {
  return (
    <div
      {...{
        className: header.column.getCanSort()
          ? "cursor-pointer select-none"
          : "",
        onClick: header.column.getToggleSortingHandler(),
      }}
    >
      {cellLabel}
      {{
        asc: " 🔼",
        desc: " 🔽",
      }[header.column.getIsSorted() as string] ?? null}
    </div>
  );
};

const preset: SortingState = [
  {
    id: "last_name",
    desc: false,
  },
];

const Example = () => {
  const [data, setData] = React.useState(() => makeData());
  const [sorting, setSorting] = React.useState<SortingState>(preset);

  const columns = React.useMemo<ColumnDef<{}, DataTypeHelper>[]>(
    () => [
      {
        id: "first_name",
        header: ({ header }) => headerCell(header, "First Name"),
        accessorKey: "firstName",
      },
      {
        id: "last_name",
        header: ({ header }) => headerCell(header, "Last Name"),
        accessorKey: "lastName",
      },
      {
        id: "age",
        header: ({ header }) => headerCell(header, "Age"),
        accessorKey: "age",
      },
      {
        id: "visits",
        header: ({ header }) => headerCell(header, "Visits"),
        accessorKey: "visits",
      },
      {
        id: "progress",
        header: ({ header }) => headerCell(header, "Progress"),
        accessorKey: "progress",
      },
      {
        id: "status",
        header: ({ header }) => headerCell(header, "Status"),
        accessorKey: "status",
      },
      {
        id: "activity",
        header: ({ header }) => headerCell(header, "Activity"),
        accessorKey: "activity",
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
        state={{ sorting }}
        onSortingChange={setSorting}
      />
    </div>
  );
};

export default Example;
