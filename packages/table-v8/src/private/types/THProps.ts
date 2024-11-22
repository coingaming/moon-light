import type { Header, TableInterface } from ".";
import type ColumnData from "./ColumnData";
import type RowSizes from "./RowSizes";
import type CellBorderType from "./CellBorderType";

type THProps = {
  backgroundColor?: string;
  header: Header<{}, unknown>;
  table?: TableInterface<{}>;
  isFirstColumn?: boolean;
  isLastColumn?: boolean;
  rowSize?: RowSizes;
  withBorder?: CellBorderType;
  isResizable?: boolean;
  onClick?: (e: any) => void;
  columnData?: ColumnData;
  rowGap?: string;
};

export default THProps;
