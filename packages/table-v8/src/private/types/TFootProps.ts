import { Table } from "@tanstack/react-table";
import ColumnData from "./ColumnData";
import RowSizes from "./RowSizes";

type TFootProps = {
  table: Table<{}>;
  backgroundColor?: string;
  rowGap?: string;
  rowSize?: RowSizes;
  isSticky?: boolean;
  columnMap?: ColumnData[][];
};

export default TFootProps;
