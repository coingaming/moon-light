import DataHelper from "../types/DataHelper";
import TableProps from "../types/TableProps";

type Args = Pick<TableProps, "columns"> & {
  data: DataHelper[];
  isSelectable?: boolean;
};

const handleSelectableTable = ({
  data,
  isSelectable = false,
  columns,
}: Args) => {
  const selectColumnIndex = columns.findIndex(
    (column) => column.id === "select",
  );

  if (!isSelectable || selectColumnIndex < 0) {
    return { data, columns };
  }

  const selectableData: DataHelper[] = data.map((dataItem) => ({
    ...dataItem,
    select: dataItem.select ?? false,
  }));

  const selectColumn = {
    ...columns[selectColumnIndex],
    accessorKey: "select",
  };

  const selectableColumns = [
    ...columns.slice(0, selectColumnIndex),
    { ...selectColumn },
    ...columns.slice(selectColumnIndex + 1),
  ];

  return {
    data: selectableData,
    columns: selectableColumns,
  };
};

export default handleSelectableTable;
