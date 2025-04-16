"use client";

import { useCallback, useMemo } from "react";
import { Tag } from "@heathmont/moon-core-tw";
import { Table } from "@heathmont/moon-table-v8-tw/lib/es";
import type ClipProps from "@heathmont/moon-table-v8-tw/lib/es/private/types/ClipProps";
import type { ColumnDef } from "@heathmont/moon-table-v8-tw/lib/es/private/types";

type DataTypeHelper = {
  uuid: string;
  user: string;
  processTime: string;
  client: string;
  gameNameAndProvider: string;
  amount: number;
  currency: JSX.Element;
  status: JSX.Element;
};

const Example = () => {
  const columns = useMemo<ColumnDef<{}, DataTypeHelper>[]>(
    () => [
      {
        id: "operation",
        header: () => "Transactions",
        footer: () => "Transactions",
        sticky: "left",
        size: 180,
        minSize: 180,
        columns: [
          {
            header: () => "Transaction UUID",
            footer: () => "Transaction UUID",
            accessorKey: "uuid",
            size: 110,
          },
          {
            header: () => "User & Supplier user",
            footer: () => "User & Supplier user",
            accessorKey: "user",
            size: 70,
          },
        ],
      },
      {
        id: "info",
        header: () => "Info",
        footer: () => "Info",
        columns: [
          {
            header: () => "Process time",
            accessorKey: "processTime",
            footer: () => "Process time",
          },
          {
            header: () => "Client",
            accessorKey: "client",
            footer: () => "Client",
          },
          {
            header: () => "Game name & provider",
            accessorKey: "gameNameAndProvider",
            footer: () => "Game name & provider",
          },
          {
            header: () => "Amount",
            accessorKey: "amount",
            footer: () => "Amount",
          },
          {
            header: () => "Currency",
            footer: () => "Currency",
            accessorKey: "currency",
            cell: (props) => props.getValue(),
          },
        ],
      },
      {
        id: "status",
        header: () => "Status",
        footer: () => "Status",
        sticky: "right",
        size: 90,
        columns: [
          {
            header: () => "Status",
            footer: () => "Status",
            accessorKey: "status",
            cell: (props) => props.getValue(),
            size: 90,
            minSize: 90,
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

  const success = useMemo(
    () => (
      <Tag className="bg-positive-subtle text-body-500 text-positive max-w-fit">
        SUCCESS
      </Tag>
    ),
    [],
  );

  const defaultColumn = {
    minSize: 50,
    size: 50,
    maxSize: Number.MAX_SAFE_INTEGER,
  };

  const makeData = useCallback(
    (length: number) => {
      return Array.from("_".repeat(length)).map((_) => {
        return {
          uuid: "84837d8ac654aa4689efa4649-84837d8ac654aa4689efa4649756454a5646545546d54f6546f546",
          user: "aleksandr@heathmonitoring.com",
          processTime: "2023-09-19T14:31:46.105Z",
          client: "Bender (old) Coin Gaming",
          gameNameAndProvider: "Pragmatic Play",
          amount: 22.97,
          currency: currency,
          status: success,
        };
      });
    },
    [currency, success],
  );

  const data = useMemo(() => makeData(40), [makeData]);
  const textClip = "clip" as ClipProps;

  return (
    <div className="border border-primary rounded-8 overflow-hidden">
      <Table
        columns={columns}
        data={data}
        defaultColumn={defaultColumn}
        width={800}
        height={500}
        isResizable
        textClip={textClip}
        withCellBorder="sticky"
        withFooter
      />
    </div>
  );
};

export default Example;
