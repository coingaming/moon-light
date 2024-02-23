"use client";

import { Chip, Tag, Tooltip } from "@heathmont/moon-core-tw";
import {
  Other3DotsHorizontal,
  TimeCalendarDate,
} from "@heathmont/moon-icons-tw";
import { CellScroller, Table } from "@heathmont/moon-table-v8-tw/lib/es";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type DataTypeHelper = {
  location: string;
  deals: React.JSX.Element | string;
  range: React.JSX.Element | string;
  amount: number;
  currency: React.JSX.Element;
  actions: React.JSX.Element;
};

const Example = () => {
  const columns = React.useMemo<ColumnDef<{}, DataTypeHelper>[]>(
    () => [
      {
        id: "leftSticky",
        header: () => "",
        sticky: "left",
        columns: [
          {
            id: "location",
            header: () => "Location",
            accessorKey: "location",
            size: "100",
          },
        ],
      },
      {
        id: "data",
        header: () => "",
        columns: [
          {
            id: "deals",
            header: () => "Deals",
            accessorKey: "deals",
            cell: (props) => props.getValue(),
          },
          {
            id: "amount",
            header: () => "Amount",
            accessorKey: "amount",
          },
          {
            id: "currency",
            header: () => "Currency",
            accessorKey: "currency",
            cell: (props) => props.getValue(),
          },
          {
            id: "range",
            header: () => "Date range",
            accessorKey: "range",
            cell: (props) => props.getValue(),
            size: 190,
            minSize: 190,
          },
        ],
      },
      {
        id: "rightSticky",
        header: () => "",
        sticky: "right",
        size: 70,
        maxSize: 70,
        columns: [
          {
            id: "actions",
            header: () => "Actions",
            accessorKey: "actions",
            cell: (props) => props.getValue(),
            size: 70,
            maxSize: 70,
          },
        ],
      },
    ],
    [],
  );

  const currency = React.useMemo(
    () => (
      <Tag className="bg-gray-100 text-lg text-gray-600 max-w-fit">USD</Tag>
    ),
    [],
  );

  const tooltip = React.useMemo(
    () => (
      <Tooltip>
        <Tooltip.Trigger className="max-h-6">
          <Chip
            variant="default"
            iconOnly={<Other3DotsHorizontal className="text-moon-24 max-h-6" />}
          />
        </Tooltip.Trigger>
        <Tooltip.Content position="top-start" className="z-[2]">
          Any activity
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
    ),
    [],
  );

  const rearrangeData = React.useCallback(
    (data: { [key: string]: { start?: string; end?: string } }[]) => {
      const deals = data.map((value, index, src) => {
        const [key, range] = Object.entries(value)[0];
        return (
          <>
            <span className="mr-[5px]">{key}</span>
            <span>({range.start ? range.start : ""}</span>
            <span>-</span>
            <span>{range.end ? range.end : ""})</span>
            {index < src.length - 1 && <span className="mx-2">|</span>}
          </>
        );
      });

      return deals;
    },
    [],
  );

  const data = React.useMemo(
    () => [
      {
        location: "Lithuania",
        deals: "",
        range: (
          <Chip
            size="sm"
            className="bg-transparent"
            iconLeft={<TimeCalendarDate className="text-moon-24" />}
          >
            23.10.01 - 23.10.31
          </Chip>
        ),
        amount: 22.97,
        currency: currency,
        actions: tooltip,
      },
      {
        location: "AMD",
        deals: "",
        range: (
          <Chip
            size="sm"
            className="bg-transparent"
            iconLeft={<TimeCalendarDate className="text-moon-24" />}
          >
            23.10.01 - 23.10.31
          </Chip>
        ),
        amount: 22.97,
        currency: currency,
        actions: tooltip,
      },
      {
        location: "Europe",
        deals: (
          <CellScroller
            data={rearrangeData([
              { "10.0": { start: "10000", end: "20000" } },
              { "9.0": { start: "20000", end: "30000" } },
              { "8.0": { start: "30000", end: "40000" } },
              { "7.0": { start: "40000", end: "50000" } },
              { "6.0": { start: "50000", end: "60000" } },
            ])}
          ></CellScroller>
        ),
        range: (
          <Chip
            size="sm"
            className="bg-transparent"
            iconLeft={<TimeCalendarDate className="text-moon-24" />}
          >
            23.10.01 - 23.10.31
          </Chip>
        ),
        amount: 22.97,
        currency: currency,
        actions: tooltip,
      },
      {
        location: "Europe",
        deals: (
          <CellScroller
            data={rearrangeData([{ "5.0": { start: "2", end: "3" } }])}
          ></CellScroller>
        ),
        range: (
          <Chip
            size="sm"
            className="bg-transparent"
            iconLeft={<TimeCalendarDate className="text-moon-24" />}
          >
            23.12.01 -
          </Chip>
        ),
        amount: 22.97,
        currency: currency,
        actions: tooltip,
      },
      {
        location: "Europe",
        deals: (
          <CellScroller
            data={rearrangeData([{ "0.0": { start: "0" } }])}
          ></CellScroller>
        ),
        range: (
          <Chip
            size="sm"
            className="bg-transparent"
            iconLeft={<TimeCalendarDate className="text-moon-24" />}
          >
            23.11.01 - 23.11.30
          </Chip>
        ),
        amount: 22.97,
        currency: currency,
        actions: tooltip,
      },
      {
        location: "Asia",
        deals: (
          <CellScroller
            data={rearrangeData([{ "6.0": { start: "3", end: "4" } }])}
          ></CellScroller>
        ),
        range: (
          <Chip
            size="sm"
            className="bg-transparent"
            iconLeft={<TimeCalendarDate className="text-moon-24" />}
          >
            23.11.01 -
          </Chip>
        ),
        amount: 22.97,
        currency: currency,
        actions: tooltip,
      },
      {
        location: "Asia",
        deals: (
          <CellScroller
            data={rearrangeData([
              { "5.0": { start: "0", end: "150000" } },
              { "4.0": { start: "150000", end: "500000" } },
            ])}
          ></CellScroller>
        ),
        range: (
          <Chip
            size="sm"
            className="bg-transparent"
            iconLeft={<TimeCalendarDate className="text-moon-24" />}
          >
            23.05.01 - 23.10.31
          </Chip>
        ),
        amount: 22.97,
        currency: currency,
        actions: tooltip,
      },
    ],
    [rearrangeData, currency, tooltip],
  );

  const defaultColumn = {
    minSize: 10,
    size: 150,
    maxSize: 260,
  };

  return (
    <div className="border border-beerus rounded-lg overflow-hidden">
      <Table
        columns={columns}
        data={data}
        defaultColumn={defaultColumn}
        width={800}
        height={400}
        layout="auto"
      />
    </div>
  );
};

export default Example;
