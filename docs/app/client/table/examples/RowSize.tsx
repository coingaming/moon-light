"use client";

import { Table } from "@heathmont/moon-table-tw";
import { useMemo } from "react";

const makeData = (length: number) =>
  Array.from("_".repeat(length)).map((_) => ({
    firstName: "Name",
    lastName: "Surname",
    age: 35,
    visits: 1500,
    progress: 50,
  }));

const columnsInitial = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Visits",
    accessor: "visits",
  },
  {
    Header: "Progress",
    accessor: "progress",
  },
];

const RowSize = () => {
  const columns = useMemo(() => columnsInitial, []);
  const data = useMemo(() => makeData(2), []);
  return (
    <>
      <Table columns={columns} data={data} rowSize="xs" />
      <Table columns={columns} data={data} rowSize="sm" />
      <Table columns={columns} data={data} />
      <Table columns={columns} data={data} rowSize="lg" />
      <Table columns={columns} data={data} rowSize="xl" />
      <Table columns={columns} data={data} rowSize="2xl" />
    </>
  );
};

export default RowSize;
