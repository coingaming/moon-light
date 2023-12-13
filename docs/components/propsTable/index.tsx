"use client";

import dynamic from 'next/dynamic';
import EnumPropTypes from './enumPropTypes';

type DataType = EnumPropTypes | string;
export type Data = {
  name: string;
  type: DataType[];
  defaultState?: React.ReactNode;
  required?: boolean;
  description: string;
};

type TableProps = {
  data: Data[];
  title?: string;
  description?: string | JSX.Element;
};
const columnsInitial = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    Header: 'Required',
    accessor: 'required',
  },
  {
    Header: 'Default',
    accessor: 'defaultState',
  },
  {
    Header: 'Description',
    accessor: 'description'
  }
];

export const PropsTable = ({ data, title, description }: TableProps) => {
  const Table = dynamic(() => import('@heathmont/moon-table-tw').then((res) => res.Table))
  const _makeData = (data: Data) => ({
    ...data,
    defaultState: data.defaultState || '—',
    required: data.required ? 'Yes' : 'No',
    type: data.type.map((item: DataType) => {
      switch (item) {
        case EnumPropTypes.BOOLEAN: return 'boolean';
        case EnumPropTypes.FLOAT: return 'float';
        case EnumPropTypes.INTEGER: return 'integer';
        case EnumPropTypes.NUMBER: return 'number';
        case EnumPropTypes.REACTNODE: return 'ReactNode';
        case EnumPropTypes.STRING: return 'string';
        default: return `"${item}"`;
      }
    }).join(' | ')
  })
  return (
    <>
      <h1 className='font-medium text-moon-24'>{title}</h1>
      <p>{description}</p>
      <Table
        textClip={{
          textClip: 'break'
        }}
        isCellBorder
        columns={columnsInitial}
        data={data.map(_makeData)}
        defaultRowBackgroundColor='gohan'
        evenRowBackgroundColor='gohan'
        headerBackgroundColor='white'
      />
    </>
  );
};
