import type { TableInterface } from ".";
import type ColumnData from "./ColumnData";
import type RowSizes from "./RowSizes";
import type CellBorderType from "./CellBorderType";

type TFootProps = {
  table: TableInterface<{}>;
  backgroundColor?: string;
  rowGap?: string;
  rowSize?: RowSizes;
  isSticky?: boolean;
  columnMap?: ColumnData[][];
  withBorder?: CellBorderType;
};

export default TFootProps;
