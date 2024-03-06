import { mergeClassnames } from "@heathmont/moon-core-tw";
import { CellBorderType } from "../private/types/CellBorderType";
import React from "react";

const mainClass = "absolute left-0 top-[6px] w-[1px] h-[calc(100%-12px)] bg-beerus";

const Border = ({ isFirstColumn }: { isFirstColumn?: boolean }) => (
  !isFirstColumn && <div className={mainClass}></div>
);

const StickyBorder = ({ stickySide }:  { stickySide: string }) => (
  <div
    className={mergeClassnames(mainClass,
      stickySide && stickySide === "left" ? "left-auto right-0" : ""
    )}
  >
  </div>
);

const CellBorder = ({
  withBorder,
  isFirstColumn,
  stickySide
}: {
  withBorder?: CellBorderType,
  isFirstColumn?: boolean,
  stickySide?: string
}) => {
  if (!withBorder) return undefined;
  return (
    stickySide
    ? <StickyBorder stickySide={stickySide} />
    : withBorder === true
      ? <Border isFirstColumn={isFirstColumn} />
      : undefined
  );
};

export default CellBorder;
