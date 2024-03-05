import type { MutableRefObject } from "react";

type MinimapProps = {
  numberOfColumns: number;
  tableWrapperRef: MutableRefObject<HTMLElement | null>;
};

export default MinimapProps;
