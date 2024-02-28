"use client";

import HeaderSection from "../HeaderSection";
import { PropsTableProp, PropsTablePropTypes } from "@/types";
import Table from "@heathmont/moon-table-v8-tw/lib/es/components/Table";
import { Popover, Tag } from "@heathmont/moon-core-tw";
import React from "react";
import { GenericInfo } from "@heathmont/moon-icons-tw";
import { ColumnDef } from "@tanstack/react-table";

type TableProps = {
  data: PropsTableProp[];
  title?: string;
  description?: string | JSX.Element;
};

const renderType = (item: PropsTablePropTypes) => {
  // Check using Regex if the prop is a arrow function
  const isArrowFunction = /\(([^)]+)\) => \w/.test(item);
  // Check using Regex if the prop is a object
  const isObject = /\{*\}/.test(item);

  if (isArrowFunction || isObject || item.startsWith(`"`)) {
    return item;
  } else if (["number", "boolean", "string"].includes(item)) {
    return item;
  } else {
    return `"${item}"`;
  }
};

const Name = (prop: PropsTableProp) => (
  <div className="flex flex-row gap-2 items-center">
    <Tag className="bg-frieza-10 text-frieza gap-1" isUppercase={false}>
      {prop.name}
      {prop.required && <span>*</span>}
    </Tag>
    <Popover position="top">
      <Popover.Trigger>
        <GenericInfo className="text-moon-16" />
      </Popover.Trigger>
      <Popover.Panel className="w-auto min-w-[12rem] overflow-y-visible p-3 rounded-moon-s-xs text-moon-12 text-bulma bg-goku">
        {prop.description}
        <Popover.Arrow />
      </Popover.Panel>
    </Popover>
  </div>
);

const Type = (prop: PropsTableProp) => {
  const isLongType = prop.type.reduce((acc, type) => acc + type.length, 0) > 25;
  const isDefaultType = prop.type.map(renderType).join(" | ");

  return (
    <span className="text-trunks">
      {isLongType ? (
        <Popover position="top" className="items-center flex">
          <Popover.Trigger>
            <div className="flex flex-row items-center">
              enum
              <GenericInfo className="text-moon-14 hover:bg-heles hover:text-piccolo text-bulma rounded-full" />
            </div>
          </Popover.Trigger>
          <Popover.Panel className="w-auto min-w-[12rem] overflow-y-visible p-3 rounded-moon-s-xs text-moon-12 text-bulma bg-goku">
            {isDefaultType}
          </Popover.Panel>
        </Popover>
      ) : (
        isDefaultType
      )}
    </span>
  );
};

type DefaultHelper = {
  name: React.JSX.Element;
  type: React.JSX.Element;
  default: React.JSX.Element;
};
const makeData = (data: PropsTableProp[]) => {
  return data.map((prop) => {
    return {
      name: <Name {...prop} />,
      type: <Type {...prop} />,
      default: <span className="text-bulma">{prop.defaultState || "-"}</span>,
    };
  });
};

export const PropsTable = ({ data, title, description }: TableProps) => {
  const tableData = React.useMemo(() => makeData(data), [data]);
  const hasRequiredProps = data.some((prop) => prop.required);

  const columns = React.useMemo<ColumnDef<{}, DefaultHelper>[]>(
    () => [
      {
        id: "name",
        header: () => <span className="text-trunks font-normal">Name</span>,
        cell: (props) => props.getValue(),
        accessorKey: "name",
        size: 100,
      },
      {
        id: "type",
        header: () => <span className="text-trunks font-normal">Type</span>,
        cell: (props) => props.getValue(),
        accessorKey: "type",
      },
      {
        id: "default",
        header: () => <span className="text-trunks font-normal">Default</span>,
        cell: (props) => props.getValue(),
        accessorKey: "default",
        size: 100,
      },
    ],
    [],
  );

  return (
    <div>
      <section className="flex flex-col gap-6">
        <HeaderSection title={title} description={description} />
        <div className="border border-beerus rounded-lg overflow-hidden bg-beerus">
          <Table
            columns={columns}
            data={tableData}
            layout="stretched-auto"
            rowSize="lg"
            rowGap="0"
          />
        </div>
      </section>
      {hasRequiredProps && (
        <p className="text-trunks text-moon-12">
          Properties indicated with{" "}
          <span className="text-moon-16 text-frieza">*</span> are required.
        </p>
      )}
    </div>
  );
};
