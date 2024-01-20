import React from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import TD from "./TD";
import TBodyProps from "../private/types/TBodyProps";

const TBody = ({
  table,
  rowGap = "0",
  rowSize,
  isSelectable = false,
  columnMap,
  backgroundColor,
  defaultRowBackgroundColor,
  evenRowBackgroundColor,
  textClip,
}: TBodyProps) => {
  const oddRowBGColor = defaultRowBackgroundColor && defaultRowBackgroundColor;
  const evenRowBGColor = evenRowBackgroundColor
    ? evenRowBackgroundColor
    : oddRowBGColor;

  return (
    <tbody>
      {table.getRowModel().rows.map((row, rowIndex) => {
        const cells = row.getVisibleCells();
        const lastIndex = cells.length - 1;
        return (
          <tr
            key={row.id}
            style={{
              borderWidth: rowGap,
            }}
            className={mergeClassnames(
              rowIndex === 0 && "border-t-transparent",
              "border-r-transparent border-b-transparent border-l-transparent",
            )}
          >
            {cells.map((cell, cellIndex) => (
              <TD
                cell={cell}
                index={cellIndex}
                cells={cells}
                rowSize={rowSize}
                backgroundColor={
                  rowIndex % 2 === 0 ? evenRowBGColor : oddRowBGColor
                }
                bodyBackgroundColor={backgroundColor}
                isRowSelected={
                  isSelectable &&
                  (row.getCanExpand()
                    ? row.getIsAllSubRowsSelected()
                    : row.getIsSelected())
                }
                isFirstColumn={cellIndex === 0}
                isLastColumn={cellIndex === lastIndex}
                columnData={
                  columnMap && columnMap[columnMap.length - 1][cellIndex]
                }
                textClip={textClip}
              />
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TBody;
