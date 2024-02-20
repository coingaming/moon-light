import React from "react";

type TableWrapperProps = {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  tableWrapperRef?: React.RefObject<HTMLDivElement>;
};

export default TableWrapperProps;
