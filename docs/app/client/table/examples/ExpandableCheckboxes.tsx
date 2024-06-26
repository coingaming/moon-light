"use client";

import { useCallback, useMemo, useState } from "react";
import {
  Checkbox,
  Chip,
  Tooltip,
  mergeClassnames,
} from "@heathmont/moon-core-tw";
import {
  ArrowsRefreshRound,
  ControlsChevronDown,
  ControlsChevronRight,
} from "@heathmont/moon-icons-tw";
import { Table } from "@heathmont/moon-table-v8-tw/lib/es";
import type DataHelper from "@heathmont/moon-table-v8-tw/lib/es/private/types/DataHelper";
import type {
  ColumnDef,
  ExpandedState,
  Row,
  RowSelectionState,
  TableInterface,
} from "@heathmont/moon-table-v8-tw/lib/es/private/types";

interface DataTypeHelper extends DataHelper {
  firstName: string;
  lastName: string;
  age: string;
  visits: string;
  progress: string;
  status: number;
  actions: () => void;
  subRows?: DataTypeHelper[];
}

const columnShift = (depth: number) => {
  const shiftMap: { [key: number]: string } = ["ps-0", "ps-6", "ps-12"];

  return shiftMap[depth];
};

const preset: RowSelectionState = {
  0: true,
  "0.1": true,
  "0.1.0": true,
  "0.1.1": true,
};

