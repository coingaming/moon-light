import {
  ColumnDef,
  ExpandedState,
  OnChangeFn,
  Row,
  RowSelectionState,
  SortingState,
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
  fixedWidth?: string | number;
  headerBackgroundColor?: string;
  bodyBackgroundColor?: string;
  defaultRowBackgroundColor?: string;
  evenRowBackgroundColor?: string;
  rowSelectColor?: string;
  rowHoverColor?: string;
  rowActiveColor?: string;
  rowGap?: string;
  rowSize?: RowSizes;
  isResizable?: boolean;
  isSticky?: boolean;
  isSelectable?: boolean;
  textClip?: ClipProps;
  layout?: TableLayouts;
  preventSelectionByRowClick?: boolean;
  withMinimap?: boolean;
  getOnRowClickHandler?: (row: Row<D>) => () => void | (() => void);
  getOnRowSelectHandler?: () => (row: Row<D>[]) => void | (() => void);
  getSubRows?: (originalRow: D, index: number) => D[] | undefined;
  onExpandedChange?: OnChangeFn<ExpandedState>;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  onSortingChange?: OnChangeFn<SortingState>;
};

export default TableProps;
