import { Header } from "@tanstack/react-table";
import ColumnData from "./ColumnData";
import RowSizes from "./RowSizes";

type THProps = {
  backgroundColor?: string;
  header: Header<{}, unknown>;
  isLastColumn?: boolean;
  rowSize?: RowSizes;
  rowGap?: string | undefined;
  isCellBorder?: boolean;
  onClick?: (e: any) => void;
  columnData?: ColumnData;
};

export default THProps;
