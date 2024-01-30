"use client";

import { Table } from "@heathmont/moon-table-tw";
import { useMemo } from "react";

const makeData = (length: number) =>
  Array.from("_".repeat(length)).map((_, index) => ({
    firstName: `Name ${index}`,
    lastName: `Surname ${index}`,
    age: 35 + index,
    visits: 1500 + index,
    progress: 50 + index,
  }));

const columnsInitial = [
  {
    Header: "First Name",
    accessor: "firstName",
    sortType: "basic",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
    sortType: "basic",
  },
  {
    Header: "Age",
    accessor: "age",
    sortType: "basic",
  },
  {
    Header: "Visits",
    accessor: "visits",
    sortType: "basic",
  },
  {
    Header: "Progress",
    accessor: "progress",
    sortType: "basic",
  },
];

const WithSorting = () => {
  const columns = useMemo(() => columnsInitial, []);
  const data = useMemo(() => makeData(5), []);
  return <Table columns={columns} data={data} isSorting />;
};

export default WithSorting;
