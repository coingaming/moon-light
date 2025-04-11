"use client";

import React from "react";
import HeaderSection from "../HeaderSection";
import Table from "@heathmont/moon-table-v8-tw/lib/es/components/Table";
import { Popover, Tag } from "@heathmont/moon-core-tw";
import { GenericInfo } from "@heathmont/moon-icons-tw";
import type { ColumnDef } from "@heathmont/moon-table-v8-tw/lib/es/private/types";
import type { PropsTableProp, PropsTablePropTypes } from "@/types";

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
  <div className="flex flex-row gap-space-8 items-center">
    <Tag className="bg-brand-subtle text-info gap-space-4" isUppercase={false}>
      {prop.name}
      {prop.required && <span>*</span>}
    </Tag>
    <Popover position="top">
      <Popover.Trigger aria-label="info">
        <GenericInfo className="text-body-400" />
      </Popover.Trigger>
      <Popover.Panel className="w-fit min-w-[12rem] overflow-y-visible p-space-12 rounded-4 text-body-100 text-primary bg-primary">
        {prop.description}
        <Popover.Arrow />
      </Popover.Panel>
    </Popover>
  </div>
);

const Type = (prop: PropsTableProp) => {
  const isLongType =
    prop.type.length > 1 &&
    prop.type.reduce((acc, type) => acc + type.length, 0) > 25;
  const isDefaultType = prop.type.map(renderType).join(" | ");

  return (
    <span className="text-secondary">
      {isLongType ? (
        <Popover position="top" className="items-center flex">
          <Popover.Trigger>
            <div className="flex flex-row items-center">
              enum
              <GenericInfo className="text-body-300 hover:bg-hover hover:text-brand text-primary rounded-full" />
            </div>
          </Popover.Trigger>
          <Popover.Panel className="w-auto min-w-[12rem] overflow-y-visible p-space-12 rounded-4 text-body-100 text-primary bg-primary">
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
      default: <span className="text-primary">{prop.defaultState || "-"}</span>,
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
        header: () => <span className="text-secondary font-normal">Name</span>,
        cell: (props) => props.getValue(),
        accessorKey: "name",
        size: 100,
      },
      {
        id: "type",
        header: () => <span className="text-secondary font-normal">Type</span>,
        cell: (props) => props.getValue(),
        accessorKey: "type",
      },
      {
        id: "default",
        header: () => (
          <span className="text-secondary font-normal">Default</span>
        ),
        cell: (props) => props.getValue(),
        accessorKey: "default",
        size: 100,
      },
    ],
    [],
  );

  return (
    <section className="flex flex-col gap-space-8">
      <div className="flex flex-col gap-space-16">
        <HeaderSection title={title} description={description} />
        <div className="border border-primary rounded-8 overflow-hidden bg-tertiary">
          <Table
            columns={columns}
            data={tableData}
            layout="stretched-auto"
            rowSize="lg"
            rowGap="0"
          />
        </div>
      </div>
      {hasRequiredProps && (
        <p className="text-secondary text-body-100">
          Properties indicated with <span className="text-info">*</span> are
          required.
        </p>
      )}
    </section>
  );
};
