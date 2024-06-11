import type { TableInterface } from ".";
import type ColumnData from "./ColumnData";
import type RowSizes from "./RowSizes";
import type CellBorderType from "./CellBorderType";

type THeadProps = {
  table: TableInterface<{}>;
  backgroundColor?: string;
  rowGap?: string;
  rowSize?: RowSizes;
  isResizable?: boolean;
  isSticky?: boolean;
  columnMap?: ColumnData[][];
  withBorder?: CellBorderType;
};

export default THeadProps;
