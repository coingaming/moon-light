import { Table } from "@tanstack/react-table";
import ColumnData from "./ColumnData";
import RowSizes from "./RowSizes";

type THeadProps = {
  table: Table<{}>;
  backgroundColor?: string;
  rowGap?: string | undefined;
  rowSize?: RowSizes;
  isSticky?: boolean;
  columnMap?: ColumnData[][];
};

export default THeadProps;