const Example = () => {
  const tooltip = useMemo(
    () => (
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
        <Tooltip.Content position="top-start" className="z-[2]">
          Reload page
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
    ),
    [],
  );

  const makeData = useMemo(
    () => [
      {
        firstName: "Lvl1",
        age: <span>36</span>,
        visits: <span>50</span>,
        progress: <span>20</span>,
        status: 19,
        activity: 54,
        actions: tooltip,
        subRows: [
          {
            firstName: "Sub lvl2",
            age: <span>96</span>,
            visits: <span>8</span>,
            progress: <span>2</span>,
            status: 97,
            activity: 23,
            actions: tooltip,
            subRows: [
              {
                firstName: "Sub lvl3",
                age: <span>63</span>,
                visits: <span>82</span>,
                progress: <span>59</span>,
                status: 52,
                activity: 46,
                actions: tooltip,
              },
              {
                firstName: "Sub lvl3",
                age: <span>64</span>,
                visits: <span>35</span>,
                progress: <span>78</span>,
                status: 65,
                activity: 5,
                actions: tooltip,
              },
              {
                firstName: "Sub lvl3",
                age: <span>12</span>,
                visits: <span>4</span>,
                progress: <span>44</span>,
                status: 98,
                activity: 5,
                actions: tooltip,
              },
            ],
          },
          {
            firstName: "Sub lvl2",
            age: <span>74</span>,
            visits: <span>5</span>,
            progress: <span>1</span>,
            status: 86,
            activity: 2,
            actions: tooltip,
            subRows: [
              {
                firstName: "Sub lvl3",
                age: <span>89</span>,
                visits: <span>98</span>,
                progress: <span>54</span>,
                status: 24,
                activity: 43,
                actions: tooltip,
              },
              {
                firstName: "Sub lvl3",
                age: <span>52</span>,
                visits: <span>25</span>,
                progress: <span>25</span>,
                status: 97,
                activity: 35,
                actions: tooltip,
              },
              {
                firstName: "Sub lvl3",
                age: <span>55</span>,
                visits: <span>54</span>,
                progress: <span>24</span>,
                status: 56,
                activity: 33,
                actions: tooltip,
              },
            ],
          },
          {
            firstName: "Sub lvl2",
            age: <span>53</span>,
            visits: <span>63</span>,
            progress: <span>24</span>,
            status: 48,
            activity: 3,
            actions: tooltip,
            subRows: [
              {
                firstName: "Sub lvl3",
                age: <span>4</span>,
                visits: <span>653</span>,
                progress: <span>36</span>,
                status: 44,
                activity: 43,
                actions: tooltip,
              },
              {
                firstName: "Sub lvl3",
                age: <span>49</span>,
                visits: <span>45</span>,
                progress: <span>454</span>,
                status: 35,
                activity: 4,
                actions: tooltip,
              },
            ],
          },
        ],
      },
    ],
    [tooltip],
  );

  const [rowSelection, setRowSelection] = useState<RowSelectionState>(preset);
  const [expanded, setExpanded] = useState<ExpandedState>(true);
  const [data, setData] = useState(makeData);

  const trackCheckState = (row: Row<{}>, table: TableInterface<{}>) => {
    let parentRowId = row.parentId;
    while (parentRowId) {
      const nodeRow = table.getRow(parentRowId);
      if (nodeRow.getIsAllSubRowsSelected() && !nodeRow.getIsSelected()) {
        setRowSelection({ ...rowSelection, [nodeRow.id]: true });
      } else if (
        !nodeRow.getIsAllSubRowsSelected() &&
        nodeRow.getIsSelected()
      ) {
        setRowSelection(
          Object.keys(rowSelection)
            .filter((rowId) => rowId !== nodeRow.id)
            .reduce((acc: RowSelectionState, rowId: string) => {
              acc[rowId] = true;
              return acc;
            }, {}),
        );
      }
      parentRowId = nodeRow.parentId;
    }

    return row.getIsSelected();
  };

  const trackIndeterminateState = (row: Row<{}>) => {
    const match = new RegExp(`(^${row.id}[\\.]|^${row.id}$)`, "");
    const matches = Object.keys(rowSelection).filter(
      (rowId) => match.test(rowId) && rowId !== row.id,
    );

    return (
      !row.getIsAllSubRowsSelected() &&
      matches.some((rowId) => rowSelection[rowId] === true)
    );
  };

  const columns = useMemo<ColumnDef<{}, DataTypeHelper>[]>(
    () => [
      {
        id: "expand/select",
        header: () => "Expand/Select",
        columns: [
          {
            id: "select",
            header: ({ table }) => (
              <div className="flex px-0 gap-x-1">
                <Checkbox
                  checked={table.getIsAllRowsSelected()}
                  indeterminate={table.getIsSomeRowsSelected()}
                  onChange={table.getToggleAllRowsSelectedHandler()}
                />
                <button onClick={table.getToggleAllRowsExpandedHandler()}>
                  {table.getIsAllRowsExpanded() ? (
                    <ControlsChevronDown />
                  ) : (
                    <ControlsChevronRight />
                  )}
                </button>
              </div>
            ),
            cell: ({ row, table }) => (
              <div
                className={mergeClassnames(
                  "flex gap-x-1",
                  columnShift(row.depth),
                )}
              >
                <Checkbox
                  checked={trackCheckState(row, table)}
                  disabled={!row.getCanSelect()}
                  indeterminate={trackIndeterminateState(row)}
                  onChange={row.getToggleSelectedHandler()}
                />
                {row.getCanExpand() ? (
                  <button
                    onClick={row.getToggleExpandedHandler()}
                    className="cursor-pointer"
                  >
                    {row.getIsExpanded() ? (
                      <ControlsChevronDown />
                    ) : (
                      <ControlsChevronRight />
                    )}
                  </button>
                ) : (
                  ""
                )}
              </div>
            ),
          },
        ],
      },
      {
        id: "name",
        header: () => "Name",
        columns: [
          {
            header: () => "First Name",
            accessorKey: "firstName",
          },
        ],
      },
      {
        id: "info",
        header: () => "Info",
        columns: [
          {
            header: () => "Age",
            accessorKey: "age",
            cell: (props) => props.getValue(),
            size: 30,
          },
          {
            header: () => "Visits",
            accessorKey: "visits",
            cell: (props) => props.getValue(),
            size: 60,
          },
          {
            header: () => "Activity",
            accessorKey: "activity",
            size: 80,
          },
          {
            header: () => "Status",
            accessorKey: "status",
            size: 80,
          },
          {
            header: () => "Profile Progress",
            accessorKey: "progress",
            cell: (props) => props.getValue(),
          },
        ],
      },
      {
        id: "actions",
        header: () => "Actions",
        size: 90,
        columns: [
          {
            header: () => "Actions",
            accessorKey: "actions",
            cell: (props) => props.getValue(),
            size: 90,
          },
        ],
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rowSelection],
  );

  const getSubRows = useCallback(
    ({ subRows }: DataHelper) => subRows as DataHelper[],
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
        state={{ expanded, rowSelection }}
        getSubRows={getSubRows}
        onExpandedChange={setExpanded}
        onRowSelectionChange={setRowSelection}
        preventSelectionByRowClick={true}
        isSelectable={true}
      />
    </div>
  );
};

export default Example;
