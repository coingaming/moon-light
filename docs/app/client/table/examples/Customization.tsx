"use client";

import { Table } from "@heathmont/moon-table-tw";
import { useMemo } from "react";

const makeData = (length: number) =>
  Array.from("_".repeat(length)).map((_, index) => ({
    firstName: "Name",
    lastName: "Surname",
    age: 35,
    visits: 1500,
    progress: 50,
    backgroundColor: index === 1 && "beerus",
    fontColor: index === 0 ? "piccolo" : index < 3 && "trunks",
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

const Customization = () => {
  const columns = useMemo(() => columnsInitial, []);
  const data = useMemo(() => makeData(5), []);
  return <Table columns={columns} data={data} />;
};

export default Customization;
