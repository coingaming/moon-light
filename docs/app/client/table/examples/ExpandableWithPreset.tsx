"use client";

import React, { useCallback } from "react";
import Table from "@heathmont/moon-table-v8-tw/lib/es/components/Table";
import DataHelper from "@heathmont/moon-table-v8-tw/lib/es/private/types/DataHelper";
import { ExpandedState, ColumnDef } from "@tanstack/react-table";
import {
  ArrowsRefreshRound,
  ControlsChevronDown,
  ControlsChevronRight,
} from "@heathmont/moon-icons-tw";
import { Chip, Tooltip } from "@heathmont/moon-core-tw";

interface Person extends DataHelper {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: "relationship" | "complicated" | "single";
  actions: React.JSX.Element;
  subRows?: Person[];
}

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const tooltip = () => (
  <Tooltip>
    <Tooltip.Trigger className="max-h-6">
      <Chip
        variant="ghost"
        iconOnly={<ArrowsRefreshRound className="text-moon-24 max-h-6" />}
        onClick={() => {
          window.location.reload();
        }}
      />
    </Tooltip.Trigger>
    <Tooltip.Content position="top-start" className="z-1">
      Reload page
      <Tooltip.Arrow />
    </Tooltip.Content>
  </Tooltip>
);

const newPerson = (): Person => {
  return {
    firstName: "FirstName",
    lastName: "LastName",
    age: 40,
    visits: 1000,
    progress: 100,
    status: "complicated",
    actions: tooltip(),
  };
};

function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}

const Example = () => {
  const columns = React.useMemo<ColumnDef<{}, Person>[]>(
    () => [
      {
        header: "Name",
        footer: (props) => "Name",
        columns: [
          {
            accessorKey: "firstName",
            header: ({ table }) => (
              <>
                <button
                  {...{
                    onClick: table.getToggleAllRowsExpandedHandler(),
                  }}
                >
                  {table.getIsAllRowsExpanded() ? (
                    <ControlsChevronDown />
                  ) : (
                    <ControlsChevronRight />
                  )}
                </button>{" "}
                First Name
              </>
            ),
            cell: ({ row, getValue }) => (
              <div
                style={{
                  paddingLeft: `${row.depth * 2}rem`,
                }}
                className="flex gap-x-1"
              >
                <>
                  {row.getCanExpand() ? (
                    <button
                      {...{
                        onClick: row.getToggleExpandedHandler(),
                        style: { cursor: "pointer" },
                      }}
                    >
                      {row.getIsExpanded() ? (
                        <ControlsChevronDown />
                      ) : (
                        <ControlsChevronRight />
                      )}
                    </button>
                  ) : null}
                  {getValue()}
                </>
              </div>
            ),
          },
          {
            accessorFn: (row: Person) => row.lastName,
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <span>Last Name</span>,
          },
        ],
      },
      {
        header: "Info",
        footer: (props) => "Info",
        columns: [
          {
            accessorKey: "age",
            header: () => "Age",
          },
          {
            header: "More Info",
            columns: [
              {
                accessorKey: "visits",
                header: () => <span>Visits</span>,
              },
              {
                accessorKey: "status",
                header: "Status",
              },
              {
                accessorKey: "progress",
                header: "Profile Progress",
              },
            ],
          },
        ],
      },
      {
        id: "actions",
        header: () => "Actions",
        footer: (props) => "Actions",
        columns: [
          {
            header: () => "Actions",
            accessorKey: "actions",
            cell: (props) => props.getValue(),
          },
        ],
      },
    ],
    [],
  );

  const preset: ExpandedState = {
    "0": true,
    "0.2": true,
    "0.2.1": true,
  };

  const [expanded, setExpanded] = React.useState<ExpandedState>(preset);
  const [data, setData] = React.useState(() => makeData(10, 5, 3));

  const getSubRows = useCallback(
    ({ subRows }: DataHelper) => subRows as DataHelper[],
    [],
  );

  return (
    <div className="border border-beerus rounded-lg">
      <Table
        columns={columns}
        data={data}
        width={800}
        height={600}
        layout="stretched-auto"
        state={{ expanded }}
        getSubRows={getSubRows}
        onExpandedChange={setExpanded}
        withFooter={true}
      />
    </div>
  );
};

export default Example;
