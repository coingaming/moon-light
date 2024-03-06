import { Cell } from "@tanstack/react-table";
import ClipProps from "./ClipProps";
import ColumnData from "./ColumnData";
import RowSizes from "./RowSizes";
import { CellBorderType } from "./CellBorderType";

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
};

export default TDProps;
