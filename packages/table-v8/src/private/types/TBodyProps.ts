import { Row, Table } from "@tanstack/react-table";
import ClipProps from "./ClipProps";
import ColumnData from "./ColumnData";
import RowSizes from "./RowSizes";

type TBodyProps = {
  table: Table<{}>;
  rowGap?: string;
  rowSize: RowSizes;
  isSelectable?: boolean;
  backgroundColor?: string;
  defaultRowBackgroundColor?: string;
  evenRowBackgroundColor?: string;
  preventSelectionByRowClick?: boolean;
  rowSelectColor?: string;
  rowHoverColor?: string;
  rowActiveColor?: string;
  columnMap?: ColumnData[][];
  textClip?: ClipProps;
  getOnRowClickHandler?: (row: Row<{}>) => () => void | (() => void);
};

export default TBodyProps;
