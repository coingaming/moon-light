import type { CSSProperties, ReactNode, RefObject } from "react";

type TableWrapperProps = {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  tableWrapperRef?: RefObject<HTMLDivElement>;
};

export default TableWrapperProps;
