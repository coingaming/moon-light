import { Table } from "@tanstack/react-table";
import ColumnData from "./ColumnData";
import RowSizes from "./RowSizes";
import { CellBorderType } from "./CellBorderType";

type TFootProps = {
  table: Table<{}>;
  backgroundColor?: string;
  rowGap?: string;
  rowSize?: RowSizes;
  isSticky?: boolean;
  columnMap?: ColumnData[][];
  withBorder?: CellBorderType;
};

export default TFootProps;
