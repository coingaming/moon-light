"use client";

import { Fragment, useCallback, useMemo } from "react";
import { Chip, Tag, Tooltip } from "@heathmont/moon-core-tw";
import {
  Other3DotsHorizontal,
  TimeCalendarDate,
} from "@heathmont/moon-icons-tw";
import { CellScroller, Table } from "@heathmont/moon-table-v8-tw/lib/es";
import type { ColumnDef } from "@heathmont/moon-table-v8-tw/lib/es/private/types";

type DataTypeHelper = {
  location: string;
  deals: JSX.Element | string;
  range: JSX.Element | string;
  amount: number;
  currency: JSX.Element;
  actions: JSX.Element;
};

const Example = () => {
  const columns = useMemo<ColumnDef<{}, DataTypeHelper>[]>(
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
            size: 100,
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
            size: 150,
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
        columns: [
          {
            id: "actions",
            header: () => "Actions",
            accessorKey: "actions",
            cell: (props) => props.getValue(),
            size: 70,
          },
        ],
      },
    ],
    [],
  );

  const currency = useMemo(
    () => (
      <Tag className="bg-secondary text-body-500 text-secondary max-w-fit">
        USD
      </Tag>
    ),
    [],
  );

  const tooltip = useMemo(
    () => (
      <Tooltip>
        <Tooltip.Trigger className="max-h-space-24">
          <Chip
            variant="default"
            iconOnly={
              <Other3DotsHorizontal className="text-heading-200 max-h-space-24" />
            }
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

  const rearrangeData = useCallback(
    (data: { [key: string]: { start?: string; end?: string } }[]) => {
      const deals = data.map((value, index, src) => {
        const [key, range] = Object.entries(value)[0];
        return (
          <Fragment key={index}>
            <span className="me-space-6">{key}</span>
            <span>({range.start ? range.start : ""}</span>
            <span>-</span>
            <span>{range.end ? range.end : ""})</span>
            {index < src.length - 1 && <span className="mx-space-8">|</span>}
          </Fragment>
        );
      });

      return deals;
    },
    [],
  );

  const data = useMemo(
    () => [
      {
        location: "Lithuania",
        deals: "",
        range: (
          <Chip
            size="sm"
            className="bg-transparent"
            iconLeft={<TimeCalendarDate className="text-heading-200" />}
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
            iconLeft={<TimeCalendarDate className="text-heading-200" />}
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
            className="max-w-[260px]"
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
            iconLeft={<TimeCalendarDate className="text-heading-200" />}
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
            iconLeft={<TimeCalendarDate className="text-heading-200" />}
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
            iconLeft={<TimeCalendarDate className="text-heading-200" />}
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
            iconLeft={<TimeCalendarDate className="text-heading-200" />}
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
            className="max-w-[260px]"
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
            iconLeft={<TimeCalendarDate className="text-heading-200" />}
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
    minSize: 70,
    size: 50,
    maxSize: Number.MAX_SAFE_INTEGER,
  };

  return (
    <div className="border border-primary rounded-8 overflow-hidden">
      <Table
        columns={columns}
        data={data}
        defaultColumn={defaultColumn}
        width={800}
        height={400}
        isResizable
        withCellBorder="sticky"
      />
    </div>
  );
};

export default Example;
