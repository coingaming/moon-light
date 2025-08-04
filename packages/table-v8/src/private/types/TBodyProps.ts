import type { Row, TableInterface } from ".";
import type ClipProps from "./ClipProps";
import type ColumnData from "./ColumnData";
import type RowSizes from "./RowSizes";
import type CellBorderType from "./CellBorderType";

type TBodyProps = {
  table: TableInterface<{}>;
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

export type RowArbitraryData = {
  rowClassName?: string;
  [key: string]: unknown;
};

export default TBodyProps;
