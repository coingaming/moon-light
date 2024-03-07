import { Row, Table } from "@tanstack/react-table";
import ClipProps from "./ClipProps";
import ColumnData from "./ColumnData";
import RowSizes from "./RowSizes";
import { CellBorderType } from "./CellBorderType";

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
  withBorder?: CellBorderType;
  getOnRowClickHandler?: (row: Row<{}>) => () => void | (() => void);
};

export default TBodyProps;
