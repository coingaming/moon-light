import {
  ColumnDef,
  ExpandedState,
  OnChangeFn,
  RowSelectionState,
  TableState,
} from "@tanstack/react-table";
import ClipProps from "./ClipProps";
import RowSizes from "./RowSizes";
import TableLayouts from "./TableLayouts";

type TableProps<D extends object = {}> = {
  columns: ColumnDef<D, any>[];
  data: D[];
  defaultColumn?: Partial<ColumnDef<{}, unknown>> | undefined;
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
  rowGap?: string;
  rowSize?: RowSizes;
  isSticky?: boolean;
  isSelectable?: boolean;
  textClip?: ClipProps;
  layout?: TableLayouts;
  getSubRows?: ((originalRow: unknown, index: number) => unknown[]) | undefined;
  onExpandedChange?: OnChangeFn<ExpandedState>;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
};

export default TableProps;
