import { ColumnDef } from "@tanstack/react-table";

type StickyColumn = ColumnDef<{}> & {
  sticky?: string | undefined;
  left?: string | '0';
  right?: string | '0';
}

export default StickyColumn;
