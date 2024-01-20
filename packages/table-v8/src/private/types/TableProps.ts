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
  state?: Partial<TableState> | undefined;
  withFooter?: boolean;
  width?: string | number | undefined;
  height?: string | number | undefined;
  maxWidth?: string | number | undefined;
  maxHeight?: string | number | undefined;
  headerBackgroundColor?: string;
  bodyBackgroundColor?: string;
  defaultRowBackgroundColor?: string;
  evenRowBackgroundColor?: string;
  rowGap?: string | undefined;
  rowSize?: RowSizes;
  isSticky?: boolean;
  isSelectable?: boolean;
  textClip?: ClipProps;
  layout?: TableLayouts;
  getSubRows?: ((originalRow: any, index: number) => any[] | undefined) | undefined;
  onExpandedChange?: OnChangeFn<ExpandedState> | undefined;
  onRowSelectionChange?: OnChangeFn<RowSelectionState> | undefined;
};

export default TableProps;
