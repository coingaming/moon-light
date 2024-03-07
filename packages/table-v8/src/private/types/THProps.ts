import { Header, Table } from "@tanstack/react-table";
import ColumnData from "./ColumnData";
import RowSizes from "./RowSizes";
import { CellBorderType } from "./CellBorderType";

type THProps = {
  backgroundColor?: string;
  header: Header<{}, unknown>;
  table?: Table<{}>;
  isFirstColumn?: boolean;
  isLastColumn?: boolean;
  rowSize?: RowSizes;
  withBorder?: CellBorderType;
  isResizable?: boolean;
  onClick?: (e: any) => void;
  columnData?: ColumnData;
};

export default THProps;
