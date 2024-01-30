"use client";

import { ControlsChevronRight } from "@heathmont/moon-icons-tw";
import { Table } from "@heathmont/moon-table-tw";
import { useMemo } from "react";

interface HeaderProps {
  isAllRowsExpanded: boolean;
  getToggleAllRowsExpandedProps: () => React.HTMLAttributes<HTMLSpanElement>;
}

const makeData = (length: number) =>
  Array.from("_".repeat(length)).map((_) => ({
    firstName: "Name",
    lastName: "First",
    age: 35,
    visits: 1500,
    progress: 50,
    subRows: [
      {
        firstName: "Name",
        lastName: "Second",
        age: 35,
        visits: 1500,
        progress: 50,
        subRows: [
          {
            firstName: "Name",
            lastName: "Third",
            age: 35,
            visits: 1500,
            progress: 50,
          },
        ],
      },
    ],
  }));

const columnsInitial = [
  {
    id: "_any_unique_string_required",
    Header: ({
      getToggleAllRowsExpandedProps,
      isAllRowsExpanded,
    }: HeaderProps) => (
      <span {...getToggleAllRowsExpandedProps()}>
        <ControlsChevronRight
          className={isAllRowsExpanded ? "rotate-90" : ""}
        />
      </span>
    ),
    Cell: ({ row, toggleRowExpanded }: any) => (
      <div className="flex h-full items-center">
        {row.canExpand ? (
          <span
            {...row.getToggleRowExpandedProps({
              style: {
                paddingLeft: `${row.depth * 2}rem`,
              },
            })}
            onClick={(e) => {
              e.preventDefault();
              toggleRowExpanded(row.id, row.isExpanded !== true);
            }}
          >
            <ControlsChevronRight
              className={row.isExpanded ? "rotate-90" : ""}
            />
          </span>
        ) : null}
      </div>
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

const WithExpandableRows = () => {
  const columns = useMemo(() => columnsInitial, []);
  const data = useMemo(() => makeData(5), []);
  return (
    <Table
      columns={columns}
      data={data}
      getOnRowClickHandler={(row: any) => () => {
        (row as any).canExpand
          ? () => (row as any).toggleRowExpanded()
          : undefined;
      }}
    />
  );
};

export default WithExpandableRows;
