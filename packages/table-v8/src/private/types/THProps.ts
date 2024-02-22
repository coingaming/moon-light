import { Header, Table } from "@tanstack/react-table";
import ColumnData from "./ColumnData";
import RowSizes from "./RowSizes";

type THProps = {
  backgroundColor?: string;
  header: Header<{}, unknown>;
  table?: Table<{}>;
  isLastColumn?: boolean;
  rowSize?: RowSizes;
  rowGap?: string;
  isCellBorder?: boolean;
  isResizable?: boolean;
  onClick?: (e: any) => void;
  columnData?: ColumnData;
};

export default THProps;
