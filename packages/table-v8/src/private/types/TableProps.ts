import {
  ColumnDef,
  ExpandedState,
  OnChangeFn,
  RowSelectionState,
  TableState,
} from "@tanstack/react-table";
import ClipProps from "./ClipProps";
import DataHelper from "./DataHelper";
import RowSizes from "./RowSizes";
import TableLayouts from "./TableLayouts";

type TableProps<D extends DataHelper = DataHelper> = {
  columns: ColumnDef<D, any>[];
  data: D[];
  defaultColumn?: Partial<ColumnDef<D, any>>;
  state?: Partial<TableState>;
  withFooter?: boolean;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  headerBackgroundColor?: string;
  bodyBackgroundColor?: string;
  defaultRowBackgroundColor?: string;
  evenRowBackgroundColor?: string;
  rowSelectColor?: string;
  rowHoverColor?: string;
  rowGap?: string;
  rowSize?: RowSizes;
  isSticky?: boolean;
  isSelectable?: boolean;
  textClip?: ClipProps;
  layout?: TableLayouts;
  getSubRows?: (originalRow: D, index: number) => D[] | undefined;
  onExpandedChange?: OnChangeFn<ExpandedState>;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
};

export default TableProps;
