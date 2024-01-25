"use client";

import { Checkbox } from "@heathmont/moon-core-tw";
import { Table } from "@heathmont/moon-table-tw";
import { useMemo, useState } from "react";

interface HeaderProps {
  rows: [];
  rowsById: { [key: string]: boolean };
}

const PREFIX = "any_unique_string_for_each_table";

const makeData = (length: number) =>
  Array.from("_".repeat(length)).map((_) => ({
    firstName: "Name",
    lastName: "Surname",
    age: 35,
    visits: 1500,
    progress: 50,
  }));

const columnsInitial = (selected: any) => [
  {
    id: "_any_unique_string_required",
    Header: ({ rowsById }: HeaderProps) => (
      <Checkbox
        id={PREFIX && PREFIX.length ? `${PREFIX}_root` : "root"}
        checked={Object.keys(rowsById).length === Object.keys(selected).length}
        indeterminate={
          !!Object.keys(selected).length &&
          Object.keys(selected).length < Object.keys(rowsById).length
        }
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    ),
    Cell: ({ row }: any) => (
      <Checkbox
        id={PREFIX && PREFIX.length ? `${PREFIX}_${row.id}` : row.id}
        checked={selected[row.id] === true}
        onClick={(e) => e.stopPropagation()}
      />
    ),
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

const WithSelectableRowsAndCheckboxes = () => {
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});
  const columns = useMemo(() => columnsInitial(selected), [selected]);
  const data = useMemo(() => makeData(5), []);
  return (
    <Table
      columns={columns}
      data={data}
      selectable
      useCheckbox
      getOnRowSelect={() => (rows) => {
        console.log(`IDs of selected rows - ${rows.map((row) => row.id)}`);
        setSelected(
          rows.reduce((acc: { [key: string]: boolean }, item) => {
            acc[item.id] = true;
            return acc;
          }, {}),
        );
      }}
    />
  );
};

export default WithSelectableRowsAndCheckboxes;
