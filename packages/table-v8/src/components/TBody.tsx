import React from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import TD from "./TD";
import TBodyProps from "../private/types/TBodyProps";
import { Row } from "@tanstack/react-table";

const TBody = ({
  table,
  rowGap = "0",
  rowSize,
  preventSelectionByRowClick,
  isSelectable = false,
  columnMap,
  backgroundColor,
  defaultRowBackgroundColor,
  evenRowBackgroundColor,
  rowSelectColor,
  rowHoverColor,
  textClip,
  getOnRowClickHandler,
}: TBodyProps) => {
  const isRowElementClicked = (event: unknown) =>
    ["TD", "DIV"].includes(
      ((event as MouseEvent).target as HTMLElement).tagName,
    );

  const handleRowClick = (target: Row<{}>) =>
    getOnRowClickHandler && getOnRowClickHandler(target)();

  const oddRowBGColor = defaultRowBackgroundColor && defaultRowBackgroundColor;
  const evenRowBGColor = evenRowBackgroundColor
    ? evenRowBackgroundColor
    : oddRowBGColor;

  const styles = {
    borderWidth: rowGap,
    "--bodyBGColor": `rgba(var(--${backgroundColor}, var(--gohan)))`,
    "--rowEvenColor": `rgba(var(--${evenRowBGColor}, var(--goku)))`,
    "--rowOddColor": `rgba(var(--${oddRowBGColor}, var(--goku)))`,
    "--rowSelectColor": `rgba(var(--${rowSelectColor}))`,
    "--rowHoverColor": `rgba(var(--${rowHoverColor}))`,
  } as const;

  return (
    <tbody>
      {table.getRowModel().rows.map((row, rowIndex) => {
        const cells = row.getVisibleCells();
        const lastIndex = cells.length - 1;
        const isEvenRow = rowIndex % 2 === 0;
        const noGap = rowGap === "" || !!rowGap.match(/^[0]+[\D]*/);
        const isRowSelected =
          isSelectable &&
          (row.getCanExpand()
            ? row.getIsAllSubRowsSelected()
            : row.getIsSelected());

        const useRowSelection = (event: unknown) => {
          isSelectable && !preventSelectionByRowClick
            ? isRowElementClicked(event)
              ? row.getToggleSelectedHandler()(event)
              : () => {}
            : () => {};
          handleRowClick(row);
        };
        /*
        const useRowSelection =
          isSelectable && !preventSelectionByRowClick
            ? (event: unknown) =>
                isRowElementClicked(event)
                  ? row.getToggleSelectedHandler()(event)
                  : () => {}
            : undefined;
*/
        return (
          <tr
            key={row.id}
            style={styles}
            className={mergeClassnames(
              rowIndex === 0 && "border-t-transparent",
              "border-r-transparent border-b-transparent border-l-transparent",
              "group/rows",
            )}
            onClick={useRowSelection}
          >
            {cells.map((cell, cellIndex) => (
              <TD
                cell={cell}
                index={cellIndex}
                cells={cells}
                rowSize={rowSize}
                noGap={noGap}
                className={mergeClassnames(
                  "group/rows before:bg-[color:var(--bodyBGColor)]",
                  !!useRowSelection && "cursor-pointer",
                  isRowSelected &&
                    "group/rows bg-[color:var(--rowSelectColor)] group/rows after:bg-[color:var(--rowSelectColor)]",
                  !isRowSelected &&
                    isEvenRow &&
                    "group/rows bg-[color:var(--rowEvenColor)] group/rows after:bg-[color:var(--rowEvenColor)]",
                  !isRowSelected &&
                    !isEvenRow &&
                    "group/rows bg-[color:var(--rowOddColor)] group/rows after:bg-[color:var(--rowOddColor)]",
                  rowHoverColor &&
                    "group-hover/rows:bg-[color:var(--rowHoverColor)] group-hover/rows:after:bg-[color:var(--rowHoverColor)]",
                )}
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
