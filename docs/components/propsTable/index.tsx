"use client";

import HeaderSection from "../HeaderSection";
import { PropsTableProp, PropsTablePropTypes } from "@/types";
import { Table } from "@heathmont/moon-table-tw";
import { Chip, Popover, Tag } from "@heathmont/moon-core-tw";
import React from "react";
import { GenericInfo } from "@heathmont/moon-icons-tw";

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
  <div className="flex flex-row">
    <Tag
      className="w-fit bg-jiren text-frieza gap-1 text-moon-14"
      isUppercase={false}
    >
      {prop.name} {prop.required && <span className="text-moon-16">*</span>}
    </Tag>
    <Popover position="top" className="items-center flex">
      <Popover.Trigger>
        <Chip
          className="rounded-full p-0 h-fit hover:bg-heles self-center"
          variant="ghost"
        >
          <GenericInfo className="text-moon-14" />
        </Chip>
      </Popover.Trigger>
      <Popover.Panel className="w-auto min-w-[12rem] overflow-y-visible p-3 rounded-moon-s-xs text-moon-12 text-bulma bg-goku">
        {prop.description}
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

const makeData = (data: PropsTableProp[]) => {
  return data.map((prop) => {
    return {
      name: <Name {...prop} />,
      type: <Type {...prop} />,
      default: <span className="text-bulma">{prop.defaultState || "-"}</span>,
    };
  });
};

const columns = [
  {
    Header: <span className="text-trunks font-normal">Name</span>,
    accessor: "name",
  },
  {
    Header: <span className="text-trunks font-normal">Type</span>,
    accessor: "type",
  },
  {
    Header: <span className="text-trunks font-normal">Default</span>,
    accessor: "default",
  },
];

export const PropsTable = ({ data, title, description }: TableProps) => {
  const tableData = React.useMemo(() => makeData(data), [data]);
  const hasRequiredProps = data.some((prop) => prop.required);

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 12,
    }),
    [],
  );

  return (
    <div>
      <section className="flex flex-col gap-6">
        <HeaderSection title={title} description={description} />
        <div className="border border-beerus rounded-lg overflow-hidden bg-beerus">
          <Table
            columns={columns}
            defaultColumn={defaultColumn}
            data={tableData}
            isCellBorder
            rowSize="lg"
            rowGap="gap-px"
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
