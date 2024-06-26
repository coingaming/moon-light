import type { ColumnDef } from ".";

type StickyColumn = ColumnDef<{}> & {
  sticky?: string;
  left?: string | "0";
  right?: string | "0";
};

export default StickyColumn;
