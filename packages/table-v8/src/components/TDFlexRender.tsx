import React, { FC } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import type ClipProps from "../private/types/ClipProps";
import TDProps from "../private/types/TDProps";
import { flexRender } from "../private/utils";

const TDFlexRender: FC<TDProps> = ({ cell, textClip }) => {
  if (cell.getValue() === undefined) {
    return null;
  }

  const flexRenderedCell = flexRender(
    cell.column.columnDef.cell,
    cell.getContext(),
  );

  if (textClip) {
    return (
      <div
        className={mergeClassnames(
          textClip === ("clip" as ClipProps) && "break-all truncate",
          textClip === ("break" as ClipProps) && "break-all text-clip",
        )}
      >
        {flexRenderedCell}
      </div>
    );
  }
  return flexRenderedCell;
};

export default TDFlexRender;
