import type { Cell } from ".";
import type ClipProps from "./ClipProps";
import type ColumnData from "./ColumnData";
import type RowSizes from "./RowSizes";
import type CellBorderType from "./CellBorderType";

type TDProps = {
  cell: Cell<{}, unknown>;
  index: number;
  cells: Cell<{}, unknown>[];
  selectable?: boolean;
  className?: string;
  fontColor?: string;
  stickySide?: string;
  isFirstColumn?: boolean;
  isLastColumn?: boolean;
  onClick?: () => void;
  rowSize?: RowSizes;
  noGap: boolean;
  isCellBorder?: boolean;
  columnData?: ColumnData;
  textClip?: ClipProps;
  withBorder?: CellBorderType;
  isCellDataCopiedToClipboard: boolean;
};

export default TDProps;
